import { useEffect, useState } from "react";
import ProductArt from "./ProductArt";
import { useStore } from "../context/StoreContext";
import { formatPrice } from "../data/products";

export default function ProductCard({ product }) {
  const { addToCart, toggleWish, wishlist } = useStore();
  const [imageOpen, setImageOpen] = useState(false);
  const wished = wishlist.includes(product.id);

  useEffect(() => {
    if (!imageOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => { if (event.key === "Escape") setImageOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [imageOpen]);

  return (
    <>
      <article className="card glass product">
        <div className="product-media">
          <button className="product-image-view" type="button" onClick={() => setImageOpen(true)} aria-label={`View full image of ${product.name}`} title="Click to view full image">
            {product.image ? (
              <img src={product.image} alt={product.name} loading="lazy" />
            ) : (
              <ProductArt category={product.category} finish={product.finish} seed={product.id} />
            )}
            <span className="image-zoom-hint">View full image ⤢</span>
          </button>
          {product.badge && <span className={`badge ${product.badge === "New" ? "new" : ""}`}>{product.badge}</span>}
          <button
            className={`heart ${wished ? "on" : ""}`}
            onClick={() => toggleWish(product)}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          >
            {wished ? "♥" : "♡"}
          </button>
        </div>
        <div className="product-info">
          <h3>{product.name}</h3>
          <p className="meta">{product.finish} · {product.style} · ★ {product.rating}</p>
          <div className="product-foot">
            <strong>{formatPrice(product.price)}</strong>
            <button className="btn small" onClick={() => addToCart(product)}>Add</button>
          </div>
        </div>
      </article>

      {imageOpen && (
        <div className="product-lightbox" role="dialog" aria-modal="true" aria-label={`${product.name} full image`} onClick={() => setImageOpen(false)}>
          <button className="lightbox-close" type="button" aria-label="Close full image" onClick={() => setImageOpen(false)}>×</button>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            {product.image ? <img className="lightbox-image" src={product.image} alt={product.name} /> : <ProductArt category={product.category} finish={product.finish} seed={product.id} />}
            <div className="lightbox-caption"><h2>{product.name}</h2><p>{product.finish} · {product.style}</p><strong>{formatPrice(product.price)}</strong></div>
          </div>
        </div>
      )}
    </>
  );
}
