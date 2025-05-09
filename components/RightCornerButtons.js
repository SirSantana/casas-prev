import { ArrowRightLeft, Settings2 } from "lucide-react";

const RightCornerButtons = () => {
    return (
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        display: 'flex',
        gap: '8px',
        zIndex: 50
      }}>
        <button style={{
          backgroundColor: 'white',
          border: '1px solid #6366f1',
          borderRadius: '4px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <ArrowRightLeft size={20} color="#6366f1" />
        </button>
        <button style={{
          backgroundColor: 'white',
          border: '1px solid #ddd',
          borderRadius: '4px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}>
          <Settings2 size={20} />
        </button>
      </div>
    );
  };

  export default RightCornerButtons;