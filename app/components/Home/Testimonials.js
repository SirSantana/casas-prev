const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Cliente en Antioquia",
      image: "/people/cliente1.webp", // Reemplaza con la ruta de tus imágenes
      quote:
        "La experiencia fue increíble. Me contactaron rápido y me ofrecieron varias opciones. ¡Estoy feliz con mi nueva casa!",
    },
    {
      name: "Laura Rodríguez",
      role: "Compradora en Cundinamarca",
      image: "/people/cliente3.webp",
      quote:
        "Tenía muchas dudas, pero esta página me ayudó a encontrar una empresa seria y transparente. Recomendada 100%.",
    },
    {
      name: "Julián Torres",
      role: "Cliente en Boyacá",
      image: "/people/cliente2.webp",
      quote:
        "Fue muy fácil y rápido. Me encantó el diseño que me ofrecieron, y todo el proceso fue claro desde el principio.",
    },
  ];

export default function TestimonialsSection() {
    return (
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="testimonios">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Lo que dicen nuestros usuarios</h2>
            <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
              Testimonios reales de personas que encontraron su casa ideal con nuestra ayuda.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-50 p-6   hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={`Foto de ${testimonial.name}`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-500"
                  />
                  <div>
                    <p className="text-lg font-semibold text-terciary">{testimonial.name}</p>
                    <p className="text-sm text-gray">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray text-sm leading-relaxed">“{testimonial.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  