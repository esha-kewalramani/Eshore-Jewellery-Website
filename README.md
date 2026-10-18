# ESHORE' — Jewellery & Beyond

Timeless beauty, trendy looks. A glassmorphism React e-commerce storefront for local delivery across Sindh.
12 categories · 60 products · every price between Rs. 500 and Rs. 1000.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview
```

Requires Node 18+.

## What's inside

- **Animated logo intro** (≈5.6 s, with a Skip button): symbol glow → golden line traces the arch → light sweep → brand name → tagline → the site fades in.
- **Glassmorphism** UI: frosted navbar, cards, filters, cart drawer, toasts over soft animated gold backdrops.
- **Pages:** Home, Shop (filters by category / price / finish / style, sorting, pagination, search, wishlist view), Categories, Our Story, Contact + FAQ.
- **Cart & checkout:** saved in the browser, Cash on Delivery, order is sent to your WhatsApp as a formatted message. Delivery Rs. 150, free above Rs. 2,000.

## Make it yours

| What | Where |
| --- | --- |
| Products, prices, categories | `src/data/products.js` |
| **Your WhatsApp number** (for orders) | `WHATSAPP_NUMBER` in `src/data/products.js` (e.g. `923001234567`) |
| Delivery cities | `cities` in `src/data/products.js` |
| Delivery fee / free-delivery threshold | top of `src/components/CartDrawer.jsx` |
| Colours & fonts | CSS variables at the top of `src/styles.css` |
| Intro length | `TOTAL` in `src/components/IntroAnimation.jsx` |
| Contact details, FAQs, story text | `src/pages/Contact.jsx`, `src/pages/Story.jsx` |

### Using real product photos

Put images in `public/images/` and add an `image` field to a product:

```js
{ ..., image: "/images/gold-hoops.jpg" }
```

Products without an `image` show a built-in gold illustration, so the shop works out of the box.

## Deploy

Run `npm run build` and upload `dist/` to Netlify, Vercel or any static host. Because the site uses client-side routing, add a rewrite so all paths serve `index.html` (Netlify: a `_redirects` file with `/* /index.html 200`).
