const CTAFinal = () => {
    return (
      <section className="bg-[#261B37] text-white py-16 px-6 text-center rounded-t-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">Encuentra la Casa Prefabricada Perfecta</h2>
          <p className="text-lg text-gray-300 mt-4">
            Compara opciones, solicita cotizaciones y haz realidad el sueño de tu nueva casa de manera rápida y sencilla.
          </p>
          <div className="mt-6">
            <a
              href="/cotizar"
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-lg shadow-md transition-all duration-300"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTAFinal;
  