import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageWithLoading from '../components/PageWithLoading';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AccountSettingsPage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navigation />
        <div className="pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Ajustes de la <span className="text-red-400">Cuenta</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Gestiona tu información personal, preferencias y configuración de seguridad
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Account Settings Form */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Información Personal</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Apellidos</label>
                      <input
                        type="text"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="Tus apellidos"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="+52 123 456 7890"
                      />
                    </div>
                  </div>
                </div>

                {/* Security Settings */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Seguridad</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Contraseña Actual</label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nueva Contraseña</label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Confirmar Nueva Contraseña</label>
                      <input
                        type="password"
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Preferencias</h2>
                  <div className="space-y-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
                      />
                      <span className="text-gray-300">Recibir notificaciones por email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
                      />
                      <span className="text-gray-300">Recibir notificaciones por SMS</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded bg-gray-700"
                      />
                      <span className="text-gray-300">Recibir ofertas especiales</span>
                    </label>
                  </div>
                </div>

                {/* Save Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-4 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 font-bold text-lg"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
