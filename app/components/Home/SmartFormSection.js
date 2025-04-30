import { FileText, Zap, ShieldCheck } from "lucide-react";

export default function SmartFormSection() {
  return (
    <section className="bg-primary rounded-2xl py-20 px-4 sm:px-6 lg:px-8 mb-16" id="cotizacion-inteligente">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Solicita tu cotización inteligente
          </h2>
          <p className="mt-4 text-lg text-white-700 max-w-2xl mx-auto">
            Completa el formulario y deja que las mejores empresas se pongan en contacto contigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* FORMULARIO (lado izquierdo) */}
          <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-semibold text-neutral-800 mb-4">Formulario cotizacion</h3>
            {/* <p className="text-sm text-neutral-600 mb-6">*Formulario interactivo próximamente</p> */}

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="tel"
                placeholder="Numero de Whatsapp"
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <textarea
                rows={4}
                placeholder="Describe tu proyecto..."
                className="w-full border border-neutral-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white font-medium py-2 rounded-lg hover:bg-primary-700 transition"
              >
                Enviar solicitud por WhatsApp
              </button>
            </form>
          </div>

          {/* PASOS (lado derecho) */}
          <div className="space-y-10 relative">
            <div className="flex items-start gap-4">
              <div className="text-secondary-600">
                <FileText className="w-6 h-6 mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">Paso 1: Describe tu idea</h4>
                <p className="text-white text-sm">
                  Cuéntanos cómo imaginas tu casa, el número de habitaciones, el estilo, ubicación, etc.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary-600">
                <Zap className="w-6 h-6 mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">Paso 2: Enviamos tu solicitud</h4>
                <p className="text-white text-sm">
                  Tu información llega directamente a empresas confiables que se ajustan a lo que necesitas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary-600">
                <ShieldCheck className="w-6 h-6 mt-1" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-secondary">Paso 3: Recibe propuestas</h4>
                <p className="text-white text-sm">
                  Las empresas te contactarán directamente por WhatsApp con cotizaciones personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
