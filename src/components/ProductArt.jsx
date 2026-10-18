// Self-contained gold jewellery illustrations (no external images needed).
// Each product gets a slightly different tint so the grid feels varied.

const FINISH = {
  Gold: ["#F6E3B4", "#D4AF7C", "#9C6F3A"],
  Silver: ["#F4F4F4", "#C9CDD2", "#7C838B"],
  Oxidized: ["#E3D2BD", "#9C8266", "#4A3A2F"],
};

const BG = [
  ["#F3E6D6", "#D9BFA0"],
  ["#EBD9C4", "#B8906A"],
  ["#F5EBDD", "#CBA98A"],
  ["#E8D5BE", "#A98563"],
];

function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

const shapes = {
  earrings: (s) => (
    <g stroke={s.d} strokeWidth="1.5" fill="none">
      {[-34, 34].map((x) => (
        <g key={x} transform={`translate(${100 + x} 0)`}>
          <circle cx="0" cy="50" r="5" fill={s.m} />
          <path d="M0 55 V78" stroke={s.m} strokeWidth="2.5" />
          <path d="M-14 78 Q0 128 14 78 Z" fill={s.l} stroke={s.d} />
          <circle cx="0" cy="104" r="5" fill={s.m} stroke="none" />
          <circle cx="0" cy="124" r="4" fill={s.m} stroke="none" />
        </g>
      ))}
    </g>
  ),
  necklaces: (s) => (
    <g fill="none" strokeLinecap="round">
      <path d="M40 50 Q100 190 160 50" stroke={s.m} strokeWidth="3" />
      <path d="M55 50 Q100 150 145 50" stroke={s.d} strokeWidth="2" strokeDasharray="1 5" />
      <path d="M100 138 l-9 -10 l9 -12 l9 12 z" fill={s.l} stroke={s.d} strokeWidth="1.5" />
      <circle cx="100" cy="148" r="5" fill={s.m} stroke="none" />
    </g>
  ),
  bracelets: (s) => (
    <g fill="none">
      <ellipse cx="100" cy="100" rx="58" ry="34" stroke={s.m} strokeWidth="6" />
      <ellipse cx="100" cy="100" rx="58" ry="34" stroke={s.l} strokeWidth="2" strokeDasharray="3 7" />
      <circle cx="100" cy="134" r="8" fill={s.l} stroke={s.d} strokeWidth="1.5" />
      <circle cx="68" cy="126" r="5" fill={s.m} />
      <circle cx="132" cy="126" r="5" fill={s.m} />
    </g>
  ),
  rings: (s) => (
    <g fill="none">
      <ellipse cx="100" cy="112" rx="36" ry="32" stroke={s.m} strokeWidth="9" />
      <ellipse cx="100" cy="112" rx="36" ry="32" stroke={s.l} strokeWidth="2" />
      <path d="M100 66 l-14 -14 l14 -16 l14 16 z" fill={s.l} stroke={s.d} strokeWidth="1.5" />
    </g>
  ),
  anklets: (s) => (
    <g fill="none">
      <path d="M30 80 Q100 160 170 80" stroke={s.m} strokeWidth="3" />
      {[50, 72, 100, 128, 150].map((x, i) => (
        <circle key={x} cx={x} cy={[96, 117, 126, 117, 96][i]} r="6" fill={s.l} stroke={s.d} strokeWidth="1.5" />
      ))}
    </g>
  ),
  watches: (s) => (
    <g>
      <rect x="84" y="20" width="32" height="40" rx="6" fill={s.m} />
      <rect x="84" y="140" width="32" height="40" rx="6" fill={s.m} />
      <circle cx="100" cy="100" r="40" fill={s.m} />
      <circle cx="100" cy="100" r="33" fill="#FBF5EC" stroke={s.d} strokeWidth="2" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={i} x1="100" y1="72" x2="100" y2="76" stroke={s.d} strokeWidth="2" transform={`rotate(${i * 30} 100 100)`} />
      ))}
      <path d="M100 100 V80 M100 100 L114 108" stroke={s.d} strokeWidth="3" strokeLinecap="round" />
    </g>
  ),
  pendants: (s) => (
    <g fill="none" strokeLinecap="round">
      <path d="M45 40 Q100 110 155 40" stroke={s.m} strokeWidth="3" />
      <path d="M100 92 C70 110 70 150 100 172 C130 150 130 110 100 92 Z" fill={s.l} stroke={s.d} strokeWidth="2" />
      <circle cx="100" cy="132" r="9" fill={s.m} stroke="none" />
    </g>
  ),
  chains: (s) => (
    <g fill="none" stroke={s.m} strokeWidth="5">
      {Array.from({ length: 9 }).map((_, i) => (
        <ellipse key={i} cx={34 + i * 16.5} cy={100 + Math.sin(i * 0.8) * 28} rx="12" ry="7" transform={`rotate(${(i % 2) * 90} ${34 + i * 16.5} ${100 + Math.sin(i * 0.8) * 28})`} />
      ))}
    </g>
  ),
  nosepins: (s) => (
    <g>
      <circle cx="100" cy="100" r="30" fill={s.m} />
      <circle cx="100" cy="100" r="22" fill={s.l} stroke={s.d} strokeWidth="1.5" />
      <path d="M100 78 L110 100 L100 122 L90 100 Z" fill="#FBF5EC" opacity=".75" />
      <path d="M130 100 H168" stroke={s.m} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
  bangles: (s) => (
    <g fill="none">
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx={78 + i * 22} cy="100" rx="30" ry="46" stroke={i === 1 ? s.l : s.m} strokeWidth="8" />
      ))}
      {[0, 1, 2].map((i) => (
        <ellipse key={"t" + i} cx={78 + i * 22} cy="100" rx="30" ry="46" stroke={s.d} strokeWidth="1" strokeDasharray="2 6" />
      ))}
    </g>
  ),
  sets: (s) => (
    <g fill="none" strokeLinecap="round">
      <path d="M38 40 Q100 150 162 40" stroke={s.m} strokeWidth="3" />
      <path d="M100 120 l-12 -12 l12 -16 l12 16 z" fill={s.l} stroke={s.d} strokeWidth="1.5" transform="translate(0 22)" />
      {[-46, 46].map((x) => (
        <g key={x}>
          <path d={`M${100 + x} 150 v12`} stroke={s.m} strokeWidth="3" />
          <circle cx={100 + x} cy="170" r="8" fill={s.l} stroke={s.d} strokeWidth="1.5" />
        </g>
      ))}
    </g>
  ),
  hair: (s) => (
    <g>
      <rect x="44" y="84" width="112" height="22" rx="11" fill={s.m} />
      {[66, 100, 134].map((x) => (
        <circle key={x} cx={x} cy="95" r="9" fill="#FBF5EC" stroke={s.d} strokeWidth="2" />
      ))}
      <path d="M52 112 V150 M148 112 V150" stroke={s.m} strokeWidth="4" strokeLinecap="round" />
    </g>
  ),
};

