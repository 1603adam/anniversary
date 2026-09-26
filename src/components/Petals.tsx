const PETALS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: `${(i * 23 + 6) % 94}%`,
  delay: `${(i * 1.3) % 10}s`,
  duration: `${13 + (i % 5) * 1.8}s`,
  drift: `${(i % 2 === 0 ? 36 : -44) - (i % 4) * 6}px`,
  spin: `${i % 2 === 0 ? 300 : -340}deg`,
  color: i % 3 === 0 ? "#f4b8c5" : i % 3 === 1 ? "#fde9ee" : "#f0a3b2",
  size: 9 + (i % 4) * 3,
}));

export default function Petals() {
  return (
    <div className="petal-layer" aria-hidden>
      {PETALS.map((p) => (
        <span
          key={p.id}
          className="fall-petal"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            background: `linear-gradient(135deg, ${p.color}, #fff6f8)`,
            width: p.size,
            height: p.size * 1.25,
            ["--drift" as string]: p.drift,
            ["--spin" as string]: p.spin,
          }}
        />
      ))}
    </div>
  );
}
