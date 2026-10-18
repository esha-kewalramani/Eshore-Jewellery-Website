export function LogoMark({ size = 40, animated = false }) {
  return (
    <svg
      className={`logo-mark ${animated ? "is-animated" : ""}`}
      width={size}
      height={size * 1.15}
      viewBox="0 0 120 140"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F6E3B4" />
          <stop offset=".5" stopColor="#D4AF7C" />
          <stop offset="1" stopColor="#9C6F3A" />
        </linearGradient>
      </defs>
      <path className="arch" pathLength="1" d="M18 132 V70 Q18 18 60 10 Q102 18 102 70 V132" stroke="url(#goldLine)" strokeWidth="3" strokeLinecap="round" />
      <path className="arch inner" pathLength="1" d="M30 132 V72 Q30 30 60 24 Q90 30 90 72 V132" stroke="url(#goldLine)" strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
      <g className="gem">
        <path d="M44 62 L52 50 H68 L76 62 L60 84 Z" stroke="url(#goldLine)" strokeWidth="2" strokeLinejoin="round" />
        <path d="M44 62 H76 M52 50 L60 62 L68 50 M60 62 V84" stroke="url(#goldLine)" strokeWidth="1" opacity=".8" />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return <span className={`wordmark ${className}`}>ESHORE<span className="apos">'</span></span>;
}

export default function Logo({ compact = false }) {
  return (
    <span className="logo-lockup">
      <LogoMark size={compact ? 22 : 30} />
      <span className="logo-text">
        <Wordmark />
        <small>JEWELLERY &amp; BEYOND</small>
      </span>
    </span>
  );
}
