export function Footer() {
  return (
    <footer className="border-t border-neutral-100" role="contentinfo">
      <div className="mx-auto max-w-3xl px-6 py-12 lg:px-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Irem Harnak
          </p>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:irem@iremharnak.com"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
