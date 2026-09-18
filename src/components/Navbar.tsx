'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Phone, MapPin, Sparkles, ChevronRight, Clock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';

export default function Navbar() {
  const { openZeffy } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 transition-all duration-300">
      {/* High-Impact Warm Saffron Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 text-white font-medium px-4 py-2 text-xs shadow-xs border-b border-orange-700/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span>
              Weekend Temple Pickup: <strong className="font-bold underline decoration-amber-200">Saturdays 4–6 PM</strong> &amp; <strong className="font-bold underline decoration-amber-200">Sundays 8–11 AM</strong> at {TEMPLE_INFO.templeName}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${TEMPLE_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-amber-100 hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3 h-3" />
              <span>{TEMPLE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Royal Maroon & Warm Amber Navigation Bar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'apple-frosted-glass-maroon shadow-[0_10px_35px_rgba(58,14,21,0.3)]'
            : 'bg-[#380e15] border-b border-amber-500/25 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Wordmark */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 shadow-md group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/govindas-logo.jpeg"
                    alt="Halifax Govinda's Kitchen Logo"
                    fill
                    sizes="48px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl sm:text-2xl text-white tracking-wide group-hover:text-amber-300 transition-colors">
                  Govinda&apos;s Kitchen
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold flex items-center gap-1">
                  <span>Halifax</span>
                  <span className="text-amber-400">•</span>
                  <span>Serve with Love</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium">
              <a
                href="#menu"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Snacks &amp; Delicacies
              </a>
              <a
                href="#about"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                The Sattvik Purity
              </a>
              <a
                href="#price-list"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Price Sheet ($2.99–$8.99)
              </a>
              <a
                href="#pickup"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                Temple Pickup
              </a>
            </nav>

            {/* Right Action: Radiant High-Conversion Saffron Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={openZeffy}
                className="relative group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-[0_0_22px_rgba(245,158,11,0.45)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:brightness-105 active:scale-[0.97] transition-all duration-200 cursor-pointer border border-amber-300/40"
                aria-label="Order Online via Zeffy"
              >
                <ShoppingBag className="w-4 h-4 text-stone-950 group-hover:rotate-6 transition-transform" />
                <span>Order Online</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Rich Maroon Glass */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#340b12]/95 backdrop-blur-2xl border-b border-amber-500/30 px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/30 mb-3">
            <p className="text-xs text-amber-200 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Weekend Temple Pickup Available</span>
            </p>
            <p className="text-[11px] text-stone-300 mt-1">Saturdays 4–6 PM &amp; Sundays 8–11 AM at ISKCON Halifax Temple.</p>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openZeffy();
            }}
            className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-stone-950" />
              <span>Order Online (Zeffy Store)</span>
            </span>
            <ChevronRight className="w-4 h-4 text-stone-950" />
          </button>

          <div className="space-y-1 pt-1">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>Snacks &amp; Delicacies</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>The Sattvik Purity</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </a>
            <a
              href="#price-list"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>Retail Price Sheet</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </a>
            <a
              href="#pickup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>Pickup &amp; Temple Hours</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </a>
          </div>

          <div className="pt-3 border-t border-white/15 space-y-2 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{TEMPLE_INFO.address}</span>
            </div>
            <a
              href={`tel:${TEMPLE_INFO.phone}`}
              className="flex items-center gap-2 text-amber-300 hover:underline font-semibold"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{TEMPLE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
