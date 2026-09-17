import React from 'react';
import Image from 'next/image';
import { Leaf, Heart, Phone, MapPin } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';

export default function Footer() {
  return (
    <footer className="bg-[#27080c] text-stone-300 border-t border-[#3e0e14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 bg-white">
                <Image
                  src="/images/govindas-logo.jpeg"
                  alt="Govinda's Kitchen Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  Halifax Govinda&apos;s Kitchen
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  Serve with Love
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Authentic Sattvik Indian snacks, traditional chikkis, wholesome khakhras, and gourmet ready meals.
              Pure vegetarian, non-allium (no onion &amp; no garlic), prepared with devotion.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300 font-medium pt-1">
              <Leaf className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Pure Sattvik Prasadam</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-300 transition-colors">
                  Snacks &amp; Meals Catalog
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  Why Sattvik &amp; No Onion/Garlic
                </a>
              </li>
              <li>
                <a href="#price-list" className="hover:text-amber-300 transition-colors">
                  Retail Price Sheet ($3 – $9)
                </a>
              </li>
              <li>
                <a href="#pickup" className="hover:text-amber-300 transition-colors">
                  Temple Pickup &amp; Sunday Feast
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Temple & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif font-bold text-white text-sm tracking-wider uppercase">
              Pickup &amp; Temple Location
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-stone-200 block">{TEMPLE_INFO.templeName}</strong>
                  <span>{TEMPLE_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${TEMPLE_INFO.phone}`}
                  className="text-stone-200 hover:text-amber-300 font-medium"
                >
                  {TEMPLE_INFO.phone}
                </a>
              </div>

              <div className="pt-2 text-[11px] text-stone-500 border-t border-white/5">
                All proceeds support ISKCON Halifax charitable initiatives and community feast programs.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© {new Date().getFullYear()} Govinda&apos;s Kitchen Halifax. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            <span>Prepared with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by ISKCON Halifax Devotees</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
