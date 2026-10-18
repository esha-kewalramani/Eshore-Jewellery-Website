import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const StoreContext = createContext(null);

const load = (key, fallback) => {
  try {
    const v = JSON.parse(localStorage.getItem(key));
    return v ?? fallback;
  } catch {
    return fallback;
  }
};

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => load("eshore_cart", [])); // [{id, qty}]
  const [wishlist, setWishlist] = useState(() => load("eshore_wish", []));
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  useEffect(() => {
    try { localStorage.setItem("eshore_cart", JSON.stringify(cart)); } catch {}
  }, [cart]);
  useEffect(() => {
    try { localStorage.setItem("eshore_wish", JSON.stringify(wishlist)); } catch {}
  }, [wishlist]);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const addToCart = useCallback((product) => {
    setCart((c) => {
      const found = c.find((i) => i.id === product.id);
      return found
        ? c.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i))
        : [...c, { id: product.id, qty: 1 }];
    });
    setToast(`${product.name} added to cart`);
  }, []);

  const setQty = useCallback((id, qty) => {
    setCart((c) => (qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => (i.id === id ? { ...i, qty } : i))));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleWish = useCallback((product) => {
    setWishlist((w) => {
      const has = w.includes(product.id);
      setToast(has ? "Removed from wishlist" : "Saved to wishlist");
      return has ? w.filter((x) => x !== product.id) : [...w, product.id];
    });
  }, []);

  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);

  const value = {
    cart, wishlist, cartOpen, setCartOpen, toast,
    addToCart, setQty, clearCart, toggleWish, cartCount,
  };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export const useStore = () => useContext(StoreContext);
