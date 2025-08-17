'use client';

import { useEffect, useRef, useState } from 'react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: "Miguel Padilla",
      location: "Tampico",
      image: "MP",
      rating: 5,
      text: "Nunca fui bueno para los deportes ni el ejercicio, pero desde que empecé en Arena Gym aprendí técnicas, rutinas y buenos hábitos. Hugo Vázquez es un excelente coach y me ha ayudado a conseguir mi mejor versión. Siempre le estaré agradecido.",
      results: "Perdió 15 kg en 4 meses"
    },
    {
      name: "Iridiana Rivas",
      location: "Tampico",
      image: "IR",
      rating: 5,
      text: "Durante mucho tiempo batallé para encontrar un gimnasio ideal para mí. Afortunadamente, Arena Gym superó todas mis expectativas, y desde entonces no voy a otro lugar que no sea ese.",
      results: "Ganó 8 kg de músculo"
    },
    {
      name: "Daniel Trejo",
      location: "Ciudad Madero",
      image: "DT",
      rating: 5,
      text: "Nunca me han gustado los gimnasios populares porque siempre están llenos y los aparatos ocupados. En cambio, Arena Gym es un espacio muy exclusivo: entreno en mis horarios sin aglomeraciones, y ahora realmente disfruto cada entrenamiento.",
      results: "Mejoró su fuerza 200%"
    },
    {
      name: "María González",
      location: "Tampico",
      image: "MG",
      rating: 5,
      text: "La atención personalizada es increíble. Cada entrenamiento está diseñado específicamente para mí. Los resultados hablan por sí solos, nunca me había sentido tan fuerte y saludable.",
      results: "Transformación completa en 6 meses"
    },
    {
      name: "Carlos Mendoza",
      location: "Madero",
      image: "CM",
      rating: 5,
      text: "El ambiente de Arena Gym es único. Sin distracciones, sin esperas, solo enfoque total en mis objetivos. El equipo de nutrición me ayudó a cambiar completamente mis hábitos alimenticios.",
      results: "Redujo 20% grasa corporal"
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold mb-4">
            Lo que Dicen Nuestros <span className="text-red-500">Miembros</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Historias reales de transformación que inspiran y motivan
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </div>

        {/* Main Testimonial Carousel */}
        <div className={`relative max-w-5xl mx-auto mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-red-500 mb-6">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Avatar and Info */}
                <div className="text-center md:text-left">
                  <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-2xl font-bold mx-auto md:mx-0 mb-4">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{testimonials[currentTestimonial].name}</h3>
                  <p className="text-red-400 mb-4">{testimonials[currentTestimonial].location}</p>
                  
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {testimonials[currentTestimonial].results}
                  </div>
                </div>

                {/* Testimonial Text */}
                <div className="md:col-span-2">
                  <blockquote className="text-lg md:text-xl leading-relaxed text-gray-200 italic">
                    &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-red-600 scale-125' : 'bg-gray-600 hover:bg-red-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid */}
        <div className={`grid md:grid-cols-3 gap-6 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-sm font-bold mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-red-400 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold mb-4">¿Listo para tu <span className="text-red-500">Transformación?</span></h3>
          <p className="text-xl text-gray-300 mb-8">Únete a cientos de personas que ya han cambiado su vida</p>
          <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            COMENZAR MI TRANSFORMACIÓN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
