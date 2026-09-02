import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroBar from "@/assets/hero-bar.jpg";
import promoClub from "@/assets/promo-club.jpg";
import promoBrunch from "@/assets/promo-brunch.jpg";
import visitExterior from "@/assets/visit-exterior.jpg";

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

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold text-paper ${className}`}>
      Paulo <span className="font-medium italic text-amber">Restaurant</span>
    </span>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-ink font-sans text-cream antialiased">
      {/* Announcement strip */}
      <div className="bg-wine px-5 py-2.5 text-center text-[0.88rem] text-paper">
        Happy hour runs <b className="text-amber">4–7pm</b> Tuesday through Friday at every Paulo
        Restaurant location.
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/95 backdrop-blur-md">
        <nav className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 sm:px-8">
          <a href="#" className="flex items-baseline gap-1.5 text-[1.2rem] sm:text-[1.35rem]">
            <Logo />
          </a>
          <div className="hidden gap-8 text-[0.95rem] lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-cream/85 transition-opacity after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-amber after:transition-all after:duration-250 hover:text-cream hover:after:w-full"
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
          <div className="border-t border-line px-6 py-4 lg:hidden">
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

      {/* Hero */}
      <section className="relative flex min-h-[88vh] items-end overflow-hidden border-b border-line">
        <img
          src={heroBar}
          alt="Candlelit dining room and bar at Paulo Restaurant"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,20,16,0.45)_0%,rgba(27,20,16,0.7)_55%,rgba(27,20,16,0.97)_100%)]" />
        <div className="relative z-[2] mx-auto w-full max-w-[1120px] px-6 pb-16 pt-24 sm:px-8 sm:pb-20">
          <div className="mb-4 font-display text-[0.95rem] italic text-amber">
            A neighborhood bar &amp; kitchen, since 2014
          </div>
          <h1 className="mb-5 max-w-[14ch] font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.01em] text-paper">
            Good drinks, <em className="font-medium italic text-amber">honest</em> food, regulars
            welcome.
          </h1>
          <p className="mb-8 max-w-[46ch] text-[1.05rem] text-cream/85">
            Hand-shaken cocktails, a kitchen that doesn't cut corners, and a bar stool with your
            name on it. Come as you are — we'll pour the rest.
          </p>
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
          <PromoCard
            image={promoClub}
            alt="Old fashioned cocktail on a dark bar"
            tag="Members only"
            title="Join the Paulo Club, drink a bit better"
            copy="Sign up and your first round of the month is on us. No app required, no fine print worth worrying about."
            link="Join free →"
            tall
          />
          <PromoCard
            image={promoBrunch}
            alt="Weekend brunch spread with biscuits and mimosas"
            tag="Weekend ritual"
            title="Brunch runs 10 to 2, Saturday and Sunday"
            copy="Bloody Marys built to order, biscuits that actually flake, and a bottomless mimosa hour if you ask nicely."
            link="Brunch menu →"
          />
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
              {menuLeft.map((m) => (
                <MenuItem key={m.name} {...m} />
              ))}
            </div>
            <div>
              {menuRight.map((m) => (
                <MenuItem key={m.name} {...m} />
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
            <table className="w-full border-collapse">
              <tbody>
                {[
                  ["Monday – Thursday", "4pm – 12am"],
                  ["Friday – Saturday", "12pm – 2am"],
                  ["Sunday", "10am – 11pm"],
                  ["Kitchen closes", "30 min before close"],
                ].map(([day, hours]) => (
                  <tr key={day} className="border-b border-line">
                    <td className="py-3.5 text-[0.98rem] text-cream/60">{day}</td>
                    <td className="py-3.5 text-right font-display text-[0.98rem] text-paper">
                      {hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div>
              <img
                src={visitExterior}
                alt="Paulo Restaurant storefront glowing at dusk"
                loading="lazy"
                width={1200}
                height={912}
                className="mb-7 h-56 w-full rounded-sm object-cover sm:h-64"
              />
              <p className="mb-4 font-display text-[1.3rem] text-paper">Downtown Location</p>
              <p className="mb-1.5 text-cream/80">412 Founders Street</p>
              <p className="mb-1.5 text-cream/80">
                Open every day, no reservation needed at the bar.
              </p>
              <p className="mt-5">
                <a
                  href="#"
                  className="border-b border-amber pb-0.5 font-semibold text-amber"
                >
                  Get directions →
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="events" className="border-t border-line pb-8 pt-16">
        <div className="mx-auto max-w-[1120px] px-6 sm:px-8">
          <div className="mb-14 grid grid-cols-2 gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-10">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-3.5 text-[1.4rem]">
                <Logo />
              </div>
              <p className="max-w-[32ch] text-[0.92rem] text-cream/65">
                A neighborhood bar and kitchen doing craft cocktails and honest food, one block at a
                time.
              </p>
              <div className="mt-5 flex gap-3.5">
                {["IG", "FB", "TT"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    aria-label={s}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-[0.85rem] transition hover:border-amber hover:text-amber"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <FooterCol
              title="Explore"
              items={["Full Menu", "Locations", "Gift Cards", "Private Events"]}
            />
            <FooterCol title="Company" items={["About Us", "Careers", "Franchising", "Contact"]} />
            <FooterCol title="Legal" items={["Privacy Policy", "Terms of Use", "Accessibility"]} />
          </div>
          <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-[0.82rem] text-cream/50">
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
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-line pb-7">
      <h2 className="max-w-[16ch] font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold tracking-[-0.01em] text-paper">
        {title}
      </h2>
      <p className="max-w-[36ch] text-[0.98rem] text-cream/70">{copy}</p>
    </div>
  );
}

function PromoCard({
  image,
  alt,
  tag,
  title,
  copy,
  link,
  tall = false,
}: {
  image: string;
  alt: string;
  tag: string;
  title: string;
  copy: string;
  link: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col justify-end overflow-hidden bg-ink px-7 py-12 sm:px-12 sm:py-14 ${
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,20,16,0.25),rgba(27,20,16,0.94))]" />
      <div className="relative z-[2]">
        <div className="mb-3 font-display text-[0.82rem] italic text-amber">{tag}</div>
        <h3 className="mb-3.5 max-w-[20ch] font-display text-[1.7rem] font-semibold text-paper">
          {title}
        </h3>
        <p className="mb-5 max-w-[38ch] text-[0.96rem] text-cream/80">{copy}</p>
        <a href="#" className="self-start border-b border-amber pb-0.5 font-semibold text-amber">
          {link}
        </a>
      </div>
    </div>
  );
}

function MenuItem({ name, desc, price }: { name: string; desc: string; price: string }) {
  return (
    <div className="flex justify-between gap-5 border-b border-line py-5">
      <div>
        <h4 className="mb-1 font-display text-[1.12rem] font-semibold text-paper">{name}</h4>
        <p className="max-w-[34ch] text-[0.88rem] text-cream/60">{desc}</p>
      </div>
      <div className="whitespace-nowrap font-display text-[1.05rem] text-amber">{price}</div>
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="mb-4 text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-brass">
        {title}
      </h5>
      <ul className="list-none">
        {items.map((i) => (
          <li key={i} className="mb-2.5">
            <a href="#" className="text-[0.94rem] text-cream/75 hover:text-amber">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
