import React from 'react';
import { Leaf, Sun, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';

export default function SattvikExplainer() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fdfaf3] border-y border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-950 text-xs font-black uppercase tracking-wider mb-4 border border-emerald-300 shadow-xs">
            <Leaf className="w-3.5 h-3.5 text-emerald-700" />
            <span>The Vedic Tradition • Mode of Goodness</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            What Makes Govinda&apos;s Food Pure &amp; Sattvik?
          </h2>
          <p className="mt-4 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            In the ancient wisdom of the <em>Bhagavad Gita</em>, food in the mode of goodness (<em>Sattva</em>)
            enhances life span, purifies one&apos;s existence, and bestows strength, health, happiness, and peace of mind.
          </p>
        </div>

        {/* Apple-style Bento Grid Architecture - Rich, Vibrant & Spiritual */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1: Royal Crimson & Saffron Sanskrit Verse Tile */}
          <div className="md:col-span-7 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#420f16] via-[#5c1621] to-[#340b12] text-white border-2 border-amber-400/40 shadow-xl relative overflow-hidden flex flex-col justify-between group">
            {/* Radiant Ambient Light */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/30 text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-400/30">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Bhagavad Gita 9.26</span>
              </div>

              <blockquote className="font-serif italic text-2xl sm:text-3xl text-amber-200 leading-snug pt-2">
                &ldquo;patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati...&rdquo;
              </blockquote>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light">
                &ldquo;If one offers Me with love and devotion a leaf, a flower, a fruit or water, I will accept it.&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-amber-100/80 leading-relaxed pt-2">
                Every delicacy at Govinda&apos;s is prepared not as commercial fast-food, but as sacred <strong className="text-white font-bold">Prasadam</strong>—sanctified nourishment prepared with peaceful minds, clean hands, and heartfelt devotion.
              </p>
            </div>

            <div className="relative z-10 pt-8 border-t border-amber-400/30 mt-6 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Cooked in Gratitude &amp; Devotion</span>
              </span>
              <a
                href="#menu"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 text-xs font-extrabold transition-all shadow-md"
              >
                View 20 Delicacies →
              </a>
            </div>
          </div>

          {/* Bento Card 2: Strictly No Onion & Garlic */}
          <div className="md:col-span-5 rounded-3xl p-8 bg-white border-2 border-emerald-200 shadow-sm hover:border-emerald-400 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-stone-900 mb-3">
                Strictly No Onion &amp; Garlic
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed mb-6 font-normal">
                We strictly avoid all alliums (onions, garlic, leeks, shallots), animal rennet, and gelatin. Sattvik food fosters a serene, peaceful state of consciousness without stimulating restlessness or anger.
              </p>
            </div>

            <ul className="space-y-2.5 text-xs text-stone-800 font-bold border-t border-emerald-100 pt-4">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Pure Vegetarian guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero rajasic spices or stimulants</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gentle on digestion and gut health</span>
              </li>
            </ul>
          </div>

          {/* Bento Card 3: Ekadashi Fasting Purity */}
          <div className="md:col-span-6 rounded-3xl p-8 bg-white border-2 border-purple-200 shadow-sm hover:border-purple-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 border border-purple-300 flex items-center justify-center mb-5">
              <Award className="w-6 h-6 text-purple-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
              Ekadashi Fasting Treats
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              Grain-free snacks crafted for sacred Ekadashi fasts: Sabudana Khichdi, Farali Chivda, Makhana, and Rajgira chikkis made with mineral-rich sendha namak.
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-full border border-purple-300">
              🕉️ 100% Grain-Free Approved
            </span>
          </div>

          {/* Bento Card 4: Ayurvedic Healing Ingredients */}
          <div className="md:col-span-6 rounded-3xl p-8 bg-white border-2 border-amber-200 shadow-sm hover:border-amber-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 border border-amber-300 flex items-center justify-center mb-5">
              <Sun className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="font-serif font-bold text-xl text-stone-900 mb-2">
              Ayurvedic Preservation
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              From sun-cooked rose petal Gulkand to slow-roasted whole spices and cold-pressed jaggery, our items preserve natural prana and rejuvenating digestive wellness.
            </p>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              🌿 Natural Coolants &amp; Spices
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
