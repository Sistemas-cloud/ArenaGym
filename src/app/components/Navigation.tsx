'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <Image
                src="/images/logo_def.png"
                alt="Arena Gym Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">ARENA GYM</h1>
              <p className="text-red-400 text-xs font-medium">FIRMES Y DIGNOS</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              INICIO
            </button>
            <Link 
              href="/acerca-de"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              ACERCA DE
            </Link>
            <Link 
              href="/planes"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              PLANES Y PRECIOS
            </Link>
            <Link 
              href="/tienda"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              TIENDA
            </Link>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              CONTACTO
            </button>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium">
              ÚNETE AHORA
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
              >
                INICIO
              </button>
              <Link 
                href="/acerca-de"
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                ACERCA DE
              </Link>
              <Link 
                href="/planes"
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                PLANES Y PRECIOS
              </Link>
              <Link 
                href="/tienda"
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                TIENDA
              </Link>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
              >
                CONTACTO
              </button>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium mt-4">
                ÚNETE AHORA
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
