'use client';

import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES, Category } from '@/data/menu';
import ProductCard from './ProductCard';
import { Search, Sparkles, X, SlidersHorizontal } from 'lucide-react';

export default function MenuCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyEkadashi, setOnlyEkadashi] = useState(false);
  const [onlyGlutenFree, setOnlyGlutenFree] = useState(false);
  const [onlyReadyToEat, setOnlyReadyToEat] = useState(false);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
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
  }, [selectedCategory, searchQuery, onlyEkadashi, onlyGlutenFree, onlyReadyToEat]);

  const clearFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setOnlyEkadashi(false);
    setOnlyGlutenFree(false);
    setOnlyReadyToEat(false);
  };

  const hasActiveFilters =
    selectedCategory !== 'All' ||
    searchQuery !== '' ||
    onlyEkadashi ||
    onlyGlutenFree ||
    onlyReadyToEat;

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#faf6f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Govinda&apos;s Satvik Foods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Our Fresh Snacks &amp; Delicacies
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            All 20 packaged items are 100% Sattvik, vegetarian, free of onion &amp; garlic, and packed with care.
            Explore authentic flavors for daily snacking, fasting days, and festival feasts.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-stone-200/90 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search by snack name, flavor, or dish (e.g., Bhel, Gulkand, Chikki, Khakhra, Halwa)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e0e14] focus:border-transparent bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Dietary Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setOnlyEkadashi(!onlyEkadashi)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  onlyEkadashi
                    ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                🕉️ Ekadashi Fasting ({MENU_ITEMS.filter((i) => i.isEkadashi).length})
              </button>

              <button
                onClick={() => setOnlyGlutenFree(!onlyGlutenFree)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  onlyGlutenFree
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Gluten-Free ({MENU_ITEMS.filter((i) => i.isGlutenFree).length})
              </button>

              <button
                onClick={() => setOnlyReadyToEat(!onlyReadyToEat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border cursor-pointer ${
                  onlyReadyToEat
                    ? 'bg-sky-700 text-white border-sky-700 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Ready Meals ({MENU_ITEMS.filter((i) => i.isReadyToEat).length})
              </button>
            </div>
          </div>

          {/* Category Pills with Item Counts */}
          <div className="pt-2 border-t border-stone-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider shrink-0 hidden sm:inline flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
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
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#3e0e14] text-white shadow-sm font-semibold'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected
                        ? 'bg-amber-400 text-stone-950 font-bold'
                        : 'bg-stone-200 text-stone-600 font-medium'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Bar / Active filters notice */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <div>
            Showing <strong className="text-stone-800">{filteredItems.length}</strong> of {MENU_ITEMS.length} items
            {hasActiveFilters && ' (filtered)'}
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-[#3e0e14] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              Reset all filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200/90 p-8">
            <div className="text-4xl mb-3">🔍</div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-1">
              No matching snacks found
            </h3>
            <p className="text-stone-500 text-sm mb-4">
              We couldn&apos;t find any delicacies matching &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl bg-[#3e0e14] text-white text-xs font-semibold hover:bg-[#571720] transition-colors cursor-pointer"
            >
              Show all {MENU_ITEMS.length} delicacies
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
