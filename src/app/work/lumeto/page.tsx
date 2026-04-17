import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title:
    "Designing a Scalable XR Training Platform — Irem Harnak",
  description:
    "Designing a scalable XR training platform from concept to enterprise deployment.",
  openGraph: {
    title:
      "Designing a Scalable XR Training Platform — Irem Harnak",
    description:
      "Designing a scalable XR training platform from concept to enterprise deployment.",
    type: "article",
  },
};

export default function LumetoCasePage() {
  return (
    <main>
      <article className="mx-auto max-w-3xl px-6 lg:px-0">
        {/* Back to Work */}
        <div className="pt-8 sm:pt-12 mb-10 sm:mb-12">
          <Link
            href="/#work"
            className="text-sm font-medium text-black/70 hover:underline transition-colors duration-200"
          >
            &larr; Back to Work
          </Link>
        </div>

        {/* Hero */}
        <header className="pb-16 sm:pb-20">
          <FadeIn>
            <p className="uppercase tracking-wide text-xs sm:text-sm font-medium text-black/80">
              Lumeto
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Designing a scalable XR training platform from concept to
              enterprise deployment.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              0 → 1 enterprise XR training platform deployed to 15,000+ users.
            </p>
          </FadeIn>
        </header>

        {/* Metadata */}
        <section className="border-t border-neutral-200 py-10">
          <FadeIn>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  UX/UI Designer
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Tenure
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Jan 2021 – Nov 2021
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Scope
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Involve XR — Multiplayer training platform for healthcare and
                  public safety
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Environment
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Enterprise XR · Research-led design · Unity collaboration
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Technologies
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Figma · Unity (collaborative) · XR interaction systems
                </dd>
              </div>
            </dl>
          </FadeIn>
        </section>

        {/* Context */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Context
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Traditional actor-led crisis simulation training is expensive,
              difficult to scale, and logistically complex. As a result,
              trainees often receive limited practice before facing real world
              high-stakes scenarios.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Lumeto set out to build a scalable, data-informed XR training
              ecosystem that could support both synchronous multiplayer
              simulations and asynchronous practice environments.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Image
                src="/LumetoSimulationEnvironment.png"
                alt="Jay Street XR training environment used for scenario simulations"
                width={1600}
                height={1200}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              Jay Street XR training environment used for scenario simulations.
              <br />
              Environment design supported spatial navigation and scenario
              immersion.
            </p>
          </FadeIn>
        </section>

        {/* Discovery */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Discovery
            </h2>
            <p className="mt-2 text-base text-neutral-400">
              Translating scenario-based training into XR
            </p>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Before designing anything, I mapped the existing in-person
              training flows for both user groups separately. Facilitators
              would be operating a desktop interface to run and monitor
              scenarios, while trainees would be inside the VR environment, two
              completely different surfaces with different needs and different
              failure modes.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              What the mapping made clear was that the core problem with
              in-person training wasn&apos;t just cost. It was consistency.
              Scenarios varied depending on who was facilitating, how often
              sessions could run, and how many people could participate at
              once. That insight reframed the design goal. The job wasn&apos;t
              just to recreate the training in XR. It was to standardize it,
              so the experience could be repeated reliably across institutions
              without depending on a specific facilitator or a specific day.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              That became the foundation for the three design principles that
              guided the platform: Immersion, Interactivity, and
              Standardization.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Image
                src="/involve-xr-userflow.png"
                alt="User flow created to map in-person scenario-based training and identify pain points and opportunities before translating the experience into XR."
                width={1600}
                height={1200}
                className="w-full rounded-md border border-neutral-200"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <p className="mt-3 text-sm text-neutral-400">
                User flow used to understand the structure of in-person
                scenario-based training before translating it into XR.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* The Challenge */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              The Challenge
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Design immersive training experiences that:
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Preserve realism
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Support measurable learning outcomes
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Scale across institutions
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Operate within XR performance and interaction constraints
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              All while transitioning from concept to deployable enterprise
              platform.
            </p>
          </FadeIn>
        </section>

        {/* What I Did */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              What I Did
            </h2>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Led UX across end-to-end VR and web-based training flows
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Translated SME-driven curriculum into structured interaction
                systems
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Conducted stakeholder interviews with training facilitators and
                domain experts
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Synthesized research into journey maps and scenario logic
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Defined core design principles: Immersion, Interactivity,
                Standardization
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Delivered a Proof of Concept within a 3-month timeline featuring
                4 distinct scenarios
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Designed information architecture across both VR and web
                interfaces
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Collaborated with Unity engineers to refine interaction behavior
                and performance constraints
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Contributed to narrative design, environment planning, and
                avatar direction
              </li>
            </ul>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Image
                src="/Lumeto-Controllers-Desktop.png"
                alt="Controller interaction model designed for intuitive VR navigation and object interaction"
                width={1600}
                height={1200}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              Controller interaction model designed for intuitive VR navigation
              and object interaction.
              <br />
              Mappings were tested in simulation scenarios to ensure actions
              such as teleportation, view rotation, and object manipulation
              remained discoverable under stress.
            </p>
          </FadeIn>
        </section>

        {/* System Architecture */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              System Architecture
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The platform functioned as:
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                A synchronous multi-user training hub
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                An asynchronous practice and assessment environment
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                A cross-surface experience (VR + Web)
              </li>
            </ul>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Design decisions accounted for:
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Spatial interaction logic
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Motion capture integration
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                NPC behavioral design
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Data-informed evaluation potential
              </li>
            </ul>

            <div className="mt-10">
              <Image
                src="/Lumeto-System-Architecture.png"
                alt="Scenario architecture linking planning tools with immersive VR training environments"
                width={1600}
                height={1200}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              Scenario architecture linking planning tools with immersive VR
              training environments.
            </p>
          </FadeIn>
        </section>

        {/* Impact */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Impact
            </h2>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:gap-16">
              <div>
                <p className="font-serif text-4xl tracking-tight text-black sm:text-5xl">
                  15,000+
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  users across Ontario
                </p>
              </div>
            </div>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Adopted within healthcare and public safety training contexts.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400 italic">
              User scale reflects real world deployment following platform
              launch.
            </p>
          </FadeIn>
        </section>

        {/* Reflection */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Reflection
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Designing for XR amplifies ambiguity. Interaction friction and
              unclear information architecture become significantly more
              disruptive in spatial environments.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              What this project reinforced for me is that immersive systems
              still depend on clear structural logic. Scenarios, roles, and
              interactions must be modeled explicitly before they can become
              believable experiences.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              This work strengthened my ability to translate complex learning
              objectives into structured systems that balance immersion,
              usability, and technical constraints.
            </p>
          </FadeIn>
        </section>

        {/* Back link */}
        <div className="border-t border-neutral-200 py-12">
          <Link
            href="/#work"
            className="text-sm text-neutral-400 underline underline-offset-4 decoration-neutral-300 hover:text-neutral-900 hover:decoration-neutral-900 transition-colors duration-200"
          >
            &larr; Back to all work
          </Link>
        </div>
      </article>
    </main>
  );
}
