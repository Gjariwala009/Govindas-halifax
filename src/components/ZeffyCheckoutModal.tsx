'use client';

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';

export default function ZeffyCheckoutModal() {
  const { isZeffyOpen, closeZeffy } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZeffyOpen) {
        closeZeffy();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZeffyOpen, closeZeffy]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isZeffyOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isZeffyOpen]);

  if (!isZeffyOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={closeZeffy}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-stone-200 z-10">
        {/* Header */}
        <div className="bg-[#3e0e14] text-white px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-[#571720]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Govinda&apos;s Online Store
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-[11px] text-emerald-300 font-semibold">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  0% Fee Nonprofit Checkout
                </span>
              </div>
              <p className="text-xs text-amber-200/90 font-light">
                Official ISKCON Halifax Store powered by Zeffy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={TEMPLE_INFO.zeffyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-medium"
              title="Open full screen in a new window"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Full Screen</span>
            </a>
            <button
              onClick={closeZeffy}
              className="p-2 rounded-xl text-stone-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Iframe Loading state & Container */}
        <div className="relative flex-1 w-full min-h-[550px] sm:min-h-[640px] bg-stone-50 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 z-10 gap-3">
              <div className="w-10 h-10 border-3 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-stone-500 font-medium">
                Loading secure Zeffy store...
              </p>
            </div>
          )}

          <iframe
            title="Govinda's Kitchen Store powered by Zeffy"
            src={TEMPLE_INFO.zeffyEmbedUrl}
            className="w-full h-full min-h-[550px] sm:min-h-[640px] border-0"
            onLoad={() => setIsLoading(false)}
            allow="payment"
          />
        </div>

        {/* Footer Note */}
        <div className="px-5 py-2.5 bg-stone-100 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-500 gap-1">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>100% of your payment directly supports ISKCON Halifax worship &amp; prasadam services.</span>
          </div>
          <a
            href={TEMPLE_INFO.zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline font-medium inline-flex items-center gap-1"
          >
            <span>Having trouble? Open directly on Zeffy</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
