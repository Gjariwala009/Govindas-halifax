'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight, ShoppingBag, Star } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';
import { useCart } from '@/context/CartContext';

export default function Hero() {
  const { openZeffy } = useCart();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3e0e14] via-[#4d121a] to-[#2b090e] text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {/* Dev Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Highlights */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Social Proof Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs font-semibold text-amber-300">
              <div className="flex items-center gap-0.5 text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
              </div>
              <span className="text-white/40">•</span>
              <span className="tracking-wide">ISKCON HALIFAX • TEMPLE KITCHEN</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.08]">
                Pure Sattvik Delicacies.{' '}
                <span className="block mt-1.5 text-emerald-400 italic font-normal">
                  Handcrafted with Devotion.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light pt-1">
                Halifax&apos;s sacred collection of All authentic Indian snacks, stone-roasted khakhras, fasting specialties, and comfort curries. Prepared strictly without onion, garlic, or meat—blessed and offered in the Vedic tradition of service.
              </p>
            </div>

            {/* Action Buttons: Dev Tulsi Green Primary & Clean Secondary */}
            <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openZeffy}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-base shadow-lg hover:shadow-emerald-900/40 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span>Order Online</span>
              </button>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 backdrop-blur-sm transition-all active:scale-[0.98]"
              >
                <span>Explore All Delicacies</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>

            {/* Temple Weekend Pickup Guarantee */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-amber-200/90 font-medium">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Pick up at <strong className="text-white font-bold">{TEMPLE_INFO.templeName}</strong> on Saturdays 4–6 PM &amp; Sundays 8–11 AM
              </span>
            </div>
          </div>

          {/* Right Column: Studio Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Ambient Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 blur-2xl pointer-events-none"></div>

              {/* Main Showcase Frame */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-black/40 group">
                <div className="aspect-[4/3] sm:aspect-[5/4] relative overflow-hidden">
                  <Image
                    src="/images/products-showcase.jpeg"
                    alt="Govinda's Satvik Foods product selection displayed at ISKCON Halifax"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* High Contrast Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/25 to-transparent"></div>
                  
                  {/* Subtle Clean Image Action Strip */}
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 p-3 sm:p-3.5 bg-[#27080c]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                        <p className="text-xs sm:text-sm font-semibold text-white tracking-tight truncate">All 20 Authentic Delicacies</p>
                      </div>
                      <p className="text-[11px] text-stone-300 tracking-tight truncate mt-0.5">Chikkis, Khakhras, Pickles &amp; Curries</p>
                    </div>
                    <a
                      href="#menu"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-xs shadow-md transition-colors shrink-0"
                    >
                      <span>From $2.99</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
