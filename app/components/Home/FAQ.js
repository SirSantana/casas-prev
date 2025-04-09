'use client';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/app/page";
const FAQSection = () => {
  

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center">Preguntas Frecuentes</h2>
      <p className="text-lg text-gray-600 text-center mt-3">Resolvemos las dudas más comunes sobre casas prefabricadas</p>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4 cursor-pointer">
            <div className="flex justify-between items-center py-4" onClick={() => toggleFAQ(index)} aria-expanded={openIndex === index}>
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className={`${openIndex === index ? 'block' : 'hidden'} text-gray-600 mt-2`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
