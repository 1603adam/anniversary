import { useEffect, useRef, useState } from "react";
import { couple } from "../data/content";
import Bouquet from "./Bouquet";
import { HeartGlyph } from "./Flowers";

export default function Finale() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const [letterShow, setLetterShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOpen(true);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!envelopeOpen) return;
    // Let the flap + rising letter finish, then melt the envelope away
    const t1 = window.setTimeout(() => setFading(true), 1950);
    const t2 = window.setTimeout(() => setLetterShow(true), 2500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [envelopeOpen]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden px-5 pb-44 pt-12">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff5ee] via-[#f9e3e4] to-[#4a2a35]" />
      <div
        className="absolute inset-x-0 bottom-0 h-[55%]"
        style={{
          backgroundImage: "url(/images/night-garden.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          maskImage: "linear-gradient(180deg, transparent, black 40%)",
          WebkitMaskImage: "linear-gradient(180deg, transparent, black 40%)",
        }}
      />

      {[10, 26, 44, 62, 78, 90].map((l, i) => (
        <span
          key={i}
          className="sparkle"
          style={{ left: `${l}%`, top: `${8 + (i % 4) * 9}%`, animationDelay: `${i * 0.4}s` }}
        />
      ))}

      <div className="relative z-[1] text-center">
        <p className="text-[10px] tracking-[0.38em] text-[#c45d74] uppercase">the last page, for now</p>
        <h2 className="font-script gold-script mt-2 text-[50px] leading-none">for you</h2>
        <p className="mx-auto mt-2 max-w-[17rem] font-serif text-[16px] italic leading-relaxed text-[#5c3a44]">
          a bouquet of lilies — and a letter I meant with both hands
        </p>
      </div>

      <div className="relative z-[1] mt-2">
        <Bouquet open={open} />
      </div>

      <div className="relative z-[2] mt-4 flex flex-col items-center">
        <p className="mb-3 font-hand text-[18px] text-[#fff6ec]">
          {envelopeOpen ? "read me slowly" : "tap the envelope"}
        </p>

        {!letterShow && (
          <div
            className={`envelope ${envelopeOpen ? "open" : ""} ${fading ? "fade" : ""}`}
            onClick={() => open && setEnvelopeOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setEnvelopeOpen(true);
            }}
          >
            <div className="envelope-body">
              <img
                src="/images/envelope.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[#f3d7a8]/55" />
            </div>
            <div className="letter-sheet px-4 py-3">
              <div className="letter-sheet-inner">
                <p className="font-script text-2xl text-[#c45d74]">{couple.letterTitle}</p>
                <p className="mt-4 font-script text-xl text-[#5c3a44]">
                  {couple.signature}
                </p>
                <p className="font-serif italic text-[#8a5a66]">{couple.yourName}</p>
              </div>
            </div>
            <div className="envelope-flap" />
            <img
              src="/images/wax-seal.jpg"
              alt=""
              className="wax-seal h-14 w-14 rounded-full object-cover shadow-lg"
            />
          </div>
        )}

        <article
          className={`letter-full relative z-[3] mx-auto mt-2 w-[92%] max-w-[360px] rounded-sm p-6 pb-10 ${
            letterShow ? "show" : ""
          }`}
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(255,250,242,0.94), rgba(255,246,236,0.96)), url(/images/letter-paper.jpg)",
            backgroundSize: "cover",
            boxShadow: "0 24px 50px rgba(20,10,14,0.35)",
            display: letterShow ? "block" : "none",
          }}
        >
          <img
            src="/images/pressed-flowers.jpg"
            alt=""
            className="pointer-events-none absolute right-2 top-2 h-16 w-16 rounded-sm object-cover opacity-45 mix-blend-multiply"
          />
          <p className="letter-para font-script text-3xl text-[#c45d74]" style={{ animationDelay: "0.25s" }}>
            {couple.letterTitle}
          </p>
          <p className="letter-para mt-10 font-script text-2xl text-[#5c3a44]" style={{ animationDelay: "0.55s" }}>
            {couple.signature}
          </p>
          <p className="letter-para font-serif italic text-[#8a5a66]" style={{ animationDelay: "0.7s" }}>
            {couple.yourName}
          </p>
          <p className="letter-para mt-6 font-hand text-[16px] text-[#c45d74]" style={{ animationDelay: "0.9s" }}>
            {couple.postscript}
          </p>
          <img
            src="/images/wax-seal.jpg"
            alt=""
            className="mt-4 h-14 w-14 rounded-full object-cover shadow-md"
          />
          <div className="mt-8 flex flex-col items-center">
            <HeartGlyph className="heartbeat h-8 w-8 text-[#e891a0]" />
            <p className="font-script gold-script mt-1 text-4xl">I love you</p>
            <p className="text-[10px] tracking-[0.3em] text-[#c45d74] uppercase">
              happy 3rd anniversary
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
