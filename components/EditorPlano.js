import { useState, useEffect, useRef } from 'react';
import { Stage, Layer, Rect, Text, Group, Transformer } from 'react-konva';
import { 
  Home, 
  ChefHat, 
  Bath, 
  Bed, 
  Sofa, 
  ArrowUpSquare, 
  Palmtree, 
  Trash2, 
  RotateCw, 
  Save, 
  Eye, 
  Send,
  LayoutGrid,
  Plus,
  Minus
} from 'lucide-react';

// Componente principal
export default function HousePlanner() {
  const [rooms, setRooms] = useState([]);
  const [selectedId, selectShape] = useState(null);
  const [material, setMaterial] = useState('concreto');
  const [floors, setFloors] = useState(1);
  const [roofType, setRoofType] = useState('plano');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    whatsapp: ''
  });

  // Referencia al transformador para cambiar tamaño
  const transformerRef = useRef();

  // Dimensiones del lienzo y cuadrícula
  const stageWidth = 600;
  const stageHeight = 450;
  const gridSize = 50; // 1 metro = 30px

  // Color único para todos los elementos
  const roomColor = '#90cdf4'; // azul claro para todas las habitaciones

  // Dimensiones predeterminadas para habitaciones (en unidades de cuadrícula)
  const roomDimensions = {
    habitacion: { width: 3, height: 3 },
    sala: { width: 4, height: 3 },
    cocina: { width: 2, height: 3 },
    baño: { width: 2, height: 2 },
    comedor: { width: 3, height: 2 },
    escaleras: { width: 2, height: 2 },
    terraza: { width: 4, height: 2 }
  };

  // Actualizar el transformador cuando cambia la selección
  useEffect(() => {
    if (selectedId && transformerRef.current) {
      // Encontrar el nodo seleccionado
      const selectedNode = transformerRef.current.getStage().findOne('#' + selectedId);
      if (selectedNode) {
        transformerRef.current.nodes([selectedNode]);
        transformerRef.current.getLayer().batchDraw();
      }
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedId]);

  // Función para verificar colisiones entre habitaciones
  // Permite que las habitaciones se toquen pero no se superpongan
  const checkCollision = (room1, room2) => {
    // Obtener las coordenadas ajustadas a la rotación
    const getAdjustedCoords = (room) => {
      // Para simplificar, tratamos todas las habitaciones como rectangulares sin rotación
      return {
        x1: room.x,
        y1: room.y,
        x2: room.x + room.width,
        y2: room.y + room.height
      };
    };

    const r1 = getAdjustedCoords(room1);
    const r2 = getAdjustedCoords(room2);

    // Verificar si hay superposición (no solo toque)
    // Las habitaciones pueden tocarse (compartir un borde) pero no superponerse
    return !(
      r1.x2 <= r2.x1 ||
      r1.x1 >= r2.x2 ||
      r1.y2 <= r2.y1 ||
      r1.y1 >= r2.y2
    );
  };

  // Función para agregar una nueva habitación
  const addRoom = (type) => {
    const { width, height } = roomDimensions[type];
    
    // Posición central, ajustada a la cuadrícula
    const gridX = Math.floor((stageWidth / 2) / gridSize);
    const gridY = Math.floor((stageHeight / 2) / gridSize);
    
    const x = gridX * gridSize;
    const y = gridY * gridSize;
    
    const newRoom = {
      id: Date.now().toString(),
      type,
      x,
      y,
      width: width * gridSize,
      height: height * gridSize,
      gridWidth: width,
      gridHeight: height,
      rotation: 0,
      color: roomColor // Usar el mismo color para todas las habitaciones
    };
    
    // Verificar si la nueva habitación se solapa con alguna existente
    const hasCollision = rooms.some(room => checkCollision(newRoom, room));
    
    if (!hasCollision) {
      setRooms([...rooms, newRoom]);
      selectShape(newRoom.id);
    } else {
      // Intentar encontrar una posición cercana sin colisiones
      let found = false;
      const offsets = [
        { dx: 2, dy: 0 }, { dx: -2, dy: 0 }, { dx: 0, dy: 2 }, { dx: 0, dy: -2 },
        { dx: 2, dy: 2 }, { dx: -2, dy: 2 }, { dx: 2, dy: -2 }, { dx: -2, dy: -2 }
      ];
      
      for (const offset of offsets) {
        const offsetRoom = {
          ...newRoom,
          x: x + offset.dx * gridSize,
          y: y + offset.dy * gridSize
        };
        
        if (!rooms.some(room => checkCollision(offsetRoom, room))) {
          setRooms([...rooms, offsetRoom]);
          selectShape(offsetRoom.id);
          found = true;
          break;
        }
      }
      
      if (!found) {
        alert("No hay espacio disponible para colocar esta habitación. Reubica las existentes.");
      }
    }
  };

  // Función para eliminar la habitación seleccionada
  const deleteSelected = () => {
    if (selectedId) {
      setRooms(rooms.filter(room => room.id !== selectedId));
      selectShape(null);
    }
  };

  // Función para rotar la habitación seleccionada (90 grados)
  const rotateSelected = () => {
    if (selectedId) {
      const selectedRoom = rooms.find(room => room.id === selectedId);
      if (!selectedRoom) return;
      
      const newRotation = (selectedRoom.rotation + 90) % 360;
      
      // Para rotaciones de 90° o 270°, intercambiamos ancho y alto
      const isFlipped = newRotation % 180 !== 0;
      const newWidth = isFlipped ? selectedRoom.height : selectedRoom.width;
      const newHeight = isFlipped ? selectedRoom.width : selectedRoom.height;
      const newGridWidth = isFlipped ? selectedRoom.gridHeight : selectedRoom.gridWidth;
      const newGridHeight = isFlipped ? selectedRoom.gridWidth : selectedRoom.gridHeight;
      
      // Crear una copia temporal de la habitación rotada para verificar colisiones
      const rotatedRoom = {
        ...selectedRoom,
        rotation: newRotation,
        width: newWidth,
        height: newHeight,
        gridWidth: newGridWidth,
        gridHeight: newGridHeight
      };
      
      // Verificar colisiones con otras habitaciones
      const otherRooms = rooms.filter(room => room.id !== selectedId);
      const hasCollision = otherRooms.some(room => checkCollision(rotatedRoom, room));
      
      if (!hasCollision) {
        setRooms(
          rooms.map(room => {
            if (room.id === selectedId) {
              return rotatedRoom;
            }
            return room;
          })
        );
      } else {
        alert("No se puede rotar la habitación porque colisionaría con otra.");
      }
    }
  };

  // Función para aumentar el tamaño de la habitación seleccionada
  const increaseRoomSize = () => {
    if (selectedId) {
      const selectedRoom = rooms.find(room => room.id === selectedId);
      if (!selectedRoom) return;
      
      const newGridWidth = selectedRoom.gridWidth + 1;
      const newGridHeight = selectedRoom.gridHeight + 1;
      
      // Crear una copia temporal de la habitación agrandada para verificar colisiones
      const enlargedRoom = {
        ...selectedRoom,
        width: newGridWidth * gridSize,
        height: newGridHeight * gridSize,
        gridWidth: newGridWidth,
        gridHeight: newGridHeight
      };
      
      // Verificar colisiones con otras habitaciones
      const otherRooms = rooms.filter(room => room.id !== selectedId);
      const hasCollision = otherRooms.some(room => checkCollision(enlargedRoom, room));
      
      if (!hasCollision) {
        setRooms(
          rooms.map(room => {
            if (room.id === selectedId) {
              return enlargedRoom;
            }
            return room;
          })
        );
      } else {
        alert("No se puede aumentar el tamaño porque colisionaría con otra habitación.");
      }
    }
  };

  // Función para disminuir el tamaño de la habitación seleccionada
  const decreaseRoomSize = () => {
    if (selectedId) {
      setRooms(
        rooms.map(room => {
          if (room.id === selectedId) {
            const newGridWidth = Math.max(1, room.gridWidth - 1);
            const newGridHeight = Math.max(1, room.gridHeight - 1);
            return {
              ...room,
              width: newGridWidth * gridSize,
              height: newGridHeight * gridSize,
              gridWidth: newGridWidth,
              gridHeight: newGridHeight
            };
          }
          return room;
        })
      );
    }
  };

  // Función para limpiar el plano
  const clearPlan = () => {
    setRooms([]);
    selectShape(null);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = () => {
    alert(`Diseño enviado a un asesor:\nNombre: ${formData.nombre}\nCorreo: ${formData.correo}\nWhatsApp: ${formData.whatsapp}`);
  };

  // Manejadores para cambios en el formulario
  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Función para ajustar la posición a la cuadrícula
  const snapToGrid = (pos) => {
    return Math.round(pos / gridSize) * gridSize;
  };

  // Componente para una habitación
  const Room = ({ room, isSelected, onSelect, onChange }) => {
    const shapeRef = useRef();
    
    const handleDragEnd = (e) => {
      // Evitar errores si shapeRef no está definido
      if (!shapeRef.current) return;
      
      // Guardar la posición original para restaurarla si hay colisión
      const originalPos = { x: room.x, y: room.y };
      
      // Ajustar a la cuadrícula al finalizar el arrastre
      const snappedX = snapToGrid(e.target.x());
      const snappedY = snapToGrid(e.target.y());
      
      // Crear una copia temporal de la habitación movida
      const movedRoom = {
        ...room,
        x: snappedX,
        y: snappedY
      };
      
      // Verificar colisiones con otras habitaciones
      const otherRooms = rooms.filter(r => r.id !== room.id);
      const hasCollision = otherRooms.some(r => checkCollision(movedRoom, r));
      
      if (hasCollision) {
        // Restaurar la posición original
        shapeRef.current.position({ x: originalPos.x, y: originalPos.y });
        if (shapeRef.current.getLayer()) {
          shapeRef.current.getLayer().batchDraw();
        }
        alert("No se puede mover aquí porque colisionaría con otra habitación.");
      } else {
        // Aplicar el cambio
        onChange({
          ...room,
          x: snappedX,
          y: snappedY
        });
      }
    };
    
    const handleTransformEnd = () => {
      // Evitar errores si shapeRef no está definido
      if (!shapeRef.current) return;
      
      // Obtener nuevo tamaño y posición
      const node = shapeRef.current;
      const scaleX = node.scaleX();
      const scaleY = node.scaleY();
      
      // Ajustar al tamaño de la cuadrícula
      const newWidth = Math.max(gridSize, snapToGrid(room.width * scaleX));
      const newHeight = Math.max(gridSize, snapToGrid(room.height * scaleY));
      
      // Restaurar escala a 1
      node.scaleX(1);
      node.scaleY(1);
      
      // Calcular nuevas dimensiones en unidades de cuadrícula
      const newGridWidth = Math.round(newWidth / gridSize);
      const newGridHeight = Math.round(newHeight / gridSize);
      
      // Crear una copia temporal de la habitación redimensionada
      const resizedRoom = {
        ...room,
        x: snapToGrid(node.x()),
        y: snapToGrid(node.y()),
        width: newWidth,
        height: newHeight,
        gridWidth: newGridWidth,
        gridHeight: newGridHeight,
        rotation: node.rotation()
      };
      
      // Verificar colisiones con otras habitaciones
      const otherRooms = rooms.filter(r => r.id !== room.id);
      const hasCollision = otherRooms.some(r => checkCollision(resizedRoom, r));
      
      if (hasCollision) {
        // Restaurar tamaño original
        node.width(room.width);
        node.height(room.height);
        node.position({ x: room.x, y: room.y });
        if (node.getLayer()) {
          node.getLayer().batchDraw();
        }
        alert("No se puede redimensionar porque colisionaría con otra habitación.");
      } else {
        // Aplicar el cambio
        onChange(resizedRoom);
      }
    };

    // Tamaño de texto fijo independientemente del tamaño de la habitación
    const titleFontSize = 16;
    const measuresFontSize = 12;

    return (
      <Group
        id={room.id}
        x={room.x}
        y={room.y}
        rotation={room.rotation}
        draggable
        onClick={() => onSelect(room.id)}
        onTap={() => onSelect(room.id)}
        onDragEnd={handleDragEnd}
        ref={shapeRef}
        onTransformEnd={handleTransformEnd}
      >
        <Rect
          width={room.width}
          height={room.height}
          fill={room.color}
          strokeWidth={isSelected ? 2 : 1}
          stroke="#333"
          cornerRadius={2}
        />
        <Rect 
          width={room.width}
          height={room.height / 2}
          fill="rgba(255, 255, 255, 0.7)"
          cornerRadius={2}
        />
        <Text
          text={room.type.charAt(0).toUpperCase() + room.type.slice(1)}
          fill="#000" // Color oscuro para mejor visibilidad
          width={room.width}
          height={room.height / 2}
          align="center"
          verticalAlign="middle"
          fontSize={titleFontSize}
          fontStyle="bold"
        />
        <Rect 
          width={room.width}
          height={20}
          y={room.height - 20}
          fill="rgba(255, 255, 255, 0.7)"
        />
        <Text
          text={`${room.gridWidth}x${room.gridHeight} m`}
          fill="#000" // Color oscuro para mejor visibilidad
          width={room.width}
          height={20}
          y={room.height - 20}
          align="center"
          verticalAlign="middle"
          fontSize={measuresFontSize}
          fontStyle="bold"
        />
      </Group>
    );
  };

  // Componente de la cuadrícula del fondo
  const GridComponent = () => {
    const lines = [];
    // Líneas verticales
    for (let i = 0; i <= stageWidth; i += gridSize) {
      lines.push(
        <Rect
          key={`v-${i}`}
          x={i}
          y={0}
          width={1}
          height={stageHeight}
          fill="#ddd"
        />
      );
    }
    // Líneas horizontales
    for (let i = 0; i <= stageHeight; i += gridSize) {
      lines.push(
        <Rect
          key={`h-${i}`}
          x={0}
          y={i}
          width={stageWidth}
          height={1}
          fill="#ddd"
        />
      );
    }
    return <>{lines}</>;
  };

  // Componente para cada elemento en la barra lateral
  const SidebarItem = ({ icon: Icon, label, onClick }) => (
    <div 
      className="flex flex-col items-center p-2 mb-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer transition-all"
      onClick={onClick}
    >
      <Icon size={24} className="mb-1" />
      <span className="text-xs text-center">{label}</span>
    </div>
  );

  // Componente de vista previa
  const Preview = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 max-h-3/4 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Vista Previa del Diseño</h2>
        <div className="border p-4">
          <h3 className="font-semibold">Detalles del Plano:</h3>
          <ul className="mb-4">
            <li>Material: {material}</li>
            <li>Número de pisos: {floors}</li>
            <li>Tipo de techo: {roofType}</li>
            <li>Habitaciones: {rooms.length}</li>
          </ul>
          
          <div className="bg-gray-500 p-4 flex justify-center">
            <Stage width={stageWidth} height={stageHeight}>
              <Layer>
                <GridComponent />
                {rooms.map(room => (
                  <Group
                    key={room.id}
                    x={room.x}
                    y={room.y}
                    rotation={room.rotation}
                  >
                    <Rect
                      width={room.width}
                      height={room.height}
                      fill={room.color}
                      stroke="#333"
                      strokeWidth={1}
                      cornerRadius={2}
                    />
                    <Rect 
                      width={room.width}
                      height={room.height / 2}
                      fill="rgba(255, 255, 255, 0.7)"
                      cornerRadius={2}
                    />
                    <Text
                      text={room.type.charAt(0).toUpperCase() + room.type.slice(1)}
                      fill="#000" // Color oscuro para mejor visibilidad
                      width={room.width}
                      height={room.height / 2}
                      align="center"
                      verticalAlign="middle"
                      fontSize={16}
                      fontStyle="bold"
                    />
                    <Rect 
                      width={room.width}
                      height={20}
                      y={room.height - 20}
                      fill="rgba(255, 255, 255, 0.7)"
                    />
                    <Text
                      text={`${room.gridWidth}x${room.gridHeight} m`}
                      fill="#000" // Color oscuro para mejor visibilidad
                      width={room.width}
                      height={20}
                      y={room.height - 20}
                      align="center"
                      verticalAlign="middle"
                      fontSize={12}
                      fontStyle="bold"
                    />
                  </Group>
                ))}
              </Layer>
            </Stage>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowPreview(false)}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Panel lateral */}
      <div className="w-64 bg-white p-4 border-r shadow-sm flex flex-col">
        <h2 className="text-xl font-bold mb-4 text-center">Componentes</h2>
        
        {/* Componentes de habitaciones */}
        <div className="grid grid-cols-2 gap-2 mb-6 text-gray">
          <SidebarItem icon={Bed} label="Habitación" onClick={() => addRoom('habitacion')}  />
          <SidebarItem icon={Sofa} label="Sala" onClick={() => addRoom('sala')} />
          <SidebarItem icon={ChefHat} label="Cocina" onClick={() => addRoom('cocina')} />
          <SidebarItem icon={Bath} label="Baño" onClick={() => addRoom('baño')} />
          <SidebarItem icon={Home} label="Comedor" onClick={() => addRoom('comedor')} />
          <SidebarItem icon={ArrowUpSquare} label="Escaleras" onClick={() => addRoom('escaleras')} />
          <SidebarItem icon={Palmtree} label="Terraza" onClick={() => addRoom('terraza')} />
        </div>
        
        {/* Configuración */}
        <div className="mb-6 text-gray">
          <h3 className="font-semibold mb-2">Configuración</h3>
          
          <div className="mb-2">
            <label className="block text-sm mb-1">Material</label>
            <select 
              className="w-full p-2 border rounded"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="madera">Madera</option>
              <option value="concreto">Concreto</option>
              <option value="mixto">Mixto</option>
            </select>
          </div>
          
          <div className="mb-2">
            <label className="block text-sm mb-1">Pisos</label>
            <select 
              className="w-full p-2 border rounded"
              value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
            >
              <option value={1}>1 Piso</option>
              <option value={2}>2 Pisos</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-sm mb-1">Tipo de techo</label>
            <select 
              className="w-full p-2 border rounded"
              value={roofType}
              onChange={(e) => setRoofType(e.target.value)}
            >
              <option value="plano">Plano</option>
              <option value="dosAguas">A dos aguas</option>
              <option value="metalico">Metálico</option>
            </select>
          </div>
        </div>
        
        {/* Acciones */}
        <div className="mt-auto">
          <button 
            className="w-full p-2 mb-2 flex items-center justify-center bg-red-100 text-red-700 rounded hover:bg-red-200"
            onClick={clearPlan}
          >
            <Trash2 size={16} className="mr-1" />
            Limpiar plano
          </button>
          
          <button 
            className="w-full p-2 mb-2 flex items-center justify-center bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => setShowPreview(true)}
          >
            <Eye size={16} className="mr-1" />
            Vista previa
          </button>
          
          <button 
            className="w-full p-2 flex items-center justify-center bg-green-600 text-white rounded hover:bg-green-700"
          >
            <Save size={16} className="mr-1" />
            Guardar diseño
          </button>
        </div>
      </div>
      
      {/* Área principal */}
      <div className="flex-1 flex flex-col">
        {/* Barra de herramientas */}
        <div className="bg-white p-3 shadow-sm flex items-center min-h-[64px]">
          <h1 className="text-xl font-bold flex-1 text-blue-800">Diseñador de Casa Prefabricada</h1>
          
          <div className="flex space-x-2">
            {selectedId && (
              <>
                <button 
                  className="p-2 rounded bg-blue-100 text-blue-700"
                  onClick={decreaseRoomSize}
                >
                  <Minus size={20} />
                </button>
                <button 
                  className="p-2 rounded bg-blue-100 text-blue-700"
                  onClick={increaseRoomSize}
                >
                  <Plus size={20} />
                </button>
                <button 
                  className="p-2 rounded bg-blue-100 text-blue-700"
                  onClick={rotateSelected}
                >
                  <RotateCw size={20} />
                </button>
                <button 
                  className="p-2 rounded bg-red-100 text-red-700"
                  onClick={deleteSelected}
                >
                  <Trash2 size={20} />
                </button>
              </>
            )}
            <div className="flex items-center bg-gray-100 p-1 px-2 rounded text-gray-700">
              <LayoutGrid size={16} className="mr-1 text-gray" />
              <span className="text-sm text-gray">1 cuadro = 1 metro</span>
            </div>
          </div>
        </div>
        
        {/* Área de dibujo */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-50">
          <div className="bg-white border shadow-sm rounded-md p-2 mb-4">
            <Stage
              width={stageWidth}
              height={stageHeight}
              onClick={(e) => {
                if (e.target === e.target.getStage()) {
                  selectShape(null);
                }
              }}
            >
              <Layer>
                <GridComponent />
                {rooms.map(room => (
                  <Room
                    key={room.id}
                    room={room}
                    isSelected={room.id === selectedId}
                    onSelect={selectShape}
                    onChange={(newAttrs) => {
                      setRooms(
                        rooms.map((r) => {
                          return r.id === newAttrs.id ? newAttrs : r;
                        })
                      );
                    }}
                  />
                ))}
                <Transformer
                  ref={transformerRef}
                  boundBoxFunc={(oldBox, newBox) => {
                    // Ajustar a la cuadrícula
                    newBox.width = snapToGrid(newBox.width);
                    newBox.height = snapToGrid(newBox.height);
                    
                    // Tamaño mínimo: 1x1 metros
                    if (newBox.width < gridSize) {
                      newBox.width = gridSize;
                    }
                    if (newBox.height < gridSize) {
                      newBox.height = gridSize;
                    }
                    
                    return newBox;
                  }}
                  rotateEnabled={false}
                  keepRatio={false}
                />
              </Layer>
            </Stage>
          </div>
          
          {/* Formulario de contacto */}
          <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-bold mb-4">Enviar este plano a un asesor</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={formData.nombre}
                  onChange={(e) => handleInputChange('nombre', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Correo electrónico</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  value={formData.correo}
                  onChange={(e) => handleInputChange('correo', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">WhatsApp</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                />
              </div>
            </div>
            
            <button
              onClick={handleSubmit}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-bold flex items-center justify-center hover:bg-green-700 transition-all"
            >
              <Send size={20} className="mr-2" />
              Enviar este plano a un asesor
            </button>
          </div>
        </div>
      </div>
      
      {/* Vista previa modal */}
      {showPreview && <Preview />}
    </div>
  );
}