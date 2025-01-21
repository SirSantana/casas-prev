'use client'
import { usePathname} from "next/navigation";



export default function ButtonFooterFixed() {
  const pathname = usePathname();
  
  const sendWhatsappMessage = ({ numero, path = null, text }) => {
    let url = `https://api.whatsapp.com/send?phone=573112248158`;
    url += `&text=${encodeURI(text ? text : `Buen dia, estoy interesado en una casa prefabricada de este estilo https://casas-prev.vercel.app${pathname}`)}&app_absent=0`
    window.open(url);
  }
  return (
    <div
      style={{
        position: "fixed",
        bottom: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        border: "1px solid #f1f1f1",
        borderRadius: "32px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "90%",
        maxWidth: "600px",
        padding: "12px",
        zIndex: 1000,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", marginLeft: "12px" }}>
        <p style={{ margin: 0, fontSize: "14px", color: "#6b7280" }}>Desde</p>
        <h3 style={{ margin: 0, fontSize: "18px", color: "#111827" }}>
          $275.000 m²
        </h3>
      </div>
      <button
      onClick={sendWhatsappMessage}
        className="bg-blue-500 hover:bg-blue-600 font-medium text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out"
        style={{ flexShrink: 0, borderRadius:'32px',}}
      >
        Estoy interesado
      </button>
    </div>
  )
}