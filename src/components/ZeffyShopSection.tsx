'use client';

import React, { useState } from 'react';
import { ShieldCheck, Sparkles, ExternalLink, Heart, Store } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';

export default function ZeffyShopSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section id="order-online" className="py-16 sm:py-24 bg-[#faf6f0] border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Online Store</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-stone-900 tracking-tight">
            Order Online &amp; Pay with Zero Fees
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Order fresh Sattvik sandwiches, street chaats, and desserts directly through our verified
            Zeffy storefront. <strong>100% of your payment goes to ISKCON Halifax</strong> with zero platform deductions.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-600">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free Processing via Zeffy</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-sm">
              <Heart className="w-4 h-4 text-rose-500" />
              <span>Supports Temple Kitchen &amp; Feasts</span>
            </div>
            <a
              href={TEMPLE_INFO.zeffyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-4"
            >
              <span>Open in full tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Store Frame */}
        <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden relative">
          {/* Top Bar on the frame */}
          <div className="bg-[#3e0e14] px-5 py-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Store className="w-4 h-4 text-amber-400" />
              <span className="font-serif font-bold text-sm sm:text-base">
                Govinda&apos;s Kitchen Live Store
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Pickup at ISKCON Halifax</span>
            </div>
          </div>

          {/* Iframe container */}
          <div className="relative w-full min-h-[600px] sm:min-h-[750px] bg-stone-50">
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 z-10 gap-3">
                <div className="w-10 h-10 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-xs text-stone-500 font-medium">
                  Loading Govinda&apos;s Zeffy Storefront...
                </p>
              </div>
            )}

            <iframe
              title="Govinda's Kitchen Online Store powered by Zeffy"
              src={TEMPLE_INFO.zeffyEmbedUrl}
              className="w-full h-[750px] border-0"
              onLoad={() => setIsLoaded(true)}
              allow="payment"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
