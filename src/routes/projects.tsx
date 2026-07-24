import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { projects } from "@/lib/projects";
import p14 from "@/assets/projects/proj-14.jpeg";
import p15 from "@/assets/projects/proj-15.jpeg";
import p16 from "@/assets/projects/proj-16.jpeg";
import p17 from "@/assets/projects/proj-17.jpeg";
import p18 from "@/assets/projects/proj-18.jpeg";
import p19 from "@/assets/projects/proj-19.jpeg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — D'Ghate Design Studio" },
      {
        name: "description",
        content:
          "Selected projects by D'Ghate Design Studio across Lagos, Ogun, Edo and Kwara — design & build, consultation and remodelling from 2010 to today.",
      },
      { property: "og:title", content: "Projects — D'Ghate Design Studio" },
      {
        property: "og:description",
        content:
          "A record of built work — residential estates, institutional projects, remodels and ongoing commissions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Projects · 2010 — Present</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.98] md:text-[7rem]">
            A record of built<br />and ongoing work.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Residential estates, institutional commissions, consultation and remodels across
            Lagos, Ogun, Edo and Kwara States.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
        <p className="eyebrow">Recent</p>
        <h2 className="mt-4 font-display text-4xl">Recent Projects</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">A selection of the most recent work — details to be added.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {[p14, p15, p16, p17, p18, p19].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-muted">
              <img src={src} alt={`Recent project ${i + 14}`} className="aspect-[4/3] w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={i} className={`group ${i % 2 === 1 ? "md:mt-24" : ""}`}>
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
              <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5">
                <div className="col-span-2">
                  <p className="eyebrow">{p.task}</p>
                  <h3 className="mt-2 font-display text-3xl leading-tight">{p.location}</h3>
                </div>
                <div className="text-right">
                  <p className="eyebrow">Stage</p>
                  <p className="mt-2 font-display text-xl">{p.year ?? p.stage}</p>
                  {p.year && <p className="text-xs text-muted-foreground">{p.stage}</p>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
