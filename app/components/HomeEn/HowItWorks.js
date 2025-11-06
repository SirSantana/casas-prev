"use client";
import { useState } from "react";
import { MessageCircle, Search, ThumbsUp, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Browse Verified Builders",
    description:
      "Explore trusted modular and prefab home companies across the United States. Filter by state, style, or price range.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Request a Quote",
    description:
      "Tell us what you're looking for and we'll connect you with builders that match your project and location.",
  },
  {
    icon: ThumbsUp,
    number: "03",
    title: "Get Contacted Directly",
    description:
      "A builder will reach out with pricing, floor plans, and next steps. No obligations, no pressure.",
  },
];

export default function HowItWorksSectionEn() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-secondary/20 to-white py-20 md:py-32 px-4 sm:px-6 lg:px-8" id="how-it-works">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white mb-6 text-sm font-medium">
            Simple Process
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 tracking-tight">
            How It Works
          </h2>
          
          <p className="text-lg sm:text-xl text-gray max-w-2xl mx-auto leading-relaxed">
            Finding the right modular home builder is easier than ever. Follow these simple steps to start your project.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 relative">
          {/* Connection lines - Desktop only */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-secondary z-0">
            <div className="absolute top-1/2 left-1/3 w-2 h-2 rounded-full bg-accent transform -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-2/3 w-2 h-2 rounded-full bg-accent transform -translate-y-1/2"></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`
                  bg-white rounded-2xl border border-secondary p-8 h-full
                  transition-all duration-300 ease-out
                  ${isHovered ? 'shadow-xl border-accent transform -translate-y-2' : 'shadow-sm'}
                `}>
                  {/* Number Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300
                      ${isHovered ? 'bg-primary' : 'bg-secondary'}
                    `}>
                      <Icon className={`w-7 h-7 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-primary'}`} />
                    </div>
                    
                    <span className={`
                      text-4xl font-bold transition-colors duration-300
                      ${isHovered ? 'text-accent' : 'text-secondary'}
                    `}>
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Learn More Link */}
                  <button className={`
                    flex items-center gap-2 text-sm font-medium transition-colors duration-300
                    ${isHovered ? 'text-terciary' : 'text-primary'}
                  `}>
                    Learn more
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-terciary transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="bg-white text-primary px-8 py-4 rounded-xl font-medium hover:bg-secondary/50 transition-all duration-300 border border-secondary flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Contact Support
            </button>
          </div>
          
          <p className="mt-6 text-sm text-gray">
            Questions? We're here to help you every step of the way
          </p>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 pt-12 border-t border-secondary">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-primary">24/7</p>
              <p className="text-sm text-gray">Support Available</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-primary">500+</p>
              <p className="text-sm text-gray">Verified Builders</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-primary">50K+</p>
              <p className="text-sm text-gray">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-primary">100%</p>
              <p className="text-sm text-gray">Free Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}