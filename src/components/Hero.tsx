import { couple, daysTogether } from "../data/content";
import { HeartGlyph, LilySvg, RoseSvg, TinyBlossom } from "./Flowers";

export default function Hero() {
  const days = daysTogether();

  return (
    <section className="page-snap relative flex flex-col overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/hero-wash.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffaf3]/55 via-[#fff6ec]/70 to-[#fff5ee]" />
      <img
        src="/images/pressed-flowers.jpg"
        alt=""
        className="corner-flower left-[-18px] top-[-8px] rotate-[-18deg]"
      />
      <img
        src="/images/pressed-flowers.jpg"
        alt=""
        className="corner-flower right-[-22px] bottom-[18%] rotate-[22deg] scale-x-[-1]"
      />

      <div className="relative z-[1] flex min-h-[100dvh] min-h-[100svh] flex-col items-center px-7 pb-16 pt-16">
        <p className="text-[11px] tracking-[0.42em] text-[#c45d74] uppercase">
          a private garden
        </p>

        <div className="relative mt-6 h-44 w-44">
          <div className="wreath-spin absolute inset-0">
            <LilySvg className="absolute left-1/2 top-0 h-12 w-12 -translate-x-1/2" />
            <RoseSvg className="absolute right-0 top-8 h-11 w-11" />
            <TinyBlossom className="absolute bottom-6 right-2 h-8 w-8" />
            <LilySvg className="absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2 rotate-180" />
            <RoseSvg className="absolute left-0 top-8 h-11 w-11 -scale-x-100" />
            <TinyBlossom className="absolute bottom-6 left-2 h-8 w-8" />
          </div>
          <div className="absolute inset-8 flex items-center justify-center rounded-full bg-[#fffaf3]/70 shadow-inner backdrop-blur-[2px]">
            <HeartGlyph className="heartbeat h-10 w-10 text-[#e891a0]" />
          </div>
        </div>

        <h1 className="font-script gold-script mt-2 text-[58px] leading-none">
          {couple.years} years
        </h1>
        <h2 className="mt-1 font-serif text-[34px] italic leading-tight text-[#5c3a44]">
          {couple.together}
        </h2>
        <p className="mt-1 font-hand text-[20px] text-[#8a5a66]">
          {couple.yourName}  ·  {couple.theirName}
        </p>
        <div className="shimmer-line mt-4 w-40" />
        <p className="mt-4 max-w-[18rem] text-center font-serif text-[17px] italic leading-relaxed text-[#8a5a66]">
          {couple.heroLine}
        </p>

        <div className="mt-8 grid w-full grid-cols-3 gap-2 rounded-2xl bg-white/45 px-2 py-3 text-center shadow-sm backdrop-blur-md">
          <Stat n={String(couple.years)} label="years" />
          <Stat n={days.toLocaleString()} label="days" />
          <Stat n="∞" label="soft looks" />
        </div>

        <p className="mt-6 font-hand text-[20px] text-[#5c3a44]">
          {couple.theirName}, this is yours.
        </p>
        <p className="mt-1 text-center text-[12px] tracking-[0.18em] text-[#c45d74]/90 uppercase">
          {couple.anniversaryDateLabel} · our anniversary
        </p>

        <div className="scroll-cue mt-auto flex flex-col items-center pt-8 text-[#c45d74]">
          <span className="font-hand text-base">turn the pages of us</span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-2xl text-[#5c3a44]">{n}</div>
      <div className="text-[10px] tracking-[0.22em] text-[#c45d74] uppercase">{label}</div>
    </div>
  );
}
