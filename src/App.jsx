import { useEffect, useState, useCallback } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import IntroAnimation from "./components/IntroAnimation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Categories from "./pages/Categories";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import { useStore } from "./context/StoreContext";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [intro, setIntro] = useState(true);
  const { toast } = useStore();
  const done = useCallback(() => setIntro(false), []);

  return (
    <>
      {intro && <IntroAnimation onDone={done} />}
      <div className="ambient" aria-hidden="true"><i /><i /><i /></div>
      <div className={`site ${intro ? "hidden" : "reveal"}`}>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/story" element={<Story />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer />
        <div className={`toast glass ${toast ? "show" : ""}`}>{toast}</div>
      </div>
    </>
  );
}