export default function ProductArt({ category, finish = "Gold", seed = "" }) {
  const [l, m, d] = FINISH[finish] || FINISH.Gold;
  const h = hash(seed + category);
  const [bg1, bg2] = BG[h % BG.length];
  const gid = `bg-${h}`;
  const draw = shapes[category] || shapes.pendants;
  return (
    <svg viewBox="0 0 200 200" className="art" role="img" aria-label={`${category} illustration`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id={gid} cx="30%" cy="25%" r="90%">
          <stop offset="0" stopColor={bg1} />
          <stop offset="1" stopColor={bg2} />
        </radialGradient>
        <filter id={`sh-${h}`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#4A3A2F" floodOpacity=".35" />
        </filter>
      </defs>
      <rect width="200" height="200" fill={`url(#${gid})`} />
      <circle cx="165" cy="35" r="30" fill="#fff" opacity=".18" />
      <circle cx="30" cy="170" r="42" fill="#fff" opacity=".1" />
      <g filter={`url(#sh-${h})`}>{draw({ l, m, d })}</g>
      <g fill="#fff" opacity=".85">
        <path d="M168 150 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 z" />
        <path d="M30 40 l2 5 l5 2 l-5 2 l-2 5 l-2 -5 l-5 -2 l5 -2 z" />
      </g>
    </svg>
  );
}
