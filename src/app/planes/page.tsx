import PlansAndPricing from '../components/PlansAndPricing';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageWithLoading from '../components/PageWithLoading';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PlanesPage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navigation />
        <div className="pt-32">
          <PlansAndPricing />
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
