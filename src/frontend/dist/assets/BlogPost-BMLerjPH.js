import { c as createLucideIcon, u as useParams, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-CkLZWR-p.js";
import { g as getBlogPost, a as getRelatedPosts, C as Calendar, U as User } from "./blogData-BA0daQsB.js";
import { u as useScrollAnimation } from "./useScrollAnimation-vpRpZMww.js";
import { C as Clock } from "./clock-3Dt6KLfP.js";
import { A as ArrowRight } from "./arrow-right-ZEBglC_h.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
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
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
function PostContent({ html }) {
  const lines = reactExports.useMemo(
    () => html.split(/\n+/).map((l) => l.trim()).filter(Boolean),
    [html]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: lines.map((line, i) => {
    const key = `line-${i}`;
    const text = line.replace(/<strong>(.*?)<\/strong>/g, "$1").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    if (line.startsWith("<h2>"))
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h2",
        {
          className: "text-xl font-bold text-foreground mt-8 mb-3",
          children: text.replace(/<\/?h2>/g, "")
        },
        key
      );
    if (line.startsWith("<li>"))
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "li",
        {
          className: "ml-5 list-disc text-muted-foreground text-base leading-relaxed mb-1",
          children: text.replace(/<\/?li>/g, "")
        },
        key
      );
    if (line.startsWith("<p>"))
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-muted-foreground text-base leading-relaxed mb-4",
          children: text.replace(/<\/?p>/g, "")
        },
        key
      );
    return null;
  }) });
}
function RelatedCard({ post, index }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "article",
    {
      ref,
      "data-ocid": `blog_post.related.item.${index + 1}`,
      className: `rounded-xl overflow-hidden border border-border bg-card shadow-sm
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
        transition-all duration-300 flex flex-col group
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
      style: { transitionDelay: `${index * 80}ms` },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 overflow-hidden", children: [
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground", children: post.category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground line-clamp-2 flex-1 mb-4", children: post.excerpt }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs text-muted-foreground mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 11 }),
              post.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              post.readTime
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/blog/$slug",
              params: { slug: post.slug },
              className: "inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all duration-200",
              children: [
                "Read More ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12 })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function BlogPost() {
  const params = useParams({ from: "/blog/$slug" });
  const post = getBlogPost(params.slug);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.05
  });
  reactExports.useEffect(() => {
    if (post) {
      document.title = `${post.title} | SearchLift Technologies`;
    } else {
      document.title = "Post Not Found | SearchLift Technologies";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post]);
  if (!post) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-black text-primary/20 mb-4", children: "404" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground mb-2", children: "Post Not Found" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "The blog post you're looking for doesn't exist or may have been moved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/blog",
          "data-ocid": "blog_post.back_to_blog",
          className: "inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white",
          style: { background: "linear-gradient(135deg, #20417B, #1E90FF)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14 }),
            " Back to Blog"
          ]
        }
      )
    ] }) });
  }
  const relatedPosts = getRelatedPosts(params.slug, 3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/blog",
        "data-ocid": "blog_post.back_button",
        className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary\n            transition-colors duration-200 group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ArrowLeft,
            {
              size: 14,
              className: "transition-transform duration-200 group-hover:-translate-x-1"
            }
          ),
          "Back to Blog"
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        ref: heroRef,
        className: `max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 transition-all duration-700
          ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground", children: post.category }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { size: 12 }),
              post.date
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
              post.readTime
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(User, { size: 12 }),
              post.author,
              " · ",
              post.authorRole
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-8", children: post.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden mb-10 shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: post.image,
              alt: post.title,
              className: "w-full h-64 md:h-96 object-cover"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: contentRef,
              className: `transition-all duration-700
            ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostContent, { html: post.content })
            }
          ),
          post.tags.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 pt-8 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { size: 14, className: "text-muted-foreground" }),
            post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border font-medium",
                children: tag
              },
              tag
            ))
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-6 rounded-2xl bg-card border border-border flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow",
                style: { background: "linear-gradient(135deg, #20417B, #1E90FF)" },
                children: post.author.charAt(0)
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: post.author }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
                post.authorRole,
                " · SearchLift Technologies"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Expert in digital marketing with a passion for data-driven growth strategies and SEO innovation." })
            ] })
          ] })
        ]
      }
    ),
    relatedPosts.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-t border-border py-16 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-foreground mb-2", children: "Related Articles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm mb-8", children: "Continue reading with these hand-picked articles" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "blog_post.related.list",
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: relatedPosts.map((related, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(RelatedCard, { post: related, index }, related.id))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 sm:px-6 bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-foreground mb-3", children: "Ready to Grow Your Business?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-6 text-sm", children: "Get a free SEO audit and discover how SearchLift Technologies can transform your digital presence." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/contact",
          "data-ocid": "blog_post.cta_button",
          className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg\n              hover:-translate-y-1 hover:shadow-xl transition-all duration-300",
          style: { background: "linear-gradient(135deg, #20417B, #1E90FF)" },
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
  BlogPost as default
};
