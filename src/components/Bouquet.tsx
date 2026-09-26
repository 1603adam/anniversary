/**
 * A tied bouquet of lilies, garden roses, baby's breath and eucalyptus.
 * Everything animates with CSS once the parent adds `.is-open`.
 */

const TIE = { x: 160, y: 300 };

type Flower = {
  x: number;
  y: number;
  s: number;
  kind: "lily" | "rose" | "bud";
  delay: number;
  z: number;
};

const FLOWERS: Flower[] = [
  { x: 160, y: 92, s: 1.05, kind: "lily", delay: 0.0, z: 6 },
  { x: 96, y: 128, s: 0.92, kind: "lily", delay: 0.12, z: 5 },
  { x: 226, y: 124, s: 0.95, kind: "lily", delay: 0.18, z: 5 },
  { x: 128, y: 200, s: 0.74, kind: "lily", delay: 0.32, z: 8 },
  { x: 198, y: 204, s: 0.72, kind: "lily", delay: 0.38, z: 8 },
  { x: 66, y: 184, s: 0.86, kind: "rose", delay: 0.22, z: 4 },
  { x: 254, y: 180, s: 0.88, kind: "rose", delay: 0.28, z: 4 },
  { x: 160, y: 158, s: 0.7, kind: "rose", delay: 0.42, z: 7 },
  { x: 108, y: 82, s: 0.5, kind: "bud", delay: 0.5, z: 3 },
  { x: 214, y: 78, s: 0.5, kind: "bud", delay: 0.55, z: 3 },
];

const BREATH = [
  [48, 136],
  [278, 132],
  [76, 96],
  [244, 92],
  [160, 46],
  [40, 214],
  [284, 216],
  [122, 58],
  [200, 52],
];

const LEAVES = [
  { x: 44, y: 232, r: -58, s: 1.0 },
  { x: 276, y: 228, r: 56, s: 1.0 },
  { x: 86, y: 250, r: -34, s: 0.85 },
  { x: 236, y: 248, r: 32, s: 0.85 },
  { x: 62, y: 118, r: -74, s: 0.7 },
  { x: 262, y: 108, r: 70, s: 0.7 },
  { x: 160, y: 236, r: 0, s: 0.6 },
];

function stemPath(x: number, y: number) {
  const cx = TIE.x + (x - TIE.x) * 0.15;
  const cy = TIE.y - (TIE.y - y) * 0.55;
  return `M${TIE.x} ${TIE.y + 46} L${TIE.x} ${TIE.y} Q${cx} ${cy} ${x} ${y}`;
}

function Lily({ delay }: { delay: number }) {
  return (
    <g className="bq-head" style={{ animationDelay: `${delay}s` }}>
      {[0, 60, 120, 180, 240, 300].map((r, i) => (
        <g key={r} transform={`rotate(${r})`}>
          <path
            className="bq-petal"
            style={{ animationDelay: `${delay + 0.25 + i * 0.05}s` }}
            d="M0 0 C-14 -12 -17 -38 0 -56 C17 -38 14 -12 0 0Z"
            fill="url(#lilyPetal)"
          />
          <path
            className="bq-petal"
            style={{ animationDelay: `${delay + 0.25 + i * 0.05}s` }}
            d="M0 -8 L0 -40"
            stroke="#f2b9c8"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      ))}
      {[-40, -15, 15, 40, 0].map((r, i) => (
        <g key={r} transform={`rotate(${r})`} className="bq-stamen" style={{ animationDelay: `${delay + 0.7 + i * 0.04}s` }}>
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#d9b05b" strokeWidth="1.2" />
          <ellipse cx="0" cy="-19" rx="2.2" ry="1.3" fill="#c8862d" />
        </g>
      ))}
      <circle r="3" fill="#e9c66c" />
    </g>
  );
}

