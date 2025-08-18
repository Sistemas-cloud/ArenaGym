import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageWithLoading from '../components/PageWithLoading';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MyOrdersPage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navigation />
        <div className="pt-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">
                Mis <span className="text-red-400">Pedidos</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Historial completo de tus compras en la tienda de Arena Gym
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full mt-6"></div>
            </div>

            {/* Order Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-2xl p-6 text-center border border-red-700">
                <div className="text-3xl font-bold text-white mb-2">8</div>
                <div className="text-red-200">Total Pedidos</div>
              </div>
              <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-6 text-center border border-green-700">
                <div className="text-3xl font-bold text-white mb-2">6</div>
                <div className="text-green-200">Entregados</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-800 to-yellow-900 rounded-2xl p-6 text-center border border-yellow-700">
                <div className="text-3xl font-bold text-white mb-2">1</div>
                <div className="text-yellow-200">En Proceso</div>
              </div>
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 text-center border border-blue-700">
                <div className="text-3xl font-bold text-white mb-2">$2,847</div>
                <div className="text-blue-200">Total Gastado</div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">Pedidos Recientes</h2>
              <div className="space-y-6">
                {/* Order 1 */}
                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Pedido #AG-2024-001</h3>
                      <p className="text-gray-400 text-sm">Realizado el 10 de Enero, 2024</p>
                    </div>
                    <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Entregado
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Productos:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                          <div>
                            <p className="text-white font-medium">Camisa Deportiva de Hombre</p>
                            <p className="text-gray-400 text-sm">Talla: L, Color: Negro</p>
                            <p className="text-red-400 font-medium">$189.00</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                          <div>
                            <p className="text-white font-medium">Hoodie Unisex</p>
                            <p className="text-gray-400 text-sm">Talla: M, Color: Rojo</p>
                            <p className="text-red-400 font-medium">$269.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white mb-2">Información del Pedido:</h4>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="font-medium">Total:</span> $458.00</p>
                        <p><span className="font-medium">Método de pago:</span> Tarjeta Visa</p>
                        <p><span className="font-medium">Dirección:</span> Calle Principal #123, Tampico</p>
                        <p><span className="font-medium">Fecha de entrega:</span> 15 de Enero, 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Ver Detalles
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                      Descargar Factura
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                      Comprar de Nuevo
                    </button>
                  </div>
                </div>

                {/* Order 2 */}
                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Pedido #AG-2024-002</h3>
                      <p className="text-gray-400 text-sm">Realizado el 8 de Enero, 2024</p>
                    </div>
                    <span className="inline-block bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      En Proceso
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Productos:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                          <div>
                            <p className="text-white font-medium">Termo de Arena Gym</p>
                            <p className="text-gray-400 text-sm">Color: Rojo</p>
                            <p className="text-red-400 font-medium">$199.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white mb-2">Información del Pedido:</h4>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="font-medium">Total:</span> $199.00</p>
                        <p><span className="font-medium">Método de pago:</span> PayPal</p>
                        <p><span className="font-medium">Estado:</span> Preparando envío</p>
                        <p><span className="font-medium">Fecha estimada:</span> 18 de Enero, 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Ver Detalles
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                      Rastrear Envío
                    </button>
                  </div>
                </div>

                {/* Order 3 */}
                <div className="bg-gray-700 rounded-xl p-6 border border-gray-600">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white">Pedido #AG-2023-015</h3>
                      <p className="text-gray-400 text-sm">Realizado el 28 de Diciembre, 2023</p>
                    </div>
                    <span className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Entregado
                    </span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Productos:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                          <div>
                            <p className="text-white font-medium">Camisa Deportiva de Mujer</p>
                            <p className="text-gray-400 text-sm">Talla: S, Color: Rojo</p>
                            <p className="text-red-400 font-medium">$189.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-white mb-2">Información del Pedido:</h4>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="font-medium">Total:</span> $189.00</p>
                        <p><span className="font-medium">Método de pago:</span> Tarjeta Mastercard</p>
                        <p><span className="font-medium">Fecha de entrega:</span> 2 de Enero, 2024</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Ver Detalles
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                      Descargar Factura
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
                      Comprar de Nuevo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order History */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Historial Completo</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="py-3 px-4 text-gray-300 font-medium">Número</th>
                      <th className="py-3 px-4 text-gray-300 font-medium">Fecha</th>
                      <th className="py-3 px-4 text-gray-300 font-medium">Total</th>
                      <th className="py-3 px-4 text-gray-300 font-medium">Estado</th>
                      <th className="py-3 px-4 text-gray-300 font-medium">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">AG-2024-001</td>
                      <td className="py-3 px-4">10 Ene 2024</td>
                      <td className="py-3 px-4">$458.00</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Entregado</span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-400 hover:text-blue-300 text-sm">Ver</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">AG-2024-002</td>
                      <td className="py-3 px-4">8 Ene 2024</td>
                      <td className="py-3 px-4">$199.00</td>
                      <td className="py-3 px-4">
                        <span className="bg-yellow-600 text-white px-2 py-1 rounded-full text-xs">En Proceso</span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-400 hover:text-blue-300 text-sm">Ver</button>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 px-4">AG-2023-015</td>
                      <td className="py-3 px-4">28 Dic 2023</td>
                      <td className="py-3 px-4">$189.00</td>
                      <td className="py-3 px-4">
                        <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">Entregado</span>
                      </td>
                      <td className="py-3 px-4">
                        <button className="text-blue-400 hover:text-blue-300 text-sm">Ver</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
