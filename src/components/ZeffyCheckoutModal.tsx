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
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity"
        onClick={closeZeffy}
        aria-hidden="true"
      />

      {/* Modal Card with Apple-grade finish & Rich Maroon Gold Header */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col max-h-[92vh] border-2 border-amber-300/60 z-10">
        
        {/* Header - Royal Crimson with Glowing Amber Accents */}
        <div className="bg-gradient-to-r from-[#3c0e15] via-[#56141f] to-[#2e080f] text-white px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-amber-400/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Govinda&apos;s Online Store
                </h3>
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
              className="p-2 rounded-xl text-amber-200 hover:text-white hover:bg-white/10 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold"
              title="Open full screen in a new window"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Full Screen</span>
            </a>
            <button
              onClick={closeZeffy}
              className="p-2 rounded-xl text-amber-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close checkout"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Iframe Loading state & Container */}
        <div className="relative flex-1 w-full min-h-[550px] sm:min-h-[640px] bg-amber-50/20 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-amber-50/50 z-10 gap-3">
              <div className="w-10 h-10 border-3 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-stone-600 font-bold">
                Loading secure Zeffy checkout...
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
        <div className="px-6 py-3 bg-amber-50/60 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-600 gap-1.5 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span>100% of your payment directly supports ISKCON Halifax worship &amp; prasadam services.</span>
          </div>
          <a
            href={TEMPLE_INFO.zeffyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-800 hover:text-amber-950 hover:underline font-bold inline-flex items-center gap-1"
          >
            <span>Having trouble? Open directly on Zeffy</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
