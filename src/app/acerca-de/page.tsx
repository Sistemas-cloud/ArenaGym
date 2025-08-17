import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AboutUsDetailed from '../components/AboutUsDetailed';

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      <div className="pt-20">
        <AboutUsDetailed />
      </div>
      <Footer />
    </div>
  );
}
