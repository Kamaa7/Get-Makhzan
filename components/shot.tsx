import Image from "next/image";
import type { CSSProperties } from "react";

export function Shot({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  delay = 0,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  delay?: number;
}) {
  return (
    <div className={`float-card ${className}`} style={{ "--float-delay": `${delay}s` } as CSSProperties}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1024px) 420px, 88vw"
        className="relative z-10 h-auto w-full animate-float rounded-2xl border border-white/10 [animation-delay:var(--float-delay)] motion-reduce:animate-none"
      />
      <div
        className="ground mx-[16%] -mt-1 h-4 rounded-full [animation-delay:var(--float-delay)] motion-reduce:animate-none"
        aria-hidden="true"
      />
    </div>
  );
}
