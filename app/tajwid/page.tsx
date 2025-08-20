'use client';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Music, BookOpen, Users, Award, Play } from 'lucide-react';

export default function TajwidPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const tajwidPrograms = [
    {
      title: 'Makharijul Huruf',
      description: 'Belajar tempat keluarnya huruf-huruf hijaiyah dengan benar.',
      duration: '8 Minggu',
      level: 'Pemula',
      features: ['Tempat Keluarnya Huruf', 'Cara Pengucapan', 'Latihan Praktis', 'Evaluasi Audio'],
      price: 'Rp 199.000'
    },
    {
      title: 'Sifatul Huruf',
      description: 'Memahami sifat-sifat huruf hijaiyah untuk pengucapan yang sempurna.',
      duration: '10 Minggu',
      level: 'Pemula - Menengah',
      features: ['Sifat Wajib', 'Sifat Aridhah', 'Sifat Mutadhadah', 'Praktik Pengucapan'],
      price: 'Rp 249.000'
    },
    {
      title: 'Ahkamul Huruf',
      description: 'Belajar hukum-hukum bacaan dalam Al-Quran.',
      duration: '12 Minggu',
      level: 'Menengah',
      features: ['Idgham', 'Ikhfa', 'Iqlab', 'Qalqalah', 'Mad'],
      price: 'Rp 299.000'
    },
    {
      title: 'Waqaf & Ibtida',
      description: 'Memahami cara berhenti dan memulai bacaan Al-Quran.',
      duration: '6 Minggu',
      level: 'Menengah - Lanjutan',
      features: ['Tanda Waqaf', 'Cara Berhenti', 'Cara Memulai', 'Praktik Bacaan'],
      price: 'Rp 179.000'
    }
  ];

  const tajwidLevels = [
    {
      title: 'Level Dasar',
      description: 'Untuk pemula yang baru belajar membaca Al-Quran',
      duration: '3 Bulan',
      features: ['Makharijul Huruf', 'Sifatul Huruf', 'Hukum Nun & Mim']
    },
    {
      title: 'Level Menengah',
      description: 'Untuk yang sudah bisa membaca Al-Quran dengan baik',
      duration: '4 Bulan',
      features: ['Ahkamul Huruf', 'Mad', 'Waqaf & Ibtida']
    },
    {
      title: 'Level Lanjutan',
      description: 'Untuk yang ingin memperdalam ilmu tajwid',
      duration: '6 Bulan',
      features: ['Tajwid Praktis', 'Murottal', 'Sertifikasi Qari']
    }
  ];

  const stats = [
    { icon: Users, number: '30,000+', label: 'Siswa Aktif' },
    { icon: Award, number: '5,000+', label: 'Sertifikat Qari' },
    { icon: Play, number: '1,000+', label: 'Video Pembelajaran' },
    { icon: BookOpen, number: '100%', label: 'Materi Lengkap' }
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
        <div className="absolute inset-0 pattern-waves opacity-10"></div>
        
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
              <Music className="w-12 h-12" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Belajar <span className="text-cyan-200">Tajwid</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Pelajari ilmu tajwid untuk membaca Al-Quran dengan benar dan indah sesuai kaidah. 
              Dari makharijul huruf hingga waqaf ibtida.
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
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Levels Section */}
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
              Level <span className="text-cyan-600">Pembelajaran</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pilih level pembelajaran yang sesuai dengan kemampuan Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tajwidLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{level.title}</h3>
                <p className="text-white/70 mb-6">{level.description}</p>
                <div className="text-cyan-400 font-semibold mb-6">Durasi: {level.duration}</div>
                
                <div className="space-y-3 mb-6">
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200">
                  Mulai Level Ini
                </button>
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
              Program <span className="text-cyan-600">Tajwid</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pilih program tajwid yang sesuai dengan kebutuhan dan level Anda.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tajwidPrograms.map((program, index) => (
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
                    <Play className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white/60">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-white/60">{program.level}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-cyan-400">{program.price}</div>
                  <a href="/tajwid" className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200">
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
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-indigo-900/30"></div>
        <div className="absolute inset-0 pattern-beams opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Menguasai <span className="text-cyan-200">Tajwid?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Bergabunglah dengan ribuan muslim yang telah menguasai ilmu tajwid dengan baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/tajwid" className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-50 transition-colors duration-200">
                Daftar Sekarang
              </a>
              <a href="/tajwid" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors duration-200">
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
