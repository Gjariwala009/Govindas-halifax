import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ZeffyCheckoutModal from '@/components/ZeffyCheckoutModal';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://govindas-halifax.vercel.app'),
  title: "Govinda's Kitchen Halifax — Pure Sattvik Foods & Delicacies",
  description:
    "Authentic Indian Sattvik snacks, traditional chikkis, whole-wheat khakhras, and gourmet ready-to-eat meals in Halifax, Nova Scotia. 100% Pure Vegetarian, No Onion & Garlic. Pick up at ISKCON Halifax Temple.",
  openGraph: {
    title: "Govinda's Kitchen Halifax — Pure Sattvik Foods & Delicacies",
    description:
      "100% Pure Vegetarian, No Onion & Garlic Sattvik snacks, sweets, and ready meals in Halifax, NS. Pick up at ISKCON Halifax Temple.",
    url: 'https://govindas-halifax.vercel.app',
    siteName: "Govinda's Kitchen Halifax",
    images: [
      {
        url: '/images/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: "Govinda's Kitchen Halifax",
      },
      {
        url: '/images/og-square.jpeg',
        width: 800,
        height: 800,
        alt: "Govinda's Kitchen Halifax Logo",
      },
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Govinda's Kitchen Halifax — Pure Sattvik Foods & Delicacies",
    description:
      "100% Pure Vegetarian, No Onion & Garlic Sattvik snacks, sweets, and ready meals in Halifax, NS.",
    images: ['/images/og-image.jpeg'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/browser-tab-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#faf6f0] text-stone-900 selection:bg-amber-200 selection:text-amber-950">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <ZeffyCheckoutModal />
        </CartProvider>
      </body>
    </html>
  );
}
