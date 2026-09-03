import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroBar from "@/assets/hero-bar.jpg";
import promoClub from "@/assets/promo-club.jpg";
import promoBrunch from "@/assets/promo-brunch.jpg";
import visitExterior from "@/assets/visit-exterior.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paulo Restaurant — Neighborhood Bar & Kitchen" },
      {
        name: "description",
        content:
          "Paulo Restaurant: hand-shaken cocktails, honest food and a bar stool with your name on it. Happy hour 4–7pm Tuesday to Friday.",
      },
      { property: "og:title", content: "Paulo Restaurant — Neighborhood Bar & Kitchen" },
      {
        property: "og:description",
        content:
          "Hand-shaken cocktails, a kitchen that doesn't cut corners, and a bar stool with your name on it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#pours", label: "Choose Your Pour" },
  { href: "#menu", label: "Menu" },
  { href: "#promos", label: "Happy Hour" },
  { href: "#visit", label: "Visit" },
  { href: "#events", label: "Private Events" },
];

const menuLeft = [
  {
    name: "The Paulo Old Fashioned",
    desc: "Bourbon, demerara, orange oil, a single oversized cube.",
    price: "$13",
  },
  {
    name: "Smoked Paprika Wings",
    desc: "Dry-rubbed, char-grilled, served with pickled celery.",
    price: "$15",
  },
  {
    name: "Paulo Burger",
    desc: "Dry-aged blend, aged cheddar, house pickles, brioche.",
    price: "$17",
  },
];

const menuRight = [
  {
    name: "Smoky Paloma",
    desc: "Mezcal, grapefruit, lime, a salt rim worth licking.",
    price: "$12",
  },
  {
    name: "Cast Iron Cornbread",
    desc: "Honey butter, flaky salt, straight from the skillet.",
    price: "$8",
  },
  {
    name: "Late Night Nachos",
    desc: "Queso, pickled jalapeño, carnitas, all the way loaded.",
    price: "$14",
  },
];

