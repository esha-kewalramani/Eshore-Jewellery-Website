import { useEffect, useMemo, useState } from "react";
import { useStore } from "../context/StoreContext";
import { products, formatPrice, cities, WHATSAPP_NUMBER } from "../data/products";
import ProductArt from "./ProductArt";

const DELIVERY_FEE = 150;
const FREE_ABOVE = 2000;

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, setQty, clearCart } = useStore();
  const [step, setStep] = useState("cart"); // cart | checkout | done
  const [form, setForm] = useState({ name: "", phone: "", city: cities[0], address: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (!cartOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => { if (event.key === "Escape") setCartOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [cartOpen, setCartOpen]);

  const lines = useMemo(
    () => cart.map((i) => ({ ...i, product: products.find((p) => p.id === i.id) })).filter((l) => l.product),
    [cart]
  );
  const subtotal = lines.reduce((n, l) => n + l.product.price * l.qty, 0);
  const delivery = subtotal === 0 || subtotal >= FREE_ABOVE ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  const close = () => {
    setCartOpen(false);
    if (step === "done") setStep("cart");
  };

  const placeOrder = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !/^(\+?92|0)?3\d{9}$/.test(form.phone.replace(/[\s-]/g, "")) || !form.address.trim()) {
      setError("Please enter your name, a valid Pakistani mobile number and your address.");
      return;
    }
    setError("");
    const msg = [
      "*New ESHORE' order* ✨",
      ...lines.map((l) => `• ${l.product.name} × ${l.qty} — ${formatPrice(l.product.price * l.qty)}`),
      `Subtotal: ${formatPrice(subtotal)}`,
      `Delivery: ${delivery ? formatPrice(delivery) : "Free"}`,
      `*Total (Cash on Delivery): ${formatPrice(total)}*`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Address: ${form.address}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    clearCart();
    setStep("done");
  };

  return (
    <>
      <div className={`scrim ${cartOpen ? "show" : ""}`} onClick={close} />
      <aside className={`drawer glass ${cartOpen ? "open" : ""}`} aria-hidden={!cartOpen}>
        <div className="drawer-head">
          <h2>{step === "checkout" ? "Checkout" : step === "done" ? "Thank you" : "Your Cart"}</h2>
          <button onClick={close} aria-label="Close">✕</button>
        </div>

        {step === "done" && (
          <div className="drawer-empty">
            <p className="big">✦</p>
            <p>Your order is on its way to WhatsApp. We'll confirm it shortly and deliver across Sindh with Cash on Delivery.</p>
            <button className="btn" onClick={close}>Continue shopping</button>
          </div>
        )}

        {step === "cart" && (
          <>
            {lines.length === 0 ? (
              <div className="drawer-empty">
                <p className="big">🛍</p>
                <p>Your cart is empty. Find something you love — everything is Rs. 500 to Rs. 1000.</p>
                <button className="btn" onClick={close}>Keep browsing</button>
              </div>
            ) : (
              <>
                <ul className="lines">
                  {lines.map(({ product, qty }) => (
                    <li key={product.id}>
                      <div className="thumb">
                        {product.image ? <img src={product.image} alt="" /> : <ProductArt category={product.category} finish={product.finish} seed={product.id} />}
                      </div>
                      <div className="grow">
                        <h4>{product.name}</h4>
                        <span className="meta">{formatPrice(product.price)}</span>
                        <div className="qty">
                          <button onClick={() => setQty(product.id, qty - 1)}>−</button>
                          <span>{qty}</span>
                          <button onClick={() => setQty(product.id, qty + 1)}>+</button>
                        </div>
                      </div>
                      <strong>{formatPrice(product.price * qty)}</strong>
                    </li>
                  ))}
                </ul>
                <div className="totals">
                  <div><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                  <div><span>Delivery (Sindh)</span><span>{delivery ? formatPrice(delivery) : "Free"}</span></div>
                  {delivery > 0 && <small>Add {formatPrice(FREE_ABOVE - subtotal)} more for free delivery</small>}
                  <div className="grand"><span>Total</span><span>{formatPrice(total)}</span></div>
                  <button className="btn full" onClick={() => setStep("checkout")}>Checkout</button>
                </div>
              </>
            )}
          </>
        )}

        {step === "checkout" && (
          <form className="checkout" onSubmit={placeOrder}>
            <label>Full name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
            <label>Mobile number<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="03XX XXXXXXX" inputMode="tel" /></label>
            <label>City
              <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })}>
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label>Full address<textarea rows="3" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="House, street, area" /></label>
            {error && <p className="error">{error}</p>}
            <div className="totals">
              <div className="grand"><span>Total · Cash on Delivery</span><span>{formatPrice(total)}</span></div>
              <button className="btn full" type="submit">Place order via WhatsApp</button>
              <button className="btn ghost full" type="button" onClick={() => setStep("cart")}>Back to cart</button>
            </div>
          </form>
        )}
      </aside>
    </>
  );
}
