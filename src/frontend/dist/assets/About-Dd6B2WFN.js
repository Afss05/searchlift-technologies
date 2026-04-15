import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as MapPin, T as TrendingUp, L as Link } from "./index-CkLZWR-p.js";
import { u as useScrollAnimation } from "./useScrollAnimation-vpRpZMww.js";
import { T as Target, C as ChartNoAxesColumn } from "./target-CGsD1pPp.js";
import { D as DollarSign } from "./dollar-sign-DBYym4rQ.js";
import { U as Users } from "./users-b4NjELQ7.js";
import { A as ArrowRight } from "./arrow-right-ZEBglC_h.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv"
    }
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }]
];
const Award = createLucideIcon("award", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Eye = createLucideIcon("eye", __iconNode);
const whyChooseItems = [
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Over 500 successful campaigns delivered across industries, with measurable ROI on every engagement."
  },
  {
    icon: ChartNoAxesColumn,
    title: "Transparent Reporting",
    description: "Monthly performance reports with clear metrics — no jargon, just data you can act on."
  },
  {
    icon: DollarSign,
    title: "Affordable & Scalable",
    description: "Flexible pricing that fits startups and enterprises alike, scaling as your business grows."
  },
  {
    icon: MapPin,
    title: "Local Expertise, National Reach",
    description: "Chennai-rooted with clients across India. We understand local markets and national competition."
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description: "A single point of contact who knows your business inside out — responsive and proactive."
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Decisions",
    description: "Every strategy is backed by analytics, competitor research, and keyword intelligence."
  }
];
const team = [
  {
    name: "Rajan Kumar",
    title: "CEO & Founder",
    bio: "10+ years in digital marketing, Rajan founded SearchLift to make enterprise-grade SEO accessible to every Indian business.",
    image: "https://picsum.photos/seed/rajan/400/400"
  },
  {
    name: "Priya Sharma",
    title: "Head of SEO",
    bio: "Google-certified SEO specialist with a track record of ranking clients on Page 1 across competitive niches.",
    image: "https://picsum.photos/seed/priya/400/400"
  },
  {
    name: "Vikram Nair",
    title: "Digital Marketing Lead",
    bio: "Performance marketing expert managing multi-channel campaigns across Google Ads, Meta, and LinkedIn.",
    image: "https://picsum.photos/seed/vikram/400/400"
  },
  {
    name: "Ananya Menon",
    title: "Content Strategist",
    bio: "Crafts SEO-optimised content that ranks and converts, with a deep understanding of audience intent.",
    image: "https://picsum.photos/seed/ananya/400/400"
  }
];
const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "95%", label: "Client Retention" },
  { value: "10+", label: "Years of Experience" },
  { value: "50+", label: "Team Members" }
];
function FadeInSection({
  children,
  className = "",
  delay = 0
}) {
  const { ref, isVisible } = useScrollAnimation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`,
      style: { transitionDelay: `${delay}ms` },
      children
    }
  );
}
function About() {
  reactExports.useEffect(() => {
    document.title = "About | SearchLift Technologies";
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { "data-ocid": "about.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        "data-ocid": "about.hero.section",
        className: "relative py-20 md:py-28 overflow-hidden gradient-primary",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-6 left-10 w-20 h-20 rounded-full opacity-10 bg-white animate-pulse",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-10 right-16 w-32 h-32 rounded-2xl rotate-12 opacity-10 bg-white animate-pulse",
              style: { animationDelay: "1s" },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/2 right-1/4 w-16 h-16 opacity-10 bg-white rotate-45 animate-pulse",
              style: { animationDelay: "0.5s" },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-4xl mx-auto px-6 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4", children: "About SearchLift Technologies" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/80 font-medium", children: "Helping businesses grow online since 2014" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.overview.section",
        className: "py-20 bg-background",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeInSection, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-3 block", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground mb-6", children: "Who We Are" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "SearchLift Technologies is a Chennai-based digital marketing agency founded in 2014 with a single purpose: to help small and medium businesses compete and win online. What started as a two-person SEO consultancy has grown into a full-service digital marketing powerhouse." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We specialise in Search Engine Optimisation, performance digital marketing, and website development — an end-to-end stack that means your online presence is built, optimised, and grown under one roof." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our results-driven approach means every rupee you invest is tracked, measured, and tied to business outcomes — whether that's leads, revenue, or brand visibility. We don't just promise rankings; we deliver growth." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "With a team of 50+ experienced digital marketing professionals, strategists, developers, and content creators, we bring enterprise-grade expertise to businesses of every size — from local restaurants to fast-growing startups." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 150, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "glass rounded-2xl p-6 text-center hover-lift",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-extrabold text-gradient mb-1", children: stat.value }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground font-medium", children: stat.label })
              ]
            },
            stat.label
          )) }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "about.mission.section", className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-2 block", children: "What Drives Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: "Mission & Vision" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-8 hover-lift h-full border border-primary/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-7 h-7 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-3", children: "Our Mission" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gradient mb-4", children: "Help businesses grow online" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We exist to democratise digital success. By combining cutting-edge SEO techniques, data-led marketing strategy, and purpose-built websites, we empower businesses — regardless of size — to compete for attention in an increasingly digital marketplace. Every campaign we run, every keyword we target, every page we build is in service of your growth." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-8 hover-lift h-full border border-primary/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-7 h-7 text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-foreground mb-3", children: "Our Vision" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-semibold text-gradient mb-4", children: "Become the leading SEO agency in India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "By 2030, we aim to be the most trusted name in digital growth for Indian businesses — a partner that 1,000+ companies rely on to drive their online revenue. We're building towards that by investing in our team, our technology, and the long-term success of every client we serve. India's digital economy is expanding rapidly — we intend to lead that expansion." })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "about.why.section", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-2 block", children: "Our Difference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: "Why Businesses Trust SearchLift" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: whyChooseItems.map((item, i) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: i * 80, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `about.why.item.${i + 1}`,
            className: "bg-card rounded-2xl p-7 border border-border hover-lift h-full",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-white", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: item.description })
            ]
          }
        ) }, item.title);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "about.team.section", className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold uppercase tracking-widest text-primary mb-2 block", children: "The People Behind SearchLift" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: "Meet Our Team" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-7", children: team.map((member, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { delay: i * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          "data-ocid": `about.team.item.${i + 1}`,
          className: "glass rounded-2xl overflow-hidden hover-lift",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: member.image,
                alt: `${member.name} — ${member.title}`,
                className: "w-full h-full object-cover transition-transform duration-500 hover:scale-105",
                loading: "lazy"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-lg leading-tight", children: member.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-primary mb-2", children: member.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: member.bio })
            ] })
          ]
        }
      ) }, member.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        "data-ocid": "about.stats.section",
        className: "py-14 gradient-primary",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-extrabold mb-1", children: stat.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/75 text-sm font-medium uppercase tracking-wide", children: stat.label })
        ] }, stat.label)) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { "data-ocid": "about.cta.section", className: "py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeInSection, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold text-foreground mb-4", children: "Ready to grow your business?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg mb-8", children: "Let's build your digital success story together. Start with a free SEO audit — no strings attached." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "about.cta.primary_button",
          className: "inline-flex items-center gap-2 gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover-lift shadow-elevated transition-smooth",
          children: [
            "Get Your Free SEO Audit",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5", "aria-hidden": "true" })
          ]
        }
      )
    ] }) }) })
  ] });
}
export {
  About as default
};
