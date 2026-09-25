'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X, Phone, MapPin, ChevronRight, Clock } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';

export default function Navbar() {
  const { openZeffy } = useCart();
  const pathname = usePathname();
  const isSuccessPage = pathname === '/order-success';

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
      {/* Dev Top Mini Banner - Cleaned of repetitive slogans */}
      <div className="bg-[#27080c] text-stone-300 text-xs py-2 px-4 border-b border-[#571720]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Pickup at ISKCON Halifax Temple: <strong>{TEMPLE_INFO.pickupHoursSummary}</strong></span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={`tel:${TEMPLE_INFO.phone}`}
              className="text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{TEMPLE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Dev Maroon Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3e0e14]/95 backdrop-blur-md border-b border-[#571720] shadow-lg'
            : 'bg-[#3e0e14] border-b border-[#571720] shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo & Wordmark */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full p-0.5 border-2 border-amber-400/80 shadow-md group-hover:scale-105 transition-transform duration-300">
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
                <span className="text-[10px] uppercase tracking-widest text-emerald-300 font-bold flex items-center gap-1">
                  <span>Halifax</span>
                  <span className="text-amber-400">•</span>
                  <span>Serve with Love</span>
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 text-sm font-medium">
              <Link
                href="/#menu"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-amber-300 hover:bg-white/5 transition-all duration-200"
              >
                Snacks &amp; Delicacies
              </Link>
              <Link
                href="/#price-list"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-amber-300 hover:bg-white/5 transition-all duration-200"
              >
                Price Sheet
              </Link>
              <Link
                href="/#pickup"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-amber-300 hover:bg-white/5 transition-all duration-200"
              >
                Temple Pickup
              </Link>
              <Link
                href="/#about"
                className="px-4 py-2 rounded-full text-stone-200 hover:text-amber-300 hover:bg-white/5 transition-all duration-200"
              >
                The Sattvik Purity
              </Link>
            </nav>

            {/* Right Action: Adaptive Order CTA */}
            <div className="flex items-center gap-3">
              {isSuccessPage ? (
                <Link
                  href="/#menu"
                  className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-emerald-950/40 active:scale-[0.97] transition-all duration-200 border border-emerald-400/30"
                  aria-label="Order More Delicacies"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-200 group-hover:scale-110 transition-transform" />
                  <span>Order More Delicacies</span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-100"></span>
                  </span>
                </Link>
              ) : (
                <button
                  onClick={openZeffy}
                  className="relative group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-emerald-900/40 active:scale-[0.97] transition-all duration-200 cursor-pointer"
                  aria-label="Order"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-300 group-hover:rotate-6 transition-transform" />
                  <span>Order</span>
                </button>
              )}

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

      {/* Mobile Drawer Navigation with Dev Maroon Style */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2d0a0f] border-b border-[#571720] px-5 pt-4 pb-6 space-y-3 shadow-2xl">
          <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 mb-3">
            <p className="text-xs text-amber-200 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Weekend Temple Pickup Available</span>
            </p>
            <p className="text-[11px] text-stone-300 mt-1">{TEMPLE_INFO.pickupHoursSummary} at ISKCON Halifax Temple.</p>
          </div>

          {isSuccessPage ? (
            <Link
              href="/#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-sm shadow-md transition-all"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-emerald-200" />
                <span>Order More Delicacies</span>
              </span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </Link>
          ) : (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openZeffy();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                <span>Order</span>
              </span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </button>
          )}

          <div className="space-y-1 pt-1">
            <Link
              href="/#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>Snacks &amp; Delicacies</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </Link>
            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>The Sattvik Purity</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </Link>
            <Link
              href="/#price-list"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>Price Sheet</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </Link>
            <Link
              href="/#pickup"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-stone-200 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              <span>Pickup &amp; Temple Hours</span>
              <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
            </Link>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{TEMPLE_INFO.address}</span>
            </div>
            <a
              href={`tel:${TEMPLE_INFO.phone}`}
              className="flex items-center gap-2 text-emerald-300 hover:underline font-semibold"
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
