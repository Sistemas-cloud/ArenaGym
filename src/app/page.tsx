import Hero from './components/Hero';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import PlansAndPricing from './components/PlansAndPricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <PlansAndPricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
