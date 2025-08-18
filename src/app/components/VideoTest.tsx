'use client';

import { useRef, useEffect, useState } from 'react';

const VideoTest = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoState, setVideoState] = useState({
    loaded: false,
    playing: false,
    error: false,
    errorMessage: ''
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadStart = () => {
      console.log('🔄 Video load started');
      setVideoState(prev => ({ ...prev, loaded: false, error: false }));
    };

    const handleLoadedData = () => {
      console.log('✅ Video loaded successfully');
      setVideoState(prev => ({ ...prev, loaded: true }));
    };

    const handleCanPlay = () => {
      console.log('🎬 Video can play');
      setVideoState(prev => ({ ...prev, loaded: true }));
    };

    const handlePlay = () => {
      console.log('▶️ Video is playing');
      setVideoState(prev => ({ ...prev, playing: true }));
    };

    const handlePause = () => {
      console.log('⏸️ Video is paused');
      setVideoState(prev => ({ ...prev, playing: false }));
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLVideoElement;
      const error = target.error;
      let errorMessage = 'Error desconocido';
      
      if (error) {
        switch (error.code) {
          case MediaError.MEDIA_ERR_ABORTED:
            errorMessage = 'Video abortado';
            break;
          case MediaError.MEDIA_ERR_NETWORK:
            errorMessage = 'Error de red';
            break;
          case MediaError.MEDIA_ERR_DECODE:
            errorMessage = 'Error de decodificación';
            break;
          case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
            errorMessage = 'Formato no soportado';
            break;
        }
      }
      
      console.error('❌ Video error:', errorMessage);
      setVideoState(prev => ({ ...prev, error: true, errorMessage }));
    };

    const handleLoadedMetadata = () => {
      console.log('📊 Video metadata loaded');
    };

    const handleProgress = () => {
      console.log('📈 Video loading progress');
    };

    // Agregar todos los event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('progress', handleProgress);

    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('progress', handleProgress);
    };
  }, []);

  const handlePlayClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.error('Error al reproducir:', error);
      });
    }
  };

  const handleReloadClick = () => {
    const video = videoRef.current;
    if (video) {
      video.load();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          🎥 Test de Video - banner.mp4
        </h1>
        
        {/* Video Player */}
        <div className="mb-6">
          <video
            ref={videoRef}
            className="w-full max-w-2xl mx-auto border-4 border-red-500 rounded-lg"
            controls
            preload="auto"
            style={{ backgroundColor: '#000' }}
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>

        {/* Estado del Video */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Estado del Video:</h2>
          <div className="grid grid-cols-2 gap-4 text-white">
            <div>
              <p>📁 Archivo: <span className="text-blue-400">/videos/banner.mp4</span></p>
              <p>📊 Cargado: <span className={videoState.loaded ? 'text-green-400' : 'text-red-400'}>
                {videoState.loaded ? '✅ Sí' : '❌ No'}
              </span></p>
              <p>▶️ Reproduciendo: <span className={videoState.playing ? 'text-green-400' : 'text-red-400'}>
                {videoState.playing ? '✅ Sí' : '❌ No'}
              </span></p>
            </div>
            <div>
              <p>❌ Error: <span className={videoState.error ? 'text-red-400' : 'text-green-400'}>
                {videoState.error ? '✅ Sí' : '❌ No'}
              </span></p>
              {videoState.error && (
                <p>💬 Mensaje: <span className="text-red-400">{videoState.errorMessage}</span></p>
              )}
            </div>
          </div>
        </div>

        {/* Botones de Control */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={handlePlayClick}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            ▶️ Reproducir
          </button>
          <button
            onClick={handleReloadClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🔄 Recargar
          </button>
        </div>

        {/* Información del Archivo */}
        <div className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-white mb-4">Información del Archivo:</h2>
          <div className="text-white space-y-2">
            <p>📍 Ruta: <code className="bg-gray-700 px-2 py-1 rounded">public/videos/banner.mp4</code></p>
            <p>📏 Tamaño: <span className="text-blue-400">13MB</span></p>
            <p>🎬 Formato: <span className="text-blue-400">MP4</span></p>
            <p>🌐 URL: <code className="bg-gray-700 px-2 py-1 rounded">/videos/banner.mp4</code></p>
          </div>
        </div>

        {/* Instrucciones */}
        <div className="bg-blue-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-4">📋 Instrucciones de Diagnóstico:</h2>
          <div className="text-white space-y-2">
            <p>1. <strong>Verifica la consola del navegador</strong> (F12 → Console) para ver los logs</p>
            <p>2. <strong>Revisa la pestaña Network</strong> (F12 → Network) para ver si el archivo se descarga</p>
            <p>3. <strong>Haz clic en "Reproducir"</strong> para forzar la reproducción</p>
            <p>4. <strong>Haz clic en "Recargar"</strong> si hay problemas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTest;

