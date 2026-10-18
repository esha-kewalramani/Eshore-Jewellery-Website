import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";
import { useStore } from "../context/StoreContext";

const PRICE_BANDS = [
  ["all", "All prices", 0, 1000],
  ["a", "Rs. 500 – 700", 500, 700],
  ["b", "Rs. 701 – 850", 701, 850],
  ["c", "Rs. 851 – 1,000", 851, 1000],
];
const FINISHES = ["Gold", "Silver", "Oxidized"];
const STYLES = ["Minimal", "Trendy", "Traditional", "Korean", "Statement"];
const PAGE = 12;

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const { wishlist } = useStore();
  const q = (params.get("q") || "").toLowerCase();
  const wishOnly = params.get("wish") === "1";

  const [cats, setCats] = useState(() => (params.get("cat") ? [params.get("cat")] : []));
  const [finishes, setFinishes] = useState([]);
  const [styles, setStyles] = useState([]);
  const [band, setBand] = useState("all");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggle = (arr, set, v) => {
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
    setPage(1);
  };

  const list = useMemo(() => {
    const [, , lo, hi] = PRICE_BANDS.find((b) => b[0] === band);
    let r = products.filter(
      (p) =>
        (!cats.length || cats.includes(p.category)) &&
        (!finishes.length || finishes.includes(p.finish)) &&
        (!styles.length || styles.includes(p.style)) &&
        p.price >= lo && p.price <= hi &&
        (!q || `${p.name} ${p.category} ${p.finish} ${p.style}`.toLowerCase().includes(q)) &&
        (!wishOnly || wishlist.includes(p.id))
    );
    if (sort === "low") r = [...r].sort((a, b) => a.price - b.price);
    if (sort === "high") r = [...r].sort((a, b) => b.price - a.price);
    if (sort === "popular") r = [...r].sort((a, b) => Number(b.badge === "Bestseller") - Number(a.badge === "Bestseller") || b.rating - a.rating);
    return r;
  }, [cats, finishes, styles, band, sort, q, wishOnly, wishlist]);

  const pages = Math.max(1, Math.ceil(list.length / PAGE));
  const shown = list.slice((page - 1) * PAGE, page * PAGE);

  const clear = () => {
    setCats([]); setFinishes([]); setStyles([]); setBand("all"); setPage(1);
    setParams({});
  };

  const Check = ({ label, on, onChange, count }) => (
    <label className="check">
      <input type="checkbox" checked={on} onChange={onChange} />
      <span>{label}{count !== undefined && <em> ({count})</em>}</span>
    </label>
  );

  return (
    <section className="page">
      <div className="page-hero glass">
        <h1>{wishOnly ? "Your Wishlist" : q ? `Results for “${params.get("q")}”` : "Shop All"}</h1>
        <p className="muted">Same jewellery, different vibes · <Link to="/">Home</Link> / Shop</p>
      </div>

      <div className="shop-layout">
        <button className="btn ghost filter-toggle" onClick={() => setFiltersOpen((o) => !o)}>
          {filtersOpen ? "Hide filters" : "Show filters"}
        </button>

        <aside className={`filters glass ${filtersOpen ? "open" : ""}`}>
          <h3>Filter by</h3>
          <h4>Category</h4>
          {categories.map((c) => (
            <Check key={c.id} label={c.name} count={products.filter((p) => p.category === c.id).length} on={cats.includes(c.id)} onChange={() => toggle(cats, setCats, c.id)} />
          ))}
          <h4>Price range</h4>
          {PRICE_BANDS.map(([id, label]) => (
            <label key={id} className="check">
              <input type="radio" name="band" checked={band === id} onChange={() => { setBand(id); setPage(1); }} />
              <span>{label}</span>
            </label>
          ))}
          <h4>Finish</h4>
          {FINISHES.map((f) => <Check key={f} label={f} on={finishes.includes(f)} onChange={() => toggle(finishes, setFinishes, f)} />)}
          <h4>Style</h4>
          {STYLES.map((s) => <Check key={s} label={s} on={styles.includes(s)} onChange={() => toggle(styles, setStyles, s)} />)}
          <button className="btn ghost full" onClick={clear}>Clear all</button>
        </aside>

        <div className="results">
          <div className="results-bar">
            <span className="muted">Showing {shown.length} of {list.length} products</span>
            <label>Sort by:
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="popular">Popularity</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
              </select>
            </label>
          </div>

          {shown.length ? (
            <div className="grid three">{shown.map((p) => <ProductCard key={p.id} product={p} />)}</div>
          ) : (
            <div className="glass empty"><p>No pieces match your filters yet.</p><button className="btn" onClick={clear}>Reset filters</button></div>
          )}

          {pages > 1 && (
            <div className="pager">
              {Array.from({ length: pages }).map((_, i) => (
                <button key={i} className={page === i + 1 ? "on" : ""} onClick={() => { setPage(i + 1); window.scrollTo({ top: 0, behavior: "smooth" }); }}>{i + 1}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
