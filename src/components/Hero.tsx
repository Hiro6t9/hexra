
import { useEffect, useRef } from "react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        
        if (titleRef.current) {
          titleRef.current.style.setProperty('--x', `${x}%`);
          titleRef.current.style.setProperty('--y', `${y}%`);
        }
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Particle background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-hexra-purple/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-hexra-blue/20 blur-3xl"></div>
      </div>
      
      {/* Logo/Title */}
      <div className="text-center" data-aos="fade-up" data-aos-duration="1000">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white animate-heartbeat"
          style={{
            background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), #9b87f5, #ffffff)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          HEXRA.CLOUD
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-pulse-glow">
          Reliable & Affordable Hosting, Powered by the Community
        </p>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
