'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Sparkles, Clock, Star } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const { openZeffy } = useCart();

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all p-5">
      
      {/* Top Badges & Product Showcase */}
      <div>
        {/* Badges bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
            {item.category}
          </span>
          {item.badge ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              <Sparkles className="w-3 h-3 text-amber-600" />
              {item.badge}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-stone-500">
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              <span>4.9</span>
            </span>
          )}
        </div>

        {/* Product Studio Showcase Pedestal */}
        {item.image && (
          <div className="relative w-full aspect-square mb-3.5 rounded-xl bg-stone-50/70 border border-stone-100/80 flex items-center justify-center p-3 overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        )}

        {/* Product Title & Unit */}
        <div className="mb-2">
          <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#3e0e14] transition-colors leading-snug">
            {item.name}
          </h3>
          {item.weightOrUnit && (
            <span className="inline-block text-xs text-stone-400 font-medium mt-0.5">
              {item.weightOrUnit}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Bottom Attributes, Dietary Chips & Order Button */}
      <div>
        {/* Dietary distinguishing chips - rendered only when item has specific dietary traits */}
        {(item.isEkadashi || item.isGlutenFree || item.isReadyToEat) ? (
          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[22px]">
            {item.isEkadashi && (
              <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200">
                🕉️ Fasting
              </span>
            )}
            {item.isGlutenFree && (
              <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                🌾 Gluten-Free
              </span>
            )}
            {item.isReadyToEat && (
              <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200">
                <Clock className="w-2.5 h-2.5 text-sky-600" />
                Ready Meal
              </span>
            )}
          </div>
        ) : (
          <div className="mb-4 h-[22px]"></div>
        )}

        {/* Bottom Price & Order CTA */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] uppercase font-medium text-stone-400">Price</div>
            <div className="text-xl font-bold text-stone-900 tracking-tight">
              ${item.price.toFixed(2)}{' '}
              <span className="text-xs font-normal text-stone-500">CAD</span>
            </div>
          </div>

          <button
            onClick={openZeffy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 bg-[#3e0e14] hover:bg-[#571720] text-white shadow-sm cursor-pointer"
            aria-label={`Order ${item.name}`}
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
