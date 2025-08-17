import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import PlansAndPricing from './components/PlansAndPricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

// Configuración para evitar prerenderizado estático
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutUs />
      <PlansAndPricing />
      <Contact />
      <Testimonials />
    </div>
  );
}
