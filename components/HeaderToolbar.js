import { AlignJustify, ArrowRight, ChevronRight, Download, Maximize, MessageSquare, Monitor, Share2, Zap } from "lucide-react";

const HeaderToolbar = () => {
    return (
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '290px',
        right: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        zIndex: 50
      }}>
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          <button style={{
            backgroundColor: '#f04', 
            color: 'white',
            border: 'none',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}>
            <Zap size={16} color="white" />
          </button>
          <div style={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: '4px',
            padding: '2px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <ArrowRight size={16} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <AlignJustify size={16} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Monitor size={16} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <Maximize size={16} />
            </button>
            <button style={{
              backgroundColor: 'transparent',
              border: 'none',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}>
              <MessageSquare size={16} />
            </button>
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'white',
          borderRadius: '4px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          padding: '5px 15px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>Draft</span>
          <span>/</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>My new workspace</span>
            <ChevronRight style={{ transform: 'rotate(90deg)' }} size={16} />
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#ddd',
            overflow: 'hidden'
          }}>
            <img src="/api/placeholder/32/32" alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          </div>
          <button style={{
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <Download size={16} />
            Export
          </button>
          <button style={{
            backgroundColor: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <Share2 size={16} color="white" />
            Share
          </button>
        </div>
      </div>
    );
  };

  export default HeaderToolbar;