import { Edit3, Fingerprint, Info, Move, Settings, Touchpad, Trash2 } from "lucide-react";

const SidebarComponent = ({ activeTool, setActiveTool, setDefaultThickness = 5, setWalls, setSelectedWallId, setShowProperties, setShowTooltip, showTooltip }) => {
  return (
    <div className="sidebar" style={{
      position: 'absolute',
      top: '10px',
      right: '10px',
      backgroundColor: 'white',
      borderRadius: '5px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      gap: '10px',
      zIndex: 100
    }}>
      <div
        className={`sidebar-button ${activeTool === 'pan' ? 'active' : ''}`}
        onClick={() => setActiveTool('pan')}
        style={{
          backgroundColor: activeTool === 'pan' ? '#e6f7ff' : 'white',
          padding: '10px',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}
      >
        <Move size={20} color={activeTool === 'pan' ? '#1890ff' : '#595959'} />
      </div>
      <button
        onClick={() => setActiveTool('wall')}
        style={{
          backgroundColor: activeTool === 'wall' ? '#1890ff' : '#f0f0f0',
          color: activeTool === 'wall' ? 'white' : 'black',
          border: 'none',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Draw Wall"
      >
        <Edit3 size={20} />
      </button>
      <button
        onClick={() => setActiveTool('select')}
        style={{
          backgroundColor: activeTool === 'select' ? '#1890ff' : '#f0f0f0',
          color: activeTool === 'select' ? 'white' : 'black',
          border: 'none',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Select"
      >
        <Move size={20} />
      </button>
      <button
        onClick={() => {
          setDefaultThickness(prevThickness => {
            const newThickness = prompt("Enter new default wall thickness (5-50):", prevThickness);
            return newThickness ? Math.min(Math.max(parseInt(newThickness), 5), 50) : prevThickness;
          });
        }}
        style={{
          backgroundColor: '#f0f0f0',
          border: 'none',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Settings"
      >
        <Settings size={20} />
      </button>
      <button
        onClick={() => setActiveTool(activeTool === 'touch-move' ? 'select' : 'touch-move')}
        style={{
          backgroundColor: activeTool === 'touch-move' ? '#1890ff' : '#f0f0f0',
          color: activeTool === 'touch-move' ? 'white' : 'black'
        }}
      >
        <Fingerprint size={20} />
      </button>
      <button
        onClick={() => {
          if (window.confirm("Are you sure you want to delete all walls?")) {
            setWalls([]);
            setSelectedWallId(null);
            setShowProperties(false);
          }
        }}
        style={{
          backgroundColor: '#f0f0f0',
          border: 'none',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Delete All"
      >
        <Trash2 size={20} />
      </button>
      <button
        onClick={() => setShowTooltip(prev => !prev)}
        style={{
          backgroundColor: showTooltip ? '#1890ff' : '#f0f0f0',
          color: showTooltip ? 'white' : 'black',
          border: 'none',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Toggle Help"
      >
        <Info size={20} />
      </button>
    </div>
  );
};

export default SidebarComponent;