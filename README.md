# 🏋️ Arena Gym - Sitio Web Moderno

Un sitio web moderno y responsivo para Arena Gym, desarrollado con Next.js 15, React y Tailwind CSS.

## ✨ Características

- **Diseño Moderno**: Interfaz elegante y profesional
- **Responsivo**: Optimizado para todos los dispositivos
- **Video de Fondo**: Hero section con video de fondo dinámico
- **Múltiples Páginas**: 
  - Página principal con secciones integradas
  - Página individual de "Acerca de Nosotros"
  - Página de "Planes y Precios"
  - Tienda en línea (simulada)
- **Navegación Intuitiva**: Menú de navegación con enlaces a páginas individuales
- **SEO Optimizado**: Metadatos completos para mejor posicionamiento

## 🚀 Tecnologías Utilizadas

- **Next.js 15**: Framework de React con App Router
- **React 18**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS**: Framework de CSS utilitario
- **Framer Motion**: Animaciones y transiciones

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   ├── tienda/             # Página de la tienda
│   ├── planes/             # Página de planes y precios
│   ├── acerca-de/          # Página "Acerca de Nosotros"
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── public/
│   ├── images/             # Imágenes del proyecto
│   └── videos/             # Videos de fondo
└── globals.css             # Estilos globales
```

## 🎯 Secciones Principales

### Hero Section
- Video de fondo dinámico (`banner.mp4`)
- Título principal "ARENA GYM"
- Llamadas a la acción
- Estadísticas del gimnasio

### Acerca de Nosotros
- Historia del gimnasio
- Misión y visión
- Perfil del fundador
- Valores corporativos

### Planes y Precios
- Diferentes membresías
- Características de cada plan
- Precios transparentes
- Formulario de contacto

### Tienda en Línea
- Catálogo de productos
- Filtros de búsqueda
- Carrito de compras simulado
- Proceso de checkout

## 🛠️ Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Sistemas-cloud/ArenaGym.git

# Navegar al directorio
cd ArenaGym

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en modo producción
npm start
```

### Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🌐 Despliegue

El proyecto está optimizado para desplegar en:
- **Vercel** (recomendado para Next.js)
- **Netlify**
- **AWS Amplify**
- **Cualquier hosting estático**

## 📱 Responsividad

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large: 1280px+

## 🎨 Personalización

### Colores
- **Primario**: Rojo (#DC2626)
- **Secundario**: Negro (#000000)
- **Acentos**: Blanco (#FFFFFF)

### Fuentes
- **Principal**: Geist Sans
- **Monospace**: Geist Mono

## 🔧 Scripts Disponibles

```json
{
  "dev": "next dev --turbopack",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## 📄 Licencia

Este proyecto es para fines educativos y de portafolio.

## 👨‍💻 Autor

Desarrollado como proyecto universitario para Arena Gym.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

---

**Arena Gym** - Transformando vidas a través del fitness 🏋️‍♂️
