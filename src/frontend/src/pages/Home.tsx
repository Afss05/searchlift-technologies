import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart2,
  ChevronRight,
  DollarSign,
  Lightbulb,
  LineChart,
  MapPin,
  Megaphone,
  Monitor,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Store,
  Target,
  TrendingUp,
  Utensils,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Animated Counter ────────────────────────────────────────────────────────
function useCounter(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.round(eased * target));
      if (progress < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [target, duration, trigger]);

  return count;
}

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  trigger: boolean;
}

function StatItem({ value, suffix, label, trigger }: StatProps) {
  const count = useCounter(value, 1800, trigger);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-blue-100 text-sm md:text-base font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}

// ─── Hero floating shapes ─────────────────────────────────────────────────────
function FloatingShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Large blurred orbs */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: 420,
          height: 420,
          background: "radial-gradient(circle, #1E90FF 0%, transparent 70%)",
          top: "-10%",
          right: "5%",
          animation: "floatOrb1 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full opacity-15"
        style={{
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #20417B 0%, transparent 70%)",
          bottom: "5%",
          left: "2%",
          animation: "floatOrb2 18s ease-in-out infinite",
        }}
      />

      {/* Geometric shapes */}
      <div
        className="absolute opacity-30"
        style={{
          width: 80,
          height: 80,
          border: "2px solid rgba(255,255,255,0.5)",
          borderRadius: 6,
          top: "18%",
          left: "8%",
          animation: "spinSlow 20s linear infinite",
          transform: "rotate(25deg)",
        }}
      />
      <div
        className="absolute opacity-25"
        style={{
          width: 52,
          height: 52,
          border: "2px solid rgba(255,255,255,0.45)",
          borderRadius: "50%",
          top: "60%",
          left: "15%",
          animation: "floatOrb2 12s ease-in-out infinite",
        }}
      />
      <div
        className="absolute opacity-20"
        style={{
          width: 90,
          height: 90,
          border: "2px solid rgba(255,255,255,0.4)",
          borderRadius: 8,
          top: "12%",
          right: "18%",
          animation: "spinSlow 25s linear infinite reverse",
          transform: "rotate(-15deg)",
        }}
      />
      <div
        className="absolute opacity-30"
        style={{
          width: 0,
          height: 0,
          borderLeft: "32px solid transparent",
          borderRight: "32px solid transparent",
          borderBottom: "56px solid rgba(255,255,255,0.18)",
          top: "72%",
          right: "10%",
          animation: "floatOrb1 16s ease-in-out infinite",
        }}
      />
      <div
        className="absolute opacity-25"
        style={{
          width: 60,
          height: 60,
          background: "rgba(255,255,255,0.12)",
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          bottom: "20%",
          right: "22%",
          animation: "floatOrb2 22s ease-in-out infinite",
        }}
      />
      <div
        className="absolute opacity-20"
        style={{
          width: 40,
          height: 40,
          border: "2px solid rgba(255,255,255,0.5)",
          borderRadius: 4,
          top: "45%",
          right: "6%",
          animation: "spinSlow 18s linear infinite",
        }}
      />
    </div>
  );
}

// ─── Services data ────────────────────────────────────────────────────────────
const services = [
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Dominate search rankings with comprehensive on-page, off-page, and technical SEO strategies tailored to your industry. We boost organic traffic that converts.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Full-funnel digital campaigns across Google Ads, social media, and content channels. Drive qualified leads and maximize your marketing ROI.",
  },
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Fast, mobile-first websites built for SEO and conversions. Clean code, stunning design, and seamless user experience that turns visitors into customers.",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description:
      "Own your local market with Google Business optimization, map pack rankings, and local citation building. Get found by customers near you.",
  },
];

// ─── Why Choose Us data ────────────────────────────────────────────────────────
const whyChoose = [
  {
    icon: Target,
    title: "Result-Driven Strategies",
    description:
      "Every campaign is built around measurable KPIs. We focus on metrics that actually grow your bottom line.",
  },
  {
    icon: BarChart2,
    title: "Transparent Reporting",
    description:
      "Real-time dashboards and monthly reports keep you fully informed on performance, spend, and growth.",
  },
  {
    icon: DollarSign,
    title: "Affordable Solutions",
    description:
      "Enterprise-grade digital marketing tailored for SMB budgets. More value, zero compromise on quality.",
  },
  {
    icon: Settings,
    title: "Custom Plans",
    description:
      "No cookie-cutter packages. Every strategy is built from scratch to fit your unique business goals.",
  },
];

