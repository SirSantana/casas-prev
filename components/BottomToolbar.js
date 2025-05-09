import { Home, User, Box, Square, Pencil, ArrowRight,  } from "lucide-react";

const BottomToolbar = () => {
    const tools = [
      { icon: <Home size={16} />, title: "Home" },
      { icon: <User size={16} />, title: "User" },
      { icon: <Box size={16} />, title: "3D" },
      { icon: <Square size={16} />, title: "Views" },
      { icon: <Pencil size={16} />, title: "Draw" },
      { icon: <ArrowRight size={16} />, title: "Text" }
    ];
  
    return (
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        display: 'flex',
        padding: '8px',
        gap: '8px',
        zIndex: 50
      }}>
        {tools.map((item, index) => (
          <button key={index} style={{
            backgroundColor: '#f5f5f5',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }} title={item.title}>
            {item.icon}
          </button>
        ))}
      </div>
    );
  };
export default BottomToolbar;  