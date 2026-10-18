import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

// Logo sequence (≈5.6s), mirroring the reference board:
// 1 symbol appears with a soft glow → 2 golden line traces the design →
// 3 light reflection sweeps → 4 brand name appears → 5 tagline fades in → 6 reveal site.
const TOTAL = 5600;
const EXIT = 800;

export default function IntroAnimation({ onDone }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), TOTAL);
    const t2 = setTimeout(onDone, TOTAL + EXIT);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  const skip = () => {
    setLeaving(true);
    setTimeout(onDone, 500);
  };

  return (
    <div className={`intro ${leaving ? "leaving" : ""}`} role="presentation">
      <div className="intro-glow" />
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="spark" style={{ "--x": `${(i * 53) % 100}%`, "--y": `${(i * 37) % 100}%`, "--d": `${(i % 6) * 0.5}s` }} />
      ))}
      <div className="intro-stage">
        <div className="intro-mark">
          <LogoMark size={150} animated />
          <span className="shine" />
        </div>
        <h1 className="intro-name">
          {"ESHORE".split("").map((ch, i) => (
            <span key={i} style={{ "--i": i }}>{ch}</span>
          ))}
          <span className="apos" style={{ "--i": 6 }}>'</span>
        </h1>
        <p className="intro-sub">JEWELLERY &amp; BEYOND</p>
        <p className="intro-tag">Timeless Beauty <i>✦</i> Trendy Looks</p>
      </div>
      <button className="intro-skip" onClick={skip}>Skip</button>
    </div>
  );
}
