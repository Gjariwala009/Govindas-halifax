'use client';

import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES, Category } from '@/data/menu';
import ProductCard from './ProductCard';
import { Search, Filter, Sparkles, X } from 'lucide-react';

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
        return matchesName || matchesDesc || matchesCategory;
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
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Govinda&apos;s Satvik Foods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Our Fresh Snacks &amp; Delicacies
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
            All items are 100% Sattvik, vegetarian, free of onion &amp; garlic, and packed with care.
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
                placeholder="Search by snack name, flavor, or dish (e.g., Chikki, Halwa, Bhel)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#3e0e14] focus:border-transparent bg-stone-50/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Dietary Toggles */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setOnlyEkadashi(!onlyEkadashi)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  onlyEkadashi
                    ? 'bg-purple-700 text-white border-purple-700 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                🕉️ Ekadashi Fasting ({MENU_ITEMS.filter((i) => i.isEkadashi).length})
              </button>

              <button
                onClick={() => setOnlyGlutenFree(!onlyGlutenFree)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  onlyGlutenFree
                    ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Gluten-Free
              </button>

              <button
                onClick={() => setOnlyReadyToEat(!onlyReadyToEat)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${
                  onlyReadyToEat
                    ? 'bg-sky-700 text-white border-sky-700 shadow-sm'
                    : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                Ready in 5m
              </button>
            </div>
          </div>

          {/* Category Pills */}
          <div className="pt-2 border-t border-stone-100 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider shrink-0 hidden sm:inline">
              Category:
            </span>
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#3e0e14] text-white shadow-sm font-semibold'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Bar / Active filters notice */}
        <div className="flex items-center justify-between text-xs text-stone-500 mb-6 px-1">
          <div>
            Showing <strong className="text-stone-800">{filteredItems.length}</strong> items
            {hasActiveFilters && ' (filtered)'}
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-[#3e0e14] font-semibold hover:underline flex items-center gap-1"
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
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 mb-2">
              No matching items found
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Try adjusting your search terms or clearing some dietary filters.
            </p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 rounded-xl bg-[#3e0e14] text-white text-xs font-semibold hover:bg-[#571720]"
            >
              Show all 20 items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
