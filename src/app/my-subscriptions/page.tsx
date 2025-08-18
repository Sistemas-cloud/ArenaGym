import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageWithLoading from '../components/PageWithLoading';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MySubscriptionsPage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navigation />
        <div className="pt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Mis <span className="text-red-400">Suscripciones</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Gestiona tus planes de membresía y suscripciones activas en Arena Gym
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Subscription Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 text-center border border-red-700">
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <div className="text-red-200">Plan Activo</div>
              </div>
              <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6 text-center border border-green-700">
                <div className="text-3xl font-bold text-white mb-2">$799</div>
                <div className="text-green-200">Mensual</div>
              </div>
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 text-center border border-blue-700">
                <div className="text-3xl font-bold text-white mb-2">15</div>
                <div className="text-blue-200">Días Restantes</div>
              </div>
            </div>

            {/* Active Subscription */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Suscripción Activa</h2>
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-8 border border-red-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">PLAN PLATINUM</h3>
                    <p className="text-red-200 text-lg">Plan nutricional completo con acceso al gimnasio</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-white mb-1">$799</div>
                    <div className="text-red-200">/mes</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Características del Plan:</h4>
                    <ul className="space-y-2 text-red-100">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Acceso completo al gimnasio
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Plan nutricional personalizado
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Entrenamientos guiados
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Seguimiento de progreso
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Información de Facturación:</h4>
                    <div className="space-y-3 text-red-100">
                      <div>
                        <span className="font-medium">Próxima facturación:</span>
                        <p>15 de Febrero, 2024</p>
                      </div>
                      <div>
                        <span className="font-medium">Método de pago:</span>
                        <p>Tarjeta Visa ****1234</p>
                      </div>
                      <div>
                        <span className="font-medium">Estado:</span>
                        <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium ml-2">
                          Activa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-red-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                    Cambiar Plan
                  </button>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                    Cancelar Suscripción
                  </button>
                  <button className="bg-gray-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-300">
                    Descargar Factura
                  </button>
                </div>
              </div>
            </div>

            {/* Available Plans */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Planes Disponibles</h2>
              <div className="max-w-md mx-auto">
                <div className="bg-gray-700 rounded-2xl p-6 border border-gray-600">
                  <h3 className="text-xl font-bold text-white mb-2">PLAN PREMIUM</h3>
                  <div className="text-3xl font-bold text-red-400 mb-2">$2,299</div>
                  <div className="text-gray-400 mb-4">/mes</div>
                  <p className="text-gray-300 mb-4">Entrenamiento completo 1 a 1 todo el mes</p>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-300">
                    Cambiar a este Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
