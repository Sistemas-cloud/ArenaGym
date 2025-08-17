/** @type {import('next').NextConfig} */
const nextConfig = {
  // Deshabilitar prerenderizado estático para evitar problemas con event handlers
  output: 'standalone',
  
  // Configuración de imágenes
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  
  // Configuración de ESLint
  eslint: {
    // No fallar el build por warnings de ESLint
    ignoreDuringBuilds: true,
  },
  
  // Configuración de TypeScript
  typescript: {
    // No fallar el build por errores de TypeScript
    ignoreBuildErrors: true,
  },
  
  // Configuración experimental
  experimental: {
    // Mejorar el rendimiento del build
    optimizePackageImports: ['@next/font'],
  },
  
  // Configuración de webpack
  webpack: (config, { isServer }) => {
    // Optimizaciones adicionales
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
}

module.exports = nextConfig
