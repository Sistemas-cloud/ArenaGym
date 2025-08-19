'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  description: string;
}

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

const Shop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Camisa Deportiva de Mujer de Arena Gym",
      price: 189,
      image: "/images/camisa_mujer.jpg",
      category: "Ropa Mujer",
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Negro", "Rojo", "Blanco"],
      description: "Camisa deportiva de alta calidad para mujer, perfecta para entrenamientos intensos. Tela transpirable y diseño ergonómico con el logo oficial de Arena Gym."
    },
    {
      id: 2,
      name: "Camisa Deportiva de Hombre de Arena Gym",
      price: 189,
      image: "/images/camisa_hombre.jpg",
      category: "Ropa Hombre",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Negro", "Rojo", "Gris"],
      description: "Camisa deportiva masculina con tecnología de secado rápido. Ideal para cualquier tipo de entrenamiento, con el diseño exclusivo de Arena Gym."
    },
    {
      id: 3,
      name: "Hoodie Unisex de Arena Gym",
      price: 269,
      image: "/images/hoddie.jpg",
      category: "Sudaderas",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Negro", "Rojo", "Gris Oscuro"],
      description: "Sudadera con capucha unisex, perfecta para antes y después del entrenamiento. Material suave, cómodo y con el logo de Arena Gym."
    },
    {
      id: 4,
      name: "Termo de Arena Gym",
      price: 199,
      image: "/images/termo.jpg",
      category: "Accesorios",
      sizes: ["Único"],
      colors: ["Negro", "Rojo"],
      description: "Termo de acero inoxidable de 750ml. Mantiene la temperatura por 12 horas. Con logo oficial de Arena Gym grabado."
    },
    {
      id: 5,
      name: "Mochila Deportiva Arena Gym",
      price: 349,
      image: "/images/bag.jpg",
      category: "Accesorios",
      sizes: ["Único"],
      colors: ["Negro", "Rojo", "Gris", "Azul Marino"],
      description: "Mochila deportiva de alta capacidad con múltiples compartimentos. Ideal para llevar tu equipo de entrenamiento, ropa y accesorios. Material resistente al agua y diseño ergonómico con el logo de Arena Gym."
    },
    {
      id: 6,
      name: "Calcetas Deportivas Arena Gym",
      price: 89,
      image: "/images/calceta.jpg",
      category: "Accesorios",
      sizes: ["S", "M", "L"],
      colors: ["Negro", "Blanco", "Gris", "Rojo", "Azul"],
      description: "Calcetas deportivas de alta calidad con tecnología de absorción de humedad. Diseño anatómico para máximo confort durante el entrenamiento. Disponibles en múltiples colores con el logo de Arena Gym."
    },
    {
      id: 7,
      name: "Toalla de Arena Gym",
      price: 189,
      image: "/images/towel.png",
      category: "Accesorios",
      sizes: ["Único"],
      colors: ["Negro", "Rojo", "Gris"],
      description: "Toalla de algodón con logo de Arena Gym. Ideal para secarte después del entrenamiento."
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 400,
    selectedSizes: [] as string[],
    selectedColors: [] as string[],
    sortBy: 'recommended'
  });

  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{
    code: string;
    percentage: number;
    type: 'percentage' | 'fixed';
  } | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Mostrar contenido inmediatamente al cargar
    setIsVisible(true);
    
    // También mantener el observer para animaciones adicionales
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Filter products based on current filters
  useEffect(() => {
    const filtered = products.filter(product => {
      const priceInRange = product.price >= filters.minPrice && product.price <= filters.maxPrice;
      const sizeMatch = filters.selectedSizes.length === 0 || 
        product.sizes.some(size => filters.selectedSizes.includes(size));
      const colorMatch = filters.selectedColors.length === 0 || 
        product.colors.some(color => filters.selectedColors.includes(color));
      
      return priceInRange && sizeMatch && colorMatch;
    });

    // Sort products
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order (recommended)
        break;
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  const addToCart = (product: Product, size: string, color: string, quantity: number = 1) => {
    const existingItem = cart.find(item => 
      item.id === product.id && item.selectedSize === size && item.selectedColor === color
    );

    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id && item.selectedSize === size && item.selectedColor === color
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { 
        ...product, 
        quantity, 
        selectedSize: size, 
        selectedColor: color 
      }]);
    }
  };

  const removeFromCart = (id: number, size: string, color: string) => {
    setCart(cart.filter(item => 
      !(item.id === id && item.selectedSize === size && item.selectedColor === color)
    ));
  };

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === id && item.selectedSize === size && item.selectedColor === color
        ? { ...item, quantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getDiscountAmount = () => {
    if (!appliedDiscount) return 0;
    
    const subtotal = getTotalPrice();
    if (appliedDiscount.type === 'percentage') {
      return (subtotal * appliedDiscount.percentage) / 100;
    } else {
      return appliedDiscount.percentage;
    }
  };

  const getFinalPrice = () => {
    const subtotal = getTotalPrice();
    const discount = getDiscountAmount();
    return Math.max(0, subtotal - discount);
  };

  const applyDiscountCode = () => {
    const code = discountCode.trim().toUpperCase();
    
    // Códigos de descuento válidos
    const validCodes: { [key: string]: { percentage: number; type: 'percentage' | 'fixed' } } = {
      'ARENA10': { percentage: 10, type: 'percentage' },
      'WELCOME20': { percentage: 20, type: 'percentage' },
      'FITNESS15': { percentage: 15, type: 'percentage' },
      'GYM50': { percentage: 50, type: 'fixed' },
      'SPORT25': { percentage: 25, type: 'percentage' }
    };

    if (validCodes[code]) {
      setAppliedDiscount({
        code,
        percentage: validCodes[code].percentage,
        type: validCodes[code].type
      });
      setDiscountCode('');
      // Mostrar notificación de éxito
      alert(`¡Código de descuento aplicado! ${validCodes[code].type === 'percentage' ? `${validCodes[code].percentage}% de descuento` : `$${validCodes[code].percentage} de descuento`}`);
    } else {
      alert('Código de descuento inválido. Intenta con: ARENA10, WELCOME20, FITNESS15, GYM50, SPORT25');
    }
  };

  const removeDiscount = () => {
    setAppliedDiscount(null);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleFilterChange = (filterType: string, value: string | number | string[]) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const toggleSizeFilter = (size: string) => {
    setFilters(prev => ({
      ...prev,
      selectedSizes: prev.selectedSizes.includes(size)
        ? prev.selectedSizes.filter(s => s !== size)
        : [...prev.selectedSizes, size]
    }));
  };

  const toggleColorFilter = (color: string) => {
    setFilters(prev => ({
      ...prev,
      selectedColors: prev.selectedColors.includes(color)
        ? prev.selectedColors.filter(c => c !== color)
        : [...prev.selectedColors, color]
    }));
  };

  const openProductModal = (product: Product) => {
    setSelectedProduct(product);
    setSelectedSize(product.sizes[0]);
    setSelectedColor(product.colors[0]);
  };

  return (
    <section id="tienda" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl font-bold text-white mb-4">
            Tienda <span className="text-red-400">Arena Gym</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Productos oficiales de Arena Gym. Lleva tu estilo de vida fitness al siguiente nivel 
            con nuestra colección exclusiva de ropa deportiva y accesorios.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </div>

        {/* Mobile Filters Button */}
        <div className="lg:hidden mb-6">
          <button className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg shadow-lg flex items-center justify-center space-x-2 font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
            </svg>
            <span>Mostrar Filtros</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar - Hidden on mobile, shown on desktop */}
          <div className={`hidden lg:block lg:col-span-1 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filtrar por</h3>
              
              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Precio</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="400"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>$0</span>
                    <span>${filters.maxPrice} MXN</span>
                  </div>
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Talla</h4>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'Único'].map(size => (
                    <button
                      key={size}
                      onClick={() => toggleSizeFilter(size)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        filters.selectedSizes.includes(size)
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Color</h4>
                <div className="space-y-2">
                  {['Negro', 'Rojo', 'Blanco', 'Gris', 'Gris Oscuro', 'Azul Marino', 'Azul'].map(color => (
                    <label key={color} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.selectedColors.includes(color)}
                        onChange={() => toggleColorFilter(color)}
                        className="mr-2 h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({
                  minPrice: 0,
                  maxPrice: 400,
                  selectedSizes: [],
                  selectedColors: [],
                  sortBy: 'recommended'
                })}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Limpiar Filtros
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort and Cart - Responsive layout */}
            <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 space-y-4 sm:space-y-0 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="text-gray-600 text-sm sm:text-base">{filteredProducts.length} productos</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm sm:text-base"
                >
                  <option value="recommended">Recomendados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="name">Nombre A-Z</option>
                </select>
              </div>

              {/* Cart Button - Full width on mobile */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-red-600 text-white px-4 sm:px-6 py-3 rounded-full hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                </svg>
                <span className="text-sm sm:text-base">Carrito ({getTotalItems()})</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>

            {/* Products - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                             {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="relative h-48 sm:h-64 bg-gray-200 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl sm:text-2xl font-bold text-red-600">${product.price}.00</div>
                      <div className="text-xs sm:text-sm text-gray-500">{product.category}</div>
                    </div>

                    <button
                      onClick={() => openProductModal(product)}
                      className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2 sm:py-3 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium text-sm sm:text-base"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-2xl font-bold text-gray-900 pr-4">{selectedProduct.name}</h2>
                <button
                  onClick={() => {
                    setSelectedProduct(null);
                    setSelectedSize('');
                    setSelectedColor('');
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="h-48 sm:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 50vw"
                  />
                </div>

                <div>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">{selectedProduct.description}</p>
                  <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-4 sm:mb-6">${selectedProduct.price}.00</div>
                  
                  {/* Selecciones actuales */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Talla seleccionada:</span>
                      <span className="text-sm font-bold text-red-600">{selectedSize}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Color seleccionado:</span>
                      <span className="text-sm font-bold text-red-600">{selectedColor}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Talla:</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-2 border rounded-lg transition-colors duration-300 ${
                              selectedSize === size
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-300 hover:border-red-500 hover:bg-red-50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Color:</label>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map(color => (
                          <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`px-3 py-2 border rounded-lg transition-colors duration-300 text-sm ${
                              selectedColor === color
                                ? 'border-red-500 bg-red-50 text-red-700'
                                : 'border-gray-300 hover:border-red-500 hover:bg-red-50'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(selectedProduct, selectedSize, selectedColor);
                        setSelectedProduct(null);
                        setSelectedSize('');
                        setSelectedColor('');
                      }}
                      disabled={!selectedSize || !selectedColor}
                      className={`w-full py-3 rounded-lg transition-all duration-300 font-medium ${
                        selectedSize && selectedColor
                          ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Carrito de Compras</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8 sm:py-12">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5M7 13l-1.1 5m0 0h9.1" />
                  </svg>
                  <p className="text-gray-600 text-sm sm:text-base">Tu carrito está vacío</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Continuar Comprando
                  </button>
                </div>
              ) : (
                <div>
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-gray-200 rounded-lg">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-lg overflow-hidden relative flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 48px, 64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 text-sm sm:text-base line-clamp-1">{item.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">Talla: {item.selectedSize} | Color: {item.selectedColor}</p>
                          <p className="text-base sm:text-lg font-bold text-red-600">${item.price}.00</p>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                            className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 text-sm sm:text-base"
                          >
                            -
                          </button>
                          <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                            className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-300 text-sm sm:text-base"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                            className="text-red-600 hover:text-red-800 ml-1 sm:ml-2 p-1"
                          >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Código de Descuento */}
                  <div className="border-t pt-4 sm:pt-6">
                    <div className="mb-4">
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2">Código de Descuento</h4>
                      
                      {appliedDiscount ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-green-800">
                                Descuento aplicado: {appliedDiscount.code}
                              </p>
                              <p className="text-xs text-green-600">
                                {appliedDiscount.type === 'percentage' 
                                  ? `${appliedDiscount.percentage}% de descuento` 
                                  : `$${appliedDiscount.percentage} de descuento`
                                }
                              </p>
                            </div>
                            <button
                              onClick={removeDiscount}
                              className="text-green-600 hover:text-green-800 text-sm font-medium"
                            >
                              Remover
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            placeholder="Ingresa código"
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            onKeyPress={(e) => e.key === 'Enter' && applyDiscountCode()}
                          />
                          <button
                            onClick={applyDiscountCode}
                            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm font-medium"
                          >
                            Aplicar
                          </button>
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500 mt-2">
                        Códigos válidos: ARENA10, WELCOME20, FITNESS15, GYM50, SPORT25
                      </p>
                    </div>

                    {/* Resumen de Precios */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Subtotal:</span>
                          <span className="font-medium">${getTotalPrice()}.00 MXN</span>
                        </div>
                        {appliedDiscount && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Descuento:</span>
                            <span className="font-medium text-green-600">-${getDiscountAmount()}.00 MXN</span>
                          </div>
                        )}
                        <div className="border-t pt-2">
                          <div className="flex justify-between">
                            <span className="font-semibold text-gray-900">Total Final:</span>
                            <span className="text-lg font-bold text-red-600">${getFinalPrice()}.00 MXN</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white py-2 sm:py-3 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 font-medium text-sm sm:text-base">
                      Proceder al Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Shop;
