"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Shot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const REST_MS = 2200;
const SLIDE_MS = 700;

type Phase = "rest" | "leave" | "park" | "enter";

export function HeroShow({ shots }: { shots: readonly Shot[] }) {
  const shot = shots[0];
  const [phase, setPhase] = useState<Phase>("rest");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced || !shot) return;
    let timer = 0;
    let frame = 0;

    const rest = () => {
      setPhase("rest");
      timer = window.setTimeout(leave, REST_MS);
    };
    const leave = () => {
      setPhase("leave");
      timer = window.setTimeout(() => {
        setPhase("park");
        frame = window.requestAnimationFrame(() => {
          frame = window.requestAnimationFrame(() => {
            setPhase("enter");
            timer = window.setTimeout(rest, SLIDE_MS);
          });
        });
      }, SLIDE_MS);
    };

    timer = window.setTimeout(leave, REST_MS);
    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };
  }, [reduced, shot]);

  if (!shot) return null;

  const motion = reduced
    ? "translate-x-0"
    : phase === "leave"
      ? "-translate-x-full transition-[transform] duration-700 ease-in"
      : phase === "park"
        ? "translate-x-full transition-none"
        : phase === "enter"
          ? "translate-x-0 transition-[transform] duration-700 ease-out"
          : "translate-x-0 transition-none";

  return (
    <div className="relative aspect-[2/1] overflow-hidden rounded-[28px] bg-mark-ink">
      <Image
        src={shot.src}
        alt={shot.alt}
        width={shot.width}
        height={shot.height}
        priority
        sizes="(min-width: 1024px) 560px, 100vw"
        className={`absolute inset-0 h-full w-full object-cover motion-reduce:transition-none ${motion}`}
      />
    </div>
  );
}
