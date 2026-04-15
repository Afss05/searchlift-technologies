import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  TrendingUp,
  Twitter,
  Youtube,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" as const },
  { label: "About", href: "/about" as const },
  { label: "Services", href: "/services" as const },
  { label: "Blog", href: "/blog" as const },
  { label: "Contact", href: "/contact" as const },
];

const serviceLinks = [
  { label: "SEO Services", href: "/services" as const },
  { label: "Digital Marketing", href: "/services" as const },
  { label: "Website Development", href: "/services" as const },
  { label: "Local SEO", href: "/services" as const },
  { label: "Social Media", href: "/services" as const },
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <TrendingUp
                  className="w-5 h-5 text-primary-foreground"
                  strokeWidth={2.5}
                />
              </div>
              <span className="font-display font-bold text-xl text-primary-foreground">
                SearchLift
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-5">
              Chennai-based SEO & digital marketing agency helping businesses
              grow online with result-driven, transparent, and affordable
              strategies.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary/80 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  data-ocid={`footer.social.${label.toLowerCase().replace(/[^a-z0-9]/g, "_")}_link`}
                >
                  <Icon className="w-4 h-4 text-primary-foreground/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-primary-foreground/90 mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    data-ocid={`footer.quicklinks.${label.toLowerCase()}_link`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-primary-foreground/90 mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    data-ocid={`footer.services.${label.toLowerCase().replace(/\s+/g, "_")}_link`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-primary-foreground/90 mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                <span>Chennai, Tamil Nadu, India</span>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  data-ocid="footer.phone_link"
                >
                  <Phone className="w-4 h-4 shrink-0 text-accent" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@searchlift.in"
                  className="flex items-center gap-3 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  data-ocid="footer.email_link"
                >
                  <Mail className="w-4 h-4 shrink-0 text-accent" />
                  <span>contact@searchlift.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/50 text-sm">
            © {year} SearchLift Technologies. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-foreground/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
