'use client';

import React from 'react';
import { MapPin, Clock, Phone, HeartHandshake, ShoppingBag, ShieldCheck, ExternalLink } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';
import { useCart } from '@/context/CartContext';

export default function PickupInfo() {
  const { openZeffy } = useCart();

  const encodedAddress = encodeURIComponent(
    '29 Westwood Boulevard, Upper Tantallon, NS B3Z 1L3, Canada'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="pickup" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Pickup Counter &amp; Temple Programs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            ISKCON Halifax Temple
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
            Visit our temple counter in Upper Tantallon to collect your fresh weekend order, meet the community,
            and enjoy peaceful temple programs and festivals.
          </p>
        </div>

        {/* Temple Store Hours & Location Showcase - Dev Deep Maroon Card */}
        <div className="bg-[#3e0e14] text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xl relative overflow-hidden border border-amber-500/20">
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            
            {/* Info Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-medium tracking-wider uppercase border border-amber-400/30">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Pickup Counter &amp; Programs</span>
              </span>

              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                {TEMPLE_INFO.templeName}
              </h3>

              <div className="space-y-4 text-stone-200 text-sm sm:text-base font-light">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Temple Address:</strong>
                    <span className="text-stone-300">{TEMPLE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Weekly Pickup Hours:</strong>
                    <div className="mt-2 space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span><strong className="text-white font-medium">Saturdays:</strong> 4:00 PM – 6:00 PM (Youth &amp; Community Gathering)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                        <span><strong className="text-white font-medium">Sundays:</strong> 8:00 AM – 11:00 AM (Sunday Love Feast &amp; Satsang)</span>
                      </div>
                    </div>
                    <p className="text-xs text-amber-200/80 mt-2 font-normal">
                      Also open during Vaishnava festivals: Janmashtami, Radhastami, Gaura Purnima, and Diwali.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
                  <div>
                    <strong className="text-white block font-semibold">Order Inquiries &amp; Coordinator:</strong>
                    <a
                      href={`tel:${TEMPLE_INFO.phone}`}
                      className="text-amber-300 hover:text-amber-200 transition-colors font-semibold"
                    >
                      {TEMPLE_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap gap-3.5">
                <button
                  onClick={openZeffy}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-stone-950" />
                  <span>Order Online</span>
                </button>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-stone-100 text-stone-900 font-semibold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
                >
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
                </a>

                <a
                  href={`tel:${TEMPLE_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Coordinator</span>
                </a>
              </div>
            </div>

            {/* Right Card / Devotional Sangha Guarantee */}
            <div className="lg:col-span-5 bg-[#27080c]/80 backdrop-blur-sm rounded-3xl p-7 sm:p-8 border border-white/10 shadow-lg space-y-5">
              <div className="flex items-center gap-2.5 text-amber-300 font-bold text-base">
                <HeartHandshake className="w-5 h-5 text-amber-400" />
                <span>Serving the Halifax Sangha</span>
              </div>
              
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-light">
                Govinda&apos;s Kitchen is a devotional service initiative managed by volunteers of ISKCON Halifax. 100% of proceeds directly fund the temple deity worship, spiritual education, and free prasadam distribution to students and families in Nova Scotia.
              </p>

              <div className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed Weekend Pickup</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed font-light">
                  Simply present your order confirmation email or state your name at the Govinda&apos;s counter. Your fresh packet will be prepared and reserved for you.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
