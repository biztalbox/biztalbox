"use client";

import Link, { type LinkProps } from "next/link";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { getHomeHref, readThemeCookie, type HomeTheme } from "@/utils/home-theme";

type HomeLinkProps = Omit<LinkProps, "href"> & {
  children: React.ReactNode;
  className?: string;
};

/**
 * Home link that appends `?mode=dark` when the user prefers dark theme.
 * `prefetch={false}` avoids caching the lite RSC payload on inner pages (Vercel).
 */
export default function HomeLink({ children, className, ...props }: HomeLinkProps) {
  const { resolvedTheme, theme } = useTheme();

  const href = useMemo(() => {
    const fromProvider = (resolvedTheme ?? theme) as string | undefined;
    const themePref: HomeTheme | null =
      fromProvider === "dark" || fromProvider === "light"
        ? fromProvider
        : readThemeCookie();
    return getHomeHref(themePref);
  }, [resolvedTheme, theme]);

  return (
    <Link href={href} prefetch={false} className={className} {...props}>
      {children}
    </Link>
  );
}
