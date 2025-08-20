'use client';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import CourseCategories from '../components/CourseCategories';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, left: string, delay: string, duration: string}>>([]);
  const [isClient, setIsClient] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${6 + Math.random() * 4}s`
    }));
    setParticles(generatedParticles);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 cyber-grid opacity-20"></div>
      <div className="fixed inset-0 matrix-bg"></div>
      
      {/* Floating Particles - Only render on client */}
      {isClient && (
        <div className="particles">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: particle.left,
                animationDelay: particle.delay,
                animationDuration: particle.duration
              }}
            />
          ))}
        </div>
      )}

      {/* Mouse Follow Effect */}
      {isClient && (
        <div
          className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: 'all 0.1s ease-out'
          }}
        />
      )}

      <Header />
      
      <motion.div style={{ y }}>
        <HeroSection />
      </motion.div>
      
      <CourseCategories />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
