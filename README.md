# 🏋️ Arena Gym - Sitio Web Moderno

Un sitio web moderno y responsivo para Arena Gym, un gimnasio exclusivo en Tampico, México. Desarrollado con Next.js 15, React y Tailwind CSS.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante y profesional con animaciones suaves
- **Video de Fondo**: Hero section con video de fondo `banner.mp4`
- **Páginas Individuales**: Secciones dedicadas para mejor organización
- **Tienda en Línea**: Simulación de e-commerce con carrito de compras
- **Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Metadatos completos para mejor visibilidad

## 🚀 Tecnologías Utilizadas

- **Next.js 15** - Framework de React con App Router
- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones y transiciones

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── Hero.tsx        # Sección principal con video
│   │   ├── Navigation.tsx  # Barra de navegación
│   │   ├── AboutUs.tsx     # Sección "Acerca de"
│   │   ├── Shop.tsx        # Componente de tienda
│   │   └── ...
│   ├── tienda/             # Página de tienda
│   ├── planes/             # Página de planes y precios
│   ├── acerca-de/          # Página "Acerca de nosotros"
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página de inicio
├── public/
│   ├── images/             # Imágenes del proyecto
│   ├── videos/             # Videos (banner.mp4)
│   └── ...
└── ...
```

## 🎯 Funcionalidades Principales

### 1. Hero Section con Video
- Video de fondo `banner.mp4` en pantalla completa
- Overlays para legibilidad del texto
- Controles de video integrados

### 2. Navegación
- Menú responsive para móvil y desktop
- Logo de Arena Gym integrado
- Enlaces a páginas individuales

### 3. Tienda en Línea
- Catálogo de productos con filtros
- Carrito de compras funcional (simulado)
- Diseño inspirado en la tienda original de Wix

### 4. Páginas Individuales
- **Tienda**: `/tienda` - Catálogo completo
- **Planes**: `/planes` - Precios y membresías
- **Acerca de**: `/acerca-de` - Historia y misión

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Sistemas-cloud/ArenaGym.git
cd ArenaGym

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

### Variables de Entorno
Crea un archivo `.env.local` si es necesario:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎨 Personalización

### Colores Principales
- **Rojo**: `#dc2626` (Arena Gym brand)
- **Negro**: `#000000` (Fondo principal)
- **Blanco**: `#ffffff` (Texto principal)

### Fuentes
- **Geist Sans**: Títulos y texto principal
- **Geist Mono**: Código y elementos técnicos

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir la carpeta .next a Netlify
```

### Servidor Tradicional
```bash
npm run build
npm start
```

## 📝 Licencia

Este proyecto es para uso educativo y de portafolio. Arena Gym es una marca registrada.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

- **Desarrollador**: [Tu Nombre]
- **GitHub**: [@tu-usuario]
- **Proyecto**: [ArenaGym](https://github.com/Sistemas-cloud/ArenaGym)

---

**Arena Gym** - *Firmes y Dignos* 🏋️‍♂️
