import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { MediaItem } from "../data/content";
import { HeartGlyph, LilySvg, RoseSvg, TinyBlossom } from "./Flowers";

type Props = {
  items: MediaItem[];
  palette: [string, string];
  seed: number;
  title: string;
};

type Mode = "fwd" | "back" | null;

const FLIP_MS = 620;
const EASE = "cubic-bezier(0.25, 0.9, 0.3, 1)";

const BACKDROPS = [
  "/images/blossom.jpg",
  "/images/peony.jpg",
  "/images/lilies.jpg",
  "/images/petals.jpg",
  "/images/pressed-flowers.jpg",
  "/images/hero-wash.jpg",
];

function isFilled(item: MediaItem) {
  return Boolean(item.src && item.src.trim().length > 0);
}

function Placeholder({
  item,
  palette,
  seed,
  slot,
  total,
}: {
  item: MediaItem;
  palette: [string, string];
  seed: number;
  slot: number;
  total: number;
}) {
  const kind = item.type === "video" ? "video" : item.type === "gif" ? "gif" : "photo";
  const Flower = seed % 3 === 0 ? LilySvg : seed % 3 === 1 ? RoseSvg : TinyBlossom;
  const backdrop = BACKDROPS[(seed + slot) % BACKDROPS.length];
  return (
    <div
      className="memory-placeholder relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
      style={{ ["--a" as string]: palette[0], ["--b" as string]: palette[1] }}
    >
      <img src={backdrop} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" draggable={false} />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/45" />
      <div className="pointer-events-none absolute -left-5 -top-3 opacity-60">
        <Flower className="h-20 w-20" />
      </div>
      <div className="relative z-[1] flex flex-col items-center px-6 text-center">
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/60 shadow-sm backdrop-blur-sm">
          {kind === "video" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c45d74">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c45d74" strokeWidth="1.7">
              <rect x="3" y="6" width="18" height="14" rx="2" />
              <circle cx="12" cy="13" r="3.2" />
              <path d="M8 6l1.4-2h5.2L16 6" />
            </svg>
          )}
        </div>
        <p className="font-serif text-lg italic text-[#5c3a44]/80">
          {item.src ? item.src.replace(/^\//, "") : `a ${kind} goes here`}
        </p>
        <p className="mt-1 max-w-[15rem] font-hand text-[16px] leading-tight text-[#8a5a66]">
          {item.alt || `Place file in public/${item.src ? item.src.replace(/^\//, "") : "image/"}`}
        </p>
        {total > 1 && (
          <p className="mt-3 text-[10px] tracking-[0.25em] text-[#c45d74]/80 uppercase">
            page {slot + 1} of {total}
          </p>
        )}
      </div>
    </div>
  );
}

function Slide({
  item,
  palette,
  seed,
  slot,
  total,
  active,
}: {
  item: MediaItem;
  palette: [string, string];
  seed: number;
  slot: number;
  total: number;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [item.src]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active) v.play().catch(() => undefined);
    else v.pause();
  }, [active]);

  if (!isFilled(item) || imgError) {
    return <Placeholder item={item} palette={palette} seed={seed} slot={slot} total={total} />;
  }

  if (item.type === "video") {
    return (
      <div className="relative h-full w-full bg-black">
        <video
          ref={videoRef}
          src={item.src}
          className="h-full w-full object-cover"
          playsInline
          loop
          muted={muted}
          preload="metadata"
          onError={() => setImgError(true)}
        />
        <button
          type="button"
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => {
            e.stopPropagation();
            setMuted((m) => !m);
          }}
          className="absolute bottom-3 right-3 rounded-full bg-black/40 px-3 py-1 font-hand text-sm text-white backdrop-blur"
        >
          {muted ? "sound off" : "sound on"}
        </button>
      </div>
    );
  }

  return (
    <img
      src={item.src}
      alt={item.alt || "A memory"}
      className="h-full w-full object-cover"
      draggable={false}
      onError={() => setImgError(true)}
    />
  );
}

