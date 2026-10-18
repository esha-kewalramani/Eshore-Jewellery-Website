import { Link } from "react-router-dom";
import Logo from "./Logo";
import { cities } from "../data/products";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner glass">
        <div>
          <Logo />
          <p className="muted">Timeless beauty at prices that feel good — every piece Rs. 500 to Rs. 1000.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link to="/shop">All jewellery</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/shop?wish=1">Wishlist</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/story">Our story</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact#faq">FAQs</Link>
        </div>
        <div>
          <h4>We deliver in</h4>
          <p className="muted">{cities.join(" · ")}</p>
          <p className="muted">Cash on Delivery</p>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} ESHORE' Jewellery &amp; Beyond · Trendy ✦ Elegant ✦ You</p>
    </footer>
  );
}
