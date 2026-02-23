import Link from "next/link";
import { FadeIn } from "./FadeIn";
import type { Project } from "@/data/projects";

interface CaseLayoutProps {
  project: Project;
}

function highlightMetrics(text: string): React.ReactNode {
  const parts = text.split(/(\+?\d[\d,]*\+?%?)/g);
  return parts.map((part, i) =>
    /^\+?\d[\d,]*\+?%?$/.test(part) ? (
      <span key={i} className="font-semibold text-black">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function CaseLayout({ project }: CaseLayoutProps) {
  return (
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
      <header className="pb-12 sm:pb-16">
        <FadeIn>
          <p className="uppercase tracking-wide text-xs sm:text-sm font-medium text-black/80">
            {project.org}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {project.caseHeroLine ?? project.headline}
          </h1>
        </FadeIn>
      </header>

      {/* Snapshot grid */}
      <section className="border-t border-neutral-100 py-10">
        <FadeIn>
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                Role
              </dt>
              <dd className="mt-1 text-sm text-neutral-900">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                Tenure
              </dt>
              <dd className="mt-1 text-sm text-neutral-900">{project.tenure}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                Environment
              </dt>
              <dd className="mt-1 text-sm text-neutral-900">
                {project.environment}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                Technologies
              </dt>
              <dd className="mt-1 text-sm text-neutral-900">
                {project.technologies}
              </dd>
            </div>
          </dl>
          {project.scope && (
            <p className="mt-6 text-sm text-neutral-500">
              <span className="font-medium text-neutral-400">Scope:</span>{" "}
              {project.scope}
            </p>
          )}
          {project.team && (
            <p className="mt-2 text-sm text-neutral-500">
              <span className="font-medium text-neutral-400">Team:</span>{" "}
              {project.team}
            </p>
          )}
        </FadeIn>
      </section>

      {/* Challenge */}
      <section className="py-12">
        <FadeIn>
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            The Challenge
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {project.challenge}
          </p>
        </FadeIn>
      </section>

      {/* Contributions */}
      <section className="py-12 border-t border-neutral-100">
        <FadeIn>
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            What I Did
          </h2>
          <ul className="mt-6 space-y-4" role="list">
            {project.contributions.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-neutral-600"
              >
                <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>

      {/* Impact */}
      <section className="pt-16 pb-12 border-t border-neutral-100">
        <FadeIn>
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            Impact
          </h2>
          <ul className="mt-8 space-y-4" role="list">
            {project.impact.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed text-neutral-600 lg:text-lg"
              >
                <span className="mt-2.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" aria-hidden="true" />
                {highlightMetrics(item)}
              </li>
            ))}
          </ul>
          {project.impactNote && (
            <p className="mt-4 text-xs leading-relaxed text-neutral-400 italic">
              {project.impactNote}
            </p>
          )}
        </FadeIn>
      </section>

      {/* Next Opportunity */}
      <section className="py-12 border-t border-neutral-100">
        <FadeIn>
          <h2 className="font-serif text-2xl tracking-tight sm:text-3xl">
            What I&rsquo;m Looking for Next
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {project.nextOpportunity}
          </p>
        </FadeIn>
      </section>

      {/* Back link */}
      <div className="border-t border-neutral-100 py-12">
        <Link
          href="/#work"
          className="text-sm text-neutral-400 underline underline-offset-4 decoration-neutral-300 hover:text-neutral-900 hover:decoration-neutral-900 transition-colors duration-200"
        >
          &larr; Back to all work
        </Link>
      </div>
    </article>
  );
}
