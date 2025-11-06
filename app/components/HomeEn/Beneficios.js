"use client";
import { useState } from "react";
import { Zap, DollarSign, Leaf, Home, ArrowRight, CheckCircle } from "lucide-react";

const BenefitsSectionEn = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const benefits = [
    {
      icon: Zap,
      emoji: "⚡",
      title: "Fast Construction",
      description: "Modular construction reduces building time by up to 60% compared to traditional homes.",
      stat: "60%",
      statLabel: "Faster Build",
      color: "from-accent to-primary"
    },
    {
      icon: DollarSign,
      emoji: "💲",
      title: "Cost-Effective",
      description: "Lower labor and material costs make modular homes more affordable, without sacrificing quality.",
      stat: "30%",
      statLabel: "Cost Savings",
      color: "from-primary to-terciary"
    },
    {
      icon: Leaf,
      emoji: "🌿",
      title: "Energy Efficient",
      description: "Built with modern insulation and eco-friendly materials to reduce energy bills and environmental impact.",
      stat: "40%",
      statLabel: "Energy Savings",
      color: "from-terciary to-accent"
    },
    {
      icon: Home,
      emoji: "🏡",
      title: "Fully Customizable",
      description: "Choose the layout, finishes, and features that fit your lifestyle — from minimalist to luxury.",
      stat: "100%",
      statLabel: "Your Vision",
      color: "from-accent to-primary"
    },
  ];

  return (
    <section className="relative bg-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white mb-6 text-sm font-medium">
            Why Modular Homes?
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 tracking-tight">
            Built Better, Faster, Smarter
          </h2>
          
          <p className="text-lg sm:text-xl text-gray max-w-2xl mx-auto leading-relaxed">
            Discover the key advantages that make modular homes a smart choice in the United States
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`
                  relative bg-white rounded-2xl border border-secondary p-6 h-full
                  transition-all duration-500 ease-out
                  ${isHovered ? 'shadow-xl border-accent transform -translate-y-2' : 'shadow-sm'}
                `}>
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                      transition-all duration-500
                      ${isHovered ? `bg-gradient-to-br ${benefit.color}` : 'bg-secondary'}
                    `}>
                      <Icon className={`w-7 h-7 transition-colors duration-500 ${isHovered ? 'text-white' : 'text-primary'}`} />
                    </div>
                    
                    {/* Stat Badge */}
                    <div className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                      transition-all duration-500
                      ${isHovered ? 'bg-primary text-white' : 'bg-secondary text-primary'}
                    `}>
                      {benefit.stat} {benefit.statLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-primary mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>

                  {/* Learn More Link */}
                  <button className={`
                    flex items-center gap-2 text-sm font-medium mt-auto
                    transition-all duration-300
                    ${isHovered ? 'text-terciary' : 'text-primary opacity-0'}
                  `}>
                    Learn more
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                  </button>

                  {/* Decorative corner */}
                  <div className={`
                    absolute top-0 right-0 w-20 h-20 rounded-bl-full
                    transition-opacity duration-500
                    ${isHovered ? `bg-gradient-to-br ${benefit.color} opacity-10` : 'opacity-0'}
                  `}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div className="bg-gradient-to-br from-primary to-terciary rounded-3xl p-8 md:p-10 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Quality You Can Trust
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed">
              Every modular home is built in a controlled factory environment with strict quality standards and inspections at every stage.
            </p>
            <div className="space-y-3">
              {['Factory Quality Control', 'Weather-Independent Building', 'Certified Inspections'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-secondary rounded-3xl p-8 md:p-10 border border-accent">
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Sustainable Building
            </h3>
            <p className="text-gray mb-6 leading-relaxed">
              Modular construction generates less waste, uses materials more efficiently, and creates homes with superior energy performance.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-secondary">
                <p className="text-3xl font-bold text-primary mb-1">90%</p>
                <p className="text-sm text-gray">Less Waste</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-secondary">
                <p className="text-3xl font-bold text-primary mb-1">50%</p>
                <p className="text-sm text-gray">Fewer Emissions</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="group bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-terciary transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center gap-2">
            Explore Modular Homes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-4 text-sm text-gray">
            Start your journey to a better home today
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSectionEn