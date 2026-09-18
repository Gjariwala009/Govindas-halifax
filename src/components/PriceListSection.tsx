'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, FileText, Download, X } from 'lucide-react';

export default function PriceListSection() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="price-list" className="py-16 sm:py-20 bg-[#faf6f0] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Description & Quick Summary */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                <span>Official Price Sheet</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 leading-tight">
                Govinda&apos;s Retail Price List
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Clear, transparent pricing in Canadian Dollars (CAD) for all 20 of our packaged Sattvik food items.
                From $2.99 crispy Khakhras to $8.99 Ayurvedic Gulkand, every purchase directly supports the mission and kitchen services of ISKCON Halifax.
              </p>

              {/* Price bracket grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-xs text-stone-500 font-medium">Whole-Wheat Crisps</div>
                  <div className="text-xl font-bold text-stone-900 mt-1">$2.99</div>
                  <div className="text-[11px] text-stone-400">Khakhra Jeera &amp; Methi</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-xs text-stone-500 font-medium">Chikkis &amp; Chips</div>
                  <div className="text-xl font-bold text-stone-900 mt-1">$3.99</div>
                  <div className="text-[11px] text-stone-400">Peanut, Rajgira, Til, Banana Chips</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-xs text-stone-500 font-medium">Bhel &amp; Street Mix</div>
                  <div className="text-xl font-bold text-stone-900 mt-1">$4.99</div>
                  <div className="text-[11px] text-stone-400">Authentic Bombay Bhel</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-xs text-stone-500 font-medium">Curries, Halwa &amp; Snacks</div>
                  <div className="text-xl font-bold text-stone-900 mt-1">$5.99</div>
                  <div className="text-[11px] text-stone-400">Meals, Halwa, Makhana, Farali, Beetroot</div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <div className="text-xs text-stone-500 font-medium">Glass Jar Pickles</div>
                  <div className="text-xl font-bold text-stone-900 mt-1">$6.99</div>
                  <div className="text-[11px] text-stone-400">Mango &amp; Lemon Pickles</div>
                </div>

                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="text-xs text-amber-800 font-medium">Ayurvedic Gulkand</div>
                  <div className="text-xl font-bold text-amber-900 mt-1">$8.99</div>
                  <div className="text-[11px] text-amber-700">Pure Rose Petal Preserve</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3e0e14] hover:bg-[#571720] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Full Printable Flyer</span>
                </button>
                <a
                  href="/images/retail-price-list-v2.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-medium transition-all"
                >
                  <Download className="w-4 h-4 text-stone-500" />
                  <span>Open Flyer in New Tab</span>
                </a>
              </div>
            </div>

            {/* Right Column: Preview of the Flyer */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setIsZoomed(true)}
                className="relative cursor-pointer group rounded-2xl overflow-hidden shadow-lg border-2 border-stone-200 hover:border-amber-400 transition-all max-w-sm w-full bg-white"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/retail-price-list-v2.jpeg"
                    alt="Govinda's Satvik Foods Retail Price List Flyer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-stone-900 font-semibold text-xs shadow-lg flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-emerald-600" /> Click to Enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-stone-200">
              <span className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                Govinda&apos;s Satvik Foods — Retail Price List
              </span>
              <button
                onClick={() => setIsZoomed(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative w-full h-[75vh] bg-stone-50">
              <Image
                src="/images/retail-price-list-v2.jpeg"
                alt="Govinda's Satvik Foods Retail Price List Full"
                fill
                className="object-contain p-3"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
