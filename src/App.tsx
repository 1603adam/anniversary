import { useEffect, useState } from "react";
import { memories } from "./data/content";
import CatCompanion from "./components/CatCompanion";
import Finale from "./components/Finale";
import Hero from "./components/Hero";
import MemorySection from "./components/MemorySection";
import Petals from "./components/Petals";
import SongSection from "./components/SongSection";
import Vine from "./components/Vine";
import { IntroLily } from "./components/Flowers";

type Heart = { id: number; x: number; y: number; glyph: string };

const MEOWS = ["♡", "mrrp", "this one", "she's the one", "turn the page", "so pretty"];

export default function App() {
  const [progress, setProgress] = useState(0);
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [speech, setSpeech] = useState<string | null>(null);
  const [introGone, setIntroGone] = useState(false);
  const [hint, setHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setIntroGone(true), 3800);
    const h = window.setTimeout(() => setHint(false), 7000);
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(h);
    };
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSpeech(MEOWS[Math.floor(Math.random() * MEOWS.length)]);
      window.setTimeout(() => setSpeech(null), 1600);
    }, 9000);
    return () => window.clearInterval(id);
  }, []);

  const burst = (x: number, y: number) => {
    const glyphs = ["♡", "♥", "❀", "✿"];
    const batch: Heart[] = Array.from({ length: 7 }, (_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() * 40 - 20),
      y: y + (Math.random() * 16 - 8),
      glyph: glyphs[i % glyphs.length],
    }));
    setHearts((h) => [...h, ...batch]);
    window.setTimeout(() => {
      setHearts((h) => h.filter((p) => !batch.some((b) => b.id === p.id)));
    }, 1400);
  };

  return (
    <div className="garden-stage">
      {!introGone && (
        <div className="intro-veil">
          <div className="flex flex-col items-center">
            <IntroLily />
            <p className="mt-4 font-script text-4xl text-[#5c3a44]">once upon a garden</p>
            <p className="mt-1 text-[11px] tracking-[0.32em] text-[#c45d74] uppercase">
              blooming for you
            </p>
          </div>
        </div>
      )}

      <div className="app-column">
        <div className="paper-grain" />
        <Hero />
        <SongSection />
        {memories.map((m, i) => (
          <MemorySection key={m.id} memory={m} index={i} />
        ))}
        <Finale />
      </div>

      <Vine progress={progress} />
      <Petals />

      <div className="progress-rail" aria-hidden>
        <span style={{ width: `${Math.min(progress * 100, 100)}%` }} />
      </div>

      <div className="cat-dock">
        {hint && !speech && introGone && (
          <div className="speech-bubble">pet me ♡</div>
        )}
        {speech && <div className="speech-bubble">{speech}</div>}
        <CatCompanion
          onPet={(x, y) => {
            burst(x, y);
            setSpeech("purrrr");
            window.setTimeout(() => setSpeech(null), 1200);
          }}
        />
      </div>

      {hearts.map((h) => (
        <span
          key={h.id}
          className="float-heart"
          style={{
            left: h.x,
            top: h.y,
            ["--hx" as string]: `${(h.id % 7) * 8 - 24}px`,
            color: "#e891a0",
            fontSize: 18,
          }}
        >
          {h.glyph}
        </span>
      ))}
    </div>
  );
}
