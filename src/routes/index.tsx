import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import hero from "@/assets/hero-architecture.jpg";
import aboutDetail from "@/assets/about-detail.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "D'Ghate Design Studio — Architecture, Engineering & Build in Lagos" },
      {
        name: "description",
        content:
          "D'Ghate Design Studio Ltd is a Lagos-based architecture, engineering and build practice creating functional, inspiring, eco-conscious spaces across Nigeria since 2006.",
      },
      { property: "og:title", content: "D'Ghate Design Studio — Architecture, Engineering & Build in Lagos" },
      {
        property: "og:description",
        content:
          "D'Ghate Design Studio Ltd is a Lagos-based architecture, engineering and build practice creating functional, inspiring, eco-conscious spaces across Nigeria since 2006.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = projects.slice(0, 6);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 pt-10 pb-6 md:px-10 md:pt-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-7">
              <p className="eyebrow">Est. 2006 · Lagos, Nigeria</p>
              <h1 className="mt-6 font-display text-[13vw] leading-[0.95] md:text-[7.5rem] md:leading-[0.92]">
                Architecture,<br />
                engineered<br />
                <span className="italic text-accent">to be lived in.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
                D'Ghate Design Studio is a design and build practice solving architectural
                challenges with unique, inspiring, world-class design — coupled with a team
                of seasoned engineers and builders who execute to precision.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-sm font-medium uppercase tracking-widest hover:border-accent hover:text-accent"
                >
                  See our work <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground"
                >
                  Start a project
                </Link>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-4 md:mt-24">
                <Stat n="18+" label="Years of practice" />
                <Stat n="40+" label="Projects delivered" />
                <Stat n="5" label="Core disciplines" />
                <Stat n="ARCON" label="Chartered team" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-[1400px] px-6 pb-10 md:px-10">
          <img
            src={hero}
            alt="Contemporary residential architecture at golden hour in Lagos"
            width={1600}
            height={1100}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      {/* About preview */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <img
              src={aboutDetail}
              alt="Architectural interior detail with warm neutral tones"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-10">
            <p className="eyebrow">About the practice</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">
              A studio where architects, engineers and builders share one table.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Founded in 2006 as D'Ghate Habitat Konsult, the practice was reshaped in 2017
              into D'Ghate Design Studio Ltd — integrating builders and engineers under one
              roof, so better buildings are achieved when architects stay with the work all
              the way to completion.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6">
              <Value title="Client-first">
                Our vision is that of our clients. Excellent customer experience is a core value.
              </Value>
              <Value title="Learners">
                We continue to improve on modern knowledge to serve clients and society.
              </Value>
              <Value title="Professional">
                Strict, detail-attentive practice for successful projects.
              </Value>
              <Value title="Long-term">
                We build long-term relationships with clients and partners.
              </Value>
            </div>
            <Link
              to="/about"
              className="mt-12 inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-sm font-medium uppercase tracking-widest hover:border-accent hover:text-accent"
            >
              More about us <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services strip */}
      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
          <p className="eyebrow">What we do</p>
          <div className="mt-8 grid gap-x-10 gap-y-10 md:grid-cols-5">
            {[
              ["01", "Architecture"],
              ["02", "Consultation"],
              ["03", "Engineering"],
              ["04", "Procurement"],
              ["05", "Project & Facility Management"],
            ].map(([n, t]) => (
              <div key={n}>
                <p className="font-display text-xl text-muted-foreground">{n}</p>
                <h3 className="mt-3 font-display text-3xl leading-tight">{t}</h3>
              </div>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-12 inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-sm font-medium uppercase tracking-widest hover:border-accent hover:text-accent"
          >
            Full scope of work <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.02] md:text-6xl">
              A record of<br />built spaces.
            </h2>
          </div>
          <Link
            to="/projects"
            className="border-b-2 border-foreground pb-1 text-sm font-medium uppercase tracking-widest hover:border-accent hover:text-accent"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <article key={i} className="group">
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.location}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{p.task}</p>
                  <h3 className="mt-2 font-display text-2xl leading-tight">{p.location}</h3>
                </div>
                <p className="whitespace-nowrap pt-1 text-xs text-muted-foreground">
                  {p.year ?? p.stage}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="eyebrow text-background/60">Let's build</p>
              <h2 className="mt-6 font-display text-6xl leading-[0.98] md:text-8xl">
                Have a site,<br />a brief, an idea?
              </h2>
            </div>
            <div className="md:col-span-4 md:pb-4">
              <p className="text-base text-background/70">
                Send us your brief. We'll walk with you from initiation and planning through
                execution and closure.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 border-b-2 border-background pb-1 text-sm font-medium uppercase tracking-widest hover:border-accent hover:text-accent"
              >
                Start a conversation <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="border-t border-border pt-4">
      <p className="font-display text-4xl md:text-5xl">{n}</p>
      <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Value({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-xl">{title}</p>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
