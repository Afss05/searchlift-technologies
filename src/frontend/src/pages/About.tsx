import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BarChart2,
  DollarSign,
  Eye,
  MapPin,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useEffect } from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const whyChooseItems = [
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Over 500 successful campaigns delivered across industries, with measurable ROI on every engagement.",
  },
  {
    icon: BarChart2,
    title: "Transparent Reporting",
    description:
      "Monthly performance reports with clear metrics — no jargon, just data you can act on.",
  },
  {
    icon: DollarSign,
    title: "Affordable & Scalable",
    description:
      "Flexible pricing that fits startups and enterprises alike, scaling as your business grows.",
  },
  {
    icon: MapPin,
    title: "Local Expertise, National Reach",
    description:
      "Chennai-rooted with clients across India. We understand local markets and national competition.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description:
      "A single point of contact who knows your business inside out — responsive and proactive.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description:
      "Every strategy is backed by analytics, competitor research, and keyword intelligence.",
  },
];

const team = [
  {
    name: "Rajan Kumar",
    title: "CEO & Founder",
    bio: "10+ years in digital marketing, Rajan founded SearchLift to make enterprise-grade SEO accessible to every Indian business.",
    image: "https://picsum.photos/seed/rajan/400/400",
  },
  {
    name: "Priya Sharma",
    title: "Head of SEO",
    bio: "Google-certified SEO specialist with a track record of ranking clients on Page 1 across competitive niches.",
    image: "https://picsum.photos/seed/priya/400/400",
  },
  {
    name: "Vikram Nair",
    title: "Digital Marketing Lead",
    bio: "Performance marketing expert managing multi-channel campaigns across Google Ads, Meta, and LinkedIn.",
    image: "https://picsum.photos/seed/vikram/400/400",
  },
  {
    name: "Ananya Menon",
    title: "Content Strategist",
    bio: "Crafts SEO-optimised content that ranks and converts, with a deep understanding of audience intent.",
    image: "https://picsum.photos/seed/ananya/400/400",
  },
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Team Members" },
];

// ─── Section Wrappers ────────────────────────────────────────────────────────

function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function About() {
  useEffect(() => {
    document.title = "About | SearchLift Technologies";
  }, []);

  return (
    <main data-ocid="about.page">
      {/* ── 1. Hero Banner ─────────────────────────────────────────── */}
      <section
        data-ocid="about.hero.section"
        className="relative py-20 md:py-28 overflow-hidden gradient-primary"
      >
        {/* Decorative shapes */}
        <div
          className="absolute top-6 left-10 w-20 h-20 rounded-full opacity-10 bg-white animate-pulse"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-10 right-16 w-32 h-32 rounded-2xl rotate-12 opacity-10 bg-white animate-pulse"
          style={{ animationDelay: "1s" }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 opacity-10 bg-white rotate-45 animate-pulse"
          style={{ animationDelay: "0.5s" }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            About SearchLift Technologies
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-medium">
            Helping businesses grow online since 2014
          </p>
        </div>
      </section>

      {/* ── 2. Company Overview ────────────────────────────────────── */}
      <section
        data-ocid="about.overview.section"
        className="py-20 bg-background"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <FadeInSection>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SearchLift Technologies is a Chennai-based digital marketing
                agency founded in 2014 with a single purpose: to help small and
                medium businesses compete and win online. What started as a
                two-person SEO consultancy has grown into a full-service digital
                marketing powerhouse.
              </p>
              <p>
                We specialise in Search Engine Optimisation, performance digital
                marketing, and website development — an end-to-end stack that
                means your online presence is built, optimised, and grown under
                one roof.
              </p>
              <p>
                Our results-driven approach means every rupee you invest is
                tracked, measured, and tied to business outcomes — whether
                that's leads, revenue, or brand visibility. We don't just
                promise rankings; we deliver growth.
              </p>
              <p>
                With a team of 50+ experienced digital marketing professionals,
                strategists, developers, and content creators, we bring
                enterprise-grade expertise to businesses of every size — from
                local restaurants to fast-growing startups.
              </p>
            </div>
          </FadeInSection>

          {/* Stat badges */}
          <FadeInSection delay={150}>
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-6 text-center hover-lift"
                >
                  <p className="text-3xl font-extrabold text-gradient mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── 3. Mission & Vision ────────────────────────────────────── */}
      <section data-ocid="about.mission.section" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Mission &amp; Vision
              </h2>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <FadeInSection delay={100}>
              <div className="glass rounded-2xl p-8 hover-lift h-full border border-primary/10">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-md">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-lg font-semibold text-gradient mb-4">
                  Help businesses grow online
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We exist to democratise digital success. By combining
                  cutting-edge SEO techniques, data-led marketing strategy, and
                  purpose-built websites, we empower businesses — regardless of
                  size — to compete for attention in an increasingly digital
                  marketplace. Every campaign we run, every keyword we target,
                  every page we build is in service of your growth.
                </p>
              </div>
            </FadeInSection>

            {/* Vision */}
            <FadeInSection delay={200}>
              <div className="glass rounded-2xl p-8 hover-lift h-full border border-primary/10">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-md">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-lg font-semibold text-gradient mb-4">
                  Become the leading SEO agency in India
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By 2030, we aim to be the most trusted name in digital growth
                  for Indian businesses — a partner that 1,000+ companies rely
                  on to drive their online revenue. We're building towards that
                  by investing in our team, our technology, and the long-term
                  success of every client we serve. India's digital economy is
                  expanding rapidly — we intend to lead that expansion.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── 4. Why Choose Us ───────────────────────────────────────── */}
      <section data-ocid="about.why.section" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">
                Our Difference
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why Businesses Trust SearchLift
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeInSection key={item.title} delay={i * 80}>
                  <div
                    data-ocid={`about.why.item.${i + 1}`}
                    className="bg-card rounded-2xl p-7 border border-border hover-lift h-full"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. Team Section ────────────────────────────────────────── */}
      <section data-ocid="about.team.section" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2 block">
                The People Behind SearchLift
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Meet Our Team
              </h2>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {team.map((member, i) => (
              <FadeInSection key={member.name} delay={i * 100}>
                <div
                  data-ocid={`about.team.item.${i + 1}`}
                  className="glass rounded-2xl overflow-hidden hover-lift"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name} — ${member.title}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-foreground text-lg leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">
                      {member.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Stats Bar ───────────────────────────────────────────── */}
      <section
        data-ocid="about.stats.section"
        className="py-14 gradient-primary"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="text-white">
                <p className="text-4xl font-extrabold mb-1">{stat.value}</p>
                <p className="text-white/75 text-sm font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA Section ─────────────────────────────────────────── */}
      <section data-ocid="about.cta.section" className="py-20 bg-background">
        <FadeInSection>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to grow your business?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's build your digital success story together. Start with a free
              SEO audit — no strings attached.
            </p>
            <Link
              to="/contact"
              data-ocid="about.cta.primary_button"
              className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover-lift shadow-elevated transition-smooth"
            >
              Get Your Free SEO Audit
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </FadeInSection>
      </section>
    </main>
  );
}
