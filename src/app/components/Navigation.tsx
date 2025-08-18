'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    photoURL: string;
    id: string;
    plan: string;
    memberSince: string;
    lastLogin: string;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isUserMenuOpen && !(event.target as Element).closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isUserMenuOpen]);

  const signInWithGoogle = async () => {
    try {
      // Simulación de autenticación con Google
      // Mostrar estado de carga
      const button = document.querySelector('button[onclick*="signInWithGoogle"]') as HTMLButtonElement;
      if (button) {
        button.innerHTML = `
          <svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Conectando...
        `;
        button.disabled = true;
      }

      // Simular delay de autenticación
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Usuario simulado con datos realistas
      const mockUser = {
        name: "Juan Carlos Pérez",
        email: "juan.perez@gmail.com",
        photoURL: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
        id: "user_" + Math.random().toString(36).substr(2, 9),
        plan: "PLATINUM",
        memberSince: "2023-06-15",
        lastLogin: new Date().toISOString()
      };

      setUser(mockUser);
      setIsUserMenuOpen(false);

      // Guardar en localStorage para persistencia
      localStorage.setItem('arenaGymUser', JSON.stringify(mockUser));

      // Mostrar notificación de bienvenida
      showNotification('¡Bienvenido a Arena Gym!', 'success');

    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      showNotification('Error al iniciar sesión. Inténtalo de nuevo.', 'error');
    } finally {
      // Restaurar botón
      const button = document.querySelector('button[onclick*="signInWithGoogle"]') as HTMLButtonElement;
      if (button) {
        button.innerHTML = `
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Iniciar Sesión</span>
        `;
        button.disabled = false;
      }
    }
  };

  const signOut = () => {
    setUser(null);
    setIsUserMenuOpen(false);
    
    // Remover de localStorage
    localStorage.removeItem('arenaGymUser');
    
    // Mostrar notificación de cierre de sesión
    showNotification('Sesión cerrada correctamente', 'info');
  };

  // Verificar sesión existente al cargar el componente
  useEffect(() => {
    const savedUser = localStorage.getItem('arenaGymUser');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        // Verificar si la sesión no ha expirado (24 horas)
        const lastLogin = new Date(userData.lastLogin);
        const now = new Date();
        const hoursDiff = (now.getTime() - lastLogin.getTime()) / (1000 * 60 * 60);
        
        if (hoursDiff < 24) {
          setUser(userData);
        } else {
          localStorage.removeItem('arenaGymUser');
        }
      } catch (error) {
        console.error('Error al cargar sesión:', error);
        localStorage.removeItem('arenaGymUser');
      }
    }
  }, []);

  // Sistema de notificaciones
  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `fixed top-24 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full ${
      type === 'success' ? 'bg-green-600 text-white' :
      type === 'error' ? 'bg-red-600 text-white' :
      'bg-blue-600 text-white'
    }`;
    
    // Agregar icono según el tipo
    const icon = type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ';
    notification.innerHTML = `
      <div class="flex items-center space-x-2">
        <span class="font-bold">${icon}</span>
        <span>${message}</span>
      </div>
    `;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
      notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
      notification.classList.add('translate-x-full');
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 4000);
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
            <Link 
              href="/"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              INICIO
            </Link>
            <Link 
              href="/acerca-de"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              ACERCA DE
            </Link>
            <Link 
              href="/#planes"
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
            <Link 
              href="/#contacto"
              className="text-white hover:text-red-400 transition-colors duration-300 font-medium"
            >
              CONTACTO
            </Link>
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-2 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium">
              ÚNETE AHORA
            </button>

            {/* User Authentication */}
            {user ? (
              <div className="relative user-menu">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <Image
                      src={user.photoURL}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl border border-gray-700 z-50">
                    <div className="py-2">
                      <div className="px-4 py-3 border-b border-gray-700">
                        <p className="text-sm text-gray-300">{user.name}</p>
                        <p className="text-xs text-gray-400">{user.email}</p>
                      </div>
                      
                      <Link 
                        href="/account-settings"
                        className="block px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Ajustes de la cuenta
                      </Link>
                      
                      <Link 
                        href="/my-bookings"
                        className="block px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mis reservas
                      </Link>
                      
                      <Link 
                        href="/my-subscriptions"
                        className="block px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mis suscripciones
                      </Link>
                      
                      <Link 
                        href="/my-orders"
                        className="block px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-300"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Mis pedidos
                      </Link>
                      
                      <div className="border-t border-gray-700 my-2"></div>
                      
                      <button
                        onClick={signOut}
                        className="block w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors duration-300"
                      >
                        Salir
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Iniciar Sesión</span>
              </button>
            )}
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
              <Link 
                href="/"
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                INICIO
              </Link>
              <Link 
                href="/acerca-de"
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                ACERCA DE
              </Link>
              <Link 
                href="/#planes"
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
              <Link 
                href="/#contacto"
                className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACTO
              </Link>
              <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white px-6 py-3 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium mt-4">
                ÚNETE AHORA
              </button>

              {/* User Authentication Mobile */}
              {user ? (
                <>
                  <div className="border-t border-gray-600 pt-4 mt-4">
                    <div className="px-3 py-2">
                      <p className="text-sm text-gray-300">{user.name}</p>
                      <p className="text-xs text-gray-400">{user.email}</p>
                    </div>
                  </div>
                  
                  <Link 
                    href="/account-settings"
                    className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Ajustes de la cuenta
                  </Link>
                  
                  <Link 
                    href="/my-bookings"
                    className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mis reservas
                  </Link>
                  
                  <Link 
                    href="/my-subscriptions"
                    className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mis suscripciones
                  </Link>
                  
                  <Link 
                    href="/my-orders"
                    className="block text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2 w-full text-left"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mis pedidos
                  </Link>
                  
                  <div className="border-t border-gray-600 my-2"></div>
                  
                  <button
                    onClick={signOut}
                    className="block w-full text-left text-white hover:text-red-400 transition-colors duration-300 font-medium px-3 py-2"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <button
                  onClick={signInWithGoogle}
                  className="w-full flex items-center justify-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium mt-4"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Iniciar Sesión</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
