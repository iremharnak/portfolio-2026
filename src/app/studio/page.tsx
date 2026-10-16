import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { StudioTemplateBlock } from "@/components/StudioTemplateBlock";
import { PARTNER_NAME, multitouch, templates, type SlideGroup } from "@/data/studio";

const title = "Studio | Brand & Editorial Design | Irem Harnak";
const description =
  "Brand systems and website designs from Multitouch Studio, by Irem Harnak. Typography, color, layout and voice for small business sites.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://iremharnak.com/studio",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://iremharnak.com/studio",
    images: [
      {
        url: "/studio/studio-social.png",
        width: 1200,
        height: 630,
        alt: "Three website template pages side by side: Alba, Mackenzie and Angela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/studio/studio-social.png"],
  },
};

const slideSizes = {
  full: "(max-width: 1152px) 100vw, 1088px",
  pair: "(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 544px",
  half: "(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 544px",
};

function SlideGroupFigure({ group }: { group: SlideGroup }) {
  const layoutClass = {
    full: "grid-cols-1",
    pair: "grid-cols-1 md:grid-cols-2",
    half: "grid-cols-1 md:w-1/2",
  }[group.layout];

  return (
    <FadeIn>
      <figure>
        <div className={`grid gap-6 ${layoutClass}`}>
          {group.slides.map((slide) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              width={slide.width}
              height={slide.height}
              className="h-auto w-full border border-neutral-200"
              sizes={slideSizes[group.layout]}
            />
          ))}
        </div>
        {group.caption && (
          <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500">
            {group.caption}
          </figcaption>
        )}
      </figure>
    </FadeIn>
  );
}

export default function StudioPage() {
  return (
    <>
      {/* Intro */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 sm:px-8 sm:pt-32 sm:pb-20">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-wide text-black/70">
              Studio
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Brand &amp; Editorial Design
            </h1>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Before I designed products, I photographed people. Eleven years of
              editorial and fashion photography taught me how type, color and
              negative space carry a mood, and I still start every layout there.
              This page is the visual side of my practice: the Multitouch Studio
              brand, and three website systems we designed for it, each built as
              a small brand with its own type, palette, grid and tone.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Multitouch Studio */}
      <section
        className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 sm:pb-24"
        aria-labelledby="multitouch-heading"
      >
        <FadeIn className="max-w-3xl">
          <h2
            id="multitouch-heading"
            className="font-serif text-3xl tracking-tight sm:text-4xl"
          >
            {multitouch.name}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
            Multitouch was a studio I ran with my partner, {PARTNER_NAME}. We
            both came to web design and development from creative backgrounds,
            and we built websites and online stores for small and mid-size
            businesses on Squarespace and Shopify. The brand below is how we
            defined what we stood for, how we looked and how we spoke to
            clients.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-12 sm:space-y-16">
          {multitouch.slides.map((group) => (
            <SlideGroupFigure key={group.slides[0].src} group={group} />
          ))}
        </div>
      </section>

      {/* Template systems */}
      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 sm:pb-24">
        <div className="space-y-20 sm:space-y-28">
          {templates.map((template, i) => (
            <StudioTemplateBlock key={template.slug} template={template} index={i} />
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-0">
        <FadeIn>
          <p className="text-base leading-relaxed text-neutral-600 lg:text-lg">
            Looking for product work instead? Read the{" "}
            <Link
              href="/#work"
              className="font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-200"
            >
              case studies
            </Link>
            , or{" "}
            <a
              href="mailto:irem@iremharnak.com"
              className="font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-200"
            >
              get in touch
            </a>
            .
          </p>
        </FadeIn>
      </section>
    </>
  );
}
