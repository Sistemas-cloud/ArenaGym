'use client';

import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Intentar reproducir el video automáticamente cuando esté cargado
    const playVideo = async () => {
      if (videoRef.current && videoLoaded) {
        try {
          await videoRef.current.play();
          setIsVideoPlaying(true);
          console.log('Video iniciado automáticamente');
        } catch (error) {
          console.log('Autoplay bloqueado, se requiere interacción del usuario');
          setIsVideoPlaying(false);
        }
      }
    };

    if (videoLoaded) {
      playVideo();
    }
  }, [videoLoaded]);

  const toggleVideo = async () => {
    if (videoRef.current) {
      try {
        if (isVideoPlaying) {
          videoRef.current.pause();
          setIsVideoPlaying(false);
        } else {
          await videoRef.current.play();
          setIsVideoPlaying(true);
        }
      } catch (error) {
        console.error('Error al reproducir video:', error);
      }
    }
  };

  const startVideo = async () => {
    if (videoRef.current && videoLoaded) {
      try {
        await videoRef.current.play();
        setIsVideoPlaying(true);
      } catch (error) {
        console.error('Error al iniciar video:', error);
      }
    }
  };

  const handleVideoLoad = () => {
    console.log('Video loaded successfully');
    setVideoLoaded(true);
    
    // Intentar reproducir inmediatamente cuando esté listo
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        console.log('Video started playing');
        setIsVideoPlaying(true);
      }).catch((error) => {
        console.log('Autoplay prevented:', error);
        setIsVideoPlaying(false);
      });
    }
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video failed to load:', e);
    setVideoLoaded(false);
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background - CON BORDE ROJO PARA DEBUG */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          onError={handleVideoError}
          onLoadStart={() => console.log('Video loading started')}
          onPlay={() => {
            console.log('Video is now playing');
            setIsVideoPlaying(true);
          }}
          onPause={() => {
            console.log('Video is now paused');
            setIsVideoPlaying(false);
          }}
          style={{ 
            zIndex: 1, 
            opacity: 1,
            border: '5px solid red',
            backgroundColor: 'transparent'
          }}
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>
        
        {/* Test Background Color - AZUL PARA VER SI SE VE */}
        <div className="absolute inset-0 bg-blue-500 bg-opacity-30" style={{ zIndex: 0 }} />
      </div>
      
      {/* Loading Indicator */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50" style={{ zIndex: 10 }}>
          <div className="text-center text-white">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p>Cargando video...</p>
          </div>
        </div>
      )}
      
      {/* Debug Info */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white px-3 py-2 rounded text-xs" style={{ zIndex: 25 }}>
        <p>Video cargado: {videoLoaded ? '✅' : '❌'}</p>
        <p>Video reproduciendo: {isVideoPlaying ? '▶️' : '⏸️'}</p>
        <p>Z-Index video: 1</p>
        <p>Opacity: 100%</p>
        <p>Borde rojo visible: ✅</p>
        <p>Fondo azul visible: ✅</p>
      </div>
      
      {/* Mini Video Preview para debug */}
      {videoLoaded && (
        <div className="absolute top-4 right-4 w-32 h-20 border-2 border-red-500" style={{ zIndex: 25 }}>
          <video
            src="/videos/banner.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-red-500 text-white text-xs px-1">
            Video Test
          </div>
        </div>
      )}
      
      {/* Play Button Overlay - Solo si el video no se está reproduciendo */}
      {videoLoaded && !isVideoPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30" style={{ zIndex: 10 }}>
          <button
            onClick={startVideo}
            className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl"
          >
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      )}
      
      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40" style={{ zIndex: 2 }} />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" style={{ zIndex: 3 }} />

      {/* Background Pattern (as fallback) */}
      <div className="absolute inset-0 opacity-5" style={{ zIndex: 4 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0" style={{ zIndex: 4 }}>
        <div className="absolute top-20 left-10 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" style={{ zIndex: 20 }}>
        {/* Main Title */}
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-4 drop-shadow-2xl">
            <span className="text-white drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              ARENA
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
              GYM
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={`transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-6 tracking-widest drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            FIRMES Y DIGNOS
          </p>
        </div>

        {/* Description */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-white mb-0 leading-relaxed font-medium drop-shadow-lg">
              Un espacio privado en Tampico diseñado para quienes buscan entrenar de forma seria, 
              enfocada y sin distracciones. Transforma tu cuerpo y mente con nuestro enfoque personalizado.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className={`transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">COMIENZA AHORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                VER PLANES
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-red-400 font-medium">Miembros Activos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">5★</div>
              <div className="text-red-400 font-medium">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-red-400 font-medium">Acceso</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Control Button */}
      {videoLoaded && (
        <button
          onClick={toggleVideo}
          className="absolute top-8 right-8 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          style={{ zIndex: 30 }}
          aria-label={isVideoPlaying ? 'Pausar video' : 'Reproducir video'}
        >
        {isVideoPlaying ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
        </button>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 20 }}>
        <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-full p-2">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
