import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import aboutDetail from "@/assets/about-detail.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — D'Ghate Design Studio" },
      {
        name: "description",
        content:
          "From D'Ghate Habitat Konsult in 2006 to D'Ghate Design Studio Ltd today — a Lagos practice integrating architects, engineers and builders to deliver considered, precise projects.",
      },
      { property: "og:title", content: "About — D'Ghate Design Studio" },
      {
        property: "og:description",
        content:
          "Our story, vision, mission and values. A design and build studio based in Lagos, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">About the studio</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.98] md:text-[8rem]">
            Getting spaces connected — for the people who use them, and the ones who own them.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={aboutDetail}
              alt="Architectural interior — light and shadow"
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7 md:pt-6">
            <p className="eyebrow">Who we are</p>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                D'Ghate Design Studio Ltd is a registered company situated in Nigeria, West
                Africa. We are a design and build company with the main objective of solving
                architectural challenges in construction — with unique, inspiring and
                world-class design, coupled with a team of seasoned engineers and builders
                to execute projects with precision.
              </p>
              <p>
                We favour eco-friendly materials for sustainability, and design with two
                intentions in mind: getting spaces connected for those that use them, and
                delivering functional value for those that own them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/50">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow">Our story</p>
              <h2 className="mt-6 font-display text-5xl leading-[1.02]">Since 2006.</h2>
            </div>
            <div className="md:col-span-8 space-y-8 text-lg leading-relaxed text-foreground/80">
              <p>
                D'Ghate Design Studio Ltd started in 2006 as an architectural firm under
                the name <em>D'Ghate Habitat Konsult</em>. As demand grew for proper synergy
                across the construction industry — employing the same team for an entire
                building — we set out to make better building the default.
              </p>
              <p>
                Better building is achieved when architects stay with the construction
                process. To realise our vision through well-detailed design, we integrated
                builders and engineers into the setup, and in 2017 the name changed to
                <strong> D'Ghate Design Studio Ltd</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Vision</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02]">
              Our vision is that of our clients.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              Starting from Africa — with responsive, committed, seasoned expertise to solve
              functional building challenges for our clients and partners — we work toward
              recognition as a leading world-class firm.
            </p>
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02]">
              Solutions to real construction challenges.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/80">
              Functional architectural design with aesthetic and structural balance for the
              present — with an awareness of the past, made for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <p className="eyebrow">Values</p>
            <p className="max-w-md text-sm text-muted-foreground">
              Four commitments we practise deliberately — with clients, partners and every
              site we touch.
            </p>
          </div>
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {[
              ["Client experience", "Our vision is that of our clients. We exist and remain in business primarily because of our clients, partners and society at large — so excellent customer experience is a core value."],
              ["Continuous learning", "We are learners. The company continues to improve on modern knowledge to satisfy clients and society at large."],
              ["Professional rigour", "We adhere strictly to professional practice, paying attention to details for successful projects."],
              ["Long-term relationships", "We strive to create long-term relationships with our clients and partners."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-border pt-6">
                <h3 className="font-display text-3xl">{t}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