function Rose({ delay }: { delay: number }) {
  return (
    <g className="bq-head" style={{ animationDelay: `${delay}s` }}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((r, i) => (
        <g key={r} transform={`rotate(${r})`}>
          <ellipse
            className="bq-petal"
            style={{ animationDelay: `${delay + 0.2 + i * 0.04}s` }}
            cx="0"
            cy="-16"
            rx="12"
            ry="15"
            fill="url(#rosePetal)"
          />
        </g>
      ))}
      <circle r="17" fill="#ee9fb0" />
      <circle r="12" cx="2" cy="-1" fill="#f4b6c3" />
      <circle r="8" cx="-1" cy="1" fill="#e58aa0" />
      <circle r="4.5" cx="1" cy="0" fill="#cf6a84" />
      <path d="M-6 -3 Q0 -9 6 -3" stroke="#fbd7df" strokeWidth="1.4" fill="none" />
    </g>
  );
}

function Bud({ delay }: { delay: number }) {
  return (
    <g className="bq-head" style={{ animationDelay: `${delay}s` }}>
      <ellipse cx="0" cy="-2" rx="9" ry="16" fill="#fff5f7" stroke="#f4c3cf" strokeWidth="1" />
      <path d="M-6 6 Q0 -18 6 6" fill="#f7d4dc" />
      <path d="M-9 8 Q-4 -6 0 8 Q4 -6 9 8" fill="#8fb387" />
    </g>
  );
}

