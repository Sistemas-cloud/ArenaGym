import PlansAndPricing from '../components/PlansAndPricing';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Planes() {
  return <PlansAndPricing />;
}
