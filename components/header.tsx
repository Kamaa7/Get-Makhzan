"use client";

import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { nav, RELEASES_URL } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center gap-4 rounded-full border border-white/10 bg-nav/90 px-3 py-2 backdrop-blur-md">
        <a href="#top" className="flex items-center gap-2.5 pl-1 text-sm font-medium text-foreground">
          <Mark />
          <span className="hidden sm:inline">Makhzan</span>
        </a>
        <nav className="mx-auto hidden items-center gap-8 lg:flex" aria-label="Page">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-quiet hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={RELEASES_URL}
          className="ml-auto rounded-full bg-ink px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-black lg:ml-0"
        >
          Download
        </a>
        <button
          type="button"
          className="rounded-full px-3 py-2 text-sm text-quiet lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="mx-auto mt-2 flex max-w-5xl flex-col rounded-3xl border border-white/10 bg-nav px-5 py-3 lg:hidden"
          aria-label="Page"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2.5 text-sm text-quiet hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
