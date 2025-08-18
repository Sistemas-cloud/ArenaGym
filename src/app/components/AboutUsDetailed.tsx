'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutUsDetailed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mostrar contenido inmediatamente al cargar
    setIsVisible(true);
    
    // También mantener el observer para animaciones adicionales
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
              Acerca de Nosotros
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-red-400 font-medium tracking-wider">
            CONOCE NUESTRA HISTORIA
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Nuestra Historia */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              NUESTRA <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">HISTORIA</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p>
                Arena Gym nació del gusto por el deporte de <strong className="text-red-400">Hugo Vázquez</strong>, 
                quien empezó entrenando con amigos en el gimnasio de la UAT. Al poco tiempo de graduarse, 
                conoció a <strong className="text-red-400">Cynthia Dorkerbert, licenciada en nutrición</strong>. 
                Al casarse, decidieron unir sus conocimientos y abrir un espacio donde pudieran ofrecer tanto 
                planes de entrenamiento como asesorías nutricionales.
              </p>
              
              <p>
                Comenzaron en un cuarto adaptado dentro de una casa en la colonia Ampliación. Con la llegada 
                de su primer hijo, buscaron un lugar más amplio y rentaron un local en 
                <strong className="text-red-400"> Plaza Bitam</strong>. Justo después de firmar contrato, 
                llegó la pandemia, lo que retrasó el inicio del gimnasio. Durante ese tiempo, ofrecieron 
                asesorías personalizadas hasta poder abrir formalmente.
              </p>
              
              <p>
                El nombre <strong className="text-red-400">Arena Gym</strong> surge de la idea de la arena como espacio de lucha y disciplina, 
                inspirados en la estética romana. Hoy siguen trabajando con un enfoque personalizado, 
                combinando nutrición y entrenamiento para quienes buscan mejorar su salud y rendimiento.
              </p>
              
              <div className="bg-gradient-to-r from-red-900 to-red-800 p-6 rounded-2xl border-l-4 border-red-500">
                <p className="text-red-200 font-medium">
                  <strong>¡Novedad 2026!</strong> En enero de 2026 anunciaron la reubicación de Arena Gym a 
                  <strong> Av. Faja de Oro</strong>, donde se acondicionará un local más amplio y se instalarán 
                  nuevos equipos, marcando el inicio de una nueva etapa como la sede principal del gimnasio.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl h-96 flex items-center justify-center border border-gray-700 overflow-hidden">
                <Image
                  src="/images/equipo.avif"
                  alt="Equipo de Arena Gym"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className={`mb-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Misión</h3>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Brindar un espacio de entrenamiento <strong className="text-red-400">privado y profesional</strong>, 
                donde cada persona reciba atención personalizada en <strong className="text-red-400">nutrición, ejercicio y suplementación</strong>, 
                logrando resultados reales en un ambiente cómodo, enfocado y sin distracciones.
              </p>

              <div className="bg-gray-700 rounded-2xl h-48 flex items-center justify-center border border-gray-600 overflow-hidden">
                <Image
                  src="/images/pesas.avif"
                  alt="Pesas de gimnasio"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Visión</h3>
              
              <p className="text-gray-200 text-lg leading-relaxed mb-6">
                Ser el <strong className="text-red-400">gimnasio de referencia en Tampico</strong> para quienes buscan 
                un entrenamiento serio, guiado y completamente adaptado a sus objetivos, manteniendo siempre un 
                <strong className="text-red-400"> trato cercano, ético y especializado</strong>.
              </p>

              <div className="bg-gray-700 rounded-2xl h-48 flex items-center justify-center border border-gray-600 overflow-hidden">
                <Image
                  src="/images/cuerda.avif"
                  alt="Cuerda de gimnasio"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Perfil del Fundador */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hugo Armando <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Vázquez Paz</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Imagen */}
              <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-800 to-black flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/dueno.avif"
                  alt="Hugo Vázquez - Fundador de Arena Gym"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Fundador de Arena Gym</h3>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
                  <p>
                    Mi nombre es Hugo Vázquez y soy el fundador de Arena Gym, 
                    un gimnasio privado enfocado en transformar la vida de las personas a través de un 
                    acompañamiento profesional en entrenamiento y nutrición.
                  </p>
                  
                  <p>
                    Mi compromiso ha sido crear un espacio donde cada cliente reciba 
                    <strong className="text-red-400"> atención personalizada</strong>, con planes adaptados a sus metas reales.
                  </p>
                  
                  <div className="bg-red-900 bg-opacity-50 p-6 rounded-2xl border-l-4 border-red-500">
                    <p className="text-red-200 font-medium italic">
                      &ldquo;Creo en el poder de la disciplina, la constancia y el trato humano para lograr resultados sostenibles. 
                      Arena Gym es el reflejo de esa visión: un lugar donde el bienestar se trabaja con seriedad y pasión.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white border border-gray-700 shadow-2xl">
            <h2 className="text-4xl font-bold mb-4">¿Listo para Comenzar tu Transformación?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Únete a Arena Gym y descubre el poder del entrenamiento personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105">
                CONOCER PLANES
              </button>
              <button className="border-2 border-red-600 text-red-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                CONTACTAR AHORA
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUsDetailed;
