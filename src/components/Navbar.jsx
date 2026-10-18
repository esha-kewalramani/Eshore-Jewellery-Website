import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useStore } from "../context/StoreContext";

const links = [
  ["/", "Home"],
  ["/shop", "Shop"],
  ["/categories", "Categories"],
  ["/story", "Our Story"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const { cartCount, setCartOpen, wishlist } = useStore();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [searching, setSearching] = useState(false);
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    nav(`/shop?q=${encodeURIComponent(q.trim())}`);
    setSearching(false);
    setOpen(false);
  };

  return (
    <header className="navbar glass">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <Logo compact />
      </Link>

      <nav className={`links ${open ? "open" : ""}`}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="actions">
        {searching ? (
          <form onSubmit={submit} className="search">
            <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search jewellery…" onBlur={() => !q && setSearching(false)} />
          </form>
        ) : (
          <button aria-label="Search" onClick={() => setSearching(true)}>⌕</button>
        )}
        <Link to="/shop?wish=1" aria-label="Wishlist" className="icon-btn">
          ♡{wishlist.length > 0 && <span className="dot">{wishlist.length}</span>}
        </Link>
        <button aria-label="Cart" className="icon-btn" onClick={() => setCartOpen(true)}>
          🛍{cartCount > 0 && <span className="dot">{cartCount}</span>}
        </button>
        <button className="burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
