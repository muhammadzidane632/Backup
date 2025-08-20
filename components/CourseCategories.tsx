'use client';
import { motion } from 'framer-motion';
import { BookOpen, ScrollText, Scale, Music, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function CourseCategories() {
  const categories = [
    {
      title: 'Al-Quran',
      description: 'Pelajari Al-Quran dengan metode modern dan teknologi AI untuk pemahaman yang mendalam',
      icon: BookOpen,
      color: 'from-emerald-500 to-cyan-500',
      bgColor: 'from-emerald-900/20 to-cyan-900/20',
      borderColor: 'border-emerald-500/30',
      href: '/quran',
      features: ['Tajwid Digital', 'Tafsir Interaktif', 'Hafalan Sistematis', 'Audio Murottal']
    },
    {
      title: 'Hadits',
      description: 'Memahami hadits-hadits shahih dengan pendekatan ilmiah dan aplikasi praktis',
      icon: ScrollText,
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-900/20 to-blue-900/20',
      borderColor: 'border-cyan-500/30',
      href: '/hadith',
      features: ['Sanad & Matan', 'Verifikasi Hadits', 'Aplikasi Praktis', 'Konteks Historis']
    },
    {
      title: 'Fiqh',
      description: 'Pelajari hukum-hukum Islam dengan pendekatan moderat dan konteks kontemporer',
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-900/20 to-indigo-900/20',
      borderColor: 'border-blue-500/30',
      href: '/fiqh',
      features: ['Fiqh Ibadah', 'Fiqh Muamalah', 'Fiqh Keluarga', 'Fiqh Kontemporer']
    },
    {
      title: 'Tajwid',
      description: 'Kuasai ilmu tajwid dengan teknologi audio-visual dan evaluasi real-time',
      icon: Music,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-900/20 to-purple-900/20',
      borderColor: 'border-indigo-500/30',
      href: '/tajwid',
      features: ['Makharijul Huruf', 'Sifatul Huruf', 'Ahkamul Huruf', 'Waqaf & Ibtida']
    },
    {
      title: 'Sejarah Islam',
      description: 'Jelajahi peradaban Islam dari masa Rasulullah hingga era modern',
      icon: Clock,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-900/20 to-pink-900/20',
      borderColor: 'border-purple-500/30',
      href: '/history',
      features: ['Sirah Nabawiyah', 'Khulafaur Rasyidin', 'Peradaban Islam', 'Tokoh Muslim']
    }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      <div className="absolute inset-0 pattern-lines opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-6 py-3 mb-6 backdrop-blur-xl"
          >
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-400 font-medium">Program Unggulan</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Kategori</span>
            <br />
            <span className="gradient-text">Pembelajaran</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Pilih kategori pembelajaran yang sesuai dengan minat dan kebutuhan Anda. 
            Setiap program dirancang dengan teknologi terdepan untuk pengalaman belajar yang optimal.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`relative h-full bg-gradient-to-br ${category.bgColor} backdrop-blur-xl border ${category.borderColor} rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl"></div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 neon-glow`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {category.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                        <span className="text-white/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href={category.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 group-hover:shadow-2xl`}
                  >
                    <span>Mulai Belajar</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="/quran"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
          >
            <span>Daftar Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
