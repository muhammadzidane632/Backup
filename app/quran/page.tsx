'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { BookOpen, Play, Download, Users, Award, ArrowRight, Sparkles, Star, Clock, CheckCircle } from 'lucide-react';
import CoursesList from '../../components/CoursesList';

export default function QuranPage() {
  const [particles, setParticles] = useState<Array<{id: number, left: string, delay: string, duration: string}>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${6 + Math.random() * 4}s`
    }));
    setParticles(generatedParticles);
  }, []);

  const quranPrograms = [
    {
      title: 'Tajwid Digital Pro',
      description: 'Belajar ilmu tajwid dengan teknologi AI dan evaluasi real-time untuk pengucapan yang sempurna.',
      duration: '12 Minggu',
      level: 'Pemula - Lanjutan',
      features: ['AI Pronunciation Check', 'Interactive Lessons', 'Progress Tracking', 'Expert Feedback'],
      price: 'Rp 299.000',
      badge: 'Best Seller',
      rating: 4.9,
      students: '2,500+'
    },
    {
      title: 'Hafalan Sistematis AI',
      description: 'Program menghafal Al-Quran dengan algoritma AI yang menyesuaikan dengan kemampuan individual.',
      duration: '24 Minggu',
      level: 'Semua Level',
      features: ['AI Memory Algorithm', 'Daily Murajaah', 'Progress Analytics', 'Hafidz Certificate'],
      price: 'Rp 499.000',
      badge: 'Most Popular',
      rating: 4.8,
      students: '1,800+'
    },
    {
      title: 'Tafsir Interaktif',
      description: 'Memahami makna Al-Quran dengan visualisasi 3D dan konteks historis yang mendalam.',
      duration: '16 Minggu',
      level: 'Menengah - Lanjutan',
      features: ['3D Visualizations', 'Historical Context', 'Interactive Maps', 'Expert Commentary'],
      price: 'Rp 399.000',
      badge: 'New',
      rating: 4.7,
      students: '1,200+'
    },
    {
      title: 'Audio Murottal Premium',
      description: 'Koleksi lengkap murottal dengan kualitas studio dan fitur pembelajaran canggih.',
      duration: 'Lifetime Access',
      level: 'Semua Level',
      features: ['Studio Quality Audio', 'Offline Download', 'Custom Playlists', 'Learning Tools'],
      price: 'Rp 199.000',
      badge: 'Value',
      rating: 4.6,
      students: '3,000+'
    }
  ];

  const stats = [
    { icon: Users, number: '25,000+', label: 'Siswa Aktif', color: 'from-emerald-500 to-cyan-500' },
    { icon: Award, number: '1,500+', label: 'Hafidz Terlahir', color: 'from-cyan-500 to-blue-500' },
    { icon: Play, number: '500+', label: 'Video Pembelajaran', color: 'from-blue-500 to-indigo-500' },
    { icon: Download, number: '10,000+', label: 'Audio Murottal', color: 'from-indigo-500 to-purple-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden relative">
      {/* Background Effects */}
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

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-cyan-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 holographic"></div>
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-6 py-3 backdrop-blur-xl">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Al-Quran Learning</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Belajar</span>
              <br />
              <span className="gradient-text neon-text">Al-Quran</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-12">
              Pelajari Al-Quran dengan teknologi AI terdepan dan metode pembelajaran yang revolusioner. 
              Dari tajwid hingga hafalan, kami siap membantu perjalanan spiritual Anda.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pattern-grid-fine opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">Program</span>
              <br />
              <span className="gradient-text">Al-Quran</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan dan level Anda dalam mempelajari Al-Quran.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quranPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {program.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-white/70 mb-4">{program.description}</p>
                    
                    {/* Rating & Students */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{program.rating}</span>
                      </div>
                      <span className="text-white/60">•</span>
                      <span className="text-white/60">{program.students} students</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Duration & Level */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span className="text-white/60 text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span className="text-white/60 text-sm">{program.level}</span>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-400">{program.price}</div>
                    <motion.a
                      href="/quran"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Mulai Belajar</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Courses from API */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-6">Katalog Kursus</h3>
            <CoursesList />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-cyan-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 pattern-beams opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Siap Memulai Perjalanan
              <br />
              <span className="gradient-text">Al-Quran?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan muslim yang telah merasakan manfaat pembelajaran Al-Quran di Islamic Learning Center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/quran"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
              >
                Daftar Sekarang
              </motion.a>
              <motion.a
                href="/hadith"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                Konsultasi Gratis
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
