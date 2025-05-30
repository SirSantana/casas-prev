import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Rect, Transformer, Line } from 'react-konva';
import { Settings, Trash2, Move, Edit3, X, ChevronRight, Info, Sidebar } from 'lucide-react';
import SidebarComponent from './SidebarComponent';
import HelpTooltip from './HelpTooltip';
import FurniturePalette from './FurnitureComponent';
import BottomToolbar from './BottomToolbar';
import HeaderToolbar from './HeaderToolbar';
import RightCornerButtons from './RightCornerButtons';
import ZoomControls from './ZoomControls';

// Helper function to calculate the intersection point of two line segments
const getLinesIntersection = (p1, p2, p3, p4) => {
  const denominator = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);

  if (denominator === 0) {
    return null; // Parallel or collinear
  }

  const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
  const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;

  // If ua and ub are between 0 and 1 (inclusive), the intersection point lies within both segments
  if (ua >= -0.0001 && ua <= 1.0001 && ub >= -0.0001 && ub <= 1.0001) {
    const intersectX = p1.x + ua * (p2.x - p1.x);
    const intersectY = p1.y + ua * (p2.y - p1.y);
    return { x: intersectX, y: intersectY };
  }

  return null; // No intersection within segments
};

const WallDrawer = () => {
  const [walls, setWalls] = useState([]);
  const [newWall, setNewWall] = useState(null);
  const [selectedWallId, setSelectedWallId] = useState(null);
  const [defaultThickness, setDefaultThickness] = useState(5);
  const [drawing, setDrawing] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProperties, setShowProperties] = useState(false);
  const [activeTool, setActiveTool] = useState('wall');
  const [showTooltip, setShowTooltip] = useState(true);

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  const gridSize = 50;
  const snapTolerance = 25;

  const stageRef = useRef();
  const transformerRef = useRef();

  const [longPressTimer, setLongPressTimer] = useState(null);

  const handleTouchStart = (e) => {
    const timer = setTimeout(() => {
      // Lógica para selección detallada (propiedades) después de toque largo
      const node = e.target;
      if (node && node.id()) {
        handleSelectWall(node.id());
      }
    }, 500); // 500ms para considerar toque largo
    setLongPressTimer(timer);
  };

  const handleTouchEnd = () => {
    if (longPressTimer) {
      clearTimeout(longPressTimer);
      setLongPressTimer(null);
    }
  };


  // Function to align a value to the grid
  const snapToGrid = (value) => {
    return Math.round(value / gridSize) * gridSize;
  };

  // Function to find valid intersection snap points near a position
  const findIntersectionSnapPoint = (position, excludeWallId = null) => {
    let closestSnap = null;
    let minDist = snapTolerance;

    // 1. Check for snapping to grid intersections
    const gridX = snapToGrid(position.x);
    const gridY = snapToGrid(position.y);
    const distToGrid = Math.sqrt((position.x - gridX) ** 2 + (position.y - gridY) ** 2);

    if (distToGrid < minDist) {
      closestSnap = { x: gridX, y: gridY, type: 'grid-grid' };
      minDist = distToGrid;
    }

    // 2. Check for snapping to intersection points between existing walls and grid lines
    walls.forEach(wall => {
      if (wall.id === excludeWallId) return;

      // Define the line segments of the existing wall
      const wallSegments = [];
      if (wall.orientation === 'horizontal') {
        wallSegments.push({ p1: { x: wall.x, y: wall.y }, p2: { x: wall.x + wall.width, y: wall.y } });
        wallSegments.push({ p1: { x: wall.x, y: wall.y + wall.height }, p2: { x: wall.x + wall.width, y: wall.y + wall.height } });
      } else { // vertical
        wallSegments.push({ p1: { x: wall.x, y: wall.y }, p2: { x: wall.x, y: wall.y + wall.height } });
        wallSegments.push({ p1: { x: wall.x + wall.width, y: wall.y }, p2: { x: wall.x + wall.width, y: wall.y + wall.height } });
      }

      // Check intersections with vertical grid lines
      for (let i = 0; i <= canvasWidth; i += gridSize) {
        const gridLine = { p1: { x: i, y: 0 }, p2: { x: i, y: canvasHeight } };
        wallSegments.forEach(wallSegment => {
          const intersection = getLinesIntersection(wallSegment.p1, wallSegment.p2, gridLine.p1, gridLine.p2);
          if (intersection) {
            const dist = Math.sqrt((position.x - intersection.x) ** 2 + (position.y - intersection.y) ** 2);
            if (dist < minDist) {
              closestSnap = { x: intersection.x, y: intersection.y, type: 'wall-grid' };
              minDist = dist;
            }
          }
        });
      }

      // Check intersections with horizontal grid lines
      for (let i = 0; i <= canvasHeight; i += gridSize) {
        const gridLine = { p1: { x: 0, y: i }, p2: { x: canvasWidth, y: i } };
        wallSegments.forEach(wallSegment => {
          const intersection = getLinesIntersection(wallSegment.p1, wallSegment.p2, gridLine.p1, gridLine.p2);
          if (intersection) {
            const dist = Math.sqrt((position.x - intersection.x) ** 2 + (position.y - intersection.y) ** 2);
            if (dist < minDist) {
              closestSnap = { x: intersection.x, y: intersection.y, type: 'wall-grid' };
              minDist = dist;
            }
          }
        });
      }
    });

    // 3. Check for snapping to intersection points between existing walls
    walls.forEach(wall1 => {
      if (wall1.id === excludeWallId) return;

      walls.forEach(wall2 => {
        if (wall1.id === wall2.id || wall2.id === excludeWallId) return;

        // Define line segments for both walls
        const wall1Segments = [];
        if (wall1.orientation === 'horizontal') {
          wall1Segments.push({ p1: { x: wall1.x, y: wall1.y }, p2: { x: wall1.x + wall1.width, y: wall1.y } });
          wall1Segments.push({ p1: { x: wall1.x, y: wall1.y + wall1.height }, p2: { x: wall1.x + wall1.width, y: wall1.y + wall1.height } });
        } else { // vertical
          wall1Segments.push({ p1: { x: wall1.x, y: wall1.y }, p2: { x: wall1.x, y: wall1.y + wall1.height } });
          wall1Segments.push({ p1: { x: wall1.x + wall1.width, y: wall1.y }, p2: { x: wall1.x + wall1.width, y: wall1.y + wall1.height } });
        }

        const wall2Segments = [];
        if (wall2.orientation === 'horizontal') {
          wall2Segments.push({ p1: { x: wall2.x, y: wall2.y }, p2: { x: wall2.x + wall2.width, y: wall2.y } });
          wall2Segments.push({ p1: { x: wall2.x, y: wall2.y + wall2.height }, p2: { x: wall2.x + wall2.width, y: wall2.y + wall2.height } });
        } else { // vertical
          wall2Segments.push({ p1: { x: wall2.x, y: wall2.y }, p2: { x: wall2.x, y: wall2.y + wall2.height } });
          wall2Segments.push({ p1: { x: wall2.x + wall2.width, y: wall2.y }, p2: { x: wall2.x + wall2.width, y: wall2.y + wall2.height } });
        }

        wall1Segments.forEach(segment1 => {
          wall2Segments.forEach(segment2 => {
            const intersection = getLinesIntersection(segment1.p1, segment1.p2, segment2.p1, segment2.p2);
            if (intersection) {
              const dist = Math.sqrt((position.x - intersection.x) ** 2 + (position.y - intersection.y) ** 2);
              if (dist < minDist) {
                closestSnap = { x: intersection.x, y: intersection.y, type: 'wall-wall' };
                minDist = dist;
              }
            }
          });
        });
      });
    });

    return closestSnap;
  };

  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    if (activeTool !== 'wall') return;
    if (activeTool === 'touch-move' && e.evt?.type === 'touchstart') {
      const node = e.target;
      if (node && node.id && node.id()) {
        e.cancelBubble = true;
        setSelectedWallId(node.id());
        
        // Iniciar arrastre inmediato
        const touch = e.evt.touches[0];
        const stage = node.getStage();
        const stageRect = stage.container().getBoundingClientRect();
        const relativePos = {
          x: touch.clientX - stageRect.left,
          y: touch.clientY - stageRect.top
        };
        node.startDrag(relativePos);
        return;
      }
    }
    const pointerPos = e.evt?.touches?.[0] || e;
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition(pointerPos);

    // Transformar las coordenadas según el zoom y la posición
    const transformedPos = {
      x: (pointerPosition.x - position.x) / scale,
      y: (pointerPosition.y - position.y) / scale
    };

    if (e.evt?.type === 'touchstart') {
      e.evt.preventDefault();
    }

    const clickedOnEmpty = e.target === e.target.getStage();
    if (activeTool === 'wall' && clickedOnEmpty) {
      // Usar transformedPos en lugar de pos
      const snap = findIntersectionSnapPoint(transformedPos);

      if (snap) {
        const snappedX = snap.x;
        const snappedY = snap.y;

        // Determinar orientación inicial...
        let initialOrientation = 'horizontal'; // Default

        if (snap.type === 'grid-grid') {
          const angle = Math.atan2(transformedPos.y - snappedY, transformedPos.x - snappedX);
          if (Math.abs(angle) < Math.PI / 4 || Math.abs(angle) > 3 * Math.PI / 4) {
            initialOrientation = 'horizontal';
          } else {
            initialOrientation = 'vertical';
          }
        } else if (snap.type === 'wall-grid' || snap.type === 'wall-wall') {
          // Resto del código para determinar orientación...
          // Usar transformedPos en lugar de pos
          const angle = Math.atan2(transformedPos.y - snappedY, transformedPos.x - snappedX);
          if (Math.abs(angle) < Math.PI / 4 || Math.abs(angle) > 3 * Math.PI / 4) {
            initialOrientation = 'horizontal';
          } else {
            initialOrientation = 'vertical';
          }
        }

        setNewWall({
          x: snappedX,
          y: snappedY,
          width: 0,
          height: 0,
          id: `wall-${Date.now()}`,
          orientation: initialOrientation,
          startX: snappedX,
          startY: snappedY,
        });

        setDrawing(true);
        setSelectedWallId(null);
        if (stageRef.current) {
          stageRef.current.container().style.cursor = 'crosshair';
        }
        setShowTooltip(false);
      }
    } else if (!clickedOnEmpty) {
      // Tocar un elemento existente
      const node = e.target;
      if (node && node.id && node.id()) {
        e.cancelBubble = true;

        // En móvil, iniciar arrastre inmediato si no estamos en modo dibujo
        if (activeTool !== 'wall' && e.evt?.type === 'touchstart') {
          setSelectedWallId(node.id());

          // Calcular posición relativa para el arrastre
          const touch = e.evt.touches[0];
          const stage = node.getStage();
          const stageContainer = stage.container();
          const stageRect = stageContainer.getBoundingClientRect();

          const relativePos = {
            x: touch.clientX - stageRect.left,
            y: touch.clientY - stageRect.top
          };

          // Iniciar arrastre manualmente
          node.startDrag(relativePos);

          // Feedback visual
          node.fill('#a0a0a0');
          stage.batchDraw();
        } else {
          // Para desktop o cuando no es touch, manejar normalmente
          handleSelectWall(node.id());
        }
      }

      if (stageRef.current) {
        stageRef.current.container().style.cursor = activeTool === 'wall' ? 'crosshair' : 'move';
      }
    }
  };

  const handleMouseMove = (e) => {
    if (!drawing || !newWall) return;

    const pointerPos = e.evt?.touches?.[0] || e;
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition(pointerPos);

    // Transformar las coordenadas
    const transformedPos = {
      x: (pointerPosition.x - position.x) / scale,
      y: (pointerPosition.y - position.y) / scale
    };

    let currentX = transformedPos.x;
    let currentY = transformedPos.y;

    let finalX, finalY, finalWidth, finalHeight;

    // Restricciones según orientación...
    if (newWall.orientation === 'horizontal') {
      currentY = newWall.startY;
      finalX = Math.min(newWall.startX, currentX);
      finalWidth = Math.abs(currentX - newWall.startX);
      finalY = newWall.startY - defaultThickness / 2;
      finalHeight = defaultThickness;
    } else {
      currentX = newWall.startX;
      finalY = Math.min(newWall.startY, currentY);
      finalHeight = Math.abs(currentY - newWall.startY);
      finalX = newWall.startX - defaultThickness / 2;
      finalWidth = defaultThickness;
    }

    setNewWall({
      ...newWall,
      x: finalX,
      y: finalY,
      width: finalWidth,
      height: finalHeight,
    });
  };

  const handleMouseUp = () => {
    if (!drawing || !newWall || !stageRef.current) return;

    const pointerPosition = stageRef.current.getPointerPosition();

    // Transformar las coordenadas
    const transformedPos = {
      x: (pointerPosition.x - position.x) / scale,
      y: (pointerPosition.y - position.y) / scale
    };

    // Encuentra un punto de intersección cerca de la posición final del ratón
    const snap = findIntersectionSnapPoint(transformedPos, newWall.id);

    let finalWall = { ...newWall };

    // Finalizar muro con punto de inicio y fin ajustados
    if (snap) {
      // Usar el punto de inicio ajustado y el punto final ajustado
      if (finalWall.orientation === 'horizontal') {
        finalWall.width = snap.x - finalWall.startX;
        if (finalWall.width < 0) {
          finalWall.x = snap.x;
          finalWall.width = Math.abs(finalWall.width);
        } else {
          finalWall.x = finalWall.startX;
        }
        finalWall.y = finalWall.startY - defaultThickness / 2;
        finalWall.height = defaultThickness;
      } else {
        finalWall.height = snap.y - finalWall.startY;
        if (finalWall.height < 0) {
          finalWall.y = snap.y;
          finalWall.height = Math.abs(finalWall.height);
        } else {
          finalWall.y = finalWall.startY;
        }
        finalWall.x = finalWall.startX - defaultThickness / 2;
        finalWall.width = defaultThickness;
      }

      const finalLength = finalWall.orientation === 'horizontal' ? finalWall.width : finalWall.height;
      const minWallLength = gridSize / 5;

      if (finalLength > minWallLength) {
        setWalls([...walls, finalWall]);
        setSelectedWallId(finalWall.id);
        setShowProperties(true);
      }
    }

    setNewWall(null);
    setDrawing(false);
    stageRef.current.container().style.cursor = 'default';
  };

  const handleSelectWall = (wallId) => {
    setSelectedWallId(wallId);
    setShowProperties(true);
  };

  // Effect to update the transformer when selection changes
  useEffect(() => {
    if (selectedWallId && transformerRef.current && stageRef.current) {
      const selectedNode = stageRef.current.findOne(`#${selectedWallId}`);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
        transformerRef.current.getLayer().batchDraw();
      } else {
        transformerRef.current.nodes([]);
      }
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
    }
  }, [selectedWallId, walls]);

  // Function to handle wall drag end
  const handleWallDragEnd = (e, wallId) => {
    const wall = walls.find(w => w.id === wallId);
    if (!wall) return;

    const node = e.target;
    node.fill('#8c8c8c');
    node.getLayer().batchDraw();
    const currentPos = { x: node.x(), y: node.y() };

    // Find a snap point near the top-left corner of the wall after dragging
    const snap = findIntersectionSnapPoint(currentPos, wallId);

    let snappedX = currentPos.x;
    let snappedY = currentPos.y;

    if (snap) {
      snappedX = snap.x;
      snappedY = snap.y;

      if (wall.orientation === 'horizontal') {
        snappedY = snapToGrid(snap.y + wall.height / 2) - wall.height / 2;
        snappedX = snap.x;
      } else { // vertical
        snappedX = snapToGrid(snap.x + wall.width / 2) - wall.width / 2;
        snappedY = snap.y;
      }
    } else {
      // Fallback: if no intersection snap, snap the top-left to the nearest grid intersection
      snappedX = snapToGrid(currentPos.x);
      snappedY = snapToGrid(currentPos.y);

      // Adjust based on wall orientation and thickness to keep it aligned to the grid lines
      const wallCenterX = currentPos.x + wall.width / 2;
      const wallCenterY = currentPos.y + wall.height / 2;

      if (wall.orientation === 'horizontal') {
        // Snap the wall's center Y to the nearest horizontal grid line
        snappedY = snapToGrid(wallCenterY) - wall.height / 2;
        snappedX = currentPos.x; // Keep original X for now
      } else { // vertical
        // Snap the wall's center X to the nearest vertical grid line
        snappedX = snapToGrid(wallCenterX) - wall.width / 2;
        snappedY = currentPos.y; // Keep original Y for now
      }
    }

    const updatedWalls = walls.map(w => {
      if (w.id === wallId) {
        return {
          ...w,
          x: snappedX,
          y: snappedY,
        };
      }
      return w;
    });

    setWalls(updatedWalls);

    // Update the visual position
    node.position({ x: snappedX, y: snappedY });
    node.getLayer().batchDraw();
  };

  // Function to adjust wall dimensions after transformation (resizing)
  const handleTransformEnd = (wallId) => {
    const node = stageRef.current?.findOne(`#${wallId}`);
    if (!node) return;

    const wall = walls.find(w => w.id === wallId);
    if (!wall) return;

    const newBounds = node.getClientRect();
    let updatedWall = { ...wall };
    let changed = false;

    const originalBounds = {
      x: wall.x,
      y: wall.y,
      width: wall.width,
      height: wall.height
    };

    // Determine which end was moved and try to snap it
    if (wall.orientation === 'horizontal') {
      const originalLeft = originalBounds.x;
      const originalRight = originalBounds.x + originalBounds.width;
      const newLeft = newBounds.x;
      const newRight = newBounds.x + newBounds.width;
      const wallCenterY = newBounds.y + newBounds.height / 2;

      // Check if the left end moved significantly
      if (Math.abs(newLeft - originalLeft) > 1 || Math.abs(newBounds.width - originalBounds.width) > 1) {
        const snap = findIntersectionSnapPoint({ x: newLeft, y: wallCenterY }, wallId);
        if (snap) {
          updatedWall.x = snap.x;
          updatedWall.width = newRight - snap.x;
          changed = true;
        } else {
          // Fallback to grid snap for the left end
          updatedWall.x = snapToGrid(newLeft);
          updatedWall.width = newRight - updatedWall.x;
          changed = true;
        }
      }

      // Check if the right end moved significantly
      if (!changed || Math.abs(newRight - originalRight) > 1) {
        const snap = findIntersectionSnapPoint({ x: newRight, y: wallCenterY }, wallId);
        if (snap) {
          updatedWall.width = snap.x - updatedWall.x;
          changed = true;
        } else if (!changed) { // Fallback to grid snap for the right end
          updatedWall.width = snapToGrid(newRight) - updatedWall.x;
          changed = true;
        }
      }

      // Ensure the wall has a positive width after snapping
      if (updatedWall.width < 0) {
        updatedWall.x = updatedWall.x + updatedWall.width;
        updatedWall.width = Math.abs(updatedWall.width);
      }
      const minWallLength = gridSize / 5;
      if (updatedWall.width < minWallLength) {
        setWalls(walls.filter(w => w.id !== wallId));
        setSelectedWallId(null);
        setShowProperties(false);
        return;
      }
    } else { // Vertical wall
      const originalTop = originalBounds.y;
      const originalBottom = originalBounds.y + originalBounds.height;
      const newTop = newBounds.y;
      const newBottom = newBounds.y + newBounds.height;
      const wallCenterX = newBounds.x + newBounds.width / 2;

      // Check if the top end moved significantly
      if (Math.abs(newTop - originalTop) > 1 || Math.abs(newBounds.height - originalBounds.height) > 1) {
        const snap = findIntersectionSnapPoint({ y: newTop, x: wallCenterX }, wallId);
        if (snap) {
          updatedWall.y = snap.y;
          updatedWall.height = newBottom - snap.y;
          changed = true;
        } else {
          // Fallback to grid snap for the top end
          updatedWall.y = snapToGrid(newTop);
          updatedWall.height = newBottom - updatedWall.y;
          changed = true;
        }
      }

      // Check if the bottom end moved significantly
      if (!changed || Math.abs(newBottom - originalBottom) > 1) {
        const snap = findIntersectionSnapPoint({ y: newBottom, x: wallCenterX }, wallId);
        if (snap) {
          updatedWall.height = snap.y - updatedWall.y;
          changed = true;
        } else if (!changed) { // Fallback to grid snap for the bottom end
          updatedWall.height = snapToGrid(newBottom) - updatedWall.y;
          changed = true;
        }
      }

      // Ensure the wall has a positive height after snapping
      if (updatedWall.height < 0) {
        updatedWall.y = updatedWall.y + updatedWall.height;
        updatedWall.height = Math.abs(updatedWall.height);
      }
      const minWallLength = gridSize / 5;
      if (updatedWall.height < minWallLength) {
        setWalls(walls.filter(w => w.id !== wallId));
        setSelectedWallId(null);
        setShowProperties(false);
        return;
      }
    }

    // If changes occurred, update the walls state and node properties
    if (changed) {
      const updatedWalls = walls.map(w => {
        if (w.id === wallId) {
          return updatedWall;
        }
        return w;
      });
      setWalls(updatedWalls);

      // Reset the scale and update the node position and size to match the new dimensions
      node.scaleX(1);
      node.scaleY(1);
      node.position({ x: updatedWall.x, y: updatedWall.y });
      node.size({ width: updatedWall.width, height: updatedWall.height });
      node.getLayer().batchDraw();

      // Re-select the wall to update the transformer handles
      setSelectedWallId(null); // Deselect
      setTimeout(() => setSelectedWallId(wallId), 0); // Re-select in next tick
    } else {
      // If no significant snap occurred on the moved end, revert the transform
      const originalWall = walls.find(w => w.id === wallId);
      if (originalWall) {
        node.position({ x: originalWall.x, y: originalWall.y });
        node.size({ width: originalWall.width, height: originalWall.height });
        node.scaleX(1);
        node.scaleY(1);
        node.getLayer().batchDraw();
      }
    }
  };

  // Function to update wall thickness
  const updateWallThickness = (wallId, newThickness) => {
    if (newThickness < 1 || newThickness > 50) return;

    const updatedWalls = walls.map(w => {
      if (w.id === wallId) {
        const centerX = w.x + w.width / 2;
        const centerY = w.y + w.height / 2;

        if (w.orientation === 'horizontal') {
          return {
            ...w,
            y: centerY - newThickness / 2,
            height: newThickness
          };
        } else {
          return {
            ...w,
            x: centerX - newThickness / 2,
            width: newThickness
          };
        }
      }
      return w;
    });

    setWalls(updatedWalls);
  };
  // 3. Función para manejar el zoom con la rueda del mouse
  const handleWheel = (e) => {
    e.evt.preventDefault();

    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = scale;

    const pointerPosition = stage.getPointerPosition();

    const mousePointTo = {
      x: (pointerPosition.x - position.x) / oldScale,
      y: (pointerPosition.y - position.y) / oldScale
    };

    // Determinar dirección del zoom (in o out)
    const direction = e.evt.deltaY > 0 ? -1 : 1;

    // Calcular nuevo scale con límites
    const newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    // Establecer límites de zoom (min: 0.1, max: 5)
    const boundedScale = Math.max(0.1, Math.min(5, newScale));

    setScale(boundedScale);

    const newPos = {
      x: pointerPosition.x - mousePointTo.x * boundedScale,
      y: pointerPosition.y - mousePointTo.y * boundedScale
    };

    setPosition(newPos);
  };
  // Render the grid lines
  const renderGrid = () => {
    const gridLines = [];

    // Ajustar la distancia entre líneas según el zoom
    const zoomedGridSize = gridSize * scale;

    // Calcular los límites del grid visible
    const startX = Math.floor(-position.x / scale / gridSize) * gridSize;
    const endX = Math.ceil((canvasWidth - position.x) / scale / gridSize) * gridSize;

    const startY = Math.floor(-position.y / scale / gridSize) * gridSize;
    const endY = Math.ceil((canvasHeight - position.y) / scale / gridSize) * gridSize;

    // Generar líneas verticales
    for (let i = startX; i <= endX; i += gridSize) {
      gridLines.push(
        <Line
          key={`v-${i}`}
          points={[i, startY, i, endY]}
          stroke="#e0e0e0"
          strokeWidth={1 / scale} // Ajustar el grosor para que se vea consistente
        />
      );
    }

    // Generar líneas horizontales
    for (let i = startY; i <= endY; i += gridSize) {
      gridLines.push(
        <Line
          key={`h-${i}`}
          points={[startX, i, endX, i]}
          stroke="#e0e0e0"
          strokeWidth={1 / scale} // Ajustar el grosor para que se vea consistente
        />
      );
    }

    return gridLines;
  };

  const WallPropertiesPanel = () => {
    if (!selectedWallId || !showProperties) return null;

    const selectedWall = walls.find(wall => wall.id === selectedWallId);
    if (!selectedWall) return null;

    const displayThickness = selectedWall.orientation === 'horizontal'
      ? selectedWall.height
      : selectedWall.width;

    const displayLength = selectedWall.orientation === 'horizontal'
      ? selectedWall.width
      : selectedWall.height;

    return (
      <div className="properties-panel" style={{
        position: 'absolute',
        top: '10px',
        right: showSidebar ? '60px' : '10px',
        width: '250px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '5px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* <h3 style={{ margin: '0' }}>Wall Properties</h3>
          <button
            onClick={() => setShowProperties(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '5px' }}
          >
            <X size={16} />
          </button>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Orientation: {selectedWall.orientation}
          </label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Length: {Math.round(displayLength)}px
          </label>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Thickness: {displayThickness}px
          </label>
          <input
            type="range"
            min="5"
            max="50"
            value={displayThickness}
            onChange={(e) => updateWallThickness(selectedWallId, parseInt(e.target.value))}
            style={{ width: '100%' }}
          /> */}
        </div>
        <button
          onClick={() => {
            setWalls(walls.filter(wall => wall.id !== selectedWallId));
            setSelectedWallId(null);
            setShowProperties(false);
          }}
          style={{
            backgroundColor: '#ff4d4f',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          <Trash2 size={16} /> Delete Wall
        </button>
      </div>
    );
  };
  useEffect(() => {
    const preventDefault = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventDefault);
    };
  }, []);

  console.log(activeTool);
  
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', touchAction: 'none', }}>
      <Stage
        width={canvasSize.width}
        height={canvasSize.height}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchEnd={handleMouseUp}
        ref={stageRef}
        scaleX={scale}
        scaleY={scale}
        x={position.x}
        y={position.y}
        draggable={activeTool === 'pan'}
        onDragEnd={(e) => {
          // Solo actualizar position si estamos usando la herramienta pan
          if (activeTool === 'pan') {
            setPosition({
              x: e.target.x(),
              y: e.target.y()
            });
          }
        }}
        onWheel={handleWheel}
        style={{
          touchAction: 'none',
          userSelect: 'none',
          cursor: activeTool === 'select' ? 'pointer' : 'default' 
        }}
      >
        <Layer >
          {renderGrid()}
          {walls.map((wall) => (
            <Rect
              key={wall.id}
              id={wall.id}
              x={wall.x}
              y={wall.y}
              width={wall.width}
              height={wall.height}
              fill="#8c8c8c"
              stroke="#595959"
              strokeWidth={2} // Grosor aumentado para mejor visibilidad
              draggable={activeTool !== 'wall'} // Habilitar arrastre siempre que no estemos en modo dibujo
              onDragStart={(e) => {
                e.cancelBubble = true;
                setSelectedWallId(wall.id);
                // Feedback visual al comenzar a arrastrar
                e.target.fill('#a0a0a0');
                e.target.getStage().batchDraw();
              }}
              onDragEnd={(e) => {
                handleWallDragEnd(e, wall.id);
                // Restaurar color original
                e.target.fill('#8c8c8c');
                e.target.getStage().batchDraw();
              }}
              onClick={() => handleSelectWall(wall.id)}
              onTap={() => handleSelectWall(wall.id)}
              onTouchStart={(e) => {
                e.cancelBubble = true;
                // Iniciar arrastre inmediato en móvil
                if (activeTool !== 'wall') {
                  const touch = e.evt.touches[0];
                  const stage = e.target.getStage();
                  const relativePos = {
                    x: touch.clientX - stage.container().getBoundingClientRect().left,
                    y: touch.clientY - stage.container().getBoundingClientRect().top
                  };
                  e.target.startDrag(relativePos);
                }
                handleTouchStart(e);
              }}
              onTouchEnd={handleTouchEnd}
              hitWidth={200} // Área táctil mucho más grande
              hitHeight={200}
              shadowColor="black"
              shadowBlur={5}
              shadowOpacity={0.3}
              shadowOffset={{ x: 2, y: 2 }}
              onDragMove={(e) => {
                // Efecto visual durante el arrastre
                e.target.opacity(0.8);
                e.target.shadowOpacity(0.5);
                e.target.getStage().batchDraw();
              }}
              
              cornerRadius={1} // Bordes redondeados para mejor apariencia
            />
          ))}
          {newWall && (
            <Rect
            
              x={newWall.x}
              y={newWall.y}
              width={newWall.width}
              height={newWall.height}
              fill="#8c8c8c"
              stroke="#595959"
              strokeWidth={1}
              opacity={0.7}
              hitWidth={20}
              hitHeight={20}
            />
          )}
          <Transformer
          
            ref={transformerRef}
            rotateEnabled={false}
            keepRatio={false}
            boundBoxFunc={(oldBox, newBox) => {
              // Obtener el muro seleccionado
              const selectedWall = walls.find(wall => wall.id === selectedWallId);
              if (!selectedWall) return oldBox;

              // Para muros horizontales, mantener la altura fija
              if (selectedWall.orientation === 'horizontal') {
                return {
                  ...newBox,
                  height: oldBox.height,
                  y: oldBox.y
                };
              }
              // Para muros verticales, mantener el ancho fijo
              else {
                return {
                  ...newBox,
                  width: oldBox.width,
                  x: oldBox.x
                };
              }
            }}
            enabledAnchors={selectedWallId ?
              (walls.find(w => w.id === selectedWallId)?.orientation === 'horizontal' ?
                ['middle-left', 'middle-right'] :
                ['top-center', 'bottom-center']) :
              []}
          />
        </Layer>
      </Stage>
      <SidebarComponent setDefaultThickness={setDefaultThickness} setShowProperties={setShowProperties} showProperties={showProperties} showTooltip={showTooltip} setShowTooltip={setShowTooltip} activeTool={activeTool} setActiveTool={setActiveTool} />
      {showProperties && <WallPropertiesPanel />}

      <HelpTooltip showTooltip={showTooltip} setShowTooltip={setShowTooltip} />
      {/* <FurniturePalette /> */}
      <BottomToolbar />
      <HeaderToolbar />
      <RightCornerButtons />
      <ZoomControls scale={scale} setPosition={setPosition} setScale={setScale} />
    </div>
  );
};

export default WallDrawer;