import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductArt from "../components/ProductArt";
import { categories, products } from "../data/products";

const perks = [
  ["✦", "Premium Look", "Affordable prices"],
  ["◈", "Trendy Styles", "Fresh drops weekly"],
  ["⌂", "Local Delivery", "All across Sindh"],
  ["₨", "Cash on Delivery", "Pay when it arrives"],
];

export default function Home() {
  const best = products.filter((p) => p.badge === "Bestseller").slice(0, 4);
  const fresh = products.filter((p) => p.badge === "New").slice(0, 4);

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <img className="hero-model-photo" src="/images/home/hero-model.jpg" alt="Woman wearing elegant traditional jewellery" />
        <div className="hero-card">
          <span className="eyebrow">Timeless Beauty</span>
          <h1>Trendy Looks,<br /><em>Timeless You</em></h1>
          <p>Trending jewellery with a premium look — delivered locally across Sindh. Every piece Rs. 500 to Rs. 1000.</p>
          <div className="row">
            <Link to="/shop" className="btn">Shop Now →</Link>
            <Link to="/categories" className="btn ghost">Browse Categories</Link>
          </div>
        </div>
        <div className="hero-float glass">
          <img className="sindh-jewellery-photo" src="/images/home/sindh-jewellery.jpg" alt="Traditional gold and gemstone jewellery" />
          <span>Local delivery · Sindh</span>
        </div>
      </section>

      <section className="perks">
        {perks.map(([icon, t, s]) => (
          <div key={t} className="glass perk">
            <span className="perk-icon">{icon}</span>
            <div><strong>{t}</strong><small>{s}</small></div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <div><h2>Shop by Category</h2><p className="muted">Find your perfect piece</p></div>
          <Link to="/categories" className="link">View all →</Link>
        </div>
        <div className="cat-strip">
          {categories.map((c) => (
            <Link key={c.id} to={`/shop?cat=${c.id}`} className="cat glass">
              <div className="cat-art"><img src={c.image} alt={c.name} loading="lazy" /></div>
              <span>{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="banner glass">
        <div>
          <h2>Luxury Looks,<br />Pocket Friendly Prices</h2>
          <p className="muted">Nothing above Rs. 1000. Nothing below your standards.</p>
        </div>
        <Link to="/shop" className="btn">Explore Collection →</Link>
      </section>

      <section className="section">
        <div className="section-head">
          <div><h2>Best Sellers</h2><p className="muted">Loved by many</p></div>
          <Link to="/shop" className="link">View all →</Link>
        </div>
        <div className="grid">{best.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="section">
        <div className="section-head">
          <div><h2>New Arrivals</h2><p className="muted">Fresh this week</p></div>
          <Link to="/shop" className="link">View all →</Link>
        </div>
        <div className="grid">{fresh.map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>

      <section className="offer glass">
        <div>
          <h3>Limited Time Offer</h3>
          <p>Free delivery on orders above Rs. 2,000 across Sindh.</p>
        </div>
        <Link to="/shop" className="btn">Shop Now →</Link>
      </section>
    </>
  );
}
