import { Trash2 } from "lucide-react";

const WallPropertiesPanel = ({ selectedWallId, walls, showProperties, setShowProperties, showSidebar, updateWallThickness, setWalls, setSelectedWallId }) => {
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
          <h3 style={{ margin: '0' }}>Wall Properties</h3>
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
          />
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

  export default WallPropertiesPanel;