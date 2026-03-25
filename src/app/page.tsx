import type { Metadata } from "next";
import { projects, writingPosts } from "@/data/projects";
import { ProjectBlock } from "@/components/ProjectBlock";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Irem Harnak | Senior Product Designer & Design Engineer",
  description:
    "Senior Product Designer and Design Engineer building accessible, scalable systems across enterprise platforms and emerging technologies. Portfolio featuring product design, design systems, XR, AR, and production-aware UX.",
  alternates: {
    canonical: "https://iremharnak.com",
  },
  openGraph: {
    title: "Irem Harnak | Senior Product Designer & Design Engineer",
    description:
      "Senior Product Designer and Design Engineer building accessible, scalable systems across enterprise platforms and emerging technologies. Portfolio featuring product design, design systems, XR, AR, and production-aware UX.",
    type: "website",
    url: "https://iremharnak.com",
    images: [
      {
        url: "/irem-portfolio-social.png",
        width: 1200,
        height: 630,
        alt: "Irem Harnak portfolio social preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irem Harnak | Senior Product Designer & Design Engineer",
    description:
      "Senior Product Designer and Design Engineer building accessible, scalable systems across enterprise platforms and emerging technologies. Portfolio featuring product design, design systems, XR, AR, and production-aware UX.",
    images: ["/irem-portfolio-social.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-8 sm:px-8 sm:pt-32 sm:pb-10">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-base font-medium text-black lg:text-lg">
              Irem Harnak
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-black/70">
              Senior Product Designer &amp; Design Engineer
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building structured, accessible systems under real-world
              constraints.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-black/70 lg:text-lg">
              From 0 to 1 prototypes to large-scale platforms, I help teams
              translate complexity into scalable, usable products across
              enterprise systems and emerging technologies.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section
        className="mx-auto max-w-6xl px-6 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24"
        aria-labelledby="about-heading"
      >
        <div className="max-w-3xl">
          <FadeIn>
            <h2
              id="about-heading"
              className="text-xs font-medium uppercase tracking-widest text-neutral-400"
            >
              About
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I&rsquo;m a Senior Product Designer and Design Engineer working at
              the intersection of structured systems and emerging technology. My
              experience spans enterprise insurance, financial infrastructure,
              immersive XR training platforms, and experimental AR environments.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I design systems that translate complex constraints into clear,
              scalable interaction models. I&apos;m drawn to teams building
              thoughtful products under real-world complexity, whether in highly
              regulated environments or fast-moving experimental ones.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Currently Building */}
      <section
        className="mx-auto max-w-6xl px-6 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24"
        aria-labelledby="currently-building-heading"
      >
        <div className="max-w-3xl">
          <FadeIn>
            <h2
              id="currently-building-heading"
              className="text-xs font-medium uppercase tracking-widest text-neutral-400"
            >
              CURRENTLY BUILDING
            </h2>
            <h3 className="mt-4 font-serif text-3xl tracking-tight sm:text-4xl">
              Anchor
            </h3>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              An early-stage emotional reset tool designed for people who hold
              it together in the moment and feel the impact later.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I&rsquo;m building Anchor to explore how short, structured
              interactions can help reduce emotional carryover without turning
              relief into another task. The web app is live, with early
              validation through 51K+ organic views across targeted communities
              and 2,100+ LinkedIn impressions in the first week of launch.
            </p>
            <a
              href="https://anchorreset.com/?utm_source=portfolio&utm_medium=referral&utm_campaign=personal_site"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-200"
            >
              Try the live product
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Selected Work */}
      <section
        id="work"
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24"
        aria-labelledby="work-heading"
      >
        <FadeIn>
          <h2
            id="work-heading"
            className="text-xs font-medium uppercase tracking-widest text-neutral-400"
          >
            Selected Work
          </h2>
        </FadeIn>

        <div className="mt-16 space-y-24 sm:space-y-28 lg:space-y-32">
          {projects.map((project, i) => (
            <ProjectBlock key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Writing */}
      <section
        className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-0"
        aria-labelledby="writing-heading"
      >
        <FadeIn>
          <h2
            id="writing-heading"
            className="text-xs font-medium uppercase tracking-widest text-neutral-400"
          >
            Writing
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
            I write about how structured systems shape real products, from
            enterprise infrastructure to immersive and machine-learning-driven
            environments.
          </p>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {writingPosts.map((post) => (
            <FadeIn key={post.title}>
              <a
                href={post.href}
                className="group block"
              >
                <h3 className="font-serif text-xl tracking-tight sm:text-2xl group-hover:text-neutral-500 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {post.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 text-sm leading-relaxed text-neutral-500">
            Subscribe for essays on systems thinking, accessibility, enterprise
            modernization, and production-level design.
          </p>
          <a
            href="https://iremharnak.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-200"
          >
            Subscribe on Substack
          </a>
        </FadeIn>
      </section>

      {/* Contact */}
      <section
        className="mx-auto max-w-3xl px-6 py-16 sm:py-24 lg:px-0"
        aria-labelledby="contact-heading"
      >
        <FadeIn>
          <h2
            id="contact-heading"
            className="font-serif text-3xl tracking-tight sm:text-4xl"
          >
            Let&rsquo;s talk
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-500">
            I&rsquo;m exploring senior product design and design engineering
            roles, including remote and relocation opportunities across Europe
            and North America.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-500">
            If you&rsquo;re building complex systems and value clarity,
            structure, and craft, I&rsquo;d love to connect.
          </p>
          <a
            href="mailto:irem@iremharnak.com"
            className="mt-8 inline-block text-sm font-medium text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-200"
          >
            Email me
          </a>
        </FadeIn>
      </section>
    </>
  );
}
