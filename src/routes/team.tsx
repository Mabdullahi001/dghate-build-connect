import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — D'Ghate Design Studio" },
      {
        name: "description",
        content:
          "The architects, engineers and consultants behind D'Ghate Design Studio — chartered with ARCON, COREN, NIA and NSE, with decades of combined practice.",
      },
      { property: "og:title", content: "Team — D'Ghate Design Studio" },
      {
        property: "og:description",
        content:
          "Meet the key staff of D'Ghate Design Studio Ltd — architecture, engineering, law and finance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/team" },
    ],
    links: [{ rel: "canonical", href: "/team" }],
  }),
  component: TeamPage,
});

const staff = [
  {
    name: "Arc. Kamal Olanrewaju Adeyemi",
    role: "Managing Director / Architect",
    qual: "B.Sc., M.Sc. (Architecture) · ARCON · ANCA · NIA",
    bio: "Nearly 20 years post-B.Sc. experience across design, consultancy, construction and project management. Studied Architecture at Kwara State Polytechnic, then B.Sc. Architecture at Obafemi Awolowo University, Ile-Ife, and M.Sc. Environmental Design (Architecture) at the University of Lagos, Akoka. Chartered Architect with ARCON and a member of ANCA and NIA. NYSC in Sokoto State. Vast in CAD and rendering software.",
  },
  {
    name: "Engr. Yusuf Abdul-Afeez Lanre",
    role: "Director / Structural Engineer",
    qual: "HND, PGD (Civil Engineering) · COREN · MNATE",
    bio: "Experienced civil engineer skilled in building construction, roads, steel fabrications and concrete works, vast in CAD. Graduated from Federal Polytechnic Offa; PGD from Ladoke Akintola University, Ogbomosho. Registered with COREN.",
  },
  {
    name: "Engr. Aiyeleso Wasiu Tunde",
    role: "Associate Partner / Structural Engineer",
    qual: "HND (Architecture), B.Sc. (Civil Engineering) · COREN · NSE · NIStructE",
    bio: "Civil engineer with an architecture background and over 15 years in the industry — skilled in building construction and concrete works, vast in CAD. B.Sc. Civil Engineering from Federal University of Minna and HND Architecture from Kwara State Polytechnic. Registered civil engineer with COREN, NSE and NIStructE.",
  },
  {
    name: "Balogun Akeem Oluwaseyi",
    role: "Company Lawyer / Secretary",
    qual: "LL.B · Nigerian Law School, Lagos",
    bio: "Graduated from Ahmadu Bello University, Zaria, before proceeding to the Nigerian Law School, Lagos. Vast knowledge in civil law with experience working closely with construction companies.",
  },
  {
    name: "Iyoyojie Hilary Anetor",
    role: "Architect",
    qual: "HND, B.Tech, PGD, M.Sc. Architecture",
    bio: "HND from Yaba Tech, B.Tech Architecture from F.U.T. Minna, PGD Construction Management from Abubakar Tafawa Balewa University, Bauchi, and M.Sc. Architecture from the University of Lagos, Akoka. NYSC in Gombe State with Nafada L.G.A. Experienced construction manager, vast in CAD and architectural software.",
  },
  {
    name: "Oritoogun Adeyinka",
    role: "Site Architect",
    qual: "HND (Architecture)",
    bio: "Graduated from Kwara State Polytechnic. Served (NYSC) with the Kebbi Health Services Rehabilitation Project. Worked with several architectural and construction firms before joining D'Ghate Design Studio Ltd. Currently working as a project architect.",
  },
  {
    name: "Olayinka Taiye Ajiboye",
    role: "Accountant",
    qual: "B.Sc. Accounting",
    bio: "OND at Kwara State Polytechnic, Ilorin; B.Sc. Accounting at Obafemi Awolowo University, Ile-Ife. Vast knowledge across financial institutions before joining D'Ghate Design Studio as a consultant.",
  },
  {
    name: "Mudashiru Ishola L.",
    role: "Quantity Surveyor (Consultant)",
    qual: "Quantity Surveying",
    bio: "Consulting quantity surveyor supporting cost planning, measurement and contract administration across studio projects.",
  },
];

function TeamPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Key staff</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.98] md:text-[7rem]">
            Architects, engineers,<br />and the people around them.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
          {staff.map((s) => (
            <article key={s.name} className="border-t border-border pt-8">
              <div className="flex items-baseline gap-4">
                <div className="h-16 w-16 shrink-0 rounded-full bg-secondary text-center font-display text-2xl leading-[4rem] text-foreground/70">
                  {s.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="eyebrow">{s.role}</p>
                  <h2 className="mt-2 font-display text-3xl leading-tight">{s.name}</h2>
                </div>
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-muted-foreground">{s.qual}</p>
              <p className="mt-4 text-base leading-relaxed text-foreground/80">{s.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
