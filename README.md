# 🕌 Islamic Learning Center

Pusat pembelajaran Islami modern yang memadukan teknologi dengan nilai-nilai Islam untuk memudahkan umat dalam mempelajari Al-Quran, Hadits, Fiqh, dan ilmu agama lainnya.

## ✨ Fitur Utama

- **5 Kategori Pembelajaran**: Al-Quran, Hadits, Fiqh, Tajwid, dan Sejarah Islam
- **Platform Modern**: Desain responsif dengan tema hijau-putih yang elegan
- **Animasi Interaktif**: Menggunakan GSAP dan Framer Motion untuk pengalaman yang menarik
- **UI/UX Terbaik**: Menggunakan Aceternity UI dan Tailwind CSS
- **Komponen Modular**: Struktur yang terorganisir dan mudah dikembangkan

## 🚀 Teknologi yang Digunakan

- **Framework**: Next.js 15.4.6
- **Styling**: Tailwind CSS 4
- **Animasi**: GSAP 3.12.5, Framer Motion 11.0.8
- **Icons**: Lucide React
- **Language**: TypeScript
- **Package Manager**: npm

## 📁 Struktur Proyek

```
islamic-learning-center/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section dengan animasi
│   ├── CourseCategories.tsx # 5 kategori pembelajaran
│   ├── Features.tsx         # Fitur-fitur platform
│   ├── Testimonials.tsx     # Testimoni siswa
│   ├── CTA.tsx              # Call to action
│   └── Footer.tsx           # Footer dengan informasi lengkap
├── public/
│   └── assets/
│       ├── mosque.svg       # Icon masjid
│       ├── quran.svg        # Icon Al-Quran
│       └── crescent.svg     # Icon bulan sabit
└── package.json
```

## 🎨 Komponen yang Dibuat

### 1. Header
- Navigasi responsif dengan menu mobile
- Modal login yang interaktif
- Logo dengan tema hijau-putih

### 2. Hero Section
- Animasi GSAP untuk parallax effect
- Statistik platform yang menarik
- Call-to-action buttons

### 3. Course Categories (5 Kategori)
- **Al-Quran**: Tajwid, Hafalan, Tafsir, Audio Murottal
- **Hadits**: Hadits Shahih, Sanad & Matan, Konteks Historis
- **Fiqh**: Fiqh Ibadah, Muamalah, Keluarga, Kontemporer
- **Tajwid**: Makharijul Huruf, Sifatul Huruf, Ahkamul Huruf
- **Sejarah Islam**: Sirah Nabawiyah, Khulafaur Rasyidin

### 4. Features
- 8 keunggulan platform
- Animasi hover yang menarik
- Grid layout yang responsif

### 5. Testimonials
- Testimoni dari 6 siswa berbeda
- Rating system dengan bintang
- Statistik platform

### 6. CTA Section
- Call-to-action yang kuat
- Trust indicators
- Benefits platform

### 7. Footer
- Informasi kontak lengkap
- Social media links
- Link-link penting

## 🛠️ Instalasi dan Penggunaan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Setup
```bash
# Clone repository
git clone <repository-url>
cd islamic-learning-center

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build untuk Production
```bash
# Build aplikasi
npm run build

# Start production server
npm start
```

## 🎯 Fitur Animasi

### GSAP Animations
- Parallax scrolling pada hero section
- Text animations dengan timeline
- Scroll-triggered animations

### Framer Motion
- Page transitions
- Hover effects pada cards
- Stagger animations untuk lists
- Scroll-based animations

## 📱 Responsive Design

- **Mobile First**: Optimized untuk mobile devices
- **Tablet**: Layout yang menyesuaikan untuk tablet
- **Desktop**: Full experience dengan grid layouts

## 🎨 Color Scheme

- **Primary Green**: `#059669` (Green-600)
- **Secondary Green**: `#047857` (Green-700)
- **Accent Colors**: Emerald, Teal, Cyan, Blue
- **Background**: White, Green-50, Gray-900

## 🔧 Customization

### Menambah Kategori Baru
1. Edit `CourseCategories.tsx`
2. Tambahkan objek baru di array `categories`
3. Sesuaikan icon dan warna

### Mengubah Tema Warna
1. Edit `tailwind.config.js`
2. Update color palette
3. Sesuaikan komponen yang menggunakan warna tersebut

### Menambah Animasi
1. Import GSAP atau Framer Motion
2. Tambahkan animation logic di komponen
3. Test di berbagai device

## 📈 SEO Optimization

- Meta tags yang lengkap
- Open Graph tags
- Twitter Card support
- Structured data
- Semantic HTML

## 🌟 Keunggulan

1. **Modern & Responsive**: Desain yang modern dan responsif
2. **Performance**: Optimized untuk kecepatan loading
3. **Accessibility**: Mengikuti standar aksesibilitas
4. **SEO Friendly**: Optimized untuk search engines
5. **Maintainable**: Kode yang terstruktur dan mudah dikembangkan

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:
1. Fork repository
2. Buat feature branch
3. Commit changes
4. Push ke branch
5. Buat Pull Request

## 📄 License

Proyek ini dibuat untuk tujuan pembelajaran dan pengembangan platform Islamic Learning Center.

## 📞 Kontak

- **Email**: info@islamiclearning.id
- **Phone**: +62 21 1234 5678
- **Address**: Jakarta, Indonesia

---

**Dibuat dengan ❤️ untuk umat Islam**
