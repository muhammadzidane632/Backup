'use client';
import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Clock, Shield, Globe, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: 'Materi Terstruktur',
      description: 'Kurikulum yang dirancang secara sistematis dari dasar hingga lanjutan dengan metode pembelajaran yang efektif.',
      color: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Komunitas Aktif',
      description: 'Bergabung dengan ribuan muslim yang aktif belajar dan berbagi pengetahuan dalam komunitas yang supportive.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Award,
      title: 'Sertifikasi Terakreditasi',
      description: 'Dapatkan sertifikat yang diakui dan terakreditasi untuk setiap program pembelajaran yang Anda selesaikan.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Clock,
      title: 'Belajar Fleksibel',
      description: 'Akses materi pembelajaran kapan saja dan di mana saja dengan platform yang responsif dan mudah digunakan.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Shield,
      title: 'Konten Terpercaya',
      description: 'Semua materi disusun oleh ulama dan ahli yang kompeten dengan referensi yang valid dan terpercaya.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Akses Global',
      description: 'Platform pembelajaran yang dapat diakses dari seluruh dunia dengan dukungan multi-bahasa.',
      color: 'from-pink-500 to-emerald-500'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      <div className="absolute inset-0 matrix-bg"></div>
      <div className="absolute inset-0 pattern-hex opacity-10"></div>
      
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
            <span className="text-emerald-400 font-medium">Keunggulan Platform</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Mengapa Memilih</span>
            <br />
            <span className="gradient-text">Islamic Learning?</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Platform pembelajaran Islam terdepan yang menggabungkan teknologi modern dengan nilai-nilai Islam untuk pengalaman belajar yang optimal.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl"></div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 neon-glow`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
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
            <span>Mulai Belajar Gratis</span>
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
