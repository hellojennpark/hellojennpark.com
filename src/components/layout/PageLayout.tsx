"use client";

import { useTimeThemeStore } from "@/store/useTimeThemeStore";
import { Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  const router = useRouter();
  const { backgroundColor } = useTimeThemeStore();
  const crumbs = router.pathname
    .split("/")
    .filter((crumb) => crumb)
    .map((segment, idx, arr) => {
      const href = "/" + arr.slice(0, idx + 1).join("/");
      const label = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { href, label };
    });

  return (
    <div
      className="w-full h-full relative min-h-[100dvh] mx-auto px-4 py-8 space-y-6 pt-30"
      style={{ backgroundColor }}
    >
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-muted-foreground space-x-1">
        <Link href="/#welcome" className="flex items-center hover:text-primary">
          <Home className="w-4 h-4 mr-1" />
          Home
        </Link>
        {crumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            {index === crumbs.length - 1 ? (
              <span className="text-foreground">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-primary">
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Title & Description */}
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>

      {/* Page Content */}
      <div>{children}</div>
    </div>
  );
}
