import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

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
  title: "Govinda's Kitchen Halifax — Pure Sattvik Foods & Delicacies",
  description:
    "Authentic Indian Sattvik snacks, traditional chikkis, whole-wheat khakhras, and gourmet ready-to-eat meals in Halifax, Nova Scotia. 100% Pure Vegetarian, No Onion & Garlic. Pick up at ISKCON Halifax Temple.",
  icons: {
    icon: '/images/govindas-logo.jpeg',
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
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
