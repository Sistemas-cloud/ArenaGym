'use client';

import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Configurar el video para reproducción automática
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';

    // Intentar reproducir automáticamente
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        // Si falla el autoplay, el video se mostrará pero no se reproducirá
        // El usuario puede hacer clic para reproducir
      }
    };

    // Reproducir cuando el video esté listo
    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('canplay', playVideo, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('acerca-de');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Main Content */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4">
            <span className="text-white drop-shadow-2xl">ARENA</span>
          </h1>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 drop-shadow-2xl">
              GYM
            </span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-red-400 tracking-wider drop-shadow-lg">
            FIRMES Y DIGNOS
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed drop-shadow-lg">
            Un espacio privado en Tampico diseñado para quienes buscan entrenar de forma seria, 
            enfocada y sin distracciones. Transforma tu cuerpo y mente con nuestro enfoque personalizado.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button 
            onClick={scrollToNext}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            COMIENZA AHORA
          </button>
          <button 
            onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            VER PLANES →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">500+</div>
            <div className="text-red-400 text-lg tracking-wide">Miembros Activos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">5★</div>
            <div className="text-red-400 text-lg tracking-wide">Calificación</div>
          </div>
          <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
            <div className="text-red-400 text-lg tracking-wide">Acceso</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10"
        onClick={scrollToNext}
      >
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-full p-3 hover:bg-opacity-50 transition-all duration-300">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;