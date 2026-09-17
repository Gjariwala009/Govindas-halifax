'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Sparkles, Clock } from 'lucide-react';

interface ProductCardProps {
  item: MenuItem;
}

export default function ProductCard({ item }: ProductCardProps) {
  const { openZeffy } = useCart();

  return (
    <div className="group relative flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md hover:border-amber-400/60 transition-all p-5">
      {/* Top badges & Image */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2.5">
          <span className="text-[11px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-600 border border-stone-200">
            {item.category}
          </span>
          {item.badge && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              <Sparkles className="w-3 h-3 text-amber-600" />
              {item.badge}
            </span>
          )}
        </div>

        {/* Product Visual */}
        {item.image && (
          <div className="relative w-full aspect-square mb-3.5 rounded-xl bg-stone-50/70 overflow-hidden flex items-center justify-center p-3 border border-stone-100/80">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Title and Unit */}
        <div className="mb-2">
          <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#3e0e14] transition-colors leading-snug">
            {item.name}
          </h3>
          {item.weightOrUnit && (
            <span className="text-xs text-stone-400 font-medium">
              {item.weightOrUnit}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
          {item.description}
        </p>
      </div>

      {/* Dietary & Lifestyle Badges */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
            🌿 Sattvik
          </span>
          {item.isEkadashi && (
            <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-200">
              🕉️ Ekadashi
            </span>
          )}
          {item.isGlutenFree && (
            <span className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
              Gluten-Free
            </span>
          )}
          {item.isReadyToEat && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-md bg-sky-50 text-sky-800 border border-sky-200">
              <Clock className="w-2.5 h-2.5 text-sky-600" />
              Ready to Enjoy
            </span>
          )}
        </div>

        {/* Bottom Price & Order CTA */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="text-xs text-stone-400">Price</div>
            <div className="text-xl font-bold text-stone-900">
              ${item.price.toFixed(2)}{' '}
              <span className="text-[11px] font-normal text-stone-500">CAD</span>
            </div>
          </div>

          <button
            onClick={openZeffy}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 bg-[#3e0e14] hover:bg-[#571720] text-white shadow-sm cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-amber-300" />
            <span>Order on Zeffy</span>
          </button>
        </div>
      </div>
    </div>
  );
}
