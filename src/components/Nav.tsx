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
        <Link
          href="/#work"
          className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
        >
          Work
        </Link>
      </div>
    </nav>
  );
}
