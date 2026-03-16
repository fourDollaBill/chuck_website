"use client";

import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { motion } from "framer-motion";
import { useState } from "react";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

type Value = {
  title: string;
  text: string;
};

type Outcome = {
  title: string;
  text: string;
};

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        className="rounded-full border border-stone-300 bg-white p-1 shadow-sm"
      >
        <circle cx="22" cy="22" r="7" fill="#e6b97a" />

        <line x1="22" y1="5" x2="22" y2="12" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="32" x2="22" y2="39" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="5" y1="22" x2="12" y2="22" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="22" x2="39" y2="22" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />

        <line x1="10" y1="10" x2="15" y2="15" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="29" x2="34" y2="34" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="34" x2="15" y2="29" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="29" y1="15" x2="34" y2="10" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />

        <line x1="14" y1="6.5" x2="17.5" y2="12.5" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
        <line x1="26.5" y1="31.5" x2="30" y2="37.5" stroke="#b08a5a" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div>
        <p className="text-[0.72rem] uppercase tracking-[0.28em] text-stone-500">
          Radiant Horizons
        </p>
        <p className="text-sm text-stone-600">Independent Living Skills</p>
      </div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="mx-auto flex max-w-7xl items-center gap-4 px-6">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
      <div className="h-2 w-2 rounded-full bg-stone-300" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-stone-300 to-transparent" />
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const services: Service[] = [
    {
      icon: Home,
      title: "Independent Living Skills",
      text: "Personalized instruction that helps adults build the skills needed to live as independently as possible in their own homes and communities.",
    },
    {
      icon: HeartHandshake,
      title: "Daily Living Support",
      text: "Support with self-care, routines, meal preparation, budgeting, nutrition, appointments, and other essential life skills.",
    },
    {
      icon: Users,
      title: "Community-Based Training",
      text: "Real-world learning in homes and community settings such as stores, banks, transit systems, clinics, libraries, and job training sites.",
    },
    {
      icon: ShieldCheck,
      title: "Person-Centered Planning",
      text: "Services aligned with each client's goals and Individual Program Plan, delivered with dignity, consistency, and cultural responsiveness.",
    },
  ];

  const values: Value[] = [
    {
      title: "Empowerment",
      text: "We support adults with developmental disabilities in building confidence, skills, and independence in everyday life.",
    },
    {
      title: "Accountability",
      text: "Our team values consistency, compassion, and competence in every service we provide.",
    },
    {
      title: "Inclusivity",
      text: "We honor each person's goals, identity, culture, and voice through individualized, affirming support.",
    },
  ];

  const outcomes: Outcome[] = [
    {
      title: "Greater autonomy",
      text: "Clients build confidence and ownership in their day-to-day routines and decisions.",
    },
    {
      title: "Skill development",
      text: "Progress is grounded in practical goals identified through each client's plan and support team.",
    },
    {
      title: "Community participation",
      text: "Clients gain greater knowledge of community resources and more integrated experiences.",
    },
  ];

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#mission", label: "Mission" },
    { href: "#services", label: "Services" },
    { href: "#quality", label: "Quality" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`${headingFont.variable} ${bodyFont.variable} min-h-screen bg-[#f7f1e8] text-stone-800`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(164,152,133,0.16),transparent_35%),linear-gradient(to_bottom,#faf6f0,#f5efe6_42%,#f9f5ef)]" />
      <div className="fixed inset-0 -z-10 opacity-30 [background-image:linear-gradient(to_right,rgba(120,113,108,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(120,113,108,0.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#faf6f0]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <BrandMark />

          <nav className="hidden items-center gap-8 text-sm text-stone-700 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-stone-950">
                {item.label}
              </a>
            ))}
            
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-full border border-stone-300 bg-white p-2 text-stone-800 shadow-sm md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-stone-200 bg-[#faf6f0] px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-stone-700">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-[1.08fr_0.92fr] md:items-center md:py-28">
          <FadeUp>
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/80 px-4 py-2 text-sm text-stone-700 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber-700" />
                Community-based support with dignity and care
              </div>

              <h1
                className="max-w-3xl text-5xl leading-none text-stone-900 sm:text-6xl md:text-7xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Helping adults build confidence, independence, and meaningful daily life.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                Radiant Horizons LLC provides person-centered Independent Living Skills
                training and community-based support designed around each client's goals,
                identity, strengths, and well-being.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-stone-300/40 transition hover:-translate-y-0.5"
                >
                  Request Information
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#mission"
                  className="rounded-full border border-stone-300 bg-white px-6 py-3.5 text-sm font-medium text-stone-900 shadow-sm transition hover:bg-stone-50"
                >
                  View Mission
                </a>
              </div>

              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  ["1:1", "Personalized support"],
                  ["In Home", "Natural environment training"],
                  ["Community", "Real-world skill building"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="rounded-[1.5rem] border border-stone-200 bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <p
                      className="text-2xl text-stone-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {label}
                    </p>
                    <p className="mt-1 text-sm text-stone-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative">
              <div className="absolute -left-8 top-8 h-36 w-36 rounded-full bg-amber-200/40 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-stone-300/40 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white/85 p-5 shadow-[0_25px_80px_-30px_rgba(87,71,57,0.35)] backdrop-blur">
                <div className="rounded-[1.7rem] bg-gradient-to-br from-[#6e5a49] via-[#86715d] to-[#b49575] p-8 text-white">
                  <p className="text-sm uppercase tracking-[0.25em] text-amber-100">
                    Our Promise
                  </p>
                  <p
                    className="mt-4 text-4xl leading-tight"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Quality support rooted in dignity, consistency, and person-centered care.
                  </p>

                  <div className="mt-8 grid gap-4">
                    {[
                      "Person-centered support plans",
                      "Culturally responsive services",
                      "Respect, dignity, and safety",
                      "Support tailored to individual goals",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[1.25rem] border border-white/15 bg-white/10 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-100" />
                        <span className="text-sm text-stone-50">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-stone-200 bg-[#fbf7f2] p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                      Support Philosophy
                    </p>
                    <p
                      className="mt-2 text-2xl text-stone-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Person-centered care
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      Services shaped around real goals, daily needs, and long-term quality of life.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-stone-200 bg-[#fbf7f2] p-5 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.18em] text-stone-500">
                      Family Trust
                    </p>
                    <p
                      className="mt-2 text-2xl text-stone-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Clear communication
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      Dependable coordination with families, regional centers, and care teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider />

      <section id="mission" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <FadeUp>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                  Mission Statement
                </p>
                <h2
                  className="mt-3 text-4xl text-stone-900 sm:text-5xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Rooted in empowerment, accountability, and inclusivity.
                </h2>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="rounded-[2rem] border border-stone-200 bg-white/85 p-8 shadow-[0_20px_60px_-30px_rgba(87,71,57,0.35)] backdrop-blur md:p-10">
                <div className="space-y-5 text-lg leading-8 text-stone-600">
                  <p>
                    Radiant Horizons LLC is a community-based organization dedicated to
                    empowering adults with developmental disabilities to lead independent,
                    fulfilling lives. Our mission is to support individuals in gaining the
                    skills, confidence, and resources necessary to thrive in their communities.
                  </p>
                  <p>
                    Founded by a clinical social worker with experience in both therapeutic
                    services and adult residential care, our program offers a person-centered
                    and culturally responsive approach to Independent Living Skills training.
                  </p>
                  <p>
                    We understand the unique needs of our clients and are committed to
                    providing individualized support that honors each person's goals,
                    identity, and voice.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
          <FadeUp>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">About Us</p>
              <h2
                className="mt-3 text-4xl text-stone-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Support that centers the person, not just the program.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
                Radiant Horizons LLC serves clients throughout the Alta California Regional
                Center catchment area. Services are delivered in the client's home and in
                community settings to promote natural learning environments, long-term skill
                development, and greater participation in daily life.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-4">
            {values.map((value, index) => (
              <FadeUp key={value.title} delay={index * 0.08}>
                <div className="rounded-[1.6rem] border border-stone-200 bg-white/80 p-6 shadow-sm">
                  <h3
                    className="text-3xl text-stone-900"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-7 text-stone-600">{value.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="rounded-[2rem] border border-stone-200 bg-white/85 p-10 shadow-[0_20px_60px_-30px_rgba(87,71,57,0.35)] backdrop-blur">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                Regional Partnership
              </p>
              <h2
                className="mt-3 text-4xl text-stone-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Serving the Alta California Regional Center community.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
                Radiant Horizons LLC provides Independent Living Skills training for
                adults served within the Alta California Regional Center catchment
                area. Our services are delivered in clients' homes and throughout
                community environments to promote natural learning, practical skill
                development, and long‑term independence.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  "Sacramento County",
                  "Sutter County",
                  "Placer County",
                  "El Dorado County",
                ].map((area) => (
                  <div
                    key={area}
                    className="rounded-xl border border-stone-200 bg-[#fbf7f2] px-4 py-3 text-sm text-stone-700"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <SectionDivider />

      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Services</p>
              <h2
                className="mt-3 text-4xl text-stone-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Practical support designed for real life.
              </h2>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Thoughtful, tailored instruction designed to help clients build practical skills
                and live with greater confidence and independence.
              </p>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeUp key={service.title} delay={index * 0.06}>
                  <div className="group h-full rounded-[2rem] border border-stone-200 bg-white/85 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.1rem] bg-[#8f775f] text-white shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3
                      className="mt-6 text-3xl text-stone-900"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-3 leading-7 text-stone-600">{service.text}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-stone-900">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="quality" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.2rem] border border-stone-200 bg-gradient-to-br from-[#6f5a49] via-[#7c6653] to-[#b59678] text-white shadow-[0_25px_80px_-30px_rgba(87,71,57,0.45)]">
            <div className="grid gap-10 p-8 md:grid-cols-2 md:p-12">
              <FadeUp>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-amber-100">Quality Care</p>
                  <h2
                    className="mt-3 text-4xl sm:text-5xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    A standard of support families can trust.
                  </h2>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div className="space-y-5 text-stone-100/95">
                  <p>
                    We are committed to delivering dependable, respectful, and high-quality
                    support for every client we serve throughout the Alta California Regional
                    Center catchment area.
                  </p>
                  <p>
                    Our program focuses on individualized instruction in natural environments,
                    consistent communication, and skill-building that promotes safety,
                    confidence, autonomy, and long-term growth.
                  </p>
                  <p>
                    Every person deserves the opportunity to build autonomy, participate in
                    community life, and move toward a more independent future.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeUp>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Outcomes</p>
              <h2
                className="mt-3 text-4xl text-stone-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What meaningful progress can look like.
              </h2>
            </div>
          </FadeUp>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {outcomes.map((item, index) => (
              <FadeUp key={item.title} delay={index * 0.08}>
                <div className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-7 shadow-sm">
                  <p
                    className="text-3xl text-stone-900"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </p>
                  <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Contact</p>
              <h2
                className="mt-3 text-4xl text-stone-900 sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Let's talk about how we can help.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
                Reach out to learn more about Independent Living Skills services,
                service availability, or next steps for a client, family member, or referral partner.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-[1.5rem] border border-stone-200 bg-white/85 p-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Phone</p>
                    <p className="font-medium text-stone-900">Phone number coming soon</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-[1.5rem] border border-stone-200 bg-white/85 p-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Email</p>
                    <p className="font-medium text-stone-900">admin@radianthorizons.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-[1.5rem] border border-stone-200 bg-white/85 p-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500">Service Area</p>
                    <p className="font-medium text-stone-900">
                      Sacramento, Sutter, Placer, and El Dorado Counties
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            {(() => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/xgonlgnz", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    setSubmitted(true);
    form.reset();
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-stone-200 bg-white/90 p-10 text-center shadow-[0_20px_60px_-30px_rgba(87,71,57,0.35)]">
        <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Message Sent</p>
        <h3 className="mt-3 text-3xl text-stone-900" style={{ fontFamily: "var(--font-heading)" }}>
          Thank you.
        </h3>
        <p className="mt-3 text-stone-600">
          Your message has been sent successfully. We will respond as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-[0_20px_60px_-30px_rgba(87,71,57,0.35)] backdrop-blur">
      <div className="grid gap-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Full Name</label>
          <input name="name" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-500 focus:ring-4 focus:ring-stone-200" placeholder="Your name" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
          <input name="email" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-500 focus:ring-4 focus:ring-stone-200" placeholder="you@example.com" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Phone</label>
          <input name="phone" className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-500 focus:ring-4 focus:ring-stone-200" placeholder="(555) 555-5555" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-stone-700">Message</label>
          <textarea name="message" className="min-h-[140px] w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-500 focus:ring-4 focus:ring-stone-200" placeholder="Tell us how we can help" />
        </div>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-stone-300/40 transition hover:-translate-y-0.5">
          Send Message
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="text-xs text-stone-500 mt-2">Please do not include confidential medical or sensitive personal information in this form.</p>
      </div>
    </form>
  );
})()}
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-[#f6efe5]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-stone-600 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-white shadow-sm">
              <div className="absolute h-7 w-7 rounded-full border border-amber-200/80" />
              <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-amber-300 to-stone-400" />
            </div>
            <div>
              <p className="font-medium text-stone-900">Radiant Horizons LLC</p>
              <p>Independent Living Skills &amp; Community-Based Support</p>
            </div>
          </div>
          <p>© 2026 Radiant Horizons LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
