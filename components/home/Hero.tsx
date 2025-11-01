'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TreePine } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ backgroundColor: '#112057' }}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.15 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: '#B1151C' }}
        />
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0.1 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-20 -right-40 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: '#F5F0F2' }}
        />
      </div>

      {/* Subtle Grain Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Image – Parallax Fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/docimage8.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#112057]/90 via-[#112057]/40 to-transparent" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-50 flex justify-between items-center px-6 lg:px-12 py-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl lg:text-3xl font-bold tracking-tight"
          style={{ color: '#F5F0F2' }}
        >
          Jesse Duplantis Kulei
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
        >
         <Image src={'/images/doclogo.png'} alt='logo' width={300} height={300} className='w-24 h-auto'/>
        </motion.div>
      </motion.nav>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-6 relative z-50">
        <div className="max-w-5xl space-y-8">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="space-y-2"
          >
            <h1
              className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tighter"
              style={{ color: '#F5F0F2' }}
            >
              Jesse Duplantis
            </h1>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tighter"
              style={{ color: '#B1151C' }}
            >
              Kulei
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="text-lg md:text-xl lg:text-2xl font-light tracking-wide"
            style={{ color: '#F5F0F2' }}
          >
            Kabarak University • KUPSA
          </motion.p>

          {/* Manifesto Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-12"
          >
            <p
              className="text-xl md:text-2xl lg:text-3xl font-medium tracking-wide max-w-4xl mx-auto"
              style={{ color: '#F5F0F2' }}
            >
              I am running for <span className="text-[#B1151C] font-bold">KEPhSA Secretary General</span>
            </p>
            <p
              className="mt-4 text-base md:text-lg font-light tracking-wider max-w-3xl mx-auto"
              style={{ color: '#AB8E86' }}
            >
              To serve with integrity. To lead with purpose. To build a future where every voice is heard.
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-8 h-8 mx-auto" style={{ color: '#B1151C' }} />
            </motion.div>
            <p className="mt-2 text-xs tracking-widest uppercase" style={{ color: '#AB8E86' }}>
              Scroll to Explore
            </p>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full blur-md"
          style={{
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            backgroundColor: i % 2 === 0 ? '#B1151C' : '#F5F0F2',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  );
};

export default Hero;