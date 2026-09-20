'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Maximize2, Minimize2, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';

export default function ZeffyCheckoutModal() {
  const { isZeffyOpen, closeZeffy } = useCart();
  const [isLoading, setIsLoading] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);

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
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isZeffyOpen]);

  if (!isZeffyOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center animate-in fade-in duration-200 ${
        isMaximized ? 'p-1 sm:p-2' : 'p-2 sm:p-4 md:p-6'
      }`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/80 backdrop-blur-md transition-opacity"
        onClick={closeZeffy}
        aria-hidden="true"
      />

      {/* Modal Card with Dev Maroon & Gold Header */}
      <div
        className={`relative w-full bg-white shadow-2xl overflow-hidden flex flex-col border border-stone-200 z-10 transition-all duration-300 ${
          isMaximized
            ? 'h-[98vh] max-w-[98vw] rounded-2xl'
            : 'max-w-4xl max-h-[92vh] rounded-3xl'
        }`}
      >
        {/* Header - Dev Deep Maroon */}
        <div className="bg-[#3e0e14] text-white px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between border-b border-[#571720]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-amber-300 shadow-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Govinda&apos;s Online Store
                </h3>
              </div>
              <p className="text-xs text-amber-200/90 font-light">
                Official ISKCON Halifax Temple Store
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMaximized((prev) => !prev)}
              className="p-2 rounded-xl text-amber-200 hover:text-white hover:bg-white/10 transition-colors hidden sm:flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
              title={isMaximized ? 'Restore standard size' : 'Expand to full screen view'}
              aria-label={isMaximized ? 'Restore view' : 'Expand view'}
            >
              {isMaximized ? (
                <>
                  <Minimize2 className="w-4 h-4" />
                  <span>Standard View</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-4 h-4" />
                  <span>Full Screen</span>
                </>
              )}
            </button>
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
        <div className="relative flex-1 w-full min-h-[550px] sm:min-h-[640px] bg-stone-50 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50/80 z-10 gap-3">
              <div className="w-10 h-10 border-3 border-[#3e0e14] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-stone-600 font-medium">
                Loading secure store...
              </p>
            </div>
          )}

          <iframe
            title="Govinda's Kitchen Online Store"
            src={TEMPLE_INFO.zeffyEmbedUrl}
            className="w-full h-full min-h-[550px] sm:min-h-[640px] border-0"
            onLoad={() => setIsLoading(false)}
            allow="payment"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Footer Note */}
        <div className="px-6 py-3 bg-stone-50 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-600 gap-2 font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
            <span>100% of your payment directly supports ISKCON Halifax worship &amp; prasadam services.</span>
          </div>
          <div className="flex items-center gap-1.5 text-stone-600 shrink-0">
            <span>Questions or support?</span>
            <a
              href={`tel:${TEMPLE_INFO.phone}`}
              className="text-[#3e0e14] hover:text-[#571720] hover:underline font-bold inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-amber-600" />
              <span>{TEMPLE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
