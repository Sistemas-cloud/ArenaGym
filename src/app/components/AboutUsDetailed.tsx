'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const AboutUsDetailed = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden mb-12 bg-gradient-to-r from-gray-800 to-black">
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <Image
                    src="/images/logo_def.png"
                    alt="Arena Gym Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
                    Acerca de Nosotros
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-red-400 font-medium tracking-wider">
                  CONOCE NUESTRA HISTORIA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nuestra Historia */}
        <div className={`mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestra <span className="text-red-600">Historia</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">Arena Gym nació del gusto por el deporte de Hugo Vázquez</strong>, 
                quien empezó entrenando con amigos en el gimnasio de la UAT. Al poco tiempo de graduarse, 
                conoció a <strong className="text-red-600">Cynthia Dorkerbert, licenciada en nutrición</strong>. 
                Al casarse, decidieron unir sus conocimientos y abrir un espacio donde pudieran ofrecer tanto 
                planes de entrenamiento como asesorías nutricionales.
              </p>
              
              <p>
                Comenzaron en un cuarto adaptado dentro de una casa en la colonia Ampliación. Con la llegada 
                de su primer hijo, buscaron un lugar más amplio y rentaron un local en 
                <strong className="text-red-600"> Plaza Bitam</strong>. Justo después de firmar contrato, 
                llegó la pandemia, lo que retrasó el inicio del gimnasio. Durante ese tiempo, ofrecieron 
                asesorías personalizadas hasta poder abrir formalmente.
              </p>
              
              <p>
                <strong className="text-gray-900">El nombre Arena Gym surge de la idea de la arena como espacio de lucha y disciplina</strong>, 
                inspirados en la estética romana. Hoy siguen trabajando con un enfoque personalizado, 
                combinando nutrición y entrenamiento para quienes buscan mejorar su salud y rendimiento.
              </p>
              
              <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-2xl border-l-4 border-red-600">
                <p className="text-red-800 font-medium">
                  <strong>¡Novedad 2026!</strong> En enero de 2026 anunciaron la reubicación de Arena Gym a 
                  <strong> Av. Faja de Oro</strong>, donde se acondicionará un local más amplio y se instalarán 
                  nuevos equipos, marcando el inicio de una nueva etapa como la sede principal del gimnasio.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-3a1 1 0 011-1h1a1 1 0 011 1v3M9 21h4" />
                  </svg>
                  <p className="text-lg font-medium">Equipo de gimnasio</p>
                  <p className="text-sm">Imagen representativa</p>
                </div>
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
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Misión</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Brindar un espacio de entrenamiento <strong className="text-red-600">privado y profesional</strong>, 
                donde cada persona reciba atención personalizada en <strong className="text-red-600">nutrición, ejercicio y suplementación</strong>, 
                logrando resultados reales en un ambiente cómodo, enfocado y sin distracciones.
              </p>

              <div className="mt-6 bg-gray-200 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">Configuración de equipos</p>
                </div>
              </div>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Visión</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser el <strong className="text-red-600">gimnasio de referencia en Tampico</strong> para quienes buscan 
                un entrenamiento serio, guiado y completamente adaptado a sus objetivos, manteniendo siempre un 
                <strong className="text-red-600"> trato cercano, ético y especializado</strong>.
              </p>

              <div className="mt-6 bg-gray-200 rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <p className="text-sm">Cuerda de gimnasio</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Perfil del Fundador */}
        <div className={`mb-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestro <span className="text-red-600">Fundador</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Imagen */}
              <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                    <Image
                      src="/images/logo_def.png"
                      alt="Hugo Vázquez"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Hugo Armando Vázquez Paz</h3>
                  <p className="text-red-400 font-medium">Fundador de Arena Gym</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Mi nombre es Hugo Vázquez y soy el fundador de Arena Gym</strong>, 
                    un gimnasio privado enfocado en transformar la vida de las personas a través de un 
                    acompañamiento profesional en entrenamiento y nutrición.
                  </p>
                  
                  <p>
                    Mi compromiso ha sido crear un espacio donde cada cliente reciba 
                    <strong className="text-red-600"> atención personalizada</strong>, con planes adaptados a sus metas reales.
                  </p>
                  
                  <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600">
                    <p className="text-red-800 font-medium italic">
                      "Creo en el poder de la disciplina, la constancia y el trato humano para lograr resultados sostenibles. 
                      Arena Gym es el reflejo de esa visión: un lugar donde el bienestar se trabaja con seriedad y pasión."
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 pt-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">HV</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Hugo Vázquez</p>
                      <p className="text-red-600 font-medium">CEO & Fundador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores y Principios */}
        <div className={`mb-20 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros <span className="text-red-600">Valores</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Valor 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">Cada cliente recibe un trato único y planes adaptados a sus objetivos específicos.</p>
            </div>

            {/* Valor 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profesionalismo</h3>
              <p className="text-gray-600">Combinamos conocimientos en entrenamiento y nutrición para resultados integrales.</p>
            </div>

            {/* Valor 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compromiso</h3>
              <p className="text-gray-600">Disciplina, constancia y trato humano para lograr transformaciones reales.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">¿Listo para Comenzar tu Transformación?</h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a Arena Gym y descubre el poder del entrenamiento personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                CONOCER PLANES
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
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
