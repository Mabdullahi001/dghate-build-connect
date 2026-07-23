import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/dghate-logo.jpg.asset.json";

const nav = [
  { to: "/", label: "Index" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logoAsset.url}
            alt="D'Ghate Design Studio logo"
            className="h-10 w-auto"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-2xl leading-none">D'Ghate</span>
            <span className="hidden text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:inline">
              Design Studio
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-sm uppercase tracking-widest"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">D'Ghate Design Studio Ltd</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
              Getting spaces connected. Building for those that own them.
            </h2>
            <p className="mt-6 max-w-md text-sm text-muted-foreground">
              Architecture · Consultation · Engineering · Procurement · Project & Facility Management. RC: 1447212.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Studio</p>
            <p className="mt-3 text-sm leading-relaxed">
              21 Ogunlana Crescent, Awoyaya,<br />Lekki, Lagos State
            </p>
            <p className="mt-6 eyebrow">Office</p>
            <p className="mt-3 text-sm leading-relaxed">
              6c Alh Sadiku Street, Off Amara Olu Street,<br />Agidingbi, Ikeja, Lagos State
            </p>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="tel:+2348039258231" className="hover:text-accent">+234 803 925 8231</a></li>
              <li><a href="tel:+2348028284589" className="hover:text-accent">+234 802 828 4589</a></li>
              <li>
                <a href="mailto:dghate.design.studio@gmail.com" className="hover:text-accent break-words">
                  dghate.design.studio@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow">Social</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="https://wa.me/2348039258231" className="hover:text-accent">WhatsApp</a></li>
              <li><a href="https://instagram.com/dghatedesignstudio" className="hover:text-accent">Instagram</a></li>
              <li><a href="https://twitter.com/Dghates" className="hover:text-accent">Twitter / X</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} D'Ghate Design Studio Ltd. All rights reserved.</p>
          <p>Lagos · Nigeria · West Africa</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
