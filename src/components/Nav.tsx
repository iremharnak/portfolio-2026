import Link from "next/link";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 lg:px-0">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
        >
          Irem Harnak
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/#work"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
          >
            Work
          </Link>
          <a
            href="https://docs.google.com/document/d/14NH6yV_4lWmrw7l8mhn485-60t6eUiA9BkNHR-vdAk0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
          >
            CV
          </a>
        </div>
      </div>
    </nav>
  );
}
