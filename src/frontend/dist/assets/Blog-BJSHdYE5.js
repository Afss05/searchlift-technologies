import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-CkLZWR-p.js";
import { b as blogPosts, U as User, C as Calendar } from "./blogData-BA0daQsB.js";
import { u as useScrollAnimation } from "./useScrollAnimation-vpRpZMww.js";
import { A as ArrowRight } from "./arrow-right-ZEBglC_h.js";
import { C as Clock } from "./clock-3Dt6KLfP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode);
function SkeletonCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl overflow-hidden border border-border bg-card animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-52 bg-muted" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-24 bg-muted rounded-full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-full bg-muted rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-3/4 bg-muted rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-muted rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-2/3 bg-muted rounded" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-28 bg-muted rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-20 bg-muted rounded" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-32 bg-muted rounded-lg mt-2" })
    ] })
  ] });
}
function BlogCard({ post, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      ref,
      "data-ocid": `blog.item.${index + 1}`,
      className: `rounded-xl overflow-hidden border border-border bg-card shadow-sm
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
        transition-all duration-300 flex flex-col group
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
      style: { transitionDelay: `${index * 80}ms` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-52 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.image,
              alt: post.title,
              className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-sm", children: post.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 12 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.author })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: post.readTime })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog/$slug",
              params: { slug: post.slug },
              "data-ocid": `blog.read_more.${index + 1}`,
              className: "inline-flex items-center gap-2 text-sm font-semibold text-primary\n            hover:gap-3 transition-all duration-200 group/btn",
              children: [
                "Read More",
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ArrowRight,
                  {
                    size: 14,
                    className: "transition-transform duration-200 group-hover/btn:translate-x-1"
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Blog() {
  const [loading, setLoading] = reactExports.useState(true);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0
  });
  reactExports.useEffect(() => {
    document.title = "Blog | SearchLift Technologies";
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden py-24 md:py-32",
        style: {
          background: "linear-gradient(135deg, #20417B 0%, #1E6FCC 60%, #1E90FF 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: heroRef,
              className: `relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-700
            ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 13 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Expert Insights & Guides" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight", children: "Digital Marketing Blog" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-white/80 max-w-xl mx-auto", children: "Actionable strategies, expert insights, and the latest trends in SEO, paid advertising, and digital growth." })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-foreground", children: "Latest Articles" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1 text-sm", children: [
          blogPosts.length,
          " articles published"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "blog.list",
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
          children: loading ? ["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonCard, {}, k)) : blogPosts.map((post, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(BlogCard, { post, index }, post.id))
        }
      )
    ] }),
    !loading && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-16 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-foreground mb-3", children: "Want Results Like These?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-base", children: "Let SearchLift Technologies craft a digital strategy tailored to your business goals." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "blog.cta_button",
          className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg\n                hover:-translate-y-1 hover:shadow-xl transition-all duration-300",
          style: {
            background: "linear-gradient(135deg, #20417B, #1E90FF)"
          },
          children: [
            "Get Free SEO Audit",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
          ]
        }
      )
    ] }) })
  ] });
}
export {
  Blog as default
};
