import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Scaling Digital Insurance Within Regulatory Constraints — Irem Harnak",
  description:
    "Improving quote progression by restructuring eligibility logic and interaction sequencing across mobile-first insurance flows.",
  openGraph: {
    title:
      "Scaling Digital Insurance Within Regulatory Constraints — Irem Harnak",
    description:
      "Improving quote progression by restructuring eligibility logic and interaction sequencing across mobile-first insurance flows.",
    type: "article",
  },
};

function Placeholder({ label }: { label: string }) {
  return (
    <div
      className="flex min-h-[400px] w-full items-center justify-center bg-[#ECECEC] px-6 py-20 sm:py-24"
      role="img"
      aria-label={label}
    >
      <p className="text-sm font-medium text-neutral-400">{label}</p>
    </div>
  );
}

export default function TDCasePage() {
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

        {/* Page Title */}
        <header className="pb-16 sm:pb-20">
          <FadeIn>
            <p className="uppercase tracking-wide text-xs sm:text-sm font-medium text-black/80">
              TD
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Scaling Digital Insurance Within Regulatory Constraints
            </h1>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Improving quote progression by restructuring eligibility logic and
              interaction sequencing across mobile-first insurance flows.
            </p>
          </FadeIn>
        </header>

        {/* Role Metadata */}
        <section className="border-t border-neutral-200 py-10">
          <FadeIn>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Role
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Senior Product Designer
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Tenure
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  4-month engagement
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Scope
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Property and Auto quoting flows
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Environment
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Compliance-heavy, analytics-driven
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                  Collaboration
                </dt>
                <dd className="mt-1 text-sm text-neutral-900">
                  Product, Engineering, Compliance, Content
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
              Small business insurance quoting required users to navigate layered
              eligibility logic, regulatory disclosures, and multi-step financial
              inputs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              The challenge was not simplification. It was structuring complexity
              responsibly without compromising compliance or conversion
              performance.
            </p>
          </FadeIn>
        </section>

        {/* Section 1: Progressive Disclosure */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Re-architecting Eligibility Through Progressive Disclosure
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Image
                src="/TD-Progressive-Disclosure.png"
                alt="Progressive disclosure flow showing staged eligibility logic"
                width={1600}
                height={1200}
                className="w-full"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              To reduce cognitive overload while preserving regulatory accuracy, I
              refined the eligibility sequence into staged, contextual decision
              layers.
            </p>
            <p className="mt-6 text-sm font-medium text-neutral-900">
              Key contributions:
            </p>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Structured vehicle-use selection into progressive branching logic
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Reduced redundant follow-up questions by aligning flows to
                declared intent
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Clarified category groupings to better reflect real-world business
                mental models
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Shipped improvements across the live Auto flow
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Instead of exposing every conditional path upfront, the system
              revealed only what was structurally required at each step.
            </p>
          </FadeIn>
        </section>

        {/* Section 2: Vehicle Dropdown */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Rethinking API-Driven Vehicle Selection
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Placeholder label="Vehicle Dropdown Concept Placeholder" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Vehicle data surfaced from backend APIs created friction when
              presented raw.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I proposed three structured approaches to improve usability while
              respecting backend constraints.
            </p>
            <p className="mt-6 text-sm font-medium text-neutral-900">
              Work included:
            </p>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Reframing vehicle data grouping for user comprehension
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Designing interaction pathways aligned to backend data
                architecture
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Documenting solution trade-offs for engineering feasibility
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Aligning display logic to user mental models
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              While not yet implemented, this work established a clearer framework
              for how API-driven data should be surfaced in regulated flows.
            </p>
          </FadeIn>
        </section>

        {/* Section 3: Slider Refinement */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Improving Quantitative Input Clarity
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Placeholder label="Revenue Slider Interaction Placeholder" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Financial input accuracy is critical in insurance quoting.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              I refined the revenue input interaction to provide:
            </p>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Real-time value formatting
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Clear numeric confirmation
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Reduced ambiguity in high-range monetary entries
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Compliance-aligned financial input patterns
              </li>
            </ul>
          </FadeIn>
        </section>

        {/* Section 4: UX Roadmap */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Designing for Long-Term Conversion Growth
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="mt-10">
              <Placeholder label="UX Backlog Roadmap Placeholder" />
            </div>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-base leading-relaxed text-neutral-600 lg:text-lg">
              Beyond tactical UI refinements, I developed a forward-looking UX
              backlog focused on structural progression improvements.
            </p>
            <p className="mt-6 text-sm font-medium text-neutral-900">
              Proposals included:
            </p>
            <ul className="mt-4 space-y-3" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Transitioning intake to a compact, card-based layout
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Consolidating related eligibility questions
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Refactoring the intake landing step to reduce early drop-off
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600">
                <span
                  className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300"
                  aria-hidden="true"
                />
                Strengthening contextual microcopy to sustain momentum
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              This roadmap aligned growth design principles with regulatory
              realities.
            </p>
          </FadeIn>
        </section>

        {/* Impact */}
        <section className="py-16 sm:py-20 border-t border-neutral-200">
          <FadeIn>
            <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
              Impact
            </h2>
            <p className="mt-6 text-sm font-medium text-neutral-900">
              FY25 Team Outcomes:
            </p>
            <ul className="mt-4 space-y-4" role="list">
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600 lg:text-lg">
                <span
                  className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden="true"
                />
                <span className="font-semibold text-black">146,000+</span>
                &nbsp;quotes initiated
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600 lg:text-lg">
                <span
                  className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden="true"
                />
                <span className="font-semibold text-black">16,000+</span>
                &nbsp;quotes completed
              </li>
              <li className="flex gap-3 text-base leading-relaxed text-neutral-600 lg:text-lg">
                <span
                  className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900"
                  aria-hidden="true"
                />
                <span className="font-semibold text-black">2,600+</span>
                &nbsp;sales
              </li>
            </ul>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 lg:text-lg">
              My contributions supported multiple production improvements across
              the Auto and Property flows during my tenure.
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
              Designing within regulated environments requires disciplined
              structuring of complexity, not oversimplification.
            </p>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 lg:text-lg">
              This work reinforced the importance of aligning compliance, system
              logic, and user progression into a coherent decision architecture.
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
