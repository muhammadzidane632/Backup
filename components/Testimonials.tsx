'use client';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmad Fauzi',
      role: 'Mahasiswa',
      content: 'Platform yang luar biasa! Materi pembelajaran sangat terstruktur dan mudah dipahami. Saya sudah berhasil menghafal 5 juz Al-Quran dalam 6 bulan.',
      rating: 5,
      avatar: 'AF'
    },
    {
      name: 'Siti Nurhaliza',
      role: 'Ibu Rumah Tangga',
      content: 'Sebagai ibu rumah tangga, saya sangat terbantu dengan fleksibilitas waktu belajar. Bisa belajar sambil mengurus rumah dan anak-anak.',
      rating: 5,
      avatar: 'SN'
    },
    {
      name: 'Muhammad Rizki',
      role: 'Karyawan',
      content: 'Kualitas pengajar sangat bagus dan materi yang disampaikan sangat relevan dengan kehidupan sehari-hari. Sangat recommended!',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Fatimah Azzahra',
      role: 'Pelajar SMA',
      content: 'Belajar hadits jadi lebih menyenangkan dengan visualisasi yang menarik. Saya jadi lebih mudah memahami konteks dan maknanya.',
      rating: 5,
      avatar: 'FA'
    },
    {
      name: 'Abdullah Rahman',
      role: 'Pengusaha',
      content: 'Investasi terbaik untuk diri sendiri. Tidak hanya ilmu agama, tapi juga aplikasi praktis dalam bisnis dan kehidupan.',
      rating: 5,
      avatar: 'AR'
    },
    {
      name: 'Aisyah Putri',
      role: 'Dokter',
      content: 'Sebagai dokter muslim, platform ini membantu saya memahami hukum-hukum Islam terkait profesi medis dengan sangat baik.',
      rating: 5,
      avatar: 'AP'
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
      <div className="absolute inset-0 pattern-dots-lg opacity-10"></div>
      
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
            <span className="text-emerald-400 font-medium">Testimoni Siswa</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Apa Kata</span>
            <br />
            <span className="gradient-text">Siswa Kami?</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Dengarkan pengalaman langsung dari ribuan siswa yang telah merasakan manfaat pembelajaran di Islamic Learning Center.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-emerald-400" />
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/80 leading-relaxed mb-6">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
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
            <span>Bergabung Sekarang</span>
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

