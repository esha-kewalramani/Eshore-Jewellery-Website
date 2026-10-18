// ESHORE' catalogue — 12 categories, 60 products, all priced Rs. 500 – Rs. 1000.
// To use real photos later, add an `image: "/images/xyz.jpg"` field to any product
// (put the file in /public/images). Without it, a gold illustration is shown.

export const categories = [
  { id: "earrings", name: "Earrings", tag: "Studs, jhumkas & hoops", image: "/images/products/earrings-1.jpg" },
  { id: "necklaces", name: "Necklaces", tag: "Layered & statement", image: "/images/products/necklaces-1.jpg" },
  { id: "bracelets", name: "Bracelets", tag: "Charm & chain", image: "/images/products/bracelets-1.jpg" },
  { id: "rings", name: "Rings", tag: "Stackable & bold", image: "/images/products/rings-1.jpg" },
  { id: "anklets", name: "Anklets", tag: "Payal & chain", image: "/images/products/anklets-1.jpg" },
  { id: "watches", name: "Watches", tag: "Dainty & classic", image: "/images/products/watches-1.jpg" },
  { id: "pendants", name: "Pendants", tag: "Minimal & meaningful", image: "/images/products/pendants-1.jpg" },
  { id: "chains", name: "Chains", tag: "Everyday gold", image: "/images/products/chains-1.jpg" },
  { id: "nosepins", name: "Nose Pins", tag: "Tiny & traditional", image: "/images/products/nosepins-1.jpg" },
  { id: "bangles", name: "Bangles", tag: "Kangan & kada", image: "/images/products/bangles-1.jpg" },
  { id: "sets", name: "Jewellery Sets", tag: "Complete the look", image: "/images/products/sets-1.jpg" },
  { id: "hair", name: "Hair Accessories", tag: "Clips & pins", image: "/images/products/hair-1.jpg" },
];

