import { TinyBlossom } from "./Flowers";

const BLOOMS = [
  { t: 0.12, top: "12%" },
  { t: 0.28, top: "28%" },
  { t: 0.44, top: "44%" },
  { t: 0.6, top: "60%" },
  { t: 0.76, top: "76%" },
  { t: 0.9, top: "90%" },
];

export default function Vine({ progress }: { progress: number }) {
  const length = 1400;
  const offset = length * (1 - Math.min(Math.max(progress, 0), 1));

  return (
    <div className="vine-wrap" aria-hidden>
      <svg className="vine-svg" viewBox="0 0 54 900" preserveAspectRatio="none">
        <path
          d="M28 0 C42 70, 10 130, 26 200 C50 290, 6 360, 30 450 C52 540, 8 620, 26 710 C46 790, 14 850, 28 900"
          fill="none"
          stroke="#7ea56f"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray={length}
          strokeDashoffset={offset}
          opacity="0.85"
        />
        <path
          d="M28 0 C42 70, 10 130, 26 200 C50 290, 6 360, 30 450 C52 540, 8 620, 26 710 C46 790, 14 850, 28 900"
          fill="none"
          stroke="#cfe3c6"
          strokeWidth="0.9"
          strokeDasharray={length}
          strokeDashoffset={offset}
          opacity="0.7"
        />
      </svg>
      {BLOOMS.map((b, i) => (
        <div
          key={i}
          className="absolute left-1"
          style={{
            top: b.top,
            opacity: progress > b.t ? 1 : 0,
            transform: `scale(${progress > b.t ? 1 : 0.4}) rotate(${i % 2 ? -18 : 16}deg)`,
            transition: "all 0.6s cubic-bezier(0.22,1.2,0.36,1)",
          }}
        >
          <TinyBlossom className="h-7 w-7" />
        </div>
      ))}
    </div>
  );
}
