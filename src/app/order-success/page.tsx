'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Sparkles,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Download,
  ShoppingBag,
  HeartHandshake,
  ExternalLink,
  PartyPopper,
  MailCheck,
} from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';
import ConfettiCanvas from '@/components/ConfettiCanvas';

export default function OrderSuccessPage() {
  const [triggerCount, setTriggerCount] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const encodedAddress = encodeURIComponent(TEMPLE_INFO.address);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  const handleDownloadFlyer = async () => {
    try {
      setIsDownloading(true);
      const response = await fetch('/govindas-retail-price-list.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'Govindas-Halifax-Retail-Price-List.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error('Download failed, falling back:', err);
      window.open('/govindas-retail-price-list.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative min-h-[90vh] bg-[#faf6f0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Interactive Confetti Cannon Canvas */}
      <ConfettiCanvas triggerKey={triggerCount} />

      {/* Decorative ambient background glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-400/15 via-emerald-400/15 to-rose-400/15 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        
        {/* Main Joyful Celebration Card */}
        <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl p-6 sm:p-12 text-center relative overflow-hidden">
          
          {/* Subtle top celebration accent bar */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-400 via-[#4d8b31] to-[#3e0e14]"></div>

          {/* Animated Bouncing Celebration Badge */}
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-amber-100 via-emerald-100 to-amber-200 flex items-center justify-center animate-pulse-glow">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4d8b31] flex items-center justify-center shadow-lg text-white animate-pop-in">
                <CheckCircle2 className="w-12 h-12 sm:w-14 sm:h-14 stroke-[2.2] animate-joyful-bounce" />
              </div>
            </div>
            
            {/* Playful Floating Mini Badges */}
            <span className="absolute -top-2 -right-2 text-2xl sm:text-3xl animate-bounce">🎉</span>
            <span className="absolute -bottom-1 -left-2 text-xl sm:text-2xl animate-pulse">✨</span>
          </div>

          {/* Joyful Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs sm:text-sm font-semibold border border-emerald-200 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Payment Successful • Order Confirmed</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Hare Krishna! Your Delicacies Are Confirmed!
          </h1>

          <p className="mt-4 text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Thank you for ordering with <strong className="text-stone-900 font-semibold">Govinda&apos;s Kitchen Halifax</strong>.
            Your Sattvik food package is being prepared with pure devotion and will be ready for you this coming weekend.
          </p>

          {/* Re-trigger Confetti Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setTriggerCount((prev) => prev + 1)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 hover:bg-amber-200 text-amber-900 text-xs sm:text-sm font-semibold transition-all active:scale-95 cursor-pointer border border-amber-300/80 shadow-xs"
              title="Click to shoot another burst of celebratory confetti!"
            >
              <PartyPopper className="w-4 h-4 text-amber-700" />
              <span>Click to Celebrate Again! 🎊</span>
            </button>
          </div>

          {/* Order Metadata Strip - Real World Zeffy Pickup Details */}
          <div className="mt-8 pt-8 border-t border-stone-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#eee4d5]">
              <div className="text-xs text-stone-500 font-medium">Order Identification</div>
              <div className="text-sm sm:text-base font-bold text-stone-900 mt-0.5">Your Email or Phone</div>
              <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Confirmed via Zeffy
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#eee4d5]">
              <div className="text-xs text-stone-500 font-medium">Official Receipt</div>
              <div className="text-sm font-semibold text-stone-800 mt-1 flex items-center gap-1.5">
                <MailCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                Sent to your email
              </div>
              <div className="text-[11px] text-stone-500 mt-1">Check your inbox for Zeffy receipt</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#faf6f0] border border-[#eee4d5]">
              <div className="text-xs text-stone-500 font-medium">Pickup Ready</div>
              <div className="text-sm font-bold text-stone-900 mt-1">This Weekend</div>
              <div className="text-[11px] text-stone-600 mt-1">Sat 4–6 PM • Sun 8–11 AM</div>
            </div>
          </div>
        </div>

        {/* What Happens Next: 3 Simple Pickup Steps */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 text-center">
            How to Collect Your Order in 3 Easy Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm relative group hover:border-amber-400/80 transition-all">
              <div className="w-9 h-9 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
                1
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-1.5">
                Check Your Email
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Zeffy has emailed you an official payment receipt and order summary. Keep this on your phone.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm relative group hover:border-amber-400/80 transition-all">
              <div className="w-9 h-9 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
                2
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-1.5">
                Visit ISKCON Halifax
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Drop in during Saturday program (4:00 PM – 6:00 PM) or Sunday morning program (8:00 AM – 11:00 AM).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-sm relative group hover:border-amber-400/80 transition-all">
              <div className="w-9 h-9 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
                3
              </div>
              <h3 className="font-serif font-bold text-lg text-stone-900 mb-1.5">
                Collect &amp; Savor
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Provide your email address or phone number at the Govinda&apos;s counter to receive your packed Sattvik delicacies!
              </p>
            </div>
          </div>
        </div>

        {/* Temple Pickup Pavilion Card */}
        <div className="bg-[#3e0e14] text-white rounded-3xl p-7 sm:p-10 shadow-xl relative overflow-hidden border border-amber-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/30">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Pickup Counter Location</span>
              </span>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {TEMPLE_INFO.templeName}
              </h3>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {TEMPLE_INFO.address}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-stone-300 pt-1">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Saturdays 4–6 PM • Sundays 8–11 AM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <a href={`tel:${TEMPLE_INFO.phone}`} className="text-amber-300 font-semibold hover:underline">
                    {TEMPLE_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-100 text-stone-900 font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <MapPin className="w-4 h-4 text-emerald-700" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href={`tel:${TEMPLE_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Kitchen Coordinator</span>
              </a>
            </div>
          </div>
        </div>

        {/* Devotional Sangha Impact Note */}
        <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/90 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300/80 flex items-center justify-center text-amber-800 shrink-0">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-1">
            <h4 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
              Serving the Halifax Community
            </h4>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Every purchase from Govinda&apos;s directly supports ISKCON Halifax deity worship services, spiritual education, and free Sunday feast prasadam distribution.
            </p>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/#menu"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#4d8b31] hover:bg-[#3b6d25] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span>Explore More Delicacies</span>
          </Link>

          <button
            onClick={handleDownloadFlyer}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-stone-300 hover:bg-white bg-stone-50 text-stone-800 text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-sm cursor-pointer active:scale-95 disabled:opacity-50"
          >
            <Download className="w-4 h-4 text-stone-600" />
            <span>{isDownloading ? 'Preparing PDF...' : 'Download Price Sheet (PDF)'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
