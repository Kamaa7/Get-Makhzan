import Image from "next/image";
import { Header } from "@/components/header";
import { chapters, RELEASES_URL, reviews } from "@/lib/site";

const home = {
  src: "/banners/home.jpg",
  width: 1024,
  height: 512,
  alt: "Makhzan home on a laptop, with today’s sales, dues, low stock, and the last backup.",
};

const sale = chapters[2];
const stock = chapters[1];
const customers = chapters[3];
const register = chapters[4];
function Shot({
  src,
  alt,
  width,
  height,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={`h-auto w-full animate-rise [animation-range:entry_8%_cover_32%] [animation-timeline:view()] motion-reduce:animate-none ${className}`}
    />
  );
}

export default function Home() {
  return (
    <div id="top">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="content">
        <section className="hero-grid relative min-h-[34rem] overflow-hidden pt-28 sm:min-h-[40rem]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 left-[8%] flex items-center sm:left-[22%]">
              <Image
                {...home}
                priority
                sizes="(min-width: 1024px) 920px, 90vw"
                className="animate-glide h-[78%] w-auto max-w-none rounded-[28px] object-contain motion-reduce:animate-none"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background from-8% via-background/88 via-46% to-transparent" />
          <div className="relative z-10 mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-soft">
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-white">Local</span>
                One shop, one computer
              </p>
              <h1 className="mt-6 text-5xl font-medium tracking-[-0.035em] text-foreground sm:text-6xl sm:leading-[1.05]">
                Your inventory, under control.
              </h1>
              <p className="mt-5 max-w-md text-base leading-7 text-muted">
                Stock, cash memos, bills, and what is still due. Makhzan runs the counter on this computer.
              </p>
              <a
                href={RELEASES_URL}
                className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-white"
              >
                Download for Windows
              </a>
            </div>
          </div>
        </section>

        <section id="counter" className="scroll-mt-28 px-4 py-24 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">
              Take the sale. Keep the stock.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              A cash memo is paid in full. A bill can leave a balance. The shop name and currency are set once, and the currency stays after the first sale.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-2">
            {[sale, stock].map((chapter) => (
              <article key={chapter.id} id={chapter.id} className="scroll-mt-28 overflow-hidden rounded-[28px] border border-white/8 bg-card">
                <div className="px-7 pt-8">
                  <h3 className="text-2xl font-medium tracking-tight text-foreground">{chapter.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted">{chapter.body}</p>
                </div>
                <Shot
                  src={chapter.src}
                  alt={chapter.alt}
                  width={chapter.width}
                  height={chapter.height}
                  sizes="(min-width: 768px) 480px, 100vw"
                  className="mt-8"
                />
              </article>
            ))}
          </div>
        </section>

        <section className="overflow-hidden px-4 py-8 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-2">
            <div className="max-w-md pb-8">
              <h2 id={customers.id} className="scroll-mt-28 text-4xl font-medium tracking-[-0.03em] text-foreground">
                {customers.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{customers.body}</p>
            </div>
            <Shot
              src={customers.src}
              alt={customers.alt}
              width={customers.width}
              height={customers.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="rounded-[28px] border border-white/8 bg-card"
            />
          </div>
        </section>

        <section className="overflow-hidden px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <Shot
              src={register.src}
              alt={register.alt}
              width={register.width}
              height={register.height}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="order-2 rounded-[28px] border border-white/8 bg-card lg:order-1"
            />
            <div id={register.id} className="order-1 max-w-md scroll-mt-28 lg:order-2 lg:justify-self-end">
              <h2 className="text-4xl font-medium tracking-[-0.03em] text-foreground">{register.title}</h2>
              <p className="mt-4 text-base leading-7 text-muted">{register.body}</p>
            </div>
          </div>
        </section>

        <section id="reviews" className="scroll-mt-28 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">Reviews</h2>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <figure key={review.shop} className="animate-rise rounded-[28px] border border-white/8 bg-card p-8 [animation-range:entry_8%_cover_32%] [animation-timeline:view()] motion-reduce:animate-none">
                  <p className="text-lg font-medium text-foreground">{review.title}</p>
                  <blockquote className="mt-3 text-sm leading-6 text-muted">{review.quote}</blockquote>
                  <figcaption className="mt-6 text-sm text-foreground">
                    {review.shop}
                    <span className="text-muted"> · {review.place}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="scroll-mt-28 px-4 py-24 text-center sm:px-6">
          <h2 className="mx-auto max-w-2xl text-4xl font-medium tracking-[-0.03em] text-foreground sm:text-5xl">
            Install it where the counter is.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
            The sales stay on that computer. This page is only the download. The installer is the file on the latest release, and none is published yet.
          </p>
          <a
            href={RELEASES_URL}
            className="mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-white"
          >
            Download for Windows
          </a>
        </section>
      </main>
      <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-left text-sm text-muted">
        © 2026 Makhzan. All rights reserved.
      </footer>
    </div>
  );
}
