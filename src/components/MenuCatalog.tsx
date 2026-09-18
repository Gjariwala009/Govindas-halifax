'use client';

import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES, Category } from '@/data/menu';
import ProductCard from './ProductCard';
import { Search, Sparkles, X, SlidersHorizontal, ArrowUpDown, Flame } from 'lucide-react';

export default function MenuCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyEkadashi, setOnlyEkadashi] = useState(false);
  const [onlyGlutenFree, setOnlyGlutenFree] = useState(false);
  const [onlyReadyToEat, setOnlyReadyToEat] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  // Filter & sort items
  const filteredItems = useMemo(() => {
    let result = MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Ekadashi filter
      if (onlyEkadashi && !item.isEkadashi) {
        return false;
      }
      // Gluten Free filter
      if (onlyGlutenFree && !item.isGlutenFree) {
        return false;
      }
      // Ready to Eat filter
      if (onlyReadyToEat && !item.isReadyToEat) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesBadge = item.badge?.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesCategory || Boolean(matchesBadge);
      }
      return true;
    });

    if (sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, onlyEkadashi, onlyGlutenFree, onlyReadyToEat, sortBy]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setOnlyEkadashi(false);
    setOnlyGlutenFree(false);
    setOnlyReadyToEat(false);
    setSortBy('featured');
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    searchQuery !== '' ||
    onlyEkadashi ||
    onlyGlutenFree ||
    onlyReadyToEat ||
    sortBy !== 'featured';

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#fcf8ef] border-t border-amber-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-950 text-xs font-black uppercase tracking-wider mb-4 border border-amber-400/50 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The Complete Collection • 20 Delicacies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-stone-900 tracking-tight leading-tight">
            Handcrafted Sattvik Delicacies
          </h2>
          <p className="mt-4 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            All 20 authentic packaged items are 100% pure vegetarian, prepared without onion or garlic,
            and offered with devotion. Discover traditional Indian snacks, fasting crunchies, and gourmet meals.
          </p>
        </div>

        {/* macOS Spotlight-style Search & Control Center with Warm Amber Theme */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-[0_6px_30px_rgba(245,158,11,0.08)] border-2 border-amber-200/80 mb-10 space-y-5">
          <div className="flex flex-col lg:flex-row gap-3.5 items-stretch">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-600" />
              <input
                type="text"
                placeholder="Search delicacies (e.g. Banana Chips, Bombay Bhel, Gulkand, Khakhra, Halwa)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl border-2 border-amber-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/30 hover:bg-amber-50/50 transition-all placeholder:text-stone-400 font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Dietary Toggles & Sort */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setOnlyEkadashi(!onlyEkadashi)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border-2 cursor-pointer active:scale-95 ${
                  onlyEkadashi
                    ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                    : 'bg-white text-purple-900 border-purple-200 hover:bg-purple-50'
                }`}
              >
                🕉️ Ekadashi Fasting ({MENU_ITEMS.filter((i) => i.isEkadashi).length})
              </button>

              <button
                onClick={() => setOnlyGlutenFree(!onlyGlutenFree)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border-2 cursor-pointer active:scale-95 ${
                  onlyGlutenFree
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-white text-amber-900 border-amber-200 hover:bg-amber-50'
                }`}
              >
                🌾 Gluten-Free ({MENU_ITEMS.filter((i) => i.isGlutenFree).length})
              </button>

              <button
                onClick={() => setOnlyReadyToEat(!onlyReadyToEat)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all border-2 cursor-pointer active:scale-95 ${
                  onlyReadyToEat
                    ? 'bg-sky-700 text-white border-sky-700 shadow-sm'
                    : 'bg-white text-sky-900 border-sky-200 hover:bg-sky-50'
                }`}
              >
                ⚡ Ready Meals ({MENU_ITEMS.filter((i) => i.isReadyToEat).length})
              </button>

              {/* Price Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none bg-white border-2 border-amber-200 text-stone-800 text-xs font-bold rounded-2xl px-4 py-2.5 pr-8 hover:bg-amber-50 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
                <ArrowUpDown className="w-3.5 h-3.5 text-amber-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Apple-style Sliding Category Pill Bar with Vibrant Saffron Colors */}
          <div className="pt-2 border-t border-amber-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider shrink-0 hidden sm:flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-600" />
              <span>Category:</span>
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count =
                cat === 'All'
                  ? MENU_ITEMS.length
                  : MENU_ITEMS.filter((item) => item.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-stone-950 shadow-md ring-2 ring-amber-300'
                      : 'bg-white text-stone-700 border border-amber-200 hover:border-amber-400 hover:bg-amber-50'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                      isSelected
                        ? 'bg-stone-950 text-amber-300'
                        : 'bg-amber-100 text-amber-900'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Filter Counter & Reset Action */}
        <div className="flex items-center justify-between text-xs text-stone-600 mb-8 px-2">
          <div>
            Showing <strong className="text-stone-950 font-black text-sm">{filteredItems.length}</strong> of {MENU_ITEMS.length} delicacies
            {hasActiveFilters && ' (filtered)'}
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-amber-700 font-bold hover:text-amber-900 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <X className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-amber-200 p-8 shadow-sm">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">
              No matching delicacies found
            </h3>
            <p className="text-stone-600 text-sm mb-5 max-w-md mx-auto">
              We couldn&apos;t find any items matching &ldquo;{searchQuery}&rdquo;. Try adjusting your keywords or clearing the active filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 font-extrabold text-sm hover:from-amber-300 hover:to-orange-300 transition-all cursor-pointer shadow-md"
            >
              Show all {MENU_ITEMS.length} delicacies
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
