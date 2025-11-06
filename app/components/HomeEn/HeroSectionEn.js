"use client";
import { useState, useEffect } from "react";
import { Search, ArrowRight, Play, Star, CheckCircle, Sparkles } from "lucide-react";

const HeroSectionEn = () => {
  const [query, setQuery] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // router.push(`/search?query=${query}`);
      console.log("Searching for:", query);
    }
  };

  const features = [
    {
      icon: "🏡",
      title: "Custom Designs",
      description: "Personalize every detail"
    },
    {
      icon: "⚡",
      title: "Fast Build",
      description: "60% faster construction"
    },
    {
      icon: "🌿",
      title: "Eco-Friendly",
      description: "Sustainable materials"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-secondary/20 via-white to-white overflow-hidden flex items-center">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-accent blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary text-white mb-6 text-sm font-medium shadow-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              New 2025 Models Available
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-tight mb-6 tracking-tight">
              Build Your
              <br />
              <span className="text-terciary">Dream Home</span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Connect with certified modular home builders across the United States. Explore floor plans, pricing, and customization options.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="group bg-primary text-white px-8 py-4 rounded-xl font-medium hover:bg-terciary transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-md">
                Explore Homes
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-secondary/50 text-primary px-8 py-4 rounded-xl font-medium hover:bg-secondary transition-all duration-300 flex items-center justify-center border border-secondary">
                <Play className="mr-2 w-5 h-5" />
                Watch Tour
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-4 rounded-xl bg-white border border-secondary hover:border-accent transition-all duration-300 hover:shadow-sm"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <h3 className="text-sm font-semibold text-primary mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-primary rounded-3xl opacity-20 blur-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="/ck40-1.jpg"
                  alt="Modern modular home"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Virtual Tour Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-white text-primary px-6 py-3 rounded-xl font-medium flex items-center gap-2 shadow-lg hover:bg-secondary transition-colors">
                    <Play className="w-5 h-5" />
                    Virtual 360° Tour
                  </button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold text-primary">4.9</span>
                  <span className="text-sm text-gray">Rating</span>
                </div>
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-secondary">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Fully Customizable</p>
                    <p className="text-xs text-gray">Every detail matters</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-primary text-white rounded-2xl shadow-xl p-4 max-w-[180px]">
                <p className="text-2xl font-bold mb-1">500K+</p>
                <p className="text-sm opacity-90">Homes Built</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={`mt-20 pt-12 border-t border-secondary transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-semibold text-primary mb-2">500K+</p>
              <p className="text-sm text-gray">Homes Built</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary mb-2">50+</p>
              <p className="text-sm text-gray">Builders</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary mb-2">4.9</p>
              <p className="text-sm text-gray">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-primary mb-2">60%</p>
              <p className="text-sm text-gray">Faster Build</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSectionEn;