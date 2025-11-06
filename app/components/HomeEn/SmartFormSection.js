"use client";
import { useState } from "react";
import { FileText, Zap, ShieldCheck, ArrowRight, CheckCircle, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function SmartFormSectionEn() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Tell Us Your Vision",
      description: "Share details about your modular home: number of rooms, style, square footage, and location."
    },
    {
      icon: Zap,
      number: "02",
      title: "We Match You With Builders",
      description: "We connect you with reputable modular home companies that fit your needs and budget."
    },
    {
      icon: ShieldCheck,
      number: "03",
      title: "Compare Quotes",
      description: "Builders will contact you directly with personalized pricing and construction options."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-terciary to-primary py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" id="smart-quote">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl"></div>
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6 text-sm font-medium border border-white/20">
            Free Consultation
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Get Your Smart Quote
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and receive personalized estimates from trusted modular home builders
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* FORM (LEFT SIDE) */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 border border-secondary">
            <h3 className="text-2xl font-semibold text-primary mb-2">Request Your Quote</h3>
            <p className="text-gray text-sm mb-8">Fill out the form below and we'll connect you with the best builders</p>

            <div className="space-y-5">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Full Name</label>
                <div className="relative">
                  <User className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'name' ? 'text-terciary' : 'text-gray'}`} />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-primary"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'phone' ? 'text-terciary' : 'text-gray'}`} />
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-primary"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Email Address</label>
                <div className="relative">
                  <Mail className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors ${focusedField === 'email' ? 'text-terciary' : 'text-gray'}`} />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-primary"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Project Details</label>
                <div className="relative">
                  <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors ${focusedField === 'message' ? 'text-terciary' : 'text-gray'}`} />
                  <textarea
                    rows={4}
                    placeholder="Describe your project (location, size, bedrooms, style, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-3 border border-secondary rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all text-primary resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="group w-full bg-primary text-white font-medium py-4 rounded-xl hover:bg-terciary transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Request Free Quotes
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-gray text-center mt-4">
                🔒 Your information is secure and will only be shared with verified builders
              </p>
            </div>
          </div>

          {/* STEPS (RIGHT SIDE) */}
          <div className="space-y-6">
            {/* Header */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-2">How It Works</h3>
              <p className="text-white/70 text-sm">Three simple steps to your dream home</p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon & Number */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-3xl font-bold text-white/30">{step.number}</span>
                          <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Badges */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">100% Free Service</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">Verified Builders Only</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-white/90 text-sm">No Obligation to Buy</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-12 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white mb-2">24h</p>
              <p className="text-sm text-white/70">Average Response Time</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white mb-2">500+</p>
              <p className="text-sm text-white/70">Trusted Builders</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white mb-2">50K+</p>
              <p className="text-sm text-white/70">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-semibold text-white mb-2">4.9</p>
              <p className="text-sm text-white/70">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}