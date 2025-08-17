import AboutUsDetailed from '../components/AboutUsDetailed';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AcercaDe() {
  return <AboutUsDetailed />;
}
