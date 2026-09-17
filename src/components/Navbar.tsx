'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Menu, X, Phone, MapPin } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';

export default function Navbar() {
  const { openZeffy } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#3e0e14] text-white shadow-lg border-b border-[#571720]">
      {/* Top mini banner */}
      <div className="bg-[#27080c] px-4 py-1.5 text-xs text-amber-200/90 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Pick up at <strong>{TEMPLE_INFO.templeName}</strong> during Weekend Programs & Events</span>
        </div>
        <a
          href={`tel:${TEMPLE_INFO.phone}`}
          className="hidden sm:flex items-center gap-1 hover:text-amber-100 transition-colors"
        >
          <Phone className="w-3 h-3 text-emerald-400" />
          <span>{TEMPLE_INFO.phone}</span>
        </a>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-amber-400/80 shadow-md bg-white">
              <Image
                src="/images/govindas-logo.jpeg"
                alt="Halifax Govinda's Kitchen Logo"
                fill
                sizes="52px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-xl sm:text-2xl tracking-wide text-white group-hover:text-amber-300 transition-colors">
                  Govinda&apos;s Kitchen
                </span>
              </div>
              <p className="text-xs text-emerald-300 font-medium tracking-wider uppercase">
                Halifax • Serve with Love
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a
              href="#menu"
              className="text-stone-200 hover:text-amber-300 transition-colors"
            >
              Menu &amp; Snacks
            </a>
            <a
              href="#about"
              className="text-stone-200 hover:text-amber-300 transition-colors"
            >
              What is Sattvik?
            </a>
            <a
              href="#price-list"
              className="text-stone-200 hover:text-amber-300 transition-colors"
            >
              Price Sheet
            </a>
            <a
              href="#pickup"
              className="text-stone-200 hover:text-amber-300 transition-colors"
            >
              Pickup &amp; Hours
            </a>
          </nav>

          {/* Right Actions: Order Online button */}
          <div className="flex items-center gap-3">
            <button
              onClick={openZeffy}
              className="relative flex items-center gap-2 bg-[#4d8b31] hover:bg-[#3c7025] text-white px-4 py-2.5 rounded-full font-semibold text-sm transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Order Online via Zeffy"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300" />
              <span>Order Online</span>
              <span className="hidden sm:inline px-1.5 py-0.5 rounded text-[10px] bg-emerald-900/60 font-bold text-amber-200">
                0% Fees
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-stone-200 hover:text-white hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2d0a0f] border-t border-[#571720] px-4 pt-3 pb-5 space-y-3">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openZeffy();
            }}
            className="block w-full text-left py-2 text-base font-semibold text-amber-300 hover:text-white cursor-pointer"
          >
            Order Online (Zeffy Store)
          </button>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-300"
          >
            Menu & Snacks
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-300"
          >
            What is Sattvik?
          </a>
          <a
            href="#price-list"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-300"
          >
            Price Sheet
          </a>
          <a
            href="#pickup"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-200 hover:text-amber-300"
          >
            Pickup & Hours
          </a>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2 text-xs text-amber-200">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{TEMPLE_INFO.address}</span>
            </div>
            <a
              href={`tel:${TEMPLE_INFO.phone}`}
              className="flex items-center gap-2 text-emerald-300 hover:underline"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>{TEMPLE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
