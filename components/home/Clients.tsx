'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, TreePine } from 'lucide-react';
import Image from 'next/image';

interface PortfolioItem {
  title: string;
  description: string;
}

interface Testimonial {
  testimonial: string;
  url: string;
  name: string;
  role: string;
}

const portfolioData: Record<string, PortfolioItem> = {
  'Secretary General – KUPSA': {
    title: 'Secretary General – KUPSA',
    description:
      'Currently serving as the Secretary General of KUPSA, I lead and support communication, coordination and governance within our association. I ensure timely and transparent circulation of information, manage engagements with stakeholders, and maintain records of all ExCo activities—ensuring that students stay informed, represented, and involved.',
  },
  'Academics Committee – KUPSA': {
    title: 'Academics Committee – KUPSA',
    description:
      'I have actively contributed to advancing academic excellence within Kabarak University Pharmacy Students Association (KUPSA). Through the Academics Committee, I have helped design academic support initiatives, coordinated peer-learning programs, and engaged lecturers and industry experts to improve student performance and professional competency.',
  },
  'Welfare Committee – KUPSA': {
    title: 'Welfare Committee – KUPSA',
    description:
      'As a dedicated member of the Welfare Committee, I have worked to ensure students feel supported—academically, emotionally, and socially. I participated in welfare events, benevolent activities, fee kitty projects, and wellness initiatives that promote a strong sense of community and belonging.',
  },
  'Public Health & Professional Development Committee – KEPhSA': {
    title: 'Public Health & Professional Development Committee – KEPhSA',
    description:
      "I have been actively involved at the national level, serving in key committees of the Pharmacy Students' Association of Kenya (KEPhSA). Through Public Health, I supported nationwide health advocacy campaigns, awareness drives, and community outreach. In Professional Development, I worked towards creating opportunities that connect students with emerging markets, mentorship, and skill-building platforms.",
  },
  'Entrepreneur & Founder – Spin Laundry Services': {
    title: 'Entrepreneur & Founder – Spin Laundry Services',
    description:
      "Beyond leadership in student organizations, I am a budding entrepreneur passionate about solving real-life challenges. I founded Spin Laundry Services, a convenient student-centered laundry solution. Through this business, I've gained practical experience in management, innovation, and service delivery—skills I bring into every leadership role I take on.",
  },
};

const clientTestimonials: Record<string, Testimonial> = {
  Mantle: {
    testimonial:
      '"A transformative collaboration! The Mantle team brought our digital vision to life with precision and creativity."',
    url: 'https://mantlekenya.vercel.app/',
    name: 'Levi Mathews',
    role: 'CEO, Mantle',
  },
  'Carbon And Soil Loop Africa': {
    testimonial:
      '"They understood our mission and turned complex sustainability data into a beautiful digital story."',
    url: 'https://www.carbonsoil.africa/',
    name: 'Sylvia Soti',
    role: 'Founder, Carbon And Soil Loop Africa',
  },
  'Tumalock Deal': {
    testimonial:
      '"From idea to execution, flawless. The Tumalock project redefined what we thought possible."',
    url: 'https://tumalock.com',
    name: 'Rogers Kimutai',
    role: 'Founder, Tumalock Deal',
  },
  Chakulahub: {
    testimonial:
      '"The attention to detail and smooth delivery made the Chakulahub platform a joy to use."',
    url: 'https://chakulahub.co.ke',
    name: 'Beldina Mogaka',
    role: 'Founder, Chakulahub',
  },
  Bloom: {
    testimonial: '"COMING SOON!"',
    url: 'https://bloom.example.com',
    name: '',
    role: '',
  },
  'Premium Phones': {
    testimonial:
      '"They modernized our brand identity while keeping it rooted in authenticity."',
    url: 'https://phone-store-seven-lovat.vercel.app/',
    name: 'Christabel Anyango',
    role: 'Brand Manager, Premium Phones',
  },
  Riviamed: {
    testimonial:
      '"A seamless healthcare platform build — elegant, fast, and reliable."',
    url: 'https://riviamedsystem.vercel.app/',
    name: 'Laura Anyango',
    role: 'Medical Director, Riviamed',
  },
  'Mantle Telemedicine': {
    testimonial:
      '"This team merged healthcare and tech perfectly. Exceptional work on Mantle Telemedicine."',
    url: 'https://mantle-telemedicine.vercel.app/',
    name: 'Levi Mathews',
    role: 'CTO, Mantle Telemedicine',
  },
};

const Clients = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  const agendaItems = [
    {
      number: '1',
      title: 'Better communication and engagement',
      desc: 'Timely updates via WhatsApp groups, email and social media platforms with proper documentation so every member stays informed and involved.',
    },
    {
      number: '2',
      title: 'Actively Seeking Sponsors',
      desc: 'Partner with pharmaceutical companies, research donors and healthcare organizations at international level to support conferences, WPD, welfare programs and research.',
    },
    {
      number: '3',
      title: 'Inter-school games and mentorship programs',
      desc: 'Lobby for a vibrant inter school sports events and mentorship programs connecting students with industry leaders & alumni from various professional organizations such as YPG and PSK for growth and networking.',
    },
    {
      number: '4',
      title: 'Strong advocacy for all members',
      desc: "Uphold KEPhSA's voice in academic and policy matters + better press relations to protect and advance our welfare.",
    },
  ];

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: '#F5F0F2' }}
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: '#112057' }}
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: '#B1151C' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Left Column – Agenda */}
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h3
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#112057', letterSpacing: '0.2em' }}
              >
                My KEPhSA Agenda
              </h3>
              <div className="space-y-6">
                {agendaItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, #112057 0%, #B1151C 100%)`,
                      }}
                    >
                      {item.number}
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-medium group-hover:underline transition-all duration-300"
                        style={{ color: '#51443B' }}
                      >
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: '#AB8E86' }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tree Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 180 }}
              className="flex justify-center lg:justify-start"
            >
              <Image src={'/images/doclogo.png'} alt='logo' width={300} height={300} className='w-32 h-auto'/>
            </motion.div>
          </div>

          {/* Right Column – Portfolio & Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-16"
          >
            {/* Leadership & Impact */}
            <div>
              <h3
                className="text-xs font-semibold tracking-widest uppercase mb-8"
                style={{ color: '#112057', letterSpacing: '0.2em' }}
              >
                Leadership & Impact
              </h3>
              <div className="space-y-6">
                {Object.entries(portfolioData).map(([key, { title, description }], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <button
                      onClick={() => setExpandedRole(expandedRole === key ? null : key)}
                      className="w-full text-left flex items-center justify-between py-4 border-b transition-all duration-300 px-2 hover:border-opacity-100"
                      style={{
                        borderColor: expandedRole === key ? '#B1151C' : 'rgba(81, 68, 59, 0.2)',
                        borderWidth: expandedRole === key ? '2px' : '1px',
                      }}
                    >
                      <h4
                        className="text-xl lg:text-2xl font-light pr-4 transition-colors duration-300"
                        style={{
                          color: expandedRole === key ? '#B1151C' : '#51443B',
                        }}
                      >
                        {title}
                      </h4>
                      <motion.div
                        animate={{ rotate: expandedRole === key ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          className="w-5 h-5 transition-colors duration-300"
                          style={{
                            color: expandedRole === key ? '#B1151C' : '#AB8E86',
                          }}
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {expandedRole === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <p
                            className="mt-5 text-base lg:text-lg leading-relaxed pl-1 border-l-2"
                            style={{
                              color: '#51443B',
                              borderLeftColor: '#B1151C',
                            }}
                          >
                            {description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;