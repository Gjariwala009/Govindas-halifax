'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem } from '@/data/menu';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem('govindas_cart');
        if (saved) {
          setCart(JSON.parse(saved));
        }
      } catch (e) {
        console.error('Failed to load cart from localStorage', e);
      } finally {
        setIsLoaded(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('govindas_cart', JSON.stringify(cart));
      } catch (e) {
        console.error('Failed to save cart to localStorage', e);
      }
    }
  }, [cart, isLoaded]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((prev) => !prev);

  const addItem = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.item.id === item.id);
      if (existing) {
        return prev.map((entry) =>
          entry.item.id === item.id
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((entry) => entry.item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((entry) =>
        entry.item.id === id ? { ...entry, quantity } : entry
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalCount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
