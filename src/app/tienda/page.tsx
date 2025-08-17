import Shop from '../components/Shop';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Tienda() {
  return <Shop />;
}
