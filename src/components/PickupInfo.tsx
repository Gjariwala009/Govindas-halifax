import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, HeartHandshake } from 'lucide-react';
import { TEMPLE_INFO } from '@/data/menu';

export default function PickupInfo() {
  const encodedAddress = encodeURIComponent(
    '29 Westwood Boulevard, Upper Tantallon, NS, Canada'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  const whatsappUrl = `https://wa.me/${TEMPLE_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hare Krishna! I have an inquiry regarding Govinda’s Kitchen snacks and pickup at ISKCON Halifax.'
  )}`;

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
            Govinda&apos;s Kitchen is based at the ISKCON Halifax Temple. While our online payment gateway
            (Zeffy) is being finalized, you can easily reserve your items online and pick them up at the temple!
          </p>
        </div>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="p-6 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative">
            <span className="w-8 h-8 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
              1
            </span>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Select Your Delicacies
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Explore the menu above and add your favorite Sattvik snacks, fasting items, or ready meals to your Order Tray.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative">
            <span className="w-8 h-8 rounded-full bg-[#3e0e14] text-white flex items-center justify-center font-bold text-sm mb-4">
              2
            </span>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              Reserve with Us
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Click &ldquo;Reserve via WhatsApp&rdquo; or call us directly. Your tray will be automatically formatted into an easy reservation message.
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
              Collect your items every Sunday at the Sunday Feast (4:00 PM – 7:30 PM), during festival programs, or by prior arrangement.
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
                    <strong className="text-white block">Standard Pickup Window:</strong>
                    <span>Every Sunday: 4:00 PM – 7:30 PM (During Sunday Feast)</span>
                    <p className="text-xs text-stone-300 mt-0.5">
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
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#4d8b31] hover:bg-[#3c7025] text-white font-semibold text-xs sm:text-sm shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
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
              <div className="p-3.5 rounded-xl bg-black/20 border border-white/10 text-xs text-stone-300">
                💡 <strong>Attending the Sunday Feast?</strong> Simply mention your name at the Govinda&apos;s counter to collect your prepared parcel.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
