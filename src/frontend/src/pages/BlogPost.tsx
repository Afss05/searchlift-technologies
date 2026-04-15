import {
  type BlogPost as BlogPostData,
  getBlogPost,
  getRelatedPosts,
} from "@/data/blogData";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  User,
} from "lucide-react";
import { useEffect, useMemo } from "react";

// Parse static HTML content string into React elements
function PostContent({ html }: { html: string }) {
  const lines = useMemo(
    () =>
      html
        .split(/\n+/)
        .map((l) => l.trim())
        .filter(Boolean),
    [html],
  );

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const key = `line-${i}`;
        const text = line
          .replace(/<strong>(.*?)<\/strong>/g, "$1")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">");
        if (line.startsWith("<h2>"))
          return (
            <h2
              key={key}
              className="text-xl font-bold text-foreground mt-8 mb-3"
            >
              {text.replace(/<\/?h2>/g, "")}
            </h2>
          );
        if (line.startsWith("<li>"))
          return (
            <li
              key={key}
              className="ml-5 list-disc text-muted-foreground text-base leading-relaxed mb-1"
            >
              {text.replace(/<\/?li>/g, "")}
            </li>
          );
        if (line.startsWith("<p>"))
          return (
            <p
              key={key}
              className="text-muted-foreground text-base leading-relaxed mb-4"
            >
              {text.replace(/<\/?p>/g, "")}
            </p>
          );
        return null;
      })}
    </div>
  );
}

function RelatedCard({ post, index }: { post: BlogPostData; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <article
      ref={ref as React.RefObject<HTMLElement>}
      data-ocid={`blog_post.related.item.${index + 1}`}
      className={`rounded-xl overflow-hidden border border-border bg-card shadow-sm
        hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
        transition-all duration-300 flex flex-col group
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {post.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 flex-1 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} />
            {post.readTime}
          </span>
        </div>
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all duration-200"
        >
          Read More <ArrowRight size={12} />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPost() {
  const params = useParams({ from: "/blog/$slug" });
  const post = getBlogPost(params.slug);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation({
    threshold: 0,
  });
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.05,
  });

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | SearchLift Technologies`;
    } else {
      document.title = "Post Not Found | SearchLift Technologies";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="text-6xl font-black text-primary/20 mb-4">404</div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Post Not Found
          </h1>
          <p className="text-muted-foreground mb-6 text-sm">
            The blog post you're looking for doesn't exist or may have been
            moved.
          </p>
          <Link
            to="/blog"
            data-ocid="blog_post.back_to_blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, #20417B, #1E90FF)" }}
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(params.slug, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <Link
          to="/blog"
          data-ocid="blog_post.back_button"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary
            transition-colors duration-200 group"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to Blog
        </Link>
      </div>

      {/* Article Hero */}
      <article
        ref={heroRef as React.RefObject<HTMLElement>}
        className={`max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 transition-all duration-700
          ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary text-primary-foreground">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar size={12} />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock size={12} />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User size={12} />
            {post.author} · {post.authorRole}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-8">
          {post.title}
        </h1>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-700
            ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <PostContent html={post.content} />
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-10 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center gap-2">
              <Tag size={14} className="text-muted-foreground" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Card */}
        <div className="mt-10 p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow"
            style={{ background: "linear-gradient(135deg, #20417B, #1E90FF)" }}
          >
            {post.author.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-foreground">{post.author}</p>
            <p className="text-sm text-muted-foreground">
              {post.authorRole} · SearchLift Technologies
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Expert in digital marketing with a passion for data-driven growth
              strategies and SEO innovation.
            </p>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-muted/40 border-t border-border py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Related Articles
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Continue reading with these hand-picked articles
            </p>
            <div
              data-ocid="blog_post.related.list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {relatedPosts.map((related, index) => (
                <RelatedCard key={related.id} post={related} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to Grow Your Business?
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Get a free SEO audit and discover how SearchLift Technologies can
            transform your digital presence.
          </p>
          <Link
            to="/contact"
            data-ocid="blog_post.cta_button"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg
              hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #20417B, #1E90FF)" }}
          >
            Get Free SEO Audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