const pours = [
  {
    name: "Old Fashioned",
    label: "old fashioned",
    note: "Bourbon, demerara, orange oil, one big cube.",
    price: "$13",
    from: "#3a2415",
    to: "#0f0a06",
    garnish: "🍊",
  },
  {
    name: "Smoky Paloma",
    label: "paloma",
    note: "Mezcal, grapefruit, lime, a salt rim worth licking.",
    price: "$12",
    from: "#7a2233",
    to: "#2a0e14",
    garnish: "🍋",
  },
  {
    name: "Espresso Martini",
    label: "espresso",
    note: "Vodka, cold brew, cacao bitters, three coffee beans.",
    price: "$14",
    from: "#2a1c12",
    to: "#0c0805",
    garnish: "☕",
  },
  {
    name: "House Margarita",
    label: "margarita",
    note: "Blanco tequila, lime, agave, a wide salted rim.",
    price: "$12",
    from: "#2f3b1f",
    to: "#0d1207",
    garnish: "🍒",
  },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=412+Founders+Street";

const socials = [
  { label: "Instagram", short: "IG", href: "https://instagram.com" },
  { label: "Facebook", short: "FB", href: "https://facebook.com" },
  { label: "TikTok", short: "TT", href: "https://tiktok.com" },
];

const footerCols = [
  {
    title: "Explore",
    items: [
      { label: "Full Menu", href: "#menu" },
      { label: "Locations", href: "#visit" },
      { label: "Happy Hour", href: "#promos" },
      { label: "Private Events", href: "#events" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "#story" },
      { label: "Careers", href: "#events" },
      { label: "Franchising", href: "#events" },
      { label: "Contact", href: "#visit" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "#legal" },
      { label: "Terms of Use", href: "#legal" },
      { label: "Accessibility", href: "#legal" },
    ],
  },
];

function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`font-display font-bold ${light ? "text-paper" : "text-ink"} ${className}`}>
      Paulo <span className="font-medium italic text-wine">Restaurant</span>
    </span>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-bone font-sans text-ink antialiased">
      {/* Announcement strip */}
      <div className="bg-wine px-5 py-2.5 text-center text-[0.88rem] text-paper">
        Happy hour runs <b className="text-amber">4–7pm</b> Tuesday through Friday at every Paulo
        Restaurant location.
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line-dark bg-ink/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="flex items-baseline gap-1.5 text-[1.2rem] sm:text-[1.35rem]">
            <Logo light />
          </a>
          <div className="hidden gap-8 text-[0.95rem] lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-cream/85 transition-opacity after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-amber after:transition-all after:duration-300 hover:text-cream hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="hidden rounded-sm bg-amber px-5 py-2.5 text-[0.9rem] font-semibold text-ink transition-colors hover:bg-amber-hover sm:inline-block"
            >
              Reserve a Table
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="text-2xl leading-none text-cream lg:hidden"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </nav>
        {open && (
          <div className="border-t border-line-dark px-6 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-cream/85 hover:text-amber"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="rounded-sm bg-amber px-5 py-3 text-center text-[0.9rem] font-semibold text-ink"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero — video */}
      <section
        id="top"
        className="relative flex min-h-[88vh] items-end overflow-hidden border-b border-line-dark bg-ink"
      >
        <img
          src={heroBar}
          alt="Bartender pouring a cocktail at Paulo Restaurant"
          className="hero-motion-img hero-motion-flicker absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="hero-grain pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,14,0.35)_0%,rgba(20,16,14,0.65)_55%,rgba(20,16,14,0.95)_100%)]" />

        {/* Floating garnish decorations */}
        <div
          aria-hidden="true"
          className="floaty-a pointer-events-none absolute right-[8%] top-[18%] z-[2] text-5xl drop-shadow-lg sm:text-6xl"
        >
          🍋
        </div>
        <div
          aria-hidden="true"
          className="floaty-b pointer-events-none absolute right-[22%] top-[38%] z-[2] hidden text-4xl drop-shadow-lg sm:block"
        >
          🍒
        </div>
        <div
          aria-hidden="true"
          className="floaty-c pointer-events-none absolute right-[4%] top-[52%] z-[2] hidden text-3xl drop-shadow-lg md:block"
        >
          🫒
        </div>

        <div className="relative z-[2] mx-auto w-full max-w-[1120px] px-6 pb-16 pt-24 sm:px-8 sm:pb-20">
          <Reveal variant="pop">
            <span className="pill-badge mb-4">🍸 A neighborhood bar &amp; kitchen, since 2014</span>
          </Reveal>
          <Reveal variant="left" delay={80}>
            <h1 className="mb-5 max-w-[14ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-paper">
              Good drinks, <em className="font-medium italic text-amber">honest</em> food, regulars
              welcome.
            </h1>
          </Reveal>
          <Reveal variant="up" delay={160}>
            <p className="mb-8 max-w-[46ch] text-[1.05rem] text-cream/85">
              Hand-shaken cocktails, a kitchen that doesn't cut corners, and a bar stool with your
              name on it. Come as you are — we'll pour the rest.
            </p>
          </Reveal>
          <Reveal variant="up" delay={240}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#visit"
                className="inline-block rounded-sm bg-amber px-7 py-4 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-amber-hover"
              >
                Reserve a Table
              </a>
              <a
                href="#menu"
                className="inline-block rounded-sm border border-cream/40 px-7 py-4 text-cream transition hover:border-amber hover:bg-amber/10"
              >
                See the Menu
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Promos */}
      <section id="promos" className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <SectionHead
            title="What's pouring this week"
            copy="New specials land every Monday. Ask your bartender what's fresh off the list."
          />
        </div>
        <div className="grid gap-0.5 bg-line md:grid-cols-[1.1fr_0.9fr]">
          <Reveal variant="left">
            <PromoCard
              image={promoClub}
              alt="Old fashioned cocktail on a dark bar"
              tag="Members only"
              title="Join the Paulo Club, drink a bit better"
              copy="Sign up and your first round of the month is on us. No app required, no fine print worth worrying about."
              link="Join free →"
              href="#promos"
              tall
            />
          </Reveal>
          <Reveal variant="right" delay={120}>
            <PromoCard
              image={promoBrunch}
              alt="Weekend brunch spread with biscuits and mimosas"
              tag="Weekend ritual"
              title="Brunch runs 10 to 2, Saturday and Sunday"
              copy="Bloody Marys built to order, biscuits that actually flake, and a bottomless mimosa hour if you ask nicely."
              link="Brunch menu →"
              href="#menu"
            />
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="overflow-hidden bg-bone py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <Reveal variant="pop">
            <p className="relative mx-auto max-w-[22ch] text-center font-display text-[clamp(2.1rem,6vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink">
              We don&apos;t pour apologies.
              <img
                src={promoClub}
                alt=""
                aria-hidden="true"
                className="mx-3 -my-2 inline-block h-14 w-14 rotate-3 rounded-sm object-cover align-middle shadow-lg sm:h-20 sm:w-20"
              />
              We pour honest drinks, loud nights and second rounds.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Choose your pour */}
      <section id="pours" className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <SectionHead
            title="Choose your pour"
            copy="Four house favorites. Pick a mood, we'll pick the glass."
          />
        </div>
        <div className="grid gap-0.5 bg-line sm:grid-cols-2">
          {pours.map((p, i) => (
            <Reveal key={p.name} variant={i % 2 === 0 ? "left" : "right"} delay={i * 90}>
              <PourCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <SectionHead
            title="A few things worth ordering"
            copy="The full menu changes with the seasons — these don't leave."
          />
          <div className="grid gap-x-16 md:grid-cols-2">
            <div>
              {menuLeft.map((m, i) => (
                <Reveal key={m.name} variant="left" delay={i * 90}>
                  <MenuItem {...m} />
                </Reveal>
              ))}
            </div>
            <div>
              {menuRight.map((m, i) => (
                <Reveal key={m.name} variant="right" delay={i * 90}>
                  <MenuItem {...m} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <SectionHead
            title="Find your local Paulo Restaurant"
            copy="Walk-ins always welcome. Tables held for reservations until 15 past."
          />
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <Reveal variant="left">
              <table className="w-full border-collapse">
                <tbody>
                  {[
                    ["Monday – Thursday", "4pm – 12am"],
                    ["Friday – Saturday", "12pm – 2am"],
                    ["Sunday", "10am – 11pm"],
                    ["Kitchen closes", "30 min before close"],
                  ].map(([day, hours]) => (
                    <tr key={day} className="border-b border-line">
                      <td className="py-3.5 text-[0.98rem] text-ink/60">{day}</td>
                      <td className="py-3.5 text-right font-display text-[0.98rem] text-ink">
                        {hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <Reveal variant="right" delay={120}>
              <img
                src={visitExterior}
                alt="Paulo Restaurant storefront glowing at dusk"
                loading="lazy"
                width={1200}
                height={912}
                className="mb-7 h-56 w-full rounded-sm object-cover sm:h-64"
              />
              <p className="mb-4 font-display text-[1.3rem] text-ink">Downtown Location</p>
              <p className="mb-1.5 text-ink/70">412 Founders Street</p>
              <p className="mb-1.5 text-ink/70">Open every day, no reservation needed at the bar.</p>
              <p className="mt-5">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-wine pb-0.5 font-semibold text-wine"
                >
                  Get directions →
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Private events */}
      <section id="events" className="py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <SectionHead
            title="Book the room, bring the people"
            copy="Birthdays, work things, Tuesday for no reason. We'll handle the rest."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "The Back Room",
                d: "Seats 24, its own bar, a door that closes. Ideal for dinners that run long.",
              },
              {
                t: "Full Buyout",
                d: "The whole place, your playlist. Available Sunday through Wednesday nights.",
              },
              {
                t: "Cocktail Classes",
                d: "Ninety minutes behind the bar with our team. Three drinks, plenty of snacks.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} variant="pop" delay={i * 110}>
                <div className="h-full rounded-sm border border-line bg-white p-7">
                  <h3 className="mb-3 font-display text-[1.35rem] font-semibold">{c.t}</h3>
                  <p className="mb-5 text-[0.95rem] text-ink/65">{c.d}</p>
                  <a
                    href="mailto:events@paulorestaurant.com"
                    className="border-b border-wine pb-0.5 text-[0.92rem] font-semibold text-wine"
                  >
                    Enquire →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story / legal anchors */}
      <section id="story" className="bg-ink py-20 text-cream sm:py-24">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <Reveal variant="pop">
            <p className="mx-auto max-w-[52ch] text-center font-display text-[clamp(1.4rem,3vw,2.2rem)] italic leading-snug text-paper">
              "We opened in 2014 with eight stools and one shaker. The stools multiplied. The
              standards didn't move."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Footer (stays put) */}
      <footer id="legal" className="border-t border-line-dark bg-ink pb-8 pt-16 text-cream">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <div className="mb-14 grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-3.5 text-[1.4rem]">
                <Logo light />
              </div>
              <p className="max-w-[32ch] text-[0.92rem] text-cream/65">
                A neighborhood bar and kitchen doing craft cocktails and honest food, one block at a
                time.
              </p>
              <div className="mt-5 flex gap-3.5">
                {socials.map((s) => (
                  <a
                    key={s.short}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-[0.85rem] transition hover:border-amber hover:text-amber"
                  >
                    {s.short}
                  </a>
                ))}
              </div>
            </div>
            {footerCols.map((col) => (
              <FooterCol key={col.title} title={col.title} items={col.items} />
            ))}
          </div>
          <div className="flex flex-wrap justify-between gap-3 border-t border-line-dark pt-6 text-[0.82rem] text-cream/50">
            <span>© 2026 Paulo Restaurant. All rights reserved.</span>
            <span>Designed for the neighborhood, not the algorithm.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ title, copy }: { title: string; copy: string }) {
  return (
    <Reveal variant="up">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-7">
        <h2 className="max-w-[16ch] font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold tracking-[-0.01em] text-ink">
          {title}
        </h2>
        <p className="max-w-[36ch] text-[0.98rem] text-ink/60">{copy}</p>
      </div>
    </Reveal>
  );
}

function PromoCard({
  image,
  alt,
  tag,
  title,
  copy,
  link,
  href,
  tall = false,
}: {
  image: string;
  alt: string;
  tag: string;
  title: string;
  copy: string;
  link: string;
  href: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full flex-col justify-end overflow-hidden bg-ink px-7 py-12 sm:px-12 sm:py-14 ${
        tall ? "min-h-[420px]" : "min-h-[340px]"
      }`}
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        width={1200}
        height={912}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,16,14,0.25),rgba(20,16,14,0.94))]" />
      <div className="relative z-[2]">
        <div className="mb-3 font-display text-[0.82rem] italic text-amber">{tag}</div>
        <h3 className="mb-3.5 max-w-[20ch] font-display text-[1.7rem] font-semibold text-paper">
          {title}
        </h3>
        <p className="mb-5 max-w-[38ch] text-[0.96rem] text-cream/80">{copy}</p>
        <a href={href} className="self-start border-b border-amber pb-0.5 font-semibold text-amber">
          {link}
        </a>
      </div>
    </div>
  );
}

function PourCard({
  name,
  label,
  note,
  price,
  from,
  to,
  garnish,
}: {
  name: string;
  label: string;
  note: string;
  price: string;
  from: string;
  to: string;
  garnish: string;
}) {
  return (
    <div
      className="relative flex min-h-[320px] flex-col justify-end overflow-hidden px-8 py-12 sm:px-12"
      style={{ background: `radial-gradient(circle at 30% 20%, ${from}, ${to} 75%)` }}
    >
      <span aria-hidden="true" className="pour-label">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="floaty-c pointer-events-none absolute right-8 top-8 text-4xl sm:text-5xl"
      >
        {garnish}
      </span>
      <div className="relative z-[2]">
        <h3 className="mb-2 font-display text-[1.5rem] font-semibold text-paper sm:text-[1.7rem]">
          {name}
        </h3>
        <p className="mb-5 max-w-[32ch] text-[0.95rem] text-cream/75">{note}</p>
        <span className="pill-badge bg-transparent">{price} · add to tab</span>
      </div>
    </div>
  );
}

function MenuItem({ name, desc, price }: { name: string; desc: string; price: string }) {
  return (
    <div className="flex justify-between gap-5 border-b border-line py-5">
      <div>
        <h4 className="mb-1 font-display text-[1.12rem] font-semibold text-ink">{name}</h4>
        <p className="max-w-[34ch] text-[0.88rem] text-ink/60">{desc}</p>
      </div>
      <div className="whitespace-nowrap font-display text-[1.05rem] text-wine">{price}</div>
    </div>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-brass">
        {title}
      </h5>
      <ul className="list-none">
        {items.map((i) => (
          <li key={i.label} className="mb-2.5">
            <a href={i.href} className="text-[0.94rem] text-cream/75 hover:text-amber">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
