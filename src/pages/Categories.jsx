import { Link } from "react-router-dom";
import ProductArt from "../components/ProductArt";
import { categories, products } from "../data/products";

export default function Categories() {
  return (
    <section className="page">
      <div className="page-hero glass">
        <h1>Our Categories</h1>
        <p className="muted">Explore every type, every style, every you.</p>
      </div>
      <div className="cat-grid">
        {categories.map((c) => {
          const n = products.filter((p) => p.category === c.id).length;
          return (
            <Link key={c.id} to={`/shop?cat=${c.id}`} className="glass cat-card">
              <div className="cat-card-art"><img src={c.image} alt={c.name} loading="lazy" /></div>
              <h3>{c.name}</h3>
              <p className="muted">{c.tag}</p>
              <span className="pill">{n} styles</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
