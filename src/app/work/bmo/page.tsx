import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title:
    "Modernizing a Wealth Platform Through System-Level Usability Improvements — Irem Harnak",
  description:
    "Improving usability and accessibility across critical investment workflows while modernizing UI patterns and raising accessibility quality in a complex enterprise environment.",
  openGraph: {
    title:
      "Modernizing a Wealth Platform Through System-Level Usability Improvements — Irem Harnak",
    description:
      "Improving usability and accessibility across critical investment workflows while modernizing UI patterns and raising accessibility quality in a complex enterprise environment.",
    type: "article",
  },
};

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[400px] w-full items-center justify-center rounded-md border border-neutral-200 bg-[#ececec] px-6 py-20 sm:py-24"
      role="img"
      aria-label={label}
    >
      <p className="text-sm font-medium text-neutral-400">{label}</p>
    </div>
  );
}

export default function BMOCasePage() {
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
              BMO
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Modernizing a Wealth Platform Through System-Level Usability
              Improvements
            </h1>
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
                  Product Designer &amp; UI Developer
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Tenure
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Nov 2021 – Jun 2025
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Scope
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  High-net-worth investment platform modernization
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Environment
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Enterprise finance · Design system contribution · Component
                  delivery
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Technologies
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Figma · HTML · CSS · Angular · Storybook
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
              BMO&apos;s wealth platform served a predominantly 55+ client
              base managing critical financial assets. Digital adoption was
              lagging, mobile engagement was low, and document retrieval
              created significant friction for users who needed to access and
              batch download multiple document types across tax years. Account
              preferences had not kept pace with modern interaction standards,
              creating additional support burden and eroding confidence in the
              platform.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The business case was clear. For a wealth management platform
              serving high-net-worth clients, friction at this level was not a
              minor inconvenience. It was a trust and retention risk.
              Modernization was prioritized to reduce that friction, improve
              digital adoption, and bring the platform experience in line with
              client expectations at that wealth tier.
            </p>
          </FadeIn>
        </section>

        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <div className="mx-auto max-w-sm">
              <video
                className="w-full rounded-md bg-neutral-100"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/GW-mobileApp-2.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="mt-3 text-sm text-neutral-400">
                Investment platform (Gateway) testing environment
              </p>
            </div>
          </FadeIn>
        </section>

        {/* Section 1: Document Retrieval Modernization */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Modernizing Document Retrieval
            </h2>
            <p className="mt-2 text-base text-neutral-400">
              Reduce friction in high-frequency workflows
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-neutral-100">
                <iframe
                  src="https://www.loom.com/embed/15c73be646dc40ee9807a6a4236ec5d3"
                  frameBorder="0"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                Edocuments Modernization
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row">
              <div className="flex-1">
                <Image
                  src="/Edocs-Before.png"
                  alt="Legacy document retrieval interaction"
                  width={1600}
                  height={1000}
                  className="w-full rounded-md border border-neutral-200"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <p className="mt-3 text-sm text-neutral-400">Legacy Interaction</p>
              </div>
              <div className="flex-1">
                <Image
                  src="/Edocs-After.png"
                  alt="Simplified document retrieval interaction"
                  width={1600}
                  height={1000}
                  className="w-full rounded-md border border-neutral-200"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <p className="mt-3 text-sm text-neutral-400">Simplified Document Retrieval</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The original eDocuments experience supported document access but
              introduced friction when users needed to retrieve multiple document
              types across tax years.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The modernization focused on improving scannability, clarifying
              filtering context, and enabling clearer bulk-selection patterns —
              while preserving familiarity for existing users.
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Introduced clearer document grouping by period
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Surfaced applied filters to improve state awareness
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Simplified multi-document selection patterns
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Reduced nested action complexity
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Improved keyboard navigation flow within document tables
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The primary goal was reducing friction for high-frequency tasks,
              particularly retrieving multiple document types efficiently.
            </p>
          </FadeIn>
        </section>

        {/* Section 2: Account Preferences Modernization */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Improving Account Preferences &amp; Delivery States
            </h2>
            <p className="mt-2 text-base text-neutral-400">
              Clarifying document delivery and notification behavior
            </p>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <div className="aspect-video w-full overflow-hidden rounded-md bg-neutral-100">
                <iframe
                  src="https://www.loom.com/embed/2578f93f615a48778f540d90fabe0b39"
                  frameBorder="0"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <p className="mt-3 text-sm text-neutral-400">
                Improving Account Preferences
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Image
                src="/Account-Settings-bmo.png"
                alt="Account preferences interface showing delivery and notification settings"
                width={1600}
                height={1000}
                className="w-full rounded-md border border-neutral-200"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <p className="mt-3 text-sm text-neutral-400">Account Preferences Interface</p>
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Delivery preferences and notification states were previously
              fragmented and visually secondary.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The updated interaction pattern clarified document delivery
              settings, surfaced alert states, and strengthened accessible form
              behavior across preference controls.
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Improved hierarchy of preference controls
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Clearer visibility of email verification and alert states
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Consistent interaction patterns across toggles and settings
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Reinforced accessible form structure and semantic clarity
              </li>
            </ul>
          </FadeIn>
        </section>

        {/* Section 3: Bridging Design and Production */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Bridging Design and Production
            </h2>
            <p className="mt-2 text-base text-neutral-400">
              Designing with architectural awareness
            </p>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Working directly within Angular and enterprise CI/CD workflows
              strengthened how I approach system design.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Beyond visual refinement, I collaborated closely with engineering
              to ensure components were reusable, WCAG-aligned, and structured
              to scale within the broader platform ecosystem.
            </p>
            <ul className="mt-6 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Separation of presentation and business logic
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Component reusability and consistent state handling
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Accessibility compliance at production level
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Alignment between Figma intent and shipped behavior
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Supporting design system adoption to accelerate implementation
              </li>
            </ul>
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
                  +63%
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  platform usage
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl tracking-tight text-black sm:text-5xl">
                  71%
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  user satisfaction
                </p>
              </div>
            </div>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Improvements to document retrieval and account preference
              workflows contributed to measurable gains in platform engagement
              and user satisfaction. Reducing interaction complexity and
              strengthening accessible component behavior improved clarity
              across critical financial tasks.
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
              Modernizing enterprise financial systems requires balancing
              stability with meaningful improvement. In this environment,
              success is not defined by dramatic visual change, but by reduced
              friction, clearer system behavior, and scalable component
              architecture.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Working directly within Angular and enterprise CI/CD workflows
              strengthened my ability to design with implementation constraints
              in mind. This experience deepened my approach to building systems
              that are both usable and structurally sound.
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
