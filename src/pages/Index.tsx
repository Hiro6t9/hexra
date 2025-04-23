
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CTAButtons from '@/components/CTAButtons';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import LoadingScreen from '@/components/LoadingScreen';
import Header from '@/components/Header';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS after loading completes
    if (!loading) {
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        easing: 'ease-out-cubic'
      });
    }
  }, [loading]);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`min-h-screen relative ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        <ParticleBackground />
        <Header />
        <Hero />
        <Services />
        <CTAButtons />
        <Footer />
      </div>
    </>
  );
};

export default Index;
