import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — D'Ghate Design Studio" },
      {
        name: "description",
        content:
          "Talk to D'Ghate Design Studio about your project. Studio in Awoyaya, Lekki; office in Agidingbi, Ikeja. Call, WhatsApp or email us.",
      },
      { property: "og:title", content: "Contact — D'Ghate Design Studio" },
      {
        property: "og:description",
        content: "Studio and office addresses, phone, WhatsApp, email and social for D'Ghate Design Studio Ltd.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border">
        <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 max-w-5xl font-display text-6xl leading-[0.98] md:text-[8rem]">
            Send a brief.<br />Start a project.
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-muted-foreground">
            Tell us about the site, the ambitions and the constraints. We'll take it from
            initiation and planning through execution and closure.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Studio</p>
            <p className="mt-4 font-display text-2xl leading-tight">
              21 Ogunlana Crescent,<br />Awoyaya, Lekki,<br />Lagos State.
            </p>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">Registered</p>
            <p className="mt-4 font-display text-2xl leading-tight">
              D'Ghate Design Studio Ltd<br />RC: 1447212
            </p>
          </div>
        </div>

        <div className="mt-24 grid gap-16 border-t border-border pt-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Direct</p>
            <ul className="mt-6 space-y-5 font-display text-3xl md:text-4xl">
              <li>
                <a href="mailto:dghate.design.studio@gmail.com" className="hover:text-accent break-words">
                  dghate.design.studio@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2348039258231" className="hover:text-accent">+234 803 925 8231</a>
              </li>
              <li>
                <a href="tel:+2348028284589" className="hover:text-accent">+234 802 828 4589</a>
              </li>
              <li>
                <a href="https://wa.me/2348039258231" className="hover:text-accent">WhatsApp · +234 803 925 8231</a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-6 space-y-5 font-display text-3xl md:text-4xl">
              <li><a href="https://instagram.com/dghatedesignstudio" className="hover:text-accent">Instagram · @dghatedesignstudio</a></li>
              <li><a href="https://twitter.com/Dghates" className="hover:text-accent">Twitter · @Dghates</a></li>
            </ul>

            <form
              className="mt-16 border-t border-border pt-10"
              onSubmit={(e) => {
                e.preventDefault();
                const f = new FormData(e.currentTarget);
                const body = `From: ${f.get("name")} (${f.get("email")})\n\n${f.get("message")}`;
                window.location.href = `mailto:dghate.design.studio@gmail.com?subject=Project enquiry&body=${encodeURIComponent(body)}`;
              }}
            >
              <p className="eyebrow">Quick enquiry</p>
              <div className="mt-6 space-y-5">
                <Field name="name" label="Name" />
                <Field name="email" label="Email" type="email" />
                <Field name="message" label="About your project" textarea />
                <button
                  type="submit"
                  className="mt-4 inline-flex items-center gap-3 border-b-2 border-foreground pb-1 text-sm font-medium uppercase tracking-widest hover:border-accent hover:text-accent"
                >
                  Send enquiry <span aria-hidden>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full border-0 border-b border-border bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground focus:border-foreground";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={4} className={cls} placeholder="Site, brief, timing…" />
      ) : (
        <input name={name} required type={type} className={cls} />
      )}
    </label>
  );
}
