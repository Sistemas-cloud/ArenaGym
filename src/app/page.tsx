import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import PlansAndPricing from './components/PlansAndPricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import PageWithLoading from './components/PageWithLoading';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <PageWithLoading>
      <div className="min-h-screen">
        <Navigation />
        <Hero />
        <AboutUs />
        <PlansAndPricing />
        <Contact />
        <Testimonials />
        <Footer />
      </div>
    </PageWithLoading>
  );
}
