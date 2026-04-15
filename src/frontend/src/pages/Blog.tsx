import { type BlogPost, blogPosts } from "@/data/blogData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, Clock, User } from "lucide-react";
import { useEffect, useState } from "react";

function SkeletonCard() {
  return (
    <div className="rounded-xl overflow-hidden border border-border bg-card animate-pulse">
      <div className="h-52 bg-muted" />
      <div className="p-6 space-y-3">
        <div className="h-5 w-24 bg-muted rounded-full" />
        <div className="h-6 w-full bg-muted rounded" />
        <div className="h-4 w-3/4 bg-muted rounded" />
        <div className="h-4 w-full bg-muted rounded" />
        <div className="h-4 w-2/3 bg-muted rounded" />
        <div className="flex gap-4 pt-2">
          <div className="h-4 w-28 bg-muted rounded" />
          <div className="h-4 w-20 bg-muted rounded" />
        </div>
        <div className="h-9 w-32 bg-muted rounded-lg mt-2" />
      </div>
    </div>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      data-ocid={`blog.item.${index + 1}`}
      className={`rounded-xl overflow-hidden border border-border bg-card shadow-sm
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
        transition-all duration-300 flex flex-col group
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground shadow-sm">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-lg font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1 mb-4">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1.5">
            <User size={12} />
            <span>{post.author}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </span>
        </div>

        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          data-ocid={`blog.read_more.${index + 1}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary
            hover:gap-3 transition-all duration-200 group/btn"
        >
          Read More
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover/btn:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0,
  });

  useEffect(() => {
    document.title = "Blog | SearchLift Technologies";
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 md:py-32"
        style={{
          background:
            "linear-gradient(135deg, #20417B 0%, #1E6FCC 60%, #1E90FF 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className={`relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-700
            ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <BookOpen size={13} />
            <span>Expert Insights &amp; Guides</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Digital Marketing Blog
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Actionable strategies, expert insights, and the latest trends in
            SEO, paid advertising, and digital growth.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Latest Articles
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              {blogPosts.length} articles published
            </p>
          </div>
        </div>

        <div
          data-ocid="blog.list"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {loading
            ? (["s1", "s2", "s3", "s4", "s5", "s6"] as const).map((k) => (
                <SkeletonCard key={k} />
              ))
            : blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
        </div>
      </section>

      {/* CTA Banner */}
      {!loading && (
        <section className="bg-muted/40 border-t border-border py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Want Results Like These?
            </h2>
            <p className="text-muted-foreground mb-6 text-base">
              Let SearchLift Technologies craft a digital strategy tailored to
              your business goals.
            </p>
            <Link
              to="/contact"
              data-ocid="blog.cta_button"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg
                hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #20417B, #1E90FF)",
              }}
            >
              Get Free SEO Audit
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
