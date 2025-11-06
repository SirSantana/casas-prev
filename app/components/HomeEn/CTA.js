import Button from "../Button/Button";

const CTAFinal = ({ openModal, setOpenModal }) => {
  return (
    <section className="bg-[#261B37] text-white py-16 px-6 text-center rounded-t-2xl">
      <div style={{display:'flex', alignContent:'center', flexDirection:'column'}} className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold">Encuentra la Casa Prefabricada Perfecta</h2>
        <p className="text-lg text-gray-300 mt-4">
          Compara opciones, solicita cotizaciones y haz realidad el sueño de tu nueva casa de manera rápida y sencilla.
        </p>
        <Button
          variant='secondary'
          onClick={() => setOpenModal(true)}
          type="submit"
          style={{ margin: 0, alignSelf: 'center', marginTop: '1.5rem' }}
        >
          Solicitar Cotización
        </Button>
      </div>
    </section>
  );
};

export default CTAFinal;
