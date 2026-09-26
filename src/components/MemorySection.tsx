import { useEffect, useRef, useState } from "react";
import type { Memory } from "../data/content";
import { palettes } from "../data/content";
import BookMedia from "./BookMedia";

export default function MemorySection({
  memory,
  index,
}: {
  memory: Memory;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);
  const palette = palettes[index % palettes.length] as [string, string];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShown(true);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pages = memory.media.length;

  return (
    <section
      ref={ref}
      className="page-snap flex flex-col justify-center px-6 pb-16 pt-10"
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-[10px] tracking-[0.32em] text-[#c45d74] uppercase">
            {memory.kicker}
            {pages > 1 && <span className="ml-2 text-[#c9a36b]">· {pages} pages</span>}
          </p>
          <h3 className="font-serif text-[27px] italic leading-tight text-[#5c3a44]">
            {memory.title}
          </h3>
          {memory.date && (
            <p className="mt-0.5 font-hand text-[16px] text-[#8a5a66]">{memory.date}</p>
          )}
        </div>
        <div className="font-script text-[34px] leading-none text-[#e891a0]/70">
          {String(memory.id).padStart(2, "0")}
        </div>
      </div>

      <div
        className="mx-auto w-full"
        style={{
          maxWidth: "min(330px, 60dvh)",
          transform: `rotate(${index % 2 === 0 ? -0.8 : 0.8}deg)`,
        }}
      >
        <BookMedia
          items={memory.media}
          palette={palette}
          seed={memory.id}
          title={memory.date ? memory.date : "ours"}
        />
      </div>

      <blockquote className="mx-auto mt-5 max-w-[21rem] text-center font-serif text-[17px] italic leading-[1.65] text-[#5c3a44]">
        “{memory.caption}”
      </blockquote>
    </section>
  );
}