// ─── Process data ─────────────────────────────────────────────────────────────
const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Business Analysis",
    description:
      "We deep-dive into your market, competitors, and current digital presence to uncover opportunities.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Planning",
    description:
      "A custom roadmap is crafted with clear milestones, timelines, and ROI projections.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementation",
    description:
      "Our expert team executes every element with precision — from content to technical fixes.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Monitoring & Growth",
    description:
      "Continuous optimization, A/B testing, and reporting ensure sustained upward growth.",
  },
];

// ─── Industries data ──────────────────────────────────────────────────────────
const industries = [
  {
    icon: Utensils,
    title: "Restaurants",
    description:
      "Drive foot traffic and online orders with local SEO and social media presence.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description:
      "Capture nearby customers searching for your services at the right moment.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Boost product visibility, reduce cart abandonment, and scale revenue online.",
  },
  {
    icon: Zap,
    title: "Startups",
    description:
      "Build brand awareness fast with growth-hacked digital strategies on lean budgets.",
  },
];

// ─── Stats data ────────────────────────────────────────────────────────────────
const stats = [
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 95, suffix: "%", label: "Retention Rate" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Projects Delivered" },
];

// ─── Section wrapper with scroll animation ────────────────────────────────────
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  "data-ocid"?: string;
}

function AnimatedSection({
  children,
  className = "",
  id,
  style,
  "data-ocid": dataOcid,
}: SectionProps) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={style}
      data-ocid={dataOcid}
    >
      {children}
    </section>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    document.title = "Home | SearchLift Technologies";
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const statsObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0]?.isIntersecting) setStatsVisible(true);
    },
    [],
  );

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(statsObserverCallback, {
      threshold: 0.3,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [statsObserverCallback]);

  return (
    <>
      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-30px) translateX(20px); }
          66% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(25px) translateX(-20px); }
          66% { transform: translateY(-18px) translateX(12px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-animate {
          animation: fadeInUp 0.8s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        .hero-animate-delay-1 { animation-delay: 0.15s; opacity: 0; }
        .hero-animate-delay-2 { animation-delay: 0.30s; opacity: 0; }
        .hero-animate-delay-3 { animation-delay: 0.45s; opacity: 0; }
        .connector-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #20417B, #1E90FF);
          opacity: 0.35;
          min-width: 20px;
        }
      `}</style>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1f45 0%, #20417B 40%, #1560bd 70%, #1E90FF 100%)",
        }}
        data-ocid="hero.section"
      >
        <FloatingShapes />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {heroVisible && (
            <>
              <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
                <span className="text-blue-100 text-sm font-medium">
                  Chennai's Premier Digital Marketing Agency
                </span>
              </div>

              <h1 className="hero-animate hero-animate-delay-2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                Grow Your Business with{" "}
                <span style={{ color: "#7dd3fc" }}>Powerful SEO</span> & Digital
                Marketing
              </h1>

              <p className="hero-animate hero-animate-delay-2 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                SearchLift Technologies helps businesses increase visibility,
                attract customers, and grow online — with data-driven strategies
                that deliver real results.
              </p>

              <div className="hero-animate hero-animate-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: "linear-gradient(135deg, #1E90FF, #20417B)",
                    color: "#fff",
                    boxShadow: "0 8px 32px rgba(30,144,255,0.4)",
                  }}
                  data-ocid="hero.primary_button"
                >
                  Get Free SEO Audit
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                  data-ocid="hero.secondary_button"
                >
                  Contact Us
                  <ChevronRight size={18} />
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            role="presentation"
          >
            <path
              d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 0 0 40L0 80Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ── ABOUT PREVIEW ─────────────────────────────────────────────────── */}
      <AnimatedSection
        className="py-20 px-6 bg-background"
        id="about-preview"
        data-ocid="about_preview.section"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              About SearchLift
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 leading-tight">
              Chennai's Results-Driven{" "}
              <span className="text-gradient">Digital Growth</span> Partner
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              Founded in Chennai, Tamil Nadu, SearchLift Technologies was built
              with a single mission: help small and medium businesses compete
              and win online. We combine deep SEO expertise with full-service
              digital marketing to deliver measurable growth.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              From local restaurants to fast-growing e-commerce stores, we've
              helped 500+ clients across India increase their organic traffic,
              generate quality leads, and build lasting brand presence — without
              breaking the bank.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all duration-200"
              data-ocid="about_preview.link"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Organic Traffic Growth", value: "3.2x avg" },
              { label: "Lead Generation", value: "Proven" },
              { label: "Google Ranking", value: "Top 3" },
              { label: "Client Satisfaction", value: "4.9 / 5" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-2xl p-6 text-center hover-lift"
              >
                <div className="text-2xl font-extrabold text-gradient mb-1">
                  {item.value}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── SERVICES PREVIEW ──────────────────────────────────────────────── */}
      <AnimatedSection
        className="py-20 px-6"
        style={{ background: "oklch(0.97 0.01 240)" }}
        data-ocid="services.section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              End-to-end digital marketing solutions designed to accelerate your
              growth at every stage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description }, i) => (
              <Link
                key={title}
                to="/services"
                className="group block rounded-2xl p-6 bg-card border border-border hover-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                data-ocid={`services.item.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, #20417B, #1E90FF)",
                  }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-white"
              style={{
                background: "linear-gradient(135deg, #20417B, #1E90FF)",
              }}
              data-ocid="services.view_all_button"
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* ── STATISTICS ────────────────────────────────────────────────────── */}
      <div
        ref={statsRef}
        className="py-20 px-6"
        style={{
          background:
            "linear-gradient(135deg, #0f1f45 0%, #20417B 50%, #1E90FF 100%)",
        }}
        data-ocid="stats.section"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map(({ value, suffix, label }) => (
            <StatItem
              key={label}
              value={value}
              suffix={suffix}
              label={label}
              trigger={statsVisible}
            />
          ))}
        </div>
      </div>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <AnimatedSection
        className="py-20 px-6 bg-background"
        data-ocid="why_choose.section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Our Edge
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Why Choose <span className="text-gradient">SearchLift?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              We don't just run campaigns — we build growth engines that work
              harder every month.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-2xl p-6 border border-border bg-card hover-lift group"
                data-ocid={`why_choose.item.${i + 1}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #20417B22, #1E90FF33)",
                  }}
                >
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm">
                  {title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <AnimatedSection
        className="py-20 px-6"
        style={{ background: "oklch(0.97 0.01 240)" }}
        data-ocid="process.section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Our Proven <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              A structured, transparent 4-step approach that consistently
              delivers exceptional outcomes.
            </p>
          </div>

          {/* Desktop: horizontal connected steps */}
          <div className="hidden md:flex items-start gap-0">
            {processSteps.map(
              ({ number, icon: Icon, title, description }, i) => (
                <div key={title} className="flex items-start flex-1 min-w-0">
                  <div className="flex flex-col items-center flex-1 min-w-0">
                    {/* Icon + connector row */}
                    <div className="flex items-center w-full mb-5">
                      <div
                        className="relative flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          background:
                            "linear-gradient(135deg, #20417B, #1E90FF)",
                        }}
                      >
                        <Icon size={24} className="text-white" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-black text-primary">
                          {i + 1}
                        </span>
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="connector-line mx-2" />
                      )}
                    </div>
                    <div className="w-full pr-4">
                      <div className="text-xs font-bold text-primary mb-1">
                        {number}
                      </div>
                      <h3 className="font-bold text-foreground mb-1 text-sm">
                        {title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Mobile: vertical */}
          <div className="md:hidden flex flex-col gap-6">
            {processSteps.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="flex gap-4 items-start"
                data-ocid={`process.item.${i + 1}`}
              >
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, #20417B, #1E90FF)",
                  }}
                >
                  <Icon size={20} className="text-white" />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xs font-black text-primary">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── INDUSTRIES ────────────────────────────────────────────────────── */}
      <AnimatedSection
        className="py-20 px-6 bg-background"
        data-ocid="industries.section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Who We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              From brick-and-mortar shops to digital-native startups, we grow
              businesses across sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="group rounded-2xl p-6 border border-border bg-card hover-lift text-center"
                data-ocid={`industries.item.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: "linear-gradient(135deg, #20417B15, #1E90FF25)",
                  }}
                >
                  <Icon size={26} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <AnimatedSection className="py-20 px-6" data-ocid="cta.section">
        <div
          className="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #0f1f45 0%, #20417B 50%, #1E90FF 100%)",
            boxShadow: "0 24px 64px rgba(30, 144, 255, 0.3)",
          }}
        >
          {/* Background shapes */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #fff 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #fff 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
            aria-hidden="true"
          />

          <h2 className="relative text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
            Ready to Grow Your Business Online?
          </h2>
          <p className="relative text-blue-100 text-lg mb-10 max-w-xl mx-auto">
            Get your <strong className="text-white">FREE SEO Audit</strong>{" "}
            today and discover your growth potential — no strings attached.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            style={{
              background: "#fff",
              color: "#20417B",
              boxShadow: "0 8px 24px rgba(255,255,255,0.2)",
            }}
            data-ocid="cta.primary_button"
          >
            Get FREE SEO Audit
            <ArrowRight size={18} />
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
