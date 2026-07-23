import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — D'Ghate Design Studio" },
      {
        name: "description",
        content:
          "Architecture, consultation, engineering, procurement, project & facility management. We walk projects from initiation and planning through execution to closure.",
      },
      { property: "og:title", content: "Services — D'Ghate Design Studio" },
      {
        property: "og:description",
        content:
          "End-to-end architecture and build services in Lagos, Nigeria — from brief and design to construction and handover.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Architecture",
    body: "Concept, schematic and detailed design. Considered floor plans, elevations and material choices for residential, mixed-use and institutional work.",
  },
  {
    n: "02",
    title: "Consultation",
    body: "Advisory at initiation: brief formulation, feasibility, site studies, planning and cost strategy — before a single line is drawn.",
  },
  {
    n: "03",
    title: "Engineering",
    body: "Structural, civil and services engineering delivered in-house — with chartered engineers (COREN, NSE) working alongside the design team.",
  },
  {
    n: "04",
    title: "Procurement",
    body: "Sourcing, specification and supply of materials and fittings, favouring eco-friendly and durable options for long-term value.",
  },
  {
    n: "05",
    title: "Project & Facility Management",
    body: "Programme, cost and quality control on site — and management of the completed facility after handover.",
  },
];

const stages = [
  ["Initiation", "We work closely with clients to formulate the brief and provide professional advice and recommendations."],
  ["Planning", "Design development, engineering coordination and documentation ready for construction."],
  ["Execution", "In-house build and construction management — the architect stays on site with the work."],
  ["Closure", "Snagging, handover, commissioning and — where appointed — ongoing facility management."],
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Scope of works</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.98] md:text-[7rem]">
            From the first brief to the final handover.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Our services take you through all the stages of project management — initiation,
            planning, execution and closure — under one roof.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="space-y-0">
          {services.map((s) => (
            <div key={s.n} className="grid gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10 md:py-14">
              <p className="font-display text-2xl text-muted-foreground md:col-span-2">{s.n}</p>
              <h2 className="font-display text-4xl leading-tight md:col-span-4 md:text-5xl">{s.title}</h2>
              <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:col-span-6">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <p className="eyebrow">How we work</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-6xl">Four stages, one team.</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-4">
            {stages.map(([t, d], i) => (
              <div key={t} className="border-t-2 border-foreground pt-6">
                <p className="font-display text-xl text-muted-foreground">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-3xl">{t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
