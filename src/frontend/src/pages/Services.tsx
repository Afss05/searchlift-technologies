import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  Facebook,
  FileText,
  Globe,
  Image,
  Instagram,
  Linkedin,
  MapPin,
  Megaphone,
  Monitor,
  Search,
  Settings,
  Share2,
  Shield,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ── Sub-components ─────────────────────────────────────────────────────────────
function SectionHeader({
  icon,
  title,
  subtitle,
  light = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
          light ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
        }`}
      >
        {icon}
      </div>
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-gradient"
        }`}
      >
        {title}
      </h2>
      <p
        className={`text-lg max-w-2xl mx-auto ${
          light ? "text-blue-100" : "text-muted-foreground"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}

function GlassCard({ icon, title, description }: ServiceCard) {
  return (
    <div
      className="glass rounded-2xl p-6 hover-lift cursor-default"
      data-ocid="services.card"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </section>
  );
}

// ── Data ───────────────────────────────────────────────────────────────────────
const seoCards: ServiceCard[] = [
  {
    icon: <Search size={22} />,
    title: "Keyword Research",
    description:
      "We conduct in-depth research to identify high-converting, low-competition keywords that your target audience actively searches for. Our data-driven approach ensures every optimization effort drives meaningful traffic.",
  },
  {
    icon: <FileText size={22} />,
    title: "On-Page SEO",
    description:
      "From meta titles and descriptions to header hierarchies and internal linking, we optimize every on-page element for maximum relevance. Structured content ensures both users and search engines understand your pages.",
  },
  {
    icon: <Settings size={22} />,
    title: "Technical SEO",
    description:
      "We audit and fix crawlability issues, improve Core Web Vitals, implement schema markup, and optimize site architecture. A technically sound site is the foundation of sustainable search rankings.",
  },
  {
    icon: <ExternalLink size={22} />,
    title: "Link Building",
    description:
      "We acquire high-authority, contextually relevant backlinks through ethical outreach and content partnerships. Building domain authority systematically is key to long-term ranking success.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Local SEO",
    description:
      "We optimize your online presence for location-based searches, helping your business appear in the local pack and Google Maps results. Perfect for businesses serving specific geographic areas.",
  },
];

const digitalMarketingCards: ServiceCard[] = [
  {
    icon: <Share2 size={22} />,
    title: "Social Media Marketing",
    description:
      "We build and manage your brand presence across Facebook, Instagram, LinkedIn, and more. Engaging content strategies increase reach, drive followers, and turn audiences into loyal customers.",
  },
  {
    icon: <Target size={22} />,
    title: "Google Ads (PPC)",
    description:
      "Our certified Google Ads specialists craft targeted pay-per-click campaigns that deliver instant, measurable results. We maximize your budget efficiency to achieve the lowest cost-per-acquisition.",
  },
  {
    icon: <FileText size={22} />,
    title: "Content Marketing",
    description:
      "High-quality blog posts, infographics, and videos that educate your audience and naturally attract organic traffic. Consistent, valuable content establishes your brand as an industry authority.",
  },
  {
    icon: <Megaphone size={22} />,
    title: "Brand Promotion",
    description:
      "We craft a consistent brand narrative across all digital channels — from visuals to voice. Cohesive messaging builds trust, recognition, and a strong competitive positioning in your market.",
  },
];

const webDevCards: ServiceCard[] = [
  {
    icon: <Monitor size={22} />,
    title: "Mobile Responsive",
    description:
      "Every site we build adapts flawlessly across smartphones, tablets, and desktops. Mobile-first design ensures your visitors get a premium experience on any device.",
  },
  {
    icon: <Zap size={22} />,
    title: "Fast Loading",
    description:
      "We obsess over Core Web Vitals — LCP, FID, and CLS. Optimized assets, lazy loading, and efficient code mean your site loads in under 2 seconds for maximum conversions.",
  },
  {
    icon: <Search size={22} />,
    title: "SEO Optimized",
    description:
      "Built from the ground up with clean semantic HTML, structured data, and performance in mind. Your new website is primed to rank from day one without additional optimization.",
  },
  {
    icon: <Shield size={22} />,
    title: "Secure Hosting",
    description:
      "SSL certificates, security hardening, malware monitoring, and automated backups protect your business online. We ensure your site stays fast, safe, and available 24/7.",
  },
];

const localSeoItems = [
  {
    title: "Google Business Profile Optimization",
    description:
      "We fully optimize your GBP listing — accurate NAP data, rich photos, service categories, posts, and Q&A — to maximize your local visibility and drive more calls and directions.",
  },
  {
    title: "Map Pack / Local Pack Ranking",
    description:
      "We implement proven strategies to get your business into the coveted 3-pack on Google Maps. Consistent signals, review management, and proximity optimization drive map rankings.",
  },
  {
    title: "Local Citations & Directory Listings",
    description:
      "We build and clean up citations across 50+ top directories — Justdial, Sulekha, IndiaMART, and more — ensuring consistent NAP data that boosts local search authority.",
  },
];

const socialPlatforms = [
  { icon: <Facebook size={20} />, name: "Facebook" },
  { icon: <Instagram size={20} />, name: "Instagram" },
  { icon: <Linkedin size={20} />, name: "LinkedIn" },
  { icon: <Youtube size={20} />, name: "YouTube" },
  { icon: <Twitter size={20} />, name: "X (Twitter)" },
];

const socialServices: ServiceCard[] = [
  {
    icon: <Image size={22} />,
    title: "Content Creation",
    description:
      "Custom-designed graphics, short-form videos, reels, and compelling copy crafted for each platform's unique audience and algorithm requirements.",
  },
  {
    icon: <CalendarCheck size={22} />,
    title: "Scheduling & Posting",
    description:
      "Strategic posting schedules based on audience peak hours ensure maximum reach and engagement. We maintain consistency so you never miss a beat.",
  },
  {
    icon: <Users size={22} />,
    title: "Community Engagement",
    description:
      "Timely responses to comments, DMs, and mentions build genuine relationships with your followers. Active engagement signals boost organic algorithmic reach.",
  },
  {
    icon: <BarChart2 size={22} />,
    title: "Analytics & Reporting",
    description:
      "Monthly performance reports with key metrics — reach, engagement, follower growth, and conversions — so you always know the ROI of your social investment.",
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────
export default function Services() {
  useEffect(() => {
    document.title = "Services | SearchLift Technologies";
  }, []);

  return (
    <div className="min-h-screen" data-ocid="services.page">
      {/* ── Hero Banner ── */}
      <div className="relative gradient-primary overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[8%] w-20 h-20 rounded-full bg-white/5 animate-float-slow" />
          <div className="absolute bottom-8 right-[12%] w-32 h-32 rounded-full bg-white/5 animate-float-medium" />
          <div className="absolute top-1/2 left-[60%] w-14 h-14 rotate-45 bg-white/5 animate-float-fast" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-sm font-semibold text-blue-200 uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions tailored for your growth —
            from search rankings to social media domination.
          </p>
        </div>
      </div>

      {/* ── SEO Services ── */}
      <div
        className="bg-background py-20 px-6"
        data-ocid="services.seo.section"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              icon={<Search size={26} />}
              title="SEO Services"
              subtitle="Rank higher, attract more qualified visitors, and grow your organic revenue with battle-tested search engine optimization strategies."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoCards.map((card) => (
                <GlassCard key={card.title} {...card} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── Digital Marketing ── */}
      <div
        className="bg-muted/40 py-20 px-6"
        data-ocid="services.digital-marketing.section"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              icon={<Megaphone size={26} />}
              title="Digital Marketing"
              subtitle="Reach your audience at every touchpoint — paid, organic, and social — with integrated campaigns that deliver measurable ROI."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {digitalMarketingCards.map((card) => (
                <GlassCard key={card.title} {...card} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── Website Development ── */}
      <div
        className="bg-background py-20 px-6"
        data-ocid="services.web-dev.section"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              icon={<Monitor size={26} />}
              title="Website Development"
              subtitle="High-performance, beautifully designed websites that convert visitors into customers. Built with SEO baked in from day one."
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {webDevCards.map((card) => (
                <GlassCard key={card.title} {...card} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── Local SEO ── */}
      <div
        className="bg-muted/40 py-20 px-6"
        data-ocid="services.local-seo.section"
      >
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              icon={<MapPin size={26} />}
              title="Local SEO"
              subtitle="Own your local market. We help Chennai businesses dominate local search results and drive foot traffic from nearby customers."
            />
            <div className="flex flex-col gap-5">
              {localSeoItems.map((item, i) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-6 flex gap-5 items-start hover-lift"
                  data-ocid={`services.local-seo.item.${i + 1}`}
                >
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── Social Media Handling ── */}
      <div
        className="bg-background py-20 px-6"
        data-ocid="services.social-media.section"
      >
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <SectionHeader
              icon={<Share2 size={26} />}
              title="Social Media Management"
              subtitle="End-to-end social media management across all major platforms. We grow your audience, nurture engagement, and report real results."
            />

            {/* Platform badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {socialPlatforms.map((p) => (
                <div
                  key={p.name}
                  className="glass flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-foreground hover-lift cursor-default"
                  data-ocid={`services.platform.${p.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                >
                  <span className="text-primary">{p.icon}</span>
                  {p.name}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {socialServices.map((card) => (
                <GlassCard key={card.title} {...card} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ── CTA Section ── */}
      <div
        className="gradient-primary py-20 px-6"
        data-ocid="services.cta.section"
      >
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 text-white mb-6">
              <TrendingUp size={26} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Let's build a custom digital marketing strategy that drives real
              results for your business. Get your free SEO audit today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3.5 rounded-2xl hover:bg-blue-50 transition-smooth shadow-elevated"
                data-ocid="services.cta.primary_button"
              >
                Get Free SEO Audit
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-8 py-3.5 rounded-2xl hover:bg-white/10 transition-smooth"
                data-ocid="services.cta.secondary_button"
              >
                About Us
                <Globe size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
