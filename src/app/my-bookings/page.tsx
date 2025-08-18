import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageWithLoading from '../components/PageWithLoading';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MyBookingsPage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navigation />
        <div className="pt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Mis <span className="text-red-400">Reservas</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Gestiona tus reservas de entrenamiento y clases en Arena Gym
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Booking Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 text-center border border-red-700">
                <div className="text-3xl font-bold text-white mb-2">5</div>
                <div className="text-red-200">Reservas Activas</div>
              </div>
              <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6 text-center border border-green-700">
                <div className="text-3xl font-bold text-white mb-2">12</div>
                <div className="text-green-200">Reservas Completadas</div>
              </div>
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 text-center border border-blue-700">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-blue-200">Próximas Reservas</div>
              </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Próximas Reservas</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Entrenamiento Personalizado</h3>
                      <p className="text-gray-300 mb-1">Con Hugo Vázquez</p>
                      <p className="text-gray-400 text-sm">Lunes, 15 de Enero • 9:00 AM - 10:30 AM</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Confirmada
                      </span>
                      <button className="block mt-2 text-red-400 hover:text-red-300 text-sm">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Clase de Nutrición</h3>
                      <p className="text-gray-300 mb-1">Con Cynthia Dorkerbert</p>
                      <p className="text-gray-400 text-sm">Miércoles, 17 de Enero • 6:00 PM - 7:00 PM</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Pendiente
                      </span>
                      <button className="block mt-2 text-red-400 hover:text-red-300 text-sm">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Entrenamiento de Fuerza</h3>
                      <p className="text-gray-300 mb-1">Con Hugo Vázquez</p>
                      <p className="text-gray-400 text-sm">Viernes, 19 de Enero • 8:00 AM - 9:30 AM</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Confirmada
                      </span>
                      <button className="block mt-2 text-red-400 hover:text-red-300 text-sm">
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Bookings */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Reservas Anteriores</h2>
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Entrenamiento Cardio</h3>
                      <p className="text-gray-300 mb-1">Con Hugo Vázquez</p>
                      <p className="text-gray-400 text-sm">Lunes, 8 de Enero • 9:00 AM - 10:30 AM</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Completada
                      </span>
                      <button className="block mt-2 text-blue-400 hover:text-blue-300 text-sm">
                        Reservar de Nuevo
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">Consulta Nutricional</h3>
                      <p className="text-gray-300 mb-1">Con Cynthia Dorkerbert</p>
                      <p className="text-gray-400 text-sm">Miércoles, 3 de Enero • 6:00 PM - 7:00 PM</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Completada
                      </span>
                      <button className="block mt-2 text-blue-400 hover:text-blue-300 text-sm">
                        Reservar de Nuevo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Booking Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105">
                Nueva Reserva
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
