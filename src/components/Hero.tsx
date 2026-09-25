'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight, ShoppingBag, Sparkles, Star } from 'lucide-react';
import { HERO_VARIANT, MENU_ITEMS, TEMPLE_INFO } from '@/data/menu';
import { useCart } from '@/context/CartContext';

export default function Hero() {
  const { openZeffy } = useCart();
  const isDiwaliHero = HERO_VARIANT === 'diwali';

  const handleDiwaliClick = () => {
    window.dispatchEvent(new CustomEvent('catalog-category-change', { detail: 'Diwali Sweets' }));
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3e0e14] via-[#4d121a] to-[#2b090e] text-white pt-16 pb-24 lg:pt-24 lg:pb-32">
      {isDiwaliHero && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 22 }, (_, index) => (
            <span key={index} className={`diwali-confetti diwali-confetti-${index + 1}`} />
          ))}
          <span className="diwali-sparkler diwali-sparkler-1" />
          <span className="diwali-sparkler diwali-sparkler-2" />
          <span className="diwali-sparkler diwali-sparkler-3" />
          <span className="diwali-sparkler diwali-sparkler-4" />
          <span className="diwali-sparkler diwali-sparkler-5" />
          <span className="diwali-sparkler diwali-sparkler-6" />
          <span className="diwali-sparkler diwali-sparkler-7" />
          <span className="diwali-sparkler diwali-sparkler-8" />
        </div>
      )}
      {/* Dev Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Highlights */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Campaign Chip */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-950/20 ${isDiwaliHero ? 'bg-amber-300 text-stone-950' : 'bg-white/10 border border-white/15 text-amber-300'}`}>
              {isDiwaliHero ? <Sparkles className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5 fill-amber-300" />}
              <span>{isDiwaliHero ? 'Diwali Sweets Collection' : 'ISKCON Halifax Temple Kitchen'}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.08]">
                {isDiwaliHero ? (
                  <>A Diwali made sweeter.<span className="block mt-1.5 text-amber-300 italic font-normal">Offered with Devotion.</span></>
                ) : (
                  <>Pure Sattvik Delicacies.<span className="block mt-1.5 text-emerald-400 italic font-normal">Handcrafted with Devotion.</span></>
                )}
              </h1>
              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light pt-1">
                {isDiwaliHero
                  ? "Discover handcrafted ladoos, jalebi, burfi, and festive chivda from Govinda's Kitchen Halifax. Prepared with pure ingredients and offered in the spirit of seva."
                  : "Halifax's sacred collection of authentic Indian snacks, stone-roasted khakhras, fasting specialties, and comfort curries. Prepared strictly without onion, garlic, or meat."}
              </p>
            </div>

            {/* Action Buttons: Dev Tulsi Green Primary & Clean Secondary */}
            <div className="pt-3 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {isDiwaliHero && (
                <Link href="/?category=Diwali%20Sweets#menu" onClick={handleDiwaliClick} className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-base shadow-lg shadow-amber-950/30 transition-all duration-200 active:scale-[0.98]">
                  <Sparkles className="w-5 h-5" />
                  <span>Shop Diwali Sweets</span>
                </Link>
              )}

              <button
                onClick={openZeffy}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-semibold text-base shadow-lg hover:shadow-emerald-900/40 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span>Order</span>
              </button>

              <Link
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-white/15 backdrop-blur-sm transition-all active:scale-[0.98]"
              >
                <span>Explore All Delicacies</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
            </div>

            {/* Temple Weekend Pickup Guarantee */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-2 text-xs text-amber-200/90 font-medium">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Pick up at <strong className="text-white font-bold">{TEMPLE_INFO.templeName}</strong> during {TEMPLE_INFO.pickupHoursSummary}
              </span>
            </div>
          </div>

          {/* Right Column: Studio Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Ambient Halo */}
              <div className="absolute -inset-2 rounded-3xl bg-amber-500/10 blur-2xl pointer-events-none"></div>

              {isDiwaliHero ? (
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl border-2 border-amber-300/60 bg-[#27080c] shadow-2xl overflow-hidden">
                <Image
                  src="/images/diwali.png"
                  alt="Diwali sweets and festive decorations at Govinda's Kitchen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#27080c]/60 via-transparent to-[#27080c]/10" />
                <div className="absolute left-8 top-7 text-amber-200 animate-diwali-sparkle"><Sparkles className="h-7 w-7" /></div>
                <div className="absolute right-10 top-16 text-amber-300 animate-diwali-sparkle-delayed"><Sparkles className="h-5 w-5" /></div>
              </div>
              ) : (
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-black/40 group">
                <Image src="/images/products-showcase.jpeg" alt="Govinda's Satvik Foods product selection displayed at ISKCON Halifax" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover transition-transform duration-700 group-hover:scale-105" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/25 to-transparent" />
                <div className="absolute bottom-3 inset-x-3 p-3 bg-[#27080c]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-white">All {MENU_ITEMS.length} Authentic Delicacies</p>
                  <Link href="#menu" className="inline-flex items-center gap-1 rounded-full bg-[#4d8b31] px-3 py-1.5 text-xs font-bold text-white"><span>Explore</span><ArrowRight className="h-3 w-3" /></Link>
                </div>
              </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
