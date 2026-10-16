import Image from "next/image";
import { IBM_Plex_Mono, Spectral } from "next/font/google";
import { FadeIn } from "./FadeIn";
import type { StudioTemplate, TemplateFont } from "@/data/studio";

// Open source body faces, loaded live for the specimens. Licensed faces are only shown as images.
const plexMono = IBM_Plex_Mono({ weight: "400", subsets: ["latin"], display: "swap", preload: false });
const spectral = Spectral({ weight: "400", subsets: ["latin"], display: "swap", preload: false });

const liveFonts = {
  "ibm-plex-mono": plexMono.className,
  spectral: spectral.className,
};

interface StudioTemplateBlockProps {
  template: StudioTemplate;
  index: number;
}

function FontSpecimen({ font }: { font: TemplateFont }) {
  if (font.specimen) {
    return (
      <Image
        src={font.specimen.src}
        alt={font.specimen.alt}
        width={font.specimen.width}
        height={font.specimen.height}
        className="mt-3 h-auto w-full"
        style={{ maxWidth: font.specimen.width / 2 }}
        sizes={`${Math.round(font.specimen.width / 2)}px`}
      />
    );
  }

  if (font.live) {
    return (
      <p className={`mt-3 text-lg leading-snug text-neutral-900 ${liveFonts[font.live]}`}>
        Aa Bb Cc Dd Ee 0123456789
      </p>
    );
  }

  return null;
}

export function StudioTemplateBlock({ template, index }: StudioTemplateBlockProps) {
  const number = String(index + 1).padStart(2, "0");
  const headingId = `${template.slug}-heading`;

  return (
    <article aria-labelledby={headingId} className="border-t border-neutral-100 pt-16 sm:pt-20">
      {/* Label and headline */}
      <FadeIn className="max-w-3xl">
        <h2
          id={headingId}
          className="text-xs font-medium uppercase tracking-widest text-neutral-500"
        >
          <span aria-hidden="true">{number} </span>
          {template.name}
        </h2>
        <p className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
          {template.headline}
        </p>
      </FadeIn>

      {/* Hero */}
      <FadeIn className="mt-10">
        <Image
          src={template.hero.src}
          alt={template.hero.alt}
          width={template.hero.width}
          height={template.hero.height}
          className="h-auto w-full bg-neutral-100"
          sizes="(max-width: 1152px) 100vw, 1088px"
        />
      </FadeIn>

      {/* System strip */}
      <FadeIn className="mt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Type
            </h3>
            <dl className="mt-4 space-y-6">
              {template.fonts.map((font) => (
                <div key={font.role}>
                  <dt className="text-sm text-neutral-500">{font.role}</dt>
                  <dd className="mt-1">
                    <span className="text-base text-neutral-900">{font.name}</span>
                    {font.licensed && (
                      <span className="ml-2 text-xs text-neutral-500">
                        {font.specimen ? "Licensed, shown from the screens" : "Licensed"}
                      </span>
                    )}
                    <FontSpecimen font={font} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Color
            </h3>
            <ul className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-3" role="list">
              {template.palette.map((swatch) => (
                <li key={swatch.hex}>
                  <span
                    className="block aspect-square w-full border border-neutral-200"
                    style={{ backgroundColor: swatch.hex }}
                    aria-hidden="true"
                  />
                  <span className="mt-2 block text-xs leading-snug text-neutral-600">
                    {swatch.label}
                  </span>
                  <span className="block font-mono text-xs text-neutral-900">{swatch.hex}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-widest text-neutral-500">
              Layout
            </h3>
            <p className="mt-4 text-base leading-relaxed text-neutral-600">{template.logic}</p>
          </div>
        </div>
      </FadeIn>

      {/* Desktop and mobile screens */}
      <FadeIn className="mt-12">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {template.screens.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 544px"
            />
          ))}
        </div>
      </FadeIn>

      <p className="mt-8 inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-600">
        Archived template. Site no longer live.
      </p>
    </article>
  );
}
