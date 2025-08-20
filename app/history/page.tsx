'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Clock, MapPin } from 'lucide-react';

export default function HistoryPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const historyPrograms = [
    {
      title: 'Sejarah Nabi Muhammad',
      description: 'Mempelajari perjalanan hidup Rasulullah SAW dari kelahiran hingga wafat.',
      duration: '16 Minggu',
      level: 'Semua Level',
      features: ['Sirah Nabawiyah', 'Periode Makkah', 'Periode Madinah', 'Pelajaran Hidup'],
      price: 'Rp 299.000'
    },
    {
      title: 'Khulafaur Rasyidin',
      description: 'Memahami masa kepemimpinan empat khalifah pertama dalam Islam.',
      duration: '12 Minggu',
      level: 'Menengah',
      features: ['Abu Bakar As-Siddiq', 'Umar bin Khattab', 'Utsman bin Affan', 'Ali bin Abi Thalib'],
      price: 'Rp 249.000'
    },
    {
      title: 'Dinasti Islam',
      description: 'Mempelajari berbagai dinasti Islam yang pernah berkuasa.',
      duration: '14 Minggu',
      level: 'Menengah - Lanjutan',
      features: ['Umayyah', 'Abbasiyah', 'Fatimiyah', 'Ottoman'],
      price: 'Rp 349.000'
    },
    {
      title: 'Peradaban Islam',
      description: 'Memahami kontribusi Islam dalam perkembangan peradaban dunia.',
      duration: '10 Minggu',
      level: 'Lanjutan',
      features: ['Ilmu Pengetahuan', 'Seni & Arsitektur', 'Ekonomi', 'Politik'],
      price: 'Rp 199.000'
    }
  ];

  const historyPeriods = [
    {
      title: 'Pra-Islam',
      description: 'Kondisi Arab sebelum kedatangan Islam',
      year: '570 M',
      features: ['Jahiliyah', 'Suku-suku Arab', 'Kondisi Sosial']
    },
    {
      title: 'Era Nabi Muhammad',
      description: 'Periode kenabian dan penyebaran Islam',
      year: '610-632 M',
      features: ['Dakwah', 'Hijrah', 'Futuh Makkah']
    },
    {
      title: 'Khulafaur Rasyidin',
      description: 'Empat khalifah pertama',
      year: '632-661 M',
      features: ['Penyebaran Islam', 'Kodifikasi Al-Quran', 'Ekspansi']
    },
    {
      title: 'Dinasti-dinasti',
      description: 'Berbagai dinasti Islam',
      year: '661-1924 M',
      features: ['Umayyah', 'Abbasiyah', 'Ottoman']
    }
  ];

  const stats = [
    { icon: Users, number: '15,000+', label: 'Siswa Aktif' },
    { icon: Award, number: '2,500+', label: 'Sertifikat Terbit' },
    { icon: BookOpen, number: '300+', label: 'Materi Sejarah' },
    { icon: Clock, number: '97%', label: 'Tingkat Kelulusan' }
  ];

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 cyber-grid opacity-20"></div>
      <div className="fixed inset-0 matrix-bg"></div>

      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-cyan-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 holographic"></div>
        <div className="absolute inset-0 pattern-stars opacity-10"></div>
        
        {/* Animated Circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sejarah <span className="text-purple-200">Islam</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Pelajari sejarah Islam dari masa ke masa dengan pendekatan yang menarik dan informatif. 
              Dari era Nabi Muhammad hingga peradaban modern.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 pattern-dots opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 pattern-lines opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Timeline <span className="text-purple-600">Sejarah</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Perjalanan sejarah Islam dari masa ke masa yang membentuk peradaban dunia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {historyPeriods.map((period, index) => (
              <motion.div
                key={period.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{period.title}</h3>
                <p className="text-white/70 mb-4">{period.description}</p>
                <div className="text-purple-400 font-semibold mb-4">{period.year}</div>
                
                <div className="space-y-2">
                  {period.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pattern-grid-fine opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Program <span className="text-purple-600">Sejarah</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pilih program sejarah Islam yang sesuai dengan minat dan kebutuhan Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historyPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-white/70 mb-6">{program.description}</p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-white/60">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-white/60">{program.level}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-purple-400">{program.price}</div>
                  <a href="/history" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
                    Mulai Belajar
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 pattern-beams opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Mempelajari <span className="text-purple-200">Sejarah Islam?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Bergabunglah dengan ribuan muslim yang telah mempelajari sejarah Islam dengan baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/history" className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors duration-200">
                Daftar Sekarang
              </a>
              <a href="/history" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-200">
                Konsultasi Gratis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