export default function Bouquet({ open }: { open: boolean }) {
  return (
    <div className={`bq-wrap ${open ? "is-open" : ""}`}>
      <svg viewBox="0 0 320 400" className="bq-svg" aria-hidden>
        <defs>
          <linearGradient id="lilyPetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f3b9c8" />
            <stop offset="45%" stopColor="#fff1f4" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="rosePetal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f8c6d1" />
            <stop offset="100%" stopColor="#e88ea2" />
          </linearGradient>
          <linearGradient id="paperBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f7e6d2" />
            <stop offset="100%" stopColor="#e9cfb0" />
          </linearGradient>
          <linearGradient id="paperFront" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fbeedc" />
            <stop offset="55%" stopColor="#f1dbbf" />
            <stop offset="100%" stopColor="#e2c39c" />
          </linearGradient>
          <linearGradient id="ribbon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6bfcc" />
            <stop offset="100%" stopColor="#d97d92" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#fff3e0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff3e0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* halo */}
        <circle className="bq-glow" cx="160" cy="150" r="150" fill="url(#glow)" />

        {/* back paper */}
        <g className="bq-paper-back">
          <path
            d={`M${TIE.x - 18} ${TIE.y + 8} L${TIE.x + 18} ${TIE.y + 8} L${TIE.x + 158} 118 Q160 96 ${TIE.x - 158} 118 Z`}
            fill="url(#paperBack)"
          />
        </g>

        {/* leaves */}
        {LEAVES.map((l, i) => (
          <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
            <path
              className="bq-leaf"
              style={{ animationDelay: `${0.9 + i * 0.08}s` }}
              d="M0 0 C-16 -18 -12 -48 0 -62 C12 -48 16 -18 0 0Z"
              fill={i % 2 ? "#9dbb93" : "#8aae84"}
            />
            <path
              className="bq-leaf"
              style={{ animationDelay: `${0.9 + i * 0.08}s` }}
              d="M0 -4 L0 -50"
              stroke="#e5efe0"
              strokeWidth="1"
              opacity="0.8"
            />
          </g>
        ))}

        {/* stems */}
        {FLOWERS.map((f, i) => (
          <path
            key={i}
            className="bq-stem"
            style={{ animationDelay: `${0.15 + i * 0.06}s` }}
            d={stemPath(f.x, f.y)}
            fill="none"
            stroke={i % 2 ? "#6f9468" : "#82a67b"}
            strokeWidth="3.4"
            strokeLinecap="round"
            pathLength={1}
          />
        ))}
        {BREATH.map(([x, y], i) => (
          <path
            key={`bs-${i}`}
            className="bq-stem"
            style={{ animationDelay: `${0.4 + i * 0.05}s` }}
            d={stemPath(x, y)}
            fill="none"
            stroke="#a6c29c"
            strokeWidth="1.4"
            pathLength={1}
          />
        ))}

        {/* baby's breath */}
        {BREATH.map(([x, y], i) => (
          <g key={`bb-${i}`} transform={`translate(${x} ${y})`}>
            {[
              [0, 0],
              [-7, -5],
              [7, -4],
              [-3, 7],
              [5, 6],
              [0, -9],
            ].map(([dx, dy], j) => (
              <circle
                key={j}
                className="bq-breath"
                style={{ animationDelay: `${1.7 + i * 0.07 + j * 0.03}s` }}
                cx={dx}
                cy={dy}
                r={j === 0 ? 3.2 : 2.4}
                fill={j % 2 ? "#ffffff" : "#fbeef1"}
                stroke="#efd4da"
                strokeWidth="0.6"
              />
            ))}
          </g>
        ))}

        {/* flowers */}
        {[...FLOWERS]
          .sort((a, b) => a.z - b.z)
          .map((f, i) => (
            <g key={i} transform={`translate(${f.x} ${f.y}) scale(${f.s})`}>
              {f.kind === "lily" ? (
                <Lily delay={1.05 + f.delay} />
              ) : f.kind === "rose" ? (
                <Rose delay={1.05 + f.delay} />
              ) : (
                <Bud delay={1.05 + f.delay} />
              )}
            </g>
          ))}

        {/* front paper */}
        <g className="bq-paper-front">
          <path
            d={`M${TIE.x - 20} ${TIE.y + 14} L${TIE.x + 20} ${TIE.y + 14} L${TIE.x + 128} 196 Q160 214 ${TIE.x - 128} 196 Z`}
            fill="url(#paperFront)"
          />
          <path
            d={`M${TIE.x - 4} ${TIE.y + 12} L${TIE.x + 60} 206`}
            stroke="#fff7ea"
            strokeWidth="2"
            opacity="0.7"
          />
          <path
            d={`M${TIE.x + 4} ${TIE.y + 12} L${TIE.x - 84} 204`}
            stroke="#d8b78f"
            strokeWidth="1.2"
            opacity="0.5"
          />
        </g>

        {/* stems below tie */}
        <g className="bq-tail">
          {[-10, -5, 0, 5, 10].map((dx, i) => (
            <path
              key={i}
              d={`M${TIE.x + dx * 0.5} ${TIE.y + 6} Q${TIE.x + dx * 1.2} ${TIE.y + 40} ${TIE.x + dx * 2} ${TIE.y + 78}`}
              stroke={i % 2 ? "#6f9468" : "#82a67b"}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </g>

        {/* ribbon */}
        <g className="bq-ribbon">
          <rect x={TIE.x - 30} y={TIE.y - 6} width="60" height="16" rx="6" fill="url(#ribbon)" />
          <path d={`M${TIE.x} ${TIE.y + 2} C${TIE.x - 40} ${TIE.y - 30} ${TIE.x - 60} ${TIE.y + 14} ${TIE.x} ${TIE.y + 2}Z`} fill="url(#ribbon)" />
          <path d={`M${TIE.x} ${TIE.y + 2} C${TIE.x + 40} ${TIE.y - 30} ${TIE.x + 60} ${TIE.y + 14} ${TIE.x} ${TIE.y + 2}Z`} fill="url(#ribbon)" />
          <path d={`M${TIE.x - 4} ${TIE.y + 6} C${TIE.x - 18} ${TIE.y + 40} ${TIE.x - 8} ${TIE.y + 58} ${TIE.x - 22} ${TIE.y + 82} L${TIE.x - 10} ${TIE.y + 72} Z`} fill="#e08ea1" />
          <path d={`M${TIE.x + 4} ${TIE.y + 6} C${TIE.x + 18} ${TIE.y + 40} ${TIE.x + 8} ${TIE.y + 58} ${TIE.x + 22} ${TIE.y + 82} L${TIE.x + 10} ${TIE.y + 72} Z`} fill="#e08ea1" />
          <circle cx={TIE.x} cy={TIE.y + 2} r="6" fill="#d97d92" />
        </g>
      </svg>
    </div>
  );
}
