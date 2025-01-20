import Image from "next/image";



export default function CaracteristicasPrincipales({ habitaciones, baños, tamaño }) {
  const infoItems = [
    { title: "Habitaciones", value: habitaciones,icon: "/bed.svg" },
    { title: "Baños", value: baños, icon: "/bath.svg"},
    { title: "Tamaño", value: tamaño,icon: "/ruler.svg" },

  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        borderRadius: "12px",
        width:'90%',
        margin:'0 auto'
      }}
    >
      {infoItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            padding: "8px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)"
          }}
        >
           <img
            src={item.icon}
            alt={`${item.title} icon`}
            style={{ marginBottom: "8px",  height:'24px', width:'24px' }}
          />
          <h3 style={{ fontSize: "16px", fontWeight: "400", color: "#6b7280", marginBottom: "4px" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "20px", fontWeight: "400", color: "#1F2937" }}>{item.value} {item.title === 'Tamaño'?'m²':''}</p>
        </div>
      ))}
    </div>
  )
}