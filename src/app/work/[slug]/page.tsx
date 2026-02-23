import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { CaseLayout } from "@/components/CaseLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.headline} — Irem Harnak`,
    description: project.summary,
    openGraph: {
      title: `${project.headline} — Irem Harnak`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseLayout project={project} />
    </main>
  );
}
