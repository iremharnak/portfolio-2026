import { projects, writingPosts } from "@/data/projects";
import { ProjectBlock } from "@/components/ProjectBlock";
import { FadeIn } from "@/components/FadeIn";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-base font-medium text-black lg:text-lg">
              Irem Harnak
            </p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wide text-black/70">
              Senior Product Designer &amp; Design Engineer
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building clear, principled interfaces.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-black/70 lg:text-lg">
              I help teams turn complex problems into structured, usable
              products. Currently focused on design systems, onboarding, and
              data-rich tools.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section
        className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24"
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
              background spans enterprise insurance, financial infrastructure,
              immersive XR training systems, and experimental AR environments.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I focus on translating complex constraints into clear, principled
              interfaces, whether navigating regulatory logic, modernizing legacy
              systems, or prototyping new interaction models.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I&rsquo;m particularly drawn to teams scaling thoughtful products
              under real-world complexity.
            </p>
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
