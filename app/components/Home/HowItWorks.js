import { MessageCircle, Search, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: <Search className="text-accent w-8 h-8 mb-4" />,
    title: "1. Explora empresas verificadas",
    description:
      "Revisa nuestra lista de proveedores de casas prefabricadas en Colombia. Filtra por ubicación, precio o tipo de casa.",
  },
  {
    icon: <MessageCircle className="text-accent w-8 h-8 mb-4 " />,
    title: "2. Solicita una cotización",
    description:
      "Completa el formulario con lo que necesitas. Nosotros enviamos tu solicitud directamente a la empresa elegida.",
  },
  {
    icon: <ThumbsUp className="text-accent w-8 h-8 mb-4" />,
    title: "3. Te contactan por WhatsApp",
    description:
      "En poco tiempo recibirás una respuesta por WhatsApp con la información de tu proyecto, sin complicaciones.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#EBDFFF] py-16 px-4 sm:px-6 lg:px-8 " id="como-funciona">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3F274F]">¿Cómo funciona?</h2>
        <p className="mt-4 text-lg text-[#261B37] max-w-2xl mx-auto">
          Comprar una casa prefabricada nunca había sido tan fácil. Sigue estos simples pasos y empieza tu proyecto hoy.
        </p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
          {step.icon}
          <h3 className="text-xl font-semibold text-neutral-800 mb-2">{step.title}</h3>
          <p className="text-neutral-600">
          {step.description}
          </p>
        </div>
        ))}
      </div>
    </section>
  );
}
