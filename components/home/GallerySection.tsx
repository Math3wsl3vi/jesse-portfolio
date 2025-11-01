'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Image data for the carousel
  const carouselImages = [
    '/images/docimage2.jpg',
    '/images/docimage5.jpg',
    '/images/docimage1.jpg',
    '/images/image4.jpeg'
  ];

  // Auto-advance carousel every 10 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, carouselImages.length]);

  // Manual navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
    // Resume auto-play after 20 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    // Resume auto-play after 20 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  // Progress indicator for current slide timing
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / 10000) * 100;
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentImageIndex, isAutoPlaying]);

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#F5F0F2' }}>
      {/* Animated background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#112057' }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: '#B1151C' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Left Column – Portrait & Manifesto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-2 space-y-10"
          >
            {/* Hover-Swap Portrait */}
            <motion.div
              className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.5 }}
              style={{ boxShadow: '0 20px 40px rgba(17, 32, 87, 0.15)' }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isImageHovered ? 'alt' : 'main'}
                  initial={{ opacity: 0, scale: 1.15 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={isImageHovered ? '/images/image5.jpeg' : '/images/docimage7.jpg'}
                    alt="Leadership portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay + red accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B1151C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>

            {/* Manifesto Text */}
            <div className="space-y-6" style={{ color: '#51443B' }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-base lg:text-lg leading-relaxed font-light tracking-wide"
              >
                I am a student who believes that leadership is not about titles, but about service. Growing up, I learned the value of community and teamwork—values that continue to guide me today.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg leading-relaxed font-light tracking-wide"
              >
                My journey in pharmacy has shown me how much impact we can create when we come together with purpose. I'm running to help build a KEPhSA that nurtures talent, unlocks opportunities, and supports every member's academic and professional growth.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-base lg:text-lg leading-relaxed font-light tracking-wide"
                style={{ color: '#B1151C' }}
              >
                I am here to serve, to listen, and to lead with integrity.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column – Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="lg:col-span-3"
          >
            <div
              className="relative aspect-video overflow-hidden rounded-2xl group"
              style={{
                boxShadow: '0 25px 50px rgba(17, 32, 87, 0.2)',
                border: '1px solid rgba(177, 21, 28, 0.15)',
              }}
            >
              {/* Image Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={carouselImages[currentImageIndex]}
                    alt={`Gallery image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
                <motion.div
                  className="h-full bg-[#B1151C]"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 20000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-[#B1151C] scale-125' 
                        : 'bg-white/70 hover:bg-white'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Status Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-yellow-400'} shadow-lg`} />
              </div>
            </div>

            {/* Caption */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-6 text-sm font-semibold tracking-widest uppercase"
              style={{ color: '#112057', letterSpacing: '0.2em' }}
            >
              The Vision Gallery • {currentImageIndex + 1} of {carouselImages.length}
            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;