'use client'
import React, { useState } from 'react';
import { Settings, Droplets, Battery, Wind, X } from 'lucide-react';

export default function EngineScanUI() {
  const [showPopup, setShowPopup] = useState(true);

  const menuItems = [
    { icon: Settings, label: 'Engine Oil', color: 'bg-gray-100' },
    { icon: Droplets, label: 'Radiator Fluid', color: 'bg-blue-600', highlight: true },
    { icon: Battery, label: 'Battery', color: 'bg-gray-100' },
    { icon: Wind, label: 'Washer Fluid', color: 'bg-gray-100' }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-100 to-blue-50 overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-white text-lg font-semibold">Scan Your Engine</h1>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Engine Image Background */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* OPCIÓN 1: Imagen de fondo completa */}
          <img 
            src="/turboimg.png" 
            alt="Engine" 
            className="w-full h-full object-cover"
          />
          
        
          
          {/* Overlay gradient para mejor contraste */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white" />
          
          {/* Scan Frame */}
          <div className="absolute top-32 left-16 w-48 h-48 border-4 border-white rounded-2xl shadow-lg">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-lg" />
          </div>
        </div>
      </div>

      {/* Top Right Popup */}
      {showPopup && (
        <div className="absolute top-24 right-4 z-30 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-xs">
            <div className="flex-1">
              <p className="text-gray-900 font-medium text-sm">Take a look</p>
            </div>
            <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              onClick={() => setShowPopup(false)}
              className="w-8 h-8 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom Menu Card */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="mx-4 mb-6 bg-white rounded-3xl shadow-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-gray-900 font-semibold text-lg">What are you looking for?</h2>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  className={`${item.color} ${
                    item.highlight ? 'text-white' : 'text-gray-700'
                  } rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform shadow-lg ${
                    item.highlight ? 'col-span-1 row-span-1' : ''
                  }`}
                >
                  <Icon className={`w-8 h-8 ${item.highlight ? 'text-white' : 'text-gray-600'}`} />
                  <span className={`text-sm font-medium ${item.highlight ? 'text-white' : 'text-gray-700'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-md" />
    </div>
  );
}