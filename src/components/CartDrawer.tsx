'use client';

import React from 'react';
import { useCart } from '@/context/CartContext';
import { TEMPLE_INFO } from '@/data/menu';
import { X, ShoppingBag, Plus, Minus, Trash2, MessageSquare, Phone, MapPin, Sparkles } from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
    totalCount,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  // Generate pre-filled WhatsApp message
  const itemsText = cart
    .map(
      (entry) =>
        `• ${entry.quantity}x ${entry.item.name} ($${(
          entry.item.price * entry.quantity
        ).toFixed(2)})`
    )
    .join('\n');

  const reservationMessage = `Hare Krishna! I would like to reserve the following items from Govinda's Kitchen Halifax:\n\n${itemsText}\n\n*Total:* $${totalPrice.toFixed(
    2
  )} CAD\n*Pickup Location:* ISKCON Halifax (${TEMPLE_INFO.address})\n\nMy Name: `;

  const whatsappUrl = `https://wa.me/${TEMPLE_INFO.whatsappNumber}?text=${encodeURIComponent(
    reservationMessage
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-5 bg-[#3e0e14] text-white flex items-center justify-between border-b border-[#571720]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h2 className="font-serif font-bold text-lg text-white">Your Order Tray</h2>
              <span className="bg-[#4d8b31] text-xs font-semibold px-2 py-0.5 rounded-full text-white">
                {totalCount} {totalCount === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-lg text-stone-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close tray"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-stone-500">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-stone-800 text-lg mb-1">
                  Your tray is empty
                </h3>
                <p className="text-xs text-stone-500 max-w-xs mb-6">
                  Add your favorite Sattvik snacks, sweets, or ready meals to prepare your pickup reservation.
                </p>
                <button
                  onClick={closeCart}
                  className="px-5 py-2.5 rounded-xl bg-[#3e0e14] text-white text-xs font-semibold hover:bg-[#571720] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
                  <span>Selected Delicacies</span>
                  <button
                    onClick={clearCart}
                    className="text-stone-400 hover:text-rose-600 font-medium transition-colors"
                  >
                    Clear Tray
                  </button>
                </div>

                <div className="space-y-3">
                  {cart.map((entry) => (
                    <div
                      key={entry.item.id}
                      className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#faf6f0] border border-[#eee4d5]"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-semibold text-stone-900 text-sm truncate">
                            {entry.item.name}
                          </h4>
                          {entry.item.isEkadashi && (
                            <span className="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.2 rounded shrink-0">
                              Ekadashi
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-stone-500 mt-0.5">
                          ${entry.item.price.toFixed(2)} CAD each
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden shadow-xs">
                          <button
                            onClick={() =>
                              updateQuantity(entry.item.id, entry.quantity - 1)
                            }
                            className="p-1 text-stone-600 hover:bg-stone-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-semibold text-stone-800 min-w-[20px] text-center">
                            {entry.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(entry.item.id, entry.quantity + 1)
                            }
                            className="p-1 text-stone-600 hover:bg-stone-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(entry.item.id)}
                          className="p-1 text-stone-400 hover:text-rose-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pickup Address info note */}
                <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-amber-950">
                    <MapPin className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                    <span>Pickup at ISKCON Halifax Temple</span>
                  </div>
                  <p className="text-[11px] text-amber-800">
                    {TEMPLE_INFO.address} (Sundays 4:00 PM – 7:30 PM &amp; Festivals)
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Footer with Totals and Action */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-stone-50 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-stone-500">
                  <span>Estimated Total</span>
                  <span className="font-semibold text-stone-700">
                    {totalCount} {totalCount === 1 ? 'item' : 'items'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-lg sm:text-xl font-bold text-stone-900">
                  <span>Subtotal:</span>
                  <span className="text-[#3e0e14]">${totalPrice.toFixed(2)} CAD</span>
                </div>
              </div>

              {/* Status announcement */}
              <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-800 flex items-start gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Online Zeffy payments are currently being setup! You can reserve your tray now via WhatsApp or Phone for temple pickup.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#4d8b31] hover:bg-[#3c7025] text-white font-semibold text-sm shadow-md transition-all active:scale-98"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve via WhatsApp</span>
                </a>

                <a
                  href={`tel:${TEMPLE_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white border border-stone-300 text-stone-800 font-medium text-xs sm:text-sm hover:bg-stone-100 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Call to Reserve: {TEMPLE_INFO.phone}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
