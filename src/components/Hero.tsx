'use client';

import React from 'react';
import Image from 'next/image';
import { Leaf, ShieldCheck, Sparkles, MapPin, ArrowRight, ShoppingBag, Star, Flame } from 'lucide-react';
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
              <span className="tracking-wide">HALIFAX SATTVIK STORE • ISKCON TEMPLE</span>
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
                Halifax&apos;s sacred collection of 20 authentic Indian snacks, stone-roasted khakhras, fasting specialties, and comfort curries. Prepared strictly without onion, garlic, or meat—blessed and offered in the Vedic tradition of service.
              </p>
            </div>

            {/* Dev Keynote Stat Metric Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center lg:text-left shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-white">100%</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">No Onion &amp; Garlic</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center lg:text-left shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-amber-300">20 Items</div>
                <div className="text-[11px] text-stone-300 font-semibold mt-0.5">Fresh Weekly Batches</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center lg:text-left shadow-sm">
                <div className="text-xl sm:text-2xl font-bold text-white">$2.99–$8.99</div>
                <div className="text-[11px] text-stone-300 font-medium mt-0.5">Clear Value Pricing</div>
              </div>
            </div>

            {/* Action Buttons: Dev Tulsi Green Primary & Clean Secondary */}
            <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={openZeffy}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-base shadow-lg hover:shadow-emerald-900/40 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span>Order on Zeffy Store</span>
              </button>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 backdrop-blur-sm transition-all active:scale-[0.98]"
              >
                <span>Explore 20 Delicacies</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </a>
            </div>

            {/* Temple Weekend Pickup Guarantee */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-amber-200/90 font-medium">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Pick up at <strong className="text-white font-bold">{TEMPLE_INFO.templeName}</strong> during Saturdays 4–6 PM &amp; Sundays 8–11 AM
              </span>
            </div>
          </div>

          {/* Right Column: Studio Showcase Frame with Dev Styling */}
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
                  
                  {/* Floating Action Strip - Resized on Desktop to Start Beside the Sattvik Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-[152px] sm:right-3.5 p-3 sm:p-3.5 bg-[#27080c]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                        <p className="text-[11px] sm:text-xs font-bold text-white tracking-tight truncate">All 20 Packaged Items</p>
                      </div>
                      <p className="text-[10px] sm:text-[10.5px] text-stone-300 tracking-tight truncate">Chikkis, Khakhras, Pickles &amp; Curries</p>
                    </div>
                    <a
                      href="#price-list"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-bold text-xs shadow-md transition-colors shrink-0"
                    >
                      <span>From $2.99</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative Secondary Mini Floating Badges with Dev Maroon Glass */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 sm:-left-8 px-3.5 py-2.5 rounded-2xl bg-[#27080c]/95 backdrop-blur-md shadow-2xl border border-white/15 items-center gap-2.5 animate-warm-float z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-left shrink-0">
                  <div className="text-xs font-bold text-white leading-tight">100% Sattvik</div>
                  <div className="text-[10px] text-emerald-400 font-semibold leading-tight mt-0.5">Sanctified &amp; Blessed</div>
                </div>
              </div>

              <div className="hidden sm:flex absolute -top-6 -right-6 p-3.5 rounded-2xl bg-[#27080c]/95 backdrop-blur-md shadow-2xl border border-white/15 items-center gap-3 animate-warm-float" style={{ animationDelay: '2.5s' }}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-400/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Ekadashi Fasting</div>
                  <div className="text-[10px] text-amber-300 font-semibold">Grain-Free Approved</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