// [name, price, finish, style, badge]
const raw = {
  earrings: [
    ["Crystal Cluster Stud Earrings", 799, "Gold", "Minimal", ""],
    ["Gold Hoop Earrings", 1000, "Gold", "Classic", "Bestseller"],
    ["Crystal Drop Earrings", 649, "Silver", "Statement", ""],
    ["Ruby Accent Jhumka Earrings", 549, "Gold", "Traditional", ""],
    ["Silver Floral Drop Earrings", 949, "Silver", "Elegant", "New"],
  ],
  necklaces: [
    ["Solitaire Pendant Necklace", 899, "Gold", "Minimal", "Bestseller"],
    ["Pearl Choker Necklace", 749, "Gold", "Traditional", ""],
    ["Delicate Layered Necklace", 599, "Gold", "Minimal", ""],
    ["Traditional Gold Statement Necklace", 979, "Gold", "Traditional", "New"],
    ["Silver Heart Pendant Necklace", 549, "Silver", "Minimal", ""],
  ],
  bracelets: [
    ["Slim Gold Tennis Bracelet", 849, "Gold", "Classic", "Bestseller"],
    ["Wide Gold Cuff Bracelet", 649, "Gold", "Statement", ""],
    ["Pearl Charm Bracelet", 999, "Gold", "Delicate", ""],
    ["Pearl Double-Strand Bracelet", 529, "Gold", "Classic", "New"],
    ["Floral Crystal Cuff Bracelet", 699, "Gold", "Statement", ""],
  ],
  rings: [
    ["Solitaire Diamond-Style Ring", 899, "Silver", "Classic", ""],
    ["Ruby Oval Stone Ring", 549, "Gold", "Statement", ""],
    ["Blue Sapphire-Style Ring", 799, "Silver", "Statement", "Bestseller"],
    ["Emerald Stone Ring", 599, "Rose gold", "Statement", ""],
    ["Black Band Ring", 679, "Black", "Minimal", "New"],
  ],
  anklets: [
    ["Fine Gold Chain Anklet", 699, "Gold", "Minimal", ""],
    ["Gold Link Anklet", 899, "Gold", "Classic", "Bestseller"],
    ["Delicate Bead Anklet", 549, "Gold", "Delicate", ""],
    ["Silver Chain Anklet", 749, "Silver", "Minimal", ""],
    ["Black Bead Anklet", 949, "Black", "Traditional", "New"],
  ],
  watches: [
    ["Gold Bracelet Watch", 999, "Gold", "Classic", "Bestseller"],
    ["Rose Gold Mesh Watch", 899, "Rose gold", "Minimal", ""],
    ["Black Dial Steel Watch", 949, "Silver and black", "Classic", ""],
    ["Rectangular Black Strap Watch", 849, "Black and gold", "Classic", "New"],
    ["Silver White-Dial Watch", 979, "Silver", "Classic", ""],
  ],
  pendants: [
    ["Crystal Teardrop Pendant", 749, "Gold", "Elegant", ""],
    ["Tree of Life Pendant", 849, "Gold", "Nature-inspired", ""],
    ["Blue Oval Stone Pendant", 599, "Silver", "Statement", "Bestseller"],
    ["Gold Rectangular Pendant", 699, "Gold", "Traditional", ""],
    ["Pink Heart Pendant", 649, "Rose gold", "Romantic", "New"],
  ],
  chains: [
    ["Gold Rope Chain", 799, "Gold", "Classic", "Bestseller"],
    ["Fine Gold Chain Necklace", 699, "Gold", "Delicate", ""],
    ["Silver Box Chain Necklace", 849, "Silver", "Classic", ""],
    ["Gold Link Chain Necklace", 949, "Gold", "Statement", "New"],
    ["Black Beaded Chain Necklace", 899, "Black", "Classic", ""],
  ],
  nosepins: [
    ["Gold Floral Nose Stud", 699, "Gold", "Floral", "Bestseller"],
    ["Green Stone Nose Stud", 549, "Gold", "Traditional", ""],
    ["Teardrop Stone Nose Stud", 649, "Gold", "Statement", ""],
    ["Pink Floral Nose Stud", 599, "Gold", "Floral", "New"],
    ["Silver Crystal Nose Stud", 579, "Silver", "Minimal", ""],
  ],
  bangles: [
    ["Gold Crystal Bangle", 949, "Gold", "Traditional", "Bestseller"],
    ["Ruby and Gold Bangle Set", 899, "Gold", "Traditional", ""],
    ["Slim Plain Gold Bangles", 749, "Gold", "Minimal", ""],
    ["Red and Gold Bangle Set", 999, "Gold", "Traditional", "New"],
    ["Silver Crystal Bangle Set", 679, "Silver", "Statement", ""],
  ],
  sets: [
    ["Classic Diamond-Style Jewellery Set", 999, "Gold", "Classic", "Bestseller"],
    ["Ruby Accent Jewellery Set", 899, "Gold", "Statement", ""],
    ["Emerald Accent Jewellery Set", 849, "Gold", "Statement", ""],
    ["Pearl Necklace and Earring Set", 749, "Gold", "Classic", "New"],
    ["Traditional Kundan Jewellery Set", 979, "Gold", "Traditional", ""],
  ],
  hair: [
    ["Pearl Hair Clips", 599, "Gold and pearl", "Elegant", "Bestseller"],
    ["Floral Hair Pins", 549, "Gold and pearl", "Floral", ""],
    ["Pearl Hair Comb", 649, "Gold and pearl", "Elegant", "New"],
    ["Traditional Gajra Hair Accessory", 749, "White flowers", "Traditional", ""],
    ["Traditional Maang Tikka", 699, "Gold", "Traditional", ""],
  ],
};

export const products = Object.entries(raw).flatMap(([category, items]) =>
  items.map(([name, price, finish, style, badge], i) => ({
    id: `${category}-${i + 1}`,
    image: `/images/products/${category}-${i + 1}.jpg`,
    category,
    name,
    price,
    finish,
    style,
    badge,
    rating: (4.3 + ((i * 7 + price) % 7) / 10).toFixed(1),
    description: `${name} — a ${style.toLowerCase()} design in a ${finish.toLowerCase()} finish. Please check the product photos and specifications before ordering.`,
  }))
);

export const categoryName = (id) => categories.find((c) => c.id === id)?.name ?? id;

export const formatPrice = (n) => `Rs. ${n.toLocaleString("en-PK")}`;

export const cities = ["Khairpur", "Sukkur", "Hyderabad", "Karachi", "Larkana", "Nawabshah", "Mirpurkhas", "Jacobabad"];

// Set your WhatsApp number (country code, no +) to receive orders.
export const WHATSAPP_NUMBER = "923000000000";
