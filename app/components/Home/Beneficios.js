const BenefitsSection = () => {
    const benefits = [
      {
        icon: "🚀",
        title: "Construcción Rápida",
        description: "Reduce los tiempos de construcción hasta un 60% en comparación con una casa tradicional.",
      },
      {
        icon: "💰",
        title: "Más Económicas",
        description: "Menos costos en materiales y mano de obra, lo que las hace más accesibles.",
      },
      {
        icon: "🌱",
        title: "Ecológicas y Sostenibles",
        description: "Utilizan materiales reciclables y generan menos desperdicio en la construcción.",
      },
      {
        icon: "🎨",
        title: "Diseño Personalizable",
        description: "Elige materiales, acabados y distribución según tu estilo de vida.",
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-primary text-center">¿Por qué elegir una casa prefabricada?</h2>
        <p className="text-lg text-gray text-center mt-3">Descubre sus principales beneficios</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="text-5xl">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mt-4 text-terciary">{benefit.title}</h3>
              <p className="text-gray mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default BenefitsSection;
  