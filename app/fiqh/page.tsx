'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Scale, BookOpen, Users, Award, Clock } from 'lucide-react';

export default function FiqhPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fiqhPrograms = [
    {
      title: 'Fiqh Ibadah',
      description: 'Memahami hukum-hukum ibadah seperti shalat, puasa, zakat, dan haji.',
      duration: '20 Minggu',
      level: 'Pemula - Menengah',
      features: ['Shalat & Syaratnya', 'Puasa & Rukunnya', 'Zakat & Mustahik', 'Haji & Umrah'],
      price: 'Rp 449.000'
    },
    {
      title: 'Fiqh Muamalah',
      description: 'Memahami hukum-hukum transaksi dan hubungan sosial dalam Islam.',
      duration: '16 Minggu',
      level: 'Menengah - Lanjutan',
      features: ['Jual Beli', 'Riba & Gharar', 'Syarikah', 'Qardh & Qardhul Hasan'],
      price: 'Rp 399.000'
    },
    {
      title: 'Fiqh Keluarga',
      description: 'Memahami hukum-hukum keluarga seperti nikah, talak, dan waris.',
      duration: '14 Minggu',
      level: 'Menengah',
      features: ['Nikah & Syaratnya', 'Talak & Rujuk', 'Warisan', 'Wasiat'],
      price: 'Rp 349.000'
    },
    {
      title: 'Fiqh Kontemporer',
      description: 'Memahami hukum Islam dalam konteks modern dan teknologi.',
      duration: '12 Minggu',
      level: 'Lanjutan',
      features: ['Fintech Syariah', 'Medis & Kesehatan', 'Media Digital', 'Ekonomi Modern'],
      price: 'Rp 299.000'
    }
  ];

  const fiqhTopics = [
    {
      title: 'Aqidah & Tauhid',
      description: 'Dasar-dasar keimanan dan keyakinan dalam Islam',
      count: '50+ Materi'
    },
    {
      title: 'Ibadah',
      description: 'Hukum-hukum ibadah wajib dan sunnah',
      count: '100+ Materi'
    },
    {
      title: 'Muamalah',
      description: 'Hukum transaksi dan hubungan sosial',
      count: '80+ Materi'
    },
    {
      title: 'Akhlaq',
      description: 'Adab dan akhlak dalam kehidupan',
      count: '60+ Materi'
    }
  ];

  const stats = [
    { icon: Users, number: '20,000+', label: 'Siswa Aktif' },
    { icon: Award, number: '3,000+', label: 'Sertifikat Terbit' },
    { icon: BookOpen, number: '200+', label: 'Materi Fiqh' },
    { icon: Clock, number: '98%', label: 'Tingkat Kelulusan' }
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
        <div className="absolute inset-0 pattern-hex opacity-10"></div>
        
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
              <Scale className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Belajar <span className="text-teal-200">Fiqh</span>
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Pelajari hukum-hukum Islam dengan pendekatan yang moderat dan sesuai dengan konteks zaman. 
              Dari ibadah hingga muamalah kontemporer.
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
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
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
              Topik <span className="text-teal-600">Fiqh</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pelajari berbagai topik fiqh yang mencakup semua aspek kehidupan muslim.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fiqhTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{topic.title}</h3>
                <p className="text-white/70 mb-4">{topic.description}</p>
                <div className="text-teal-400 font-semibold">{topic.count}</div>
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
              Program <span className="text-teal-600">Fiqh</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pilih program fiqh yang sesuai dengan kebutuhan dan level pemahaman Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fiqhPrograms.map((program, index) => (
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
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-white/60">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span className="text-sm text-white/60">{program.level}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-teal-400">{program.price}</div>
                  <a href="/fiqh" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200">
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
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 via-cyan-900/30 to-blue-900/30"></div>
        <div className="absolute inset-0 pattern-beams opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Memahami <span className="text-teal-200">Fiqh?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Bergabunglah dengan ribuan muslim yang telah mempelajari fiqh dengan pemahaman yang benar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/fiqh" className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors duration-200">
                Daftar Sekarang
              </a>
              <a href="/fiqh" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-200">
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
