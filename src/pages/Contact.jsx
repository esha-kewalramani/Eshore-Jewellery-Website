import { useState } from "react";
import { WHATSAPP_NUMBER, cities } from "../data/products";

const faqs = [
  ["Which cities do you deliver to?", `We currently deliver across Sindh — ${cities.join(", ")} and nearby areas. More cities soon!`],
  ["What payment methods are available?", "Cash on Delivery is available everywhere. You can also arrange bank transfer or Easypaisa / JazzCash over WhatsApp."],
  ["How long does delivery take?", "Usually 2–4 working days within Sindh."],
  ["Can I return or exchange my order?", "Yes — if something is damaged or isn't right, message us within 48 hours of delivery and we'll make it right."],
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [open, setOpen] = useState(0);

  const send = (e) => {
    e.preventDefault();
    const text = `Hi ESHORE'! I'm ${form.name} (${form.email}).\n${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <section className="page">
      <div className="page-hero glass">
        <h1>Get in Touch</h1>
        <p className="muted">We're here for you, always.</p>
      </div>

      <div className="contact-grid">
        <div className="glass contact-info">
          <h3>Contact Information</h3>
          <p><strong>WhatsApp</strong><br />+{WHATSAPP_NUMBER}</p>
          <p><strong>Email</strong><br />hello@eshore.pk</p>
          <p><strong>Service area</strong><br />Sindh, Pakistan</p>
          <p className="muted">Instagram · TikTok · Facebook — @eshore.jewellery</p>
        </div>

        <form className="glass contact-form" onSubmit={send}>
          <h3>Send us a Message</h3>
          <input required placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea required rows="5" placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <button className="btn full" type="submit">Send via WhatsApp</button>
        </form>
      </div>

      <div id="faq" className="glass faq">
        <h3>Frequently Asked Questions</h3>
        {faqs.map(([q, a], i) => (
          <div key={q} className={`faq-item ${open === i ? "open" : ""}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)}>{q}<span>{open === i ? "−" : "+"}</span></button>
            {open === i && <p>{a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
