const { Plus, ChevronRight, X, Search, Square } = require("lucide-react");

const FurniturePalette = () => {
    const furnitureItems = [
      { name: 'Bed', dimensions: '140 x 200cm' },
      { name: 'Door', dimensions: '90 x 210cm' },
      { name: 'Carpet', dimensions: '200 x 300cm' },
      { name: 'Office Chair', dimensions: '60 x 60cm' },
      { name: 'Wing Chair', dimensions: '80 x 90cm' },
      { name: 'Table', dimensions: '120 x 80cm' }
    ];
  
    return (
      <div className="furniture-palette" style={{
        position: 'absolute',
        top: '0',
        left: '0',
        backgroundColor: 'white',
        width: '280px',
        height: '100%',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '15px', 
          borderBottom: '1px solid #e8e8e8' 
        }}>
          <span style={{ marginRight: '8px' }}>Library</span>
          <ChevronRight size={16} />
          <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>Bedroom</span>
          <button 
            style={{ 
              marginLeft: 'auto', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer' 
            }}
            onClick={() => console.log("Close library")}
          >
            <X size={18} />
          </button>
        </div>
        <div style={{ padding: '15px' }}>
          <div style={{ 
            border: '1px solid #e8e8e8', 
            borderRadius: '4px', 
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Search size={16} />
            <input 
              type="text" 
              placeholder="Search item" 
              style={{ 
                border: 'none', 
                outline: 'none',
                width: '100%',
                marginLeft: '8px'
              }} 
            />
          </div>
        </div>
        
        {/* Furniture items */}
        <div style={{ 
          flex: 1, 
          overflowY: 'auto', 
          padding: '0 15px' 
        }}>
          {furnitureItems.map((item, index) => (
            <div key={index} style={{ 
              display: 'flex', 
              padding: '15px 0',
              borderBottom: '1px solid #f0f0f0',
              alignItems: 'center'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                border: '1px solid #e8e8e8',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                {/* Icon based on item type */}
                {item.name === 'Bed' && <Square size={24} stroke="#999" strokeWidth={1.5} />}
                {item.name === 'Door' && <Square size={24} stroke="#999" strokeWidth={1.5} />}
                {item.name === 'Carpet' && <Square size={24} stroke="#999" strokeWidth={1.5} />}
                {item.name === 'Office Chair' && <Square size={24} stroke="#999" strokeWidth={1.5} />}
                {item.name === 'Wing Chair' && <Square size={24} stroke="#999" strokeWidth={1.5} />}
                {item.name === 'Table' && <Square size={24} stroke="#999" strokeWidth={1.5} />}
              </div>
              <div style={{ marginLeft: '15px' }}>
                <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                <div style={{ fontSize: '12px', color: '#999' }}>{item.dimensions}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom buttons */}
        <div style={{ 
          padding: '15px', 
          borderTop: '1px solid #e8e8e8',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <button style={{ 
            width: '100%', 
            padding: '8px', 
            backgroundColor: '#f5f5f5',
            border: '1px solid #e8e8e8',
            borderRadius: '4px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}>
            <Plus size={16} /> New items
          </button>
        </div>
      </div>
    );
  };
  
  export default FurniturePalette;