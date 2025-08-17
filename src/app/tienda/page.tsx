import Shop from '../components/Shop';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TiendaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20">
        <Shop />
      </div>
      <Footer />
    </div>
  );
}
