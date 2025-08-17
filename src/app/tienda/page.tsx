import Shop from '../components/Shop';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PageWithLoading from '../components/PageWithLoading';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TiendaPage() {
  return (
    <PageWithLoading>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="pt-20">
          <Shop />
        </div>
        <Footer />
      </div>
    </PageWithLoading>
  );
}
