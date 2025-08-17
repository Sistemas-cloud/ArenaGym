import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutUsDetailed from '../components/AboutUsDetailed';
import PageWithLoading from '../components/PageWithLoading';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AcercaDePage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <Navigation />
        <div className="pt-20">
          <AboutUsDetailed />
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
