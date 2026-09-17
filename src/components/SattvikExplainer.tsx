import React from 'react';
import { Leaf, Sun, CheckCircle2, Award } from 'lucide-react';

export default function SattvikExplainer() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Vedic Tradition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            What Makes Govinda&apos;s Food Pure &amp; Sattvik?
          </h2>
          <p className="mt-4 text-stone-600 text-base leading-relaxed">
            In the ancient wisdom of the Bhagavad Gita, food in the mode of goodness (<em>Sattva</em>)
            enhances life span, purifies one&apos;s existence, and bestows strength, health, happiness, and satisfaction.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-7 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative overflow-hidden group hover:border-amber-400/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5">
              Strictly No Onion &amp; Garlic
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Every single product sold by Govinda&apos;s is 100% pure vegetarian, without onion, garlic, gelatin, or animal rennet. Clean, peaceful, and gentle on the body.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero meat, fish, or poultry</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Free of rajasic spices &amp; alliums</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-7 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative overflow-hidden group hover:border-amber-400/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
              <Sun className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5">
              Prepared with Devotion (Prasadam)
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Govinda&apos;s kitchen operates on the principle of &ldquo;Serve with Love&rdquo;. Food is cooked in a mood of service and gratitude, making it nourishment for both body and consciousness.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Sanctified food for uplifting energy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Proceeds support ISKCON Halifax community</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-7 rounded-2xl bg-[#faf6f0] border border-[#eee4d5] relative overflow-hidden group hover:border-amber-400/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2.5">
              Ekadashi Fasting Specialties
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              We offer certified fasting snacks made from genuine amaranth (Rajgira), lotus seeds (Makhana), peanuts, tapioca, and sendha namak (rock salt) for sacred fasting days.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-stone-700 font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Grain-free options for twice-monthly fasts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>Sabudana Khichdi, Farali Chivda &amp; Chikkis</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Banner quote */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#3e0e14] to-[#5a141e] text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="font-serif italic text-lg sm:text-xl text-amber-200">
              &ldquo;patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati...&rdquo;
            </p>
            <p className="text-xs text-stone-300">
              &ldquo;If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it.&rdquo; — Bhagavad Gita 9.26
            </p>
          </div>
          <a
            href="#menu"
            className="px-6 py-3 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white font-semibold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all shrink-0"
          >
            Explore the Menu
          </a>
        </div>
      </div>
    </section>
  );
}
