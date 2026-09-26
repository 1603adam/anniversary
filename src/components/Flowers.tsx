import type { CSSProperties } from "react";

type SvgProps = {
  className?: string;
  style?: CSSProperties;
};

export function HeartGlyph({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
      <path d="M12 21s-6.7-4.35-9.33-8.1C.5 9.7 1.2 5.9 4.4 4.55 6.3 3.75 8.35 4.3 12 7.4c3.65-3.1 5.7-3.65 7.6-2.85 3.2 1.35 3.9 5.15 1.73 8.35C18.7 16.65 12 21 12 21z" />
    </svg>
  );
}

export function LilySvg({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 120 140" className={className} style={style} fill="none">
      <path d="M60 138 C58 100 62 70 60 42" stroke="#6d8a6a" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M60 48 C28 78 22 28 60 14 C98 28 92 78 60 48Z"
        fill="#fff6f2"
        stroke="#f3b7c6"
        strokeWidth="1.2"
      />
      <path
        d="M60 50 C34 30 70 6 86 36 C78 62 60 50 60 50Z"
        fill="#ffe4ec"
        stroke="#e891a0"
        strokeWidth="0.8"
        opacity="0.95"
      />
      <path
        d="M60 50 C86 30 50 6 34 36 C42 62 60 50 60 50Z"
        fill="#fffaf6"
        stroke="#f4b8c5"
        strokeWidth="0.8"
      />
      <circle cx="60" cy="46" r="4.5" fill="#e8c15a" />
      <path d="M60 46 l-2 -16 M60 46 l2 -16 M60 46 l6 -14" stroke="#d4a017" strokeWidth="1.2" />
    </svg>
  );
}

export function RoseSvg({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 100 120" className={className} style={style} fill="none">
      <path d="M50 118 C49 88 52 70 50 52" stroke="#6d8a6a" strokeWidth="2.6" />
      <path d="M50 80 C28 72 30 96 50 92" fill="#7ea56f" />
      <path d="M50 80 C72 72 70 96 50 92" fill="#6d8a6a" />
      <circle cx="50" cy="42" r="22" fill="#e891a0" />
      <circle cx="50" cy="42" r="15" fill="#f4b8c5" />
      <circle cx="50" cy="42" r="8" fill="#c45d74" />
      <path
        d="M38 34 C44 28 56 28 58 38 C48 36 42 40 38 34Z"
        fill="#ffe4ec"
      />
    </svg>
  );
}

export function TinyBlossom({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="20"
          cy="12"
          rx="5"
          ry="8"
          fill="#f7c9d6"
          transform={`rotate(${a} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3.4" fill="#f0d56a" />
    </svg>
  );
}

export function IntroLily() {
  return (
    <svg viewBox="0 0 200 200" className="intro-bloom">
      <defs>
        <radialGradient id="pg" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#fffaf6" />
          <stop offset="70%" stopColor="#ffd6e2" />
          <stop offset="100%" stopColor="#e891a0" />
        </radialGradient>
      </defs>
      {[0, 60, 120, 180, 240, 300].map((r) => (
        <ellipse
          key={r}
          cx="100"
          cy="62"
          rx="22"
          ry="52"
          fill="url(#pg)"
          opacity="0.92"
          transform={`rotate(${r} 100 100)`}
        />
      ))}
      <circle cx="100" cy="100" r="10" fill="#e8c15a" />
      <circle cx="100" cy="100" r="4" fill="#fff6d0" />
    </svg>
  );
}
