'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, TreePine } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <footer className="relative h-screen overflow-hidden flex flex-col">
      {/* Background Image – Parallax Fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/docimage9.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />

      {/* Gradient Overlay – Darkens image for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#112057]/95 via-[#112057]/70 to-[#112057]/30" />

      {/* Floating Accent Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-32 -left-48 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#B1151C' }}
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: '#F5F0F2' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 flex flex-col h-full">
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 flex-1">
          {/* Left Column – Manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 space-y-12 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#AB8E86', letterSpacing: '0.25em' }}
              >
                Let’s Build the Future Together
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold tracking-tight"
                style={{ color: '#F5F0F2' }}
              >
                My journey in pharmacy has shown me how much impact we can create when we come together with purpose.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-lg lg:text-xl leading-relaxed font-light max-w-3xl"
                style={{ color: '#F5F0F2' }}
              >
                This is more than a campaign. It’s a movement. A promise to serve, to listen, and to lead with integrity.
              </motion.p>
            </div>

            {/* Tree Icon */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 200 }}
              className="flex justify-start"
            >
            <Image src={'/images/doclogo.png'} alt='logo' width={300} height={300} className='w-32 h-auto'/>
            </motion.div> */}
          </motion.div>

          {/* Right Column – Contact & Social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 flex flex-col justify-between space-y-12"
          >
            <div className="space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-base lg:text-lg leading-relaxed font-light"
                style={{ color: '#F5F0F2' }}
              >
                Let’s build a more connected, empowered and vibrant KEPhSA
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="border-t pt-6 space-y-5"
                style={{ borderColor: '#AB8E86' }}
              >
                <a
                  href="mailto:duplantisjessek@gmail.com"
                  className="group flex items-center gap-3 text-sm font-mono tracking-widest uppercase transition-all duration-300 hover:translate-x-1"
                  style={{ color: '#F5F0F2' }}
                >
                  <Mail className="w-4 h-4 transition-colors group-hover:text-red-500" style={{ color: '#B1151C' }} />
                  <span className="group-hover:underline">Send me an Email</span>
                </a>
              </motion.div>
            </div>

            {/* Social Links & Legal */}
            <div className="space-y-6">
              <div className="flex gap-6">
                {[
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/jesse-duplantis-b14720214/', label: 'LinkedIn' },
                ].map(({ Icon, href, label }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="transition-all duration-300 hover:scale-110"
                    style={{ color: '#AB8E86' }}
                    whileHover={{ color: '#F5F0F2' }}
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 text-xs uppercase tracking-wider" style={{ color: '#AB8E86' }}>
                <motion.a
                  href="#"
                  className="hover:underline"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  Terms
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:underline"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 }}
                >
                  Privacy
                </motion.a>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-xs"
                style={{ color: '#AB8E86' }}
              >
                © {new Date().getFullYear()} Jesse Duplantis Kulei. All rights reserved.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;