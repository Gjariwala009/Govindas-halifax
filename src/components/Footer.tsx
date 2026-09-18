import React from 'react';
import Image from 'next/image';
import { Leaf, Heart, Phone, MapPin, Clock, Sparkles } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';

export default function Footer() {
  return (
    <footer className="bg-[#2a070e] text-stone-300 border-t-2 border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Col 1: Brand & Sacred Mission */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 shadow-md">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/govindas-logo.jpeg"
                    alt="Govinda's Kitchen Logo"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white">
                  Govinda&apos;s Kitchen Halifax
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                  Serve with Love • ISKCON Halifax
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm font-light">
              Authentic Sattvik Indian snacks, traditional chikkis, stone-roasted khakhras, and gourmet ready meals.
              100% pure vegetarian, non-allium (no onion &amp; no garlic), prepared and offered in pure devotion.
            </p>

            <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-emerald-400/40 text-emerald-300 font-semibold shadow-xs">
                <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Sattvik Prasadam</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-amber-400/40 text-amber-300 font-semibold shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>No Onion &amp; Garlic</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wider uppercase">
              Explore Catalog
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-normal">
              <li>
                <a href="#menu" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Snacks &amp; Delicacies (20 Items)
                </a>
              </li>
              <li>
                <a href="#about" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Why Sattvik &amp; No Onion/Garlic
                </a>
              </li>
              <li>
                <a href="#price-list" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Retail Price Sheet ($2.99 – $8.99)
                </a>
              </li>
              <li>
                <a href="#pickup" className="text-stone-300 hover:text-amber-300 transition-colors">
                  Temple Weekend Pickup
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Temple Location & Weekly Schedule */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wider uppercase">
              Temple Pickup Counter
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-stone-300 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">{TEMPLE_INFO.templeName}</strong>
                  <span>{TEMPLE_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Weekly Pickup Hours:</strong>
                  <span>Saturdays 4:00 PM – 6:00 PM<br />Sundays 8:00 AM – 11:00 AM</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${TEMPLE_INFO.phone}`}
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold"
                >
                  {TEMPLE_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-amber-200/70 border-t border-white/10">
                All proceeds support ISKCON Halifax charitable initiatives and Sunday love feast programs.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3 font-light">
          <p>© {new Date().getFullYear()} Govinda&apos;s Kitchen Halifax. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-stone-300">
            <span>Prepared with</span>
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-400" />
            <span>by ISKCON Halifax Devotees</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
