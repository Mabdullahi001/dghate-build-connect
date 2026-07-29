import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

const teamImageModules = import.meta.glob("../assets/team/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function normalizeTeamName(value: string) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getTeamImage(name: string) {
  const slug = normalizeTeamName(name);
  const match = Object.entries(teamImageModules).find(([path]) => {
    const fileName = path.split("/").pop()?.replace(/\.(jpg|jpeg|png|webp|avif)$/i, "") ?? "";
    return normalizeTeamName(fileName) === slug;
  });

  return match ? match[1] : null;
}

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
    bio: "Over 20 years post-B.Sc. experience across design, consultancy, construction and project management. Studied Architecture at Kwara State Polytechnic, then B.Sc. Architecture at Obafemi Awolowo University, Ile-Ife, and M.Sc. Environmental Design (Architecture) at the University of Lagos, Akoka. Chartered Architect with ARCON and a member of ANCA and NIA. NYSC in Sokoto State. Vast in CAD and rendering software.",
    image: getTeamImage("Arc. Kamal Olanrewaju Adeyemi"),
    imageAlt: "Architect Kamal Olanrewaju Adeyemi",
    focalPoint: "center 30%",
  },
  {
    name: "Engr. Yusuf Abdul-Afeez Lanre",
    role: "Director / Structural Engineer",
    qual: "HND, PGD (Civil Engineering) · COREN · MNATE",
    bio: "Experienced civil engineer skilled in building construction, roads, steel fabrications and concrete works, vast in CAD. Graduated from Federal Polytechnic Offa; PGD from Ladoke Akintola University, Ogbomosho. Registered with COREN.",
    image: getTeamImage("Engr. Yusuf Abdul-Afeez Lanre"),
    imageAlt: "Structural engineer Yusuf Abdul-Afeez Lanre",
    focalPoint: "center 25%",
  },
  {
    name: "Engr. Aiyeleso Wasiu Tunde",
    role: "Associate Partner / Structural Engineer",
    qual: "HND (Architecture), B.Sc. (Civil Engineering) · COREN · NSE · NIStructE",
    bio: "Civil engineer with an architecture background and over 15 years in the industry — skilled in building construction and concrete works, vast in CAD. B.Sc. Civil Engineering from Federal University of Minna and HND Architecture from Kwara State Polytechnic. Registered civil engineer with COREN, NSE and NIStructE.",
    image: getTeamImage("Engr. Aiyeleso Wasiu Tunde"),
    imageAlt: "Structural engineer Aiyeleso Wasiu Tunde",
    focalPoint: "center 50%",
  },
  {
    name: "Balogun Akeem Oluwaseyi",
    role: "Company Lawyer / Secretary",
    qual: "LL.B · Nigerian Law School, Lagos",
    bio: "Graduated from Ahmadu Bello University, Zaria, before proceeding to the Nigerian Law School, Lagos. Vast knowledge in civil law with experience working closely with construction companies.",
    image: getTeamImage("Balogun Akeem Oluwaseyi"),
    imageAlt: "Company lawyer Balogun Akeem Oluwaseyi",
    focalPoint: "center 50%",
  },
  {
    name: "Iyoyojie Hilary Anetor",
    role: "Architect",
    qual: "HND, B.Tech, PGD, M.Sc. Architecture",
    bio: "HND from Yaba Tech, B.Tech Architecture from F.U.T. Minna, PGD Construction Management from Abubakar Tafawa Balewa University, Bauchi, and M.Sc. Architecture from the University of Lagos, Akoka. NYSC in Gombe State with Nafada L.G.A. Experienced construction manager, vast in CAD and architectural software.",
    image: getTeamImage("Iyoyojie Hilary Anetor"),
    imageAlt: "Architect Iyoyojie Hilary Anetor",
    focalPoint: "center 45%",
  },
  {
    name: "Oritoogun Adeyinka",
    role: "Site Architect",
    qual: "HND (Architecture)",
    bio: "Graduated from Kwara State Polytechnic. Served (NYSC) with the Kebbi Health Services Rehabilitation Project. Worked with several architectural and construction firms before joining D'Ghate Design Studio Ltd. Currently working as a project architect.",
    image: getTeamImage("Oritoogun Adeyinka"),
    imageAlt: "Site architect Oritoogun Adeyinka",
    focalPoint: "center 50%",
  },
  {
    name: "Olayinka Taiye Ajiboye",
    role: "Accountant",
    qual: "B.Sc. Accounting",
    bio: "OND at Kwara State Polytechnic, Ilorin; B.Sc. Accounting at Obafemi Awolowo University, Ile-Ife. Vast knowledge across financial institutions before joining D'Ghate Design Studio as a consultant.",
    image: getTeamImage("Olayinka Taiye Ajiboye"),
    imageAlt: "Accountant Olayinka Taiye Ajiboye",
    focalPoint: "center 50%",
  },
  {
    name: "Arc. HABOU ISSIA",
    role: "Architect",
    qual: "B.Sc. Architecture · M.Sc. Architecture · DESS (Modern Architecture & Heritage) · Intern Architect (OAA)",
    bio: "Experienced architectural professional with over 20 years of progressive experience in architectural design, project coordination, construction documentation, and project management across Africa and Canada. Holds a B.Sc. in Architecture from Obafemi Awolowo University, Ile-Ife, an M.Sc. in Architecture from Ahmadu Bello University, Zaria, and a Graduate Diploma (DESS) in Modern Architecture and Heritage from Université du Québec à Montréal (UQAM). Currently completing the Internship in Architecture Program (IAP) with the Ontario Association of Architects (OAA) toward licensure in Canada. Registered Architect in the Republic of Niger since 2012, with extensive experience in residential, commercial, institutional, healthcare, and urban development projects. Strong knowledge of architectural design, building codes, construction administration, permit applications, and multidisciplinary coordination. Proficient in AutoCAD, Revit, SketchUp, Lumion, and other BIM and visualization software, with a commitment to delivering innovative, sustainable, and high-quality architectural solutions.",
    image: getTeamImage("Arc. HABOU ISSIA"),
    imageAlt: "Architect Arc. Habou Issia",
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
              {s.image ? (
                <div
                  className="mt-6 overflow-hidden rounded-lg border border-border shadow-sm flex items-center justify-center"
                  style={{ background: "var(--paper)", padding: "0.5rem" }}
                >
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="w-full max-h-64 object-contain"
                    style={{ objectPosition: "center" }}
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
