'use client';

import { useEffect, useRef, useState } from 'react';

const PlansAndPricing = () => {
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

  const plans = [
    {
      name: "PLAN PLATINUM",
      price: "$799",
      period: "/mes",
      description: "Plan nutricional completo con acceso al gimnasio",
      features: [
        "Asesoría en suplementación",
        "Rutinas personalizadas según objetivos",
        "Evaluación corporal con InBody",
        "Alimentación personalizada",
        "Acceso completo al gimnasio",
        "Horario: 6:00 AM - 10:00 PM"
      ],
      popular: false,
      gradient: "from-gray-600 to-gray-800"
    },
    {
      name: "PLAN ORO",
      price: "$1,699",
      period: "/mes",
      description: "Entrenamiento 1 a 1 por 15 días seleccionables",
      features: [
        "Plan Nutricional completo",
        "Acceso completo al gimnasio",
        "Entrenamiento 1 a 1 por 15 días seleccionables del mes",
        "Asesoría en suplementación personalizada",
        "Rutinas personalizadas según objetivos",
        "Evaluación corporal con InBody",
        "Alimentación personalizada",
        "Seguimiento diario de progreso",
        "Acceso prioritario a equipos",
        "Horario: 6:00 AM - 10:00 PM"
      ],
      popular: false,
      gradient: "from-yellow-600 to-yellow-800"
    },
    {
      name: "PLAN PREMIUM",
      price: "$2,299",
      period: "/mes",
      description: "Entrenamiento completo 1 a 1 todo el mes",
      features: [
        "Plan Nutricional completo",
        "Acceso completo al gimnasio",
        "Entrenamiento completo 1 a 1 todo el mes",
        "Asesoría en suplementación personalizada",
        "Rutinas personalizadas según objetivos",
        "Evaluación corporal con InBody",
        "Alimentación personalizada",
        "Seguimiento diario de progreso",
        "Acceso prioritario a equipos",
        "Horario: 6:00 AM - 10:00 PM"
      ],
      popular: true,
      gradient: "from-red-600 to-red-800"
    }
  ];

  return (
    <section id="planes" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Planes y <span className="text-red-600">Precios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Elige el plan que mejor se adapte a tus objetivos y comienza tu transformación hoy mismo
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              } ${plan.popular ? 'scale-105 z-10' : ''}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MÁS POPULAR
                  </span>
                </div>
              )}

              <div className={`relative bg-white rounded-3xl shadow-xl overflow-hidden h-full ${
                plan.popular ? 'ring-4 ring-red-500 ring-opacity-50' : ''
              }`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${plan.gradient} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-lg opacity-80">{plan.period}</span>
                  </div>
                  <p className="text-sm opacity-90">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="p-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0">
                  <button className={`w-full bg-gradient-to-r ${plan.gradient} text-white py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                    plan.popular ? 'animate-pulse' : ''
                  }`}>
                    {plan.popular ? 'ELEGIR PREMIUM' : `ELEGIR ${plan.name}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas algo más personalizado?</h3>
            <p className="text-gray-600 mb-6">
              Ofrecemos planes corporativos, familiares y opciones de pago flexibles. 
              Contáctanos para crear un plan que se ajuste perfectamente a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-3 rounded-full font-bold hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105">
                CONTACTAR ASESOR
              </button>
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-600 hover:text-white transition-all duration-300">
                VER PROMOCIONES
              </button>
            </div>
          </div>
        </div>

        {/* Guarantee */}
        <div className={`mt-12 text-center transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-medium">Garantía de satisfacción de 30 días</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansAndPricing;
