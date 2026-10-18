import { Link } from "react-router-dom";

const chapters = [
  ["The Dream", "ESHORE' began with a simple wish: that every girl in Sindh could wear the trends she scrolls past online, without the premium price tag."],
  ["The Journey", "We hand-pick trending pieces — jhumkas, layered chains, pearl clips — and keep our own inventory, so what you see is what arrives at your door."],
  ["The Promise", "Premium look. Pocket-friendly prices. Every single piece is between Rs. 500 and Rs. 1000, with Cash on Delivery and honest, local service."],
  ["The Future", "We're starting in Sindh and growing city by city. More styles, more categories, the same timeless beauty — stay tuned."],
];

export default function Story() {
  return (
    <section className="page">
      <div className="page-hero glass">
        <h1>Our Story</h1>
        <p className="muted">Four stories. One dream.</p>
      </div>
      <div className="story-grid">
        {chapters.map(([t, body], i) => (
          <article key={t} className="glass story-card">
            <span className="num">0{i + 1}</span>
            <h3>{t}</h3>
            <p>{body}</p>
          </article>
        ))}
      </div>
      <div className="quote glass">
        <p>“More than just jewellery… it's your style, your story, without the luxury price.”</p>
        <Link to="/shop" className="btn">Start exploring →</Link>
      </div>
    </section>
  );
}
