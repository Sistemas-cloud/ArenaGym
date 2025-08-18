'use client';

import { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
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
    <section id="acerca-de" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold mb-4">
            ¿Quiénes <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Somos?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Descubre la filosofía detrás de Arena Gym y por qué somos diferentes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6 text-lg text-gray-200 leading-relaxed">
              <p className="text-2xl font-semibold text-white">
                Arena Gym es un <span className="text-red-400">espacio privado</span> en Tampico diseñado para quienes buscan entrenar 
                de forma seria, enfocada y sin distracciones.
              </p>
              
              <p>
                Aquí no hay aglomeraciones ni rutinas genéricas. Nuestro enfoque es completamente 
                <strong className="text-red-400"> personalizado</strong>, adaptado a tus objetivos, 
                ritmo de vida y condición física.
              </p>
              
              <p>
                Contamos con asesoría profesional en <strong className="text-red-400">nutrición</strong>, 
                <strong className="text-red-400"> entrenamiento</strong> y 
                <strong className="text-red-400"> suplementación</strong>, además de evaluaciones 
                físicas con tecnología InBody para que midas tu progreso de forma clara y real.
              </p>
              
              <p>
                Nuestro ambiente es tranquilo, cómodo y pensado para quienes quieren ver resultados reales, 
                con el acompañamiento de especialistas que están para guiarte, no para presionarte.
              </p>
            </div>

            <div className="mt-8">
              <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl">
                CONOCER MÁS
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="grid grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-red-500">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Entrenamiento Personalizado</h3>
                <p className="text-gray-300 text-sm">Rutinas adaptadas a tus objetivos específicos</p>
              </div>

              {/* Feature 2 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-red-500">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Análisis InBody</h3>
                <p className="text-gray-300 text-sm">Evaluaciones precisas de tu composición corporal</p>
              </div>

              {/* Feature 3 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-red-500">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Asesoría Nutricional</h3>
                <p className="text-gray-300 text-sm">Planes alimenticios personalizados</p>
              </div>

              {/* Feature 4 */}
              <div className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-red-500">
                <div className="w-14 h-14 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Ambiente Exclusivo</h3>
                <p className="text-gray-300 text-sm">Sin aglomeraciones, máximo confort</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white text-center mb-8">Nuestros Números Hablan por Sí Solos</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="group">
                  <div className="text-5xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors duration-300">98%</div>
                  <div className="text-gray-300 font-medium">Satisfacción</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors duration-300">3+</div>
                  <div className="text-gray-300 font-medium">Años Experiencia</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors duration-300">1000+</div>
                  <div className="text-gray-300 font-medium">Transformaciones</div>
                </div>
                <div className="group">
                  <div className="text-5xl font-bold mb-2 text-red-400 group-hover:text-red-300 transition-colors duration-300">100%</div>
                  <div className="text-gray-300 font-medium">Compromiso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
