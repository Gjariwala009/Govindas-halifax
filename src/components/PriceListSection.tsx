'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, FileText, Download, X, ExternalLink } from 'lucide-react';

export default function PriceListSection() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadFlyer = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/govindas-retail-price-list.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = "Govindas-Halifax-Retail-Price-List.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Download failed, falling back to direct link:', err);
      const fallbackLink = document.createElement('a');
      fallbackLink.href = '/govindas-retail-price-list.pdf';
      fallbackLink.download = 'Govindas-Halifax-Retail-Price-List.pdf';
      fallbackLink.target = '_blank';
      fallbackLink.click();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="price-list" className="py-20 sm:py-28 bg-[#fcf8ef] border-b border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Showcase Card - Warm Ivory with Golden Amber Border */}
        <div className="bg-white rounded-3xl border-2 border-amber-200 shadow-[0_10px_40px_rgba(245,158,11,0.08)] p-7 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Description & Price Brackets */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-950 text-xs font-black uppercase tracking-wider border border-amber-400/50 shadow-xs">
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                <span>Official Price Sheet • 6 Clear Price Tiers</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 leading-tight tracking-tight">
                Govinda&apos;s Retail Price List
              </h2>

              <p className="text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
                Clear, transparent pricing in Canadian Dollars (CAD) for all 20 of our packaged Sattvik food items.
                From <strong className="text-stone-950 font-black text-amber-900">$2.99</strong> crispy Khakhras to <strong className="text-stone-950 font-black text-amber-900">$8.99</strong> Ayurvedic Gulkand, every purchase directly supports the kitchen services of ISKCON Halifax.
              </p>

              {/* Price bracket grid with rich colorful cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-amber-50/60 border-2 border-amber-200 hover:border-amber-400 hover:shadow-xs transition-all">
                  <div className="text-xs text-amber-900 font-bold">Whole-Wheat Crisps</div>
                  <div className="text-2xl font-black text-stone-950 mt-1">$2.99</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Khakhra Jeera &amp; Methi</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border-2 border-amber-200 hover:border-amber-400 hover:shadow-xs transition-all">
                  <div className="text-xs text-amber-900 font-bold">Chikkis &amp; Chips</div>
                  <div className="text-2xl font-black text-stone-950 mt-1">$3.99</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Peanut, Til, Banana Chips</div>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50/60 border-2 border-orange-200 hover:border-orange-400 hover:shadow-xs transition-all">
                  <div className="text-xs text-orange-950 font-bold">Bhel &amp; Street Mix</div>
                  <div className="text-2xl font-black text-stone-950 mt-1">$4.99</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Authentic Bombay Bhel</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/60 border-2 border-emerald-200 hover:border-emerald-400 hover:shadow-xs transition-all">
                  <div className="text-xs text-emerald-950 font-bold">Curries, Halwa &amp; Meals</div>
                  <div className="text-2xl font-black text-stone-950 mt-1">$5.99</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Ready Meals, Makhana, Halwas</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border-2 border-amber-200 hover:border-amber-400 hover:shadow-xs transition-all">
                  <div className="text-xs text-amber-900 font-bold">Glass Jar Pickles</div>
                  <div className="text-2xl font-black text-stone-950 mt-1">$6.99</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Mango &amp; Lemon Pickles</div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50/60 border-2 border-rose-200 hover:border-rose-400 hover:shadow-xs transition-all">
                  <div className="text-xs text-rose-950 font-bold">Ayurvedic Gulkand</div>
                  <div className="text-2xl font-black text-stone-950 mt-1">$8.99</div>
                  <div className="text-[11px] text-stone-600 font-medium mt-0.5">Pure Rose Petal Preserve</div>
                </div>
              </div>

              {/* High-Impact Action Links */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => setIsZoomed(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-stone-950 text-xs sm:text-sm font-black shadow-md hover:shadow-amber-500/40 transition-all active:scale-95 cursor-pointer border border-amber-300"
                >
                  <Eye className="w-4 h-4 text-stone-950" />
                  <span>View Printable Flyer</span>
                </button>
                <button
                  onClick={handleDownloadFlyer}
                  disabled={isDownloading}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-amber-200 hover:border-amber-400 bg-white hover:bg-amber-50 text-stone-900 text-xs sm:text-sm font-bold transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-95 disabled:opacity-50"
                  aria-label="Download Retail Price List Flyer as PDF"
                >
                  <Download className="w-4 h-4 text-amber-700" />
                  <span>{isDownloading ? 'Preparing PDF...' : 'Download Flyer (PDF)'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: High-Drama Flyer Frame with Golden Border */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                onClick={() => setIsZoomed(true)}
                className="relative cursor-pointer group rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400 hover:border-orange-500 transition-all max-w-sm w-full bg-stone-50"
              >
                <div className="relative aspect-[3/4] w-full p-2.5 bg-amber-50/40">
                  <Image
                    src="/images/retail-price-list-v2.jpeg"
                    alt="Govinda's Satvik Foods Retail Price List Flyer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  />
                </div>
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-amber-400 text-stone-950 font-black text-xs shadow-xl flex items-center gap-2 group-hover:scale-105 transition-transform">
                    <Eye className="w-4 h-4 text-stone-950" /> Click to Enlarge Flyer
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
          className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-stone-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-amber-200 bg-amber-50/70">
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                  Govinda&apos;s Satvik Foods — Retail Price Sheet
                </span>
                <span className="hidden sm:inline text-xs text-amber-900 font-bold">• 20 Delicacies</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadFlyer}
                  disabled={isDownloading}
                  className="px-3 py-1.5 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-amber-100 transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer disabled:opacity-50"
                  title="Download Flyer as PDF"
                >
                  <Download className="w-4 h-4 text-amber-700" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setIsZoomed(false)}
                  className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-amber-100 transition-colors cursor-pointer"
                  aria-label="Close flyer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Flyer Image Container */}
            <div className="relative w-full h-[78vh] bg-stone-100 flex items-center justify-center p-4">
              <Image
                src="/images/retail-price-list-v2.jpeg"
                alt="Govinda's Satvik Foods Retail Price List Full"
                fill
                className="object-contain p-2"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
