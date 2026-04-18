import Link from "next/link";

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 lg:px-0">
        <Link
          href="/#top"
          className="text-sm font-medium tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors duration-200"
        >
          Irem Harnak
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/#anchor"
            className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors duration-200"
          >
            Work
          </Link>
          <a
            href="https://docs.google.com/document/d/1P9Mnb8awadwR_43omrbUZSjOcjitav1D/edit?usp=sharing&ouid=109237708218307948923&rtpof=true&sd=true"
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
