import React from 'react';
import { Leaf, Sun, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';

export default function SattvikExplainer() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-3">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Vedic Tradition • Mode of Goodness</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            What Makes Govinda&apos;s Food Pure &amp; Sattvik?
          </h2>
          <p className="mt-4 text-stone-600 text-base leading-relaxed">
            In the ancient wisdom of the <em>Bhagavad Gita</em>, food in the mode of goodness (<em>Sattva</em>)
            enhances life span, purifies one&apos;s existence, and bestows strength, health, happiness, and peace of mind.
          </p>
        </div>

        {/* Bento Grid Architecture with Dev Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Dev Maroon Sanskrit Verse Tile */}
          <div className="md:col-span-7 rounded-2xl p-7 sm:p-9 bg-gradient-to-br from-[#3e0e14] via-[#4d121a] to-[#27080c] text-white border border-[#571720] shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Subtle Dev Ambient Light */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold tracking-wider uppercase border border-white/15">
                <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                <span>Bhagavad Gita 9.26</span>
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl text-amber-200 leading-snug pt-2">
                &ldquo;patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati...&rdquo;
              </blockquote>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light">
                &ldquo;If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
                Every delicacy at Govinda&apos;s is prepared not as commercial fast-food, but as sacred <strong className="text-white font-semibold">Prasadam</strong>—sanctified nourishment prepared with peaceful minds, clean hands, and heartfelt devotion.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/15 mt-6 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Cooked in Gratitude &amp; Devotion</span>
              </span>
              <a
                href="#menu"
                className="px-5 py-2.5 rounded-full bg-[#4d8b31] hover:bg-[#3c7025] text-white text-xs font-semibold transition-all shadow-md"
              >
                View 20 Delicacies →
              </a>
            </div>
          </div>

          {/* Bento Card 2: Strictly No Onion & Garlic */}
          <div className="md:col-span-5 rounded-2xl p-7 sm:p-8 bg-[#faf6f0] border border-[#eee4d5] hover:border-amber-400/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                <Leaf className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2.5">
                Strictly No Onion &amp; Garlic
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-5 font-normal">
                We strictly avoid all alliums (onions, garlic, leeks, shallots), animal rennet, and gelatin. Sattvik food fosters a serene, peaceful state of consciousness without stimulating restlessness or anger.
              </p>
            </div>

            <ul className="space-y-2 text-xs text-stone-700 font-medium border-t border-stone-200/60 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Pure Vegetarian guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Zero rajasic spices or stimulants</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Gentle on digestion and gut health</span>
              </li>
            </ul>
          </div>

          {/* Bento Card 3: Ekadashi Fasting Purity */}
          <div className="md:col-span-6 rounded-2xl p-7 bg-[#faf6f0] border border-[#eee4d5] hover:border-amber-400/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
              Ekadashi Fasting Treats
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Grain-free snacks crafted for sacred Ekadashi fasts: Sabudana Khichdi, Farali Chivda, Makhana, and Rajgira chikkis made with mineral-rich sendha namak.
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              🕉️ 100% Grain-Free Approved
            </span>
          </div>

          {/* Bento Card 4: Ayurvedic Healing Ingredients */}
          <div className="md:col-span-6 rounded-2xl p-7 bg-[#faf6f0] border border-[#eee4d5] hover:border-amber-400/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Sun className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
              Ayurvedic Preservation
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              From sun-cooked rose petal Gulkand to slow-roasted whole spices and cold-pressed jaggery, our items preserve natural prana and rejuvenating digestive wellness.
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              🌿 Natural Coolants &amp; Spices
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
