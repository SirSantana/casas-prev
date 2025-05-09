const ZoomControls = ({scale, setScale, setPosition}) => {
    return (
      <div style={{
        position: 'absolute',
        bottom: '14%',
        right: '20px',
        backgroundColor: 'white',
        borderRadius: '4px',
        padding: '5px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        zIndex: 1000
      }}>
        <button 
          onClick={() => {
            const newScale = Math.max(0.1, scale - 0.1);
            setScale(newScale);
          }}
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '20px'
          }}
        >
          -
        </button>
        <span style={{ fontSize: '12px' }}>{Math.round(scale * 100)}%</span>
        <button 
          onClick={() => {
            const newScale = Math.min(5, scale + 0.1);
            setScale(newScale);
          }}
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '20px'
          }}
        >
          +
        </button>
        <button 
          onClick={() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          }}
          style={{
            border: 'none',
            background: '#f0f0f0',
            padding: '2px 6px',
            borderRadius: '3px',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    );
  };

export default ZoomControls;