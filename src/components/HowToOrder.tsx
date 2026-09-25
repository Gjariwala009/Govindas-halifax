'use client';

import React from 'react';
import { MapPin, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';

export default function HowToOrder() {
  const { openZeffy } = useCart();

  const encodedAddress = encodeURIComponent(
    '29 Westwood Boulevard, Upper Tantallon, NS B3Z 1L3, Canada'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <section id="how-to-order" className="py-16 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-emerald-200">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            <span>Simple 3-Step Pickup Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            How to Order &amp; Collect Your Delicacies
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
            Govinda&apos;s operates from ISKCON Halifax Temple. Order and pay online securely
            through our online store, and collect your Delicacies.
          </p>
        </div>

        {/* 3-Step Journey Cards with Calm Cream Finish */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#faf6f0] border border-[#eee4d5] relative group hover:border-amber-400/70 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-6">
                01
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5">
                Select Your Delicacies
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-normal mb-6">
                Browse our authentic packaged items—from crispy Kerala banana chips and whole-wheat khakhras to Ayurvedic Gulkand and rich Dal Makhani.
              </p>
            </div>
            <div>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#3e0e14] hover:bg-[#571720] text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <span>View All Delicacies</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-300" />
              </a>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#faf6f0] border border-[#eee4d5] relative group hover:border-amber-400/70 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-6">
                02
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5">
                Order Online for Pickup
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-normal mb-6">
                Tap &ldquo;Order Online&rdquo; to select your favorites and complete checkout securely. Every purchase directly supports ISKCON Halifax temple.
              </p>
            </div>
            <div>
              <button
                onClick={openZeffy}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4d8b31] hover:bg-[#3c7025] text-white text-xs font-semibold shadow-sm transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-amber-300" />
                <span>Order Online</span>
              </button>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#faf6f0] border border-[#eee4d5] relative group hover:border-amber-400/70 hover:shadow-sm transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-6">
                03
              </div>
              <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5">
                Weekend Temple Pickup
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-normal mb-6">
                Collect your prepared order at the Govinda&apos;s counter at ISKCON Halifax during {TEMPLE_INFO.pickupHoursSummary}.
              </p>
            </div>
            <div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100/80 text-stone-800 text-xs font-semibold shadow-xs transition-all active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                <span>View Temple Map</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

