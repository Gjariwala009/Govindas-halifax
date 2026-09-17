'use client';

import React from 'react';
import { MapPin, Clock, Phone, HeartHandshake, ShoppingBag, ShieldCheck } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';
import { useCart } from '@/context/CartContext';

export default function PickupInfo() {
  const { openZeffy } = useCart();

  const encodedAddress = encodeURIComponent(
    '29 Westwood Boulevard, Upper Tantallon, NS B3Z 1L3, Canada'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="pickup" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Local Halifax Pickup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            How to Order &amp; Collect Your Snacks
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            Govinda&apos;s Kitchen operates directly from the ISKCON Halifax Temple. Order and pay online seamlessly
            with 0% fees through our verified Zeffy store, and pick up your fresh delicacies during temple weekend programs!
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative">
            <span className="w-8 h-8 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
              1
            </span>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Browse Our Sattvik Delicacies
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Explore authentic vegetarian snacks, Ekadashi fasting treats, and gourmet ready meals. All prepared without onion or garlic with pure devotion.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative">
            <span className="w-8 h-8 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
              2
            </span>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Order Online via Zeffy
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Click &ldquo;Order on Zeffy&rdquo; on any item to complete your order online with 0% platform deductions. You&apos;ll receive an instant confirmation receipt.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative">
            <span className="w-8 h-8 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
              3
            </span>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Pick Up at the Temple
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Collect your freshly packaged items at the ISKCON Halifax counter on Saturdays (4:00 PM – 6:00 PM) or Sundays (8:00 AM – 11:00 AM).
            </p>
          </div>
        </div>

        {/* Details Box */}
        <div className="bg-[#3e0e14] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                Location &amp; Pickup Hours
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {TEMPLE_INFO.templeName}
              </h3>

              <div className="space-y-3 text-stone-200 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Temple Address:</strong>
                    <span>{TEMPLE_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Temple Program &amp; Pickup Hours:</strong>
                    <div className="mt-1.5 space-y-1 text-xs sm:text-sm">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span><strong>Saturdays:</strong> 4:00 PM – 6:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-amber-400"></span>
                        <span><strong>Sundays:</strong> 8:00 AM – 11:00 AM</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-300 mt-1.5">
                      Also open during Janmashtami, Radhastami, Gaura Purnima, and other Vaishnava festivals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Direct Contact / Coordinator:</strong>
                    <a
                      href={`tel:${TEMPLE_INFO.phone}`}
                      className="text-amber-300 hover:underline font-semibold"
                    >
                      {TEMPLE_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={openZeffy}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-stone-950" />
                  <span>Order on Zeffy Store</span>
                </button>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-stone-900 font-semibold text-xs sm:text-sm shadow-md hover:bg-stone-100 transition-all"
                >
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>Open in Google Maps</span>
                </a>

                <a
                  href={`tel:${TEMPLE_INFO.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

            {/* Right Card / Temple Community Note */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm">
                <HeartHandshake className="w-5 h-5" />
                <span>Supporting the Halifax Community</span>
              </div>
              <p className="text-stone-200 leading-relaxed">
                Govinda&apos;s Kitchen is managed by devotees of ISKCON Halifax. 100% of proceeds from these snacks directly support temple worship, prasadam distribution, and community services.
              </p>
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 text-xs text-stone-300 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Easy Weekend Pickup</span>
                </div>
                <p>
                  Show your Zeffy email confirmation or simply mention your name at the Govinda&apos;s counter to collect your prepared parcel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