function PageBack() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#fbf3ea]">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: "url(/images/pressed-flowers.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <HeartGlyph className="relative h-6 w-6 text-[#e891a0]" />
      <p className="relative mt-2 font-hand text-[15px] text-[#8a5a66]">next page ♡</p>
    </div>
  );
}

export default function BookMedia({ items, palette, seed, title }: Props) {
  const total = items.length;
  const canSwipe = total > 1;

  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<Mode>(null);
  const [target, setTarget] = useState<number | null>(null);
  const [angle, setAngle] = useState(0); // fwd: 0 → -180, back: -180 → 0
  const [animating, setAnimating] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(300);
  const drag = useRef({
    active: false,
    sx: 0,
    sy: 0,
    lock: null as "h" | "v" | null,
    lastX: 0,
    lastT: 0,
    vx: 0,
  });
  const live = useRef({ index, mode, angle, animating, target });
  live.current = { index, mode, angle, animating, target };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      widthRef.current = el.getBoundingClientRect().width || 300;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const finish = (to: number, commit?: number) => {
    setAnimating(true);
    setAngle(to);
    window.setTimeout(() => {
      if (commit !== undefined) setIndex(commit);
      setMode(null);
      setTarget(null);
      setAngle(0);
      setAnimating(false);
    }, FLIP_MS);
  };

  const goTo = (next: number) => {
    const { index: i, animating: busy } = live.current;
    if (busy || next === i || next < 0 || next > total - 1) return;
    if (next > i) {
      setMode("fwd");
      setTarget(next);
      setAngle(-0.5);
      requestAnimationFrame(() => requestAnimationFrame(() => finish(-180, next)));
    } else {
      setMode("back");
      setTarget(next);
      setAngle(-179.5);
      requestAnimationFrame(() => requestAnimationFrame(() => finish(0, next)));
    }
  };

  const onPointerDown = (e: PointerEvent) => {
    if (!canSwipe || live.current.animating) return;
    const d = drag.current;
    d.active = true;
    d.lock = null;
    d.sx = e.clientX;
    d.sy = e.clientY;
    d.lastX = e.clientX;
    d.lastT = performance.now();
    d.vx = 0;
  };

  const onPointerMove = (e: PointerEvent) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;

    if (!d.lock) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      d.lock = Math.abs(dx) > Math.abs(dy) * 1.2 ? "h" : "v";
      if (d.lock === "h") {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      }
    }
    if (d.lock !== "h") return;

    const now = performance.now();
    const dt = Math.max(1, now - d.lastT);
    d.vx = (e.clientX - d.lastX) / dt;
    d.lastX = e.clientX;
    d.lastT = now;

    const { index: i } = live.current;
    const w = widthRef.current;
    if (dx < 0 && i < total - 1) {
      setMode("fwd");
      setTarget(i + 1);
      setAngle(Math.max(-180, (dx / w) * 190));
    } else if (dx > 0 && i > 0) {
      setMode("back");
      setTarget(i - 1);
      setAngle(-180 + Math.min(180, (dx / w) * 190));
    } else {
      setMode(null);
      setTarget(null);
      setAngle(0);
    }
  };

  const onPointerUp = (e: PointerEvent) => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    const { mode: m, angle: a, index: i, target: tg } = live.current;
    const fling = Math.abs(d.vx) > 0.45;

    if (d.lock === "h") {
      if (m === "fwd") {
        if (a < -60 || (fling && d.vx < 0)) finish(-180, tg ?? i + 1);
        else finish(0);
      } else if (m === "back") {
        if (a > -120 || (fling && d.vx > 0)) finish(0, tg ?? i - 1);
        else finish(-180);
      }
      return;
    }

    // Tap on edges flips without dragging
    if (!d.lock) {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const rel = (e.clientX - rect.left) / rect.width;
      if (rel > 0.7) goTo(i + 1);
      else if (rel < 0.3) goTo(i - 1);
    }
  };

  const onPointerCancel = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;
    if (live.current.mode) finish(live.current.mode === "fwd" ? 0 : -180);
  };

  // What sits under the turning leaf, and what's printed on the leaf
  const underIdx =
    mode === "back" ? index : target ?? Math.min(index + 1, total - 1);
  const leafIdx = mode === "back" ? target ?? Math.max(index - 1, 0) : index;
  const dragging = drag.current.active && drag.current.lock === "h";
  const progress = Math.abs(angle) / 180; // 0 flat → 1 turned
  const shade = Math.sin(progress * Math.PI); // strongest mid-flip

  return (
    <div className="w-full">
      <div
        ref={stageRef}
        className="polaroid relative w-full select-none"
        style={{ aspectRatio: "4 / 5.2", touchAction: canSwipe ? "pan-y" : "auto" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {/* page stack hint */}
        {canSwipe && index < total - 1 && (
          <>
            <div className="absolute inset-[10px] bottom-[42px] translate-x-[3px] translate-y-[3px] rounded-[4px] bg-[#ecdccd]" />
            <div className="absolute inset-[10px] bottom-[42px] translate-x-[6px] translate-y-[6px] rounded-[4px] bg-[#e2cfbe]" />
          </>
        )}

        <div
          className="absolute inset-[10px] bottom-[42px] overflow-hidden rounded-[4px] bg-[#f3e4d6]"
          style={{ perspective: 1500, perspectiveOrigin: "50% 50%" }}
        >
          {/* underlying page */}
          <div className="absolute inset-0">
            <Slide
              item={items[underIdx]}
              palette={palette}
              seed={seed + underIdx}
              slot={underIdx}
              total={total}
              active={false}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(90deg, rgba(60,30,40,${0.35 * (1 - progress)}) 0%, transparent 40%)`,
              }}
            />
          </div>

          {/* turning leaf */}
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "left center",
              transform: `rotateY(${angle}deg)`,
              transition: animating ? `transform ${FLIP_MS}ms ${EASE}` : "none",
              willChange: "transform",
              zIndex: 2,
            }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
            >
              <Slide
                item={items[leafIdx]}
                palette={palette}
                seed={seed + leafIdx}
                slot={leafIdx}
                total={total}
                active={mode !== "back"}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(270deg, rgba(60,30,40,${0.45 * shade}) 0%, transparent 55%)`,
                }}
              />
            </div>
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <PageBack />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: `linear-gradient(90deg, rgba(60,30,40,${0.4 * shade}) 0%, transparent 55%)`,
                }}
              />
            </div>
          </div>
        </div>

        <p className="absolute bottom-[11px] left-0 right-0 text-center font-hand text-[15px] text-[#8a5a66]">
          {title}
        </p>

        {canSwipe && !dragging && !animating && index < total - 1 && (
          <div className="pointer-events-none absolute bottom-[50px] right-[10px] h-9 w-9 overflow-hidden">
            <div className="curl-hint" />
          </div>
        )}
      </div>

      {canSwipe && (
        <div className="mt-3 flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous page"
              onClick={() => goTo(index - 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-[#c45d74] shadow-sm disabled:opacity-30"
              disabled={index === 0}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Page ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-2 w-2 rounded-full transition-all duration-300"
                style={{
                  background: i === index ? "#e891a0" : "#f0cfd6",
                  width: i === index ? 18 : 8,
                }}
              />
            ))}
            <button
              type="button"
              aria-label="Next page"
              onClick={() => goTo(index + 1)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/70 text-[#c45d74] shadow-sm disabled:opacity-30"
              disabled={index === total - 1}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
          <p className="font-hand text-[14px] text-[#c45d74]/80">swipe to turn the page</p>
        </div>
      )}
    </div>
  );
}
