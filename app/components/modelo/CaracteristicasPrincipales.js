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
      }}
    >
      {infoItems.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            flex: "1",
            padding: "8px",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
          }}
        >
           <Image
            src={item.icon}
            alt={`${item.title} icon`}
            width={24}
            height={24}
            style={{ marginBottom: "8px" }}
          />
          <h3 style={{ fontSize: "16px", fontWeight: "500", color: "#1F2937", marginBottom: "4px" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: "14px", fontWeight: "400", color: "#6B7280" }}>{item.value}</p>
        </div>
      ))}
    </div>
  )
}