import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, TrendingUp, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" as const },
  { label: "About", href: "/about" as const },
  { label: "Services", href: "/services" as const },
  { label: "Blog", href: "/blog" as const },
  { label: "Contact", href: "/contact" as const },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // Close mobile menu on route change
  if (prevPathRef.current !== location.pathname) {
    prevPathRef.current = location.pathname;
    if (isOpen) setIsOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-card/80 backdrop-blur-sm border-b border-border/50",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          data-ocid="navbar.logo_link"
        >
          <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-200">
            <TrendingUp
              className="w-4 h-4 text-primary-foreground"
              strokeWidth={2.5}
            />
          </div>
          <span className="font-display font-bold text-lg leading-tight hidden sm:block">
            <span className="text-gradient">SearchLift</span>
            <span className="text-foreground/70 text-sm font-medium ml-1">
              Technologies
            </span>
          </span>
          <span className="font-display font-bold text-lg sm:hidden text-gradient">
            SearchLift
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`navbar.${link.label.toLowerCase()}_link`}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                isActive(link.href)
                  ? "text-primary"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/60",
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 gradient-primary rounded-full" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className="gradient-primary text-primary-foreground border-0 shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-200 rounded-xl font-semibold"
            data-ocid="navbar.get_free_audit_button"
          >
            <Link to="/contact">Get Free Audit</Link>
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted/60 transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          data-ocid="navbar.hamburger_button"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-border/50",
          isOpen
            ? "max-h-screen opacity-100 bg-card/98 backdrop-blur-md"
            : "max-h-0 opacity-0",
        )}
        data-ocid="navbar.mobile_menu"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={`navbar.mobile.${link.label.toLowerCase()}_link`}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/60",
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 pb-1">
            <Button
              asChild
              className="w-full gradient-primary text-primary-foreground border-0 shadow-md rounded-xl font-semibold"
              data-ocid="navbar.mobile.get_free_audit_button"
            >
              <Link to="/contact">Get Free Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
