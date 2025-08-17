'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900 z-50 flex items-center justify-center transition-opacity duration-500 ${
      progress >= 100 ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500 rounded-full opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        {/* Logo Container */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            {/* Rotating border */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-red-400 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-red-600 border-l-red-300 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
            
            {/* Logo */}
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <Image
                src="/images/logo_def.png"
                alt="Arena Gym Logo"
                width={80}
                height={80}
                className="object-contain animate-pulse"
                priority
              />
            </div>
          </div>

          {/* Pulsing ring effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-40 h-40 border border-red-500 rounded-full animate-ping opacity-20"></div>
            <div className="w-48 h-48 border border-red-400 rounded-full animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>

        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              ARENA GYM
            </span>
          </h1>
          <p className="text-red-400 text-lg font-medium tracking-widest animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            FIRMES Y DIGNOS
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto mb-6">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-red-700 rounded-full transition-all duration-300 ease-out shadow-lg"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="h-full bg-gradient-to-r from-red-400 to-red-600 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-gray-400 text-sm">Cargando...</span>
            <span className="text-white font-bold text-sm">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Loading Messages */}
        <div className="text-gray-300 text-sm animate-pulse">
          {progress < 25 && "Preparando tu experiencia fitness..."}
          {progress >= 25 && progress < 50 && "Cargando productos exclusivos..."}
          {progress >= 50 && progress < 75 && "Optimizando rendimiento..."}
          {progress >= 75 && progress < 100 && "Casi listo para entrenar..."}
          {progress >= 100 && "¡Bienvenido a Arena Gym!"}
        </div>

        {/* Floating elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-red-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-red-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-red-600 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 right-10 w-2 h-2 bg-red-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
