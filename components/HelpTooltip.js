const { X } = require("lucide-react");

const HelpTooltip = ({ showTooltip, setShowTooltip }) => {
  if (!showTooltip) return null;

  return (
    <div style={{
      position: 'absolute',
      bottom: '20px',
      left: '20px',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '15px',
      borderRadius: '5px',
      maxWidth: '400px',
      zIndex: 100
    }}>
      <h4 style={{ margin: '0 0 10px 0' }}>Quick Help</h4>
      <ul style={{ margin: '0', paddingLeft: '20px' }}>
        <li>Click on grid intersections to start drawing a wall</li>
        <li>Walls will snap to grid lines and other walls</li>
        <li>Select a wall to move, resize, or modify its properties</li>
        <li>Use the sidebar tools to switch between drawing and selecting</li>
      </ul>
      <button
        onClick={() => setShowTooltip(false)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default HelpTooltip;