"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// Marks the link for the current route with aria-current for assistive tech.
export function NavLink({ href, children }: NavLinkProps) {
  const isCurrent = usePathname() === href;

  return (
    <Link
      href={href}
      aria-current={isCurrent ? "page" : undefined}
      className={`text-sm transition-colors duration-200 hover:text-neutral-900 ${
        isCurrent ? "text-neutral-900" : "text-neutral-500"
      }`}
    >
      {children}
    </Link>
  );
}
