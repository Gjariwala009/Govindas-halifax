import React from 'react';
import Image from 'next/image';
import { Leaf, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#3e0e14] via-[#4d121a] to-[#2b090e] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Highlights */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-xs sm:text-sm font-medium text-amber-300">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span>Halifax&apos;s Authentic Sattvik Store</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-tight">
              Pure Sattvik Foods,{' '}
              <span className="text-emerald-400 italic block sm:inline font-normal">
                Served with Love
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
              Experience the wholesome purity of authentic vegetarian snacks, fasting specialties,
              and ready-to-eat comfort meals prepared in the spirit of devotion. Strictly without onion, garlic, or meat.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Leaf className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  100% No Onion &amp; Garlic
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Ekadashi Fasting Treats
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <Heart className="w-5 h-5 text-rose-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Prepared with Devotion
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-stone-200">
                  Temple Pickup Available
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a
                href="#menu"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-emerald-900/30 transition-all active:scale-95"
              >
                Browse Menu &amp; Snacks
              </a>
              <a
                href="#order-online"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
              >
                Order Online (Zeffy Store)
              </a>
            </div>

            <div className="pt-2 text-xs text-amber-200/80 flex items-center justify-center lg:justify-start gap-1.5">
              <span className="font-semibold">Local Pickup:</span>
              <span>{TEMPLE_INFO.address}</span>
            </div>
          </div>

          {/* Right Column: Hero Showcase Image */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Image Frame with soft golden border & shadow */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-amber-400/30 shadow-2xl bg-black/40">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <Image
                    src="/images/products-showcase.jpeg"
                    alt="Govinda's Satvik Foods product selection displayed at ISKCON Halifax"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-900/85 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-between text-xs sm:text-sm">
                  <div>
                    <p className="font-semibold text-amber-300">Govinda&apos;s Packaged Foods</p>
                    <p className="text-stone-300 text-xs">Authentic snacks, chikkis, khakhras &amp; ready curries</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#4d8b31] text-white font-bold text-xs shrink-0">
                    From $3 CAD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
