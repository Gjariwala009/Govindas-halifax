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
    <div className="group relative flex flex-col justify-between bg-[#fffdf9] rounded-3xl border-2 border-amber-200/80 hover:border-amber-400 shadow-[0_4px_22px_rgba(245,158,11,0.06)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.18)] hover:-translate-y-1.5 transition-all duration-300 p-5 sm:p-6 overflow-hidden">
      
      {/* Top Badges & Product Showcase */}
      <div>
        {/* Badges bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full bg-amber-100/80 text-amber-950 border border-amber-300/80">
            {item.category}
          </span>
          {item.badge ? (
            <span className="inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-stone-950 shadow-xs">
              <Sparkles className="w-3 h-3 text-stone-950" />
              {item.badge}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800">
              <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
              <span>4.9</span>
            </span>
          )}
        </div>

        {/* Product Studio Showcase Pedestal - Warm Saffron Radiance */}
        {item.image && (
          <div className="relative w-full aspect-square mb-4 rounded-2xl product-pedestal-appetizing group-hover:product-pedestal-appetizing-hover border border-amber-200/60 flex items-center justify-center p-4 transition-colors duration-300">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-110 filter drop-shadow-md"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        )}

        {/* Product Title & Unit */}
        <div className="mb-2">
          <h3 className="font-serif font-bold text-xl text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
            {item.name}
          </h3>
          {item.weightOrUnit && (
            <span className="inline-block text-xs text-stone-500 font-semibold mt-0.5">
              {item.weightOrUnit}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>
      </div>

      {/* Bottom Attributes, Dietary Chips & High-Converting Order Button */}
      <div>
        {/* Dietary micro-chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300">
            🌿 Sattvik
          </span>
          {item.isEkadashi && (
            <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-300">
              🕉️ Fasting
            </span>
          )}
          {item.isGlutenFree && (
            <span className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
              🌾 Gluten-Free
            </span>
          )}
          {item.isReadyToEat && (
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-sky-100 text-sky-900 border border-sky-300">
              <Clock className="w-2.5 h-2.5 text-sky-700" />
              Ready Meal
            </span>
          )}
        </div>

        {/* Bottom Price & High-Energy Order CTA */}
        <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">Price</div>
            <div className="text-2xl font-black text-stone-900 tracking-tight">
              ${item.price.toFixed(2)}{' '}
              <span className="text-xs font-semibold text-stone-500">CAD</span>
            </div>
          </div>

          <button
            onClick={openZeffy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 active:scale-95 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-400 hover:from-amber-300 hover:to-amber-400 text-stone-950 shadow-md hover:shadow-amber-500/40 cursor-pointer border border-amber-300/80"
            aria-label={`Order ${item.name} on Zeffy`}
          >
            <ShoppingBag className="w-4 h-4 text-stone-950" />
            <span>Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
