import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import type { Project } from "@/data/projects";

interface ProjectBlockProps {
  project: Project;
  index: number;
}

export function ProjectBlock({ project, index }: ProjectBlockProps) {
  const isEven = index % 2 === 0;

  return (
    <article className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-16 2xl:gap-x-20">
      {/* Text */}
      <div
        className={`flex flex-col justify-center lg:col-span-5 ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <FadeIn>
          <p className="uppercase tracking-wide text-xs sm:text-sm font-medium text-black/80">
            {project.org}
          </p>
          <h3 className="mt-2 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {project.headline}
          </h3>
        </FadeIn>

        <FadeIn>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {project.summary}
          </p>
        </FadeIn>

        <FadeIn>
          <ul
            className="mt-6 space-y-3 text-sm leading-relaxed text-neutral-500"
            role="list"
          >
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-300" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn>
          <div className="mt-8">
            <Link
              href={`/work/${project.slug}`}
              className="inline-block text-sm font-medium tracking-wide text-neutral-900 underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-colors duration-200"
            >
              {project.ctaLabel}
            </Link>
            <p className="mt-2 text-xs text-neutral-400">
              {project.microSignals.join(" \u00b7 ")}
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Image */}
      <FadeIn
        className={`lg:col-span-7 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.headline} project visual`}
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover bg-neutral-100"
          sizes="(max-width: 1024px) 100vw, 58vw"
          priority={index < 2}
        />
      </FadeIn>
    </article>
  );
}
