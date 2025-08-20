import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Islamic Learning Center - Pusat Pembelajaran Islami Modern",
  description: "Pusat pembelajaran Islami modern yang memadukan teknologi dengan nilai-nilai Islam untuk memudahkan umat dalam mempelajari Al-Quran, Hadits, Fiqh, dan ilmu agama lainnya.",
  keywords: "islamic learning, al-quran, hadits, fiqh, tajwid, pembelajaran islam, kursus islami",
  authors: [{ name: "Islamic Learning Center" }],
  creator: "Islamic Learning Center",
  publisher: "Islamic Learning Center",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://islamiclearning.id'),
  openGraph: {
    title: "Islamic Learning Center - Pusat Pembelajaran Islami Modern",
    description: "Pusat pembelajaran Islami modern yang memadukan teknologi dengan nilai-nilai Islam untuk memudahkan umat dalam mempelajari Al-Quran, Hadits, Fiqh, dan ilmu agama lainnya.",
    url: 'https://islamiclearning.id',
    siteName: 'Islamic Learning Center',
    images: [
      {
        url: '/assets/mosque.svg',
        width: 1200,
        height: 630,
        alt: 'Islamic Learning Center',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Islamic Learning Center - Pusat Pembelajaran Islami Modern",
    description: "Pusat pembelajaran Islami modern yang memadukan teknologi dengan nilai-nilai Islam untuk memudahkan umat dalam mempelajari Al-Quran, Hadits, Fiqh, dan ilmu agama lainnya.",
    images: ['/assets/mosque.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
