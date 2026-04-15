import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  budget: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  privacy?: string;
}

const SERVICES = [
  "SEO Services",
  "Digital Marketing",
  "Website Development",
  "Local SEO",
  "Social Media Management",
  "Full Digital Package",
];

const BUDGETS = [
  "Under ₹10,000/month",
  "₹10,000–₹25,000/month",
  "₹25,000–₹50,000/month",
  "₹50,000+/month",
];

const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" },
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim() || !validateEmail(data.email))
    errors.email = "Valid email is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!data.service) errors.service = "Please select a service";
  if (!data.message.trim()) errors.message = "Message is required";
  if (!data.privacy)
    errors.privacy = "You must agree to the Privacy Policy to continue";
  return errors;
}

const emptyForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  message: "",
  privacy: false,
};

export default function Contact() {
  useEffect(() => {
    document.title = "Contact | SearchLift Technologies";
  }, []);

  const heroAnim = useScrollAnimation();
  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();
  const mapAnim = useScrollAnimation();

  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Per-field blur validation
  function handleBlur(field: keyof FormData) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateForm(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field as keyof FormErrors],
    }));
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (touched[name as keyof FormData]) {
      const updated = {
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      } as FormData;
      const fieldErrors = validateForm(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof FormErrors],
      }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce<Record<string, boolean>>(
      (acc, k) => {
        acc[k] = true;
        return acc;
      },
      {},
    ) as Record<keyof FormData, boolean>;
    setTouched(allTouched);
    const fieldErrors = validateForm(formData);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData(emptyForm);
    setTouched({});
    setErrors({});
  }

  const inputBase =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth";

  const labelBase = "block text-sm font-medium text-foreground mb-1.5";

  const formRef = useRef<HTMLDivElement>(null);
  (formAnim.ref as React.MutableRefObject<HTMLElement | null>).current =
    formRef.current;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{
          background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)",
        }}
        data-ocid="contact.hero"
      >
        {/* Floating shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-[8%] w-20 h-20 rounded-2xl bg-white/10 animate-float-slow rotate-12" />
          <div className="absolute top-24 right-[12%] w-14 h-14 rounded-full bg-white/10 animate-float-mid" />
          <div className="absolute bottom-10 left-[20%] w-10 h-10 rounded-xl bg-white/10 animate-float-fast -rotate-6" />
          <div className="absolute bottom-20 right-[25%] w-16 h-16 rounded-2xl bg-white/10 animate-float-slow rotate-45" />
        </div>

        <div
          ref={heroAnim.ref as React.RefObject<HTMLDivElement>}
          className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
            heroAnim.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-medium">
            Get your FREE SEO Audit — Let's grow your business together
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* LEFT: Form */}
            <div
              ref={formRef}
              className={`lg:col-span-3 transition-all duration-700 delay-100 ${
                formAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              data-ocid="contact.form_panel"
            >
              <div className="glass rounded-2xl shadow-elevated p-8 md:p-10">
                {submitted ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 text-center"
                    data-ocid="contact.success_state"
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                      style={{
                        background:
                          "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)",
                      }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      Message Sent Successfully!
                    </h2>
                    <p className="text-muted-foreground text-base max-w-sm">
                      Thank you! We'll be in touch within 24 hours to discuss
                      your SEO audit.
                    </p>
                    <button
                      type="button"
                      className="mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-smooth hover:opacity-90 active:scale-95"
                      style={{
                        background:
                          "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)",
                      }}
                      onClick={() => setSubmitted(false)}
                      data-ocid="contact.send_another_button"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                      Send Us a Message
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-5"
                    >
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className={labelBase}>
                            Full Name{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={() => handleBlur("name")}
                            placeholder="Your full name"
                            className={inputBase}
                            data-ocid="contact.name_input"
                            aria-describedby={
                              errors.name ? "name-error" : undefined
                            }
                            aria-invalid={!!errors.name}
                          />
                          {errors.name && (
                            <p
                              id="name-error"
                              className="mt-1.5 text-sm text-destructive"
                              data-ocid="contact.name.field_error"
                            >
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className={labelBase}>
                            Email Address{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={() => handleBlur("email")}
                            placeholder="you@company.com"
                            className={inputBase}
                            data-ocid="contact.email_input"
                            aria-describedby={
                              errors.email ? "email-error" : undefined
                            }
                            aria-invalid={!!errors.email}
                          />
                          {errors.email && (
                            <p
                              id="email-error"
                              className="mt-1.5 text-sm text-destructive"
                              data-ocid="contact.email.field_error"
                            >
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="phone" className={labelBase}>
                            Phone Number{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={() => handleBlur("phone")}
                            placeholder="+91 98765 43210"
                            className={inputBase}
                            data-ocid="contact.phone_input"
                            aria-describedby={
                              errors.phone ? "phone-error" : undefined
                            }
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p
                              id="phone-error"
                              className="mt-1.5 text-sm text-destructive"
                              data-ocid="contact.phone.field_error"
                            >
                              {errors.phone}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className={labelBase}>
                            Company Name
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                            className={inputBase}
                            data-ocid="contact.company_input"
                          />
                        </div>
                      </div>

                      {/* Website */}
                      <div>
                        <label htmlFor="website" className={labelBase}>
                          Website URL
                        </label>
                        <input
                          id="website"
                          name="website"
                          type="url"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://yourwebsite.com"
                          className={inputBase}
                          data-ocid="contact.website_input"
                        />
                      </div>

                      {/* Service + Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="service" className={labelBase}>
                            Service Required{" "}
                            <span className="text-destructive">*</span>
                          </label>
                          <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            onBlur={() => handleBlur("service")}
                            className={inputBase}
                            data-ocid="contact.service_select"
                            aria-describedby={
                              errors.service ? "service-error" : undefined
                            }
                            aria-invalid={!!errors.service}
                          >
                            <option value="">Select a service</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          {errors.service && (
                            <p
                              id="service-error"
                              className="mt-1.5 text-sm text-destructive"
                              data-ocid="contact.service.field_error"
                            >
                              {errors.service}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="budget" className={labelBase}>
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className={inputBase}
                            data-ocid="contact.budget_select"
                          >
                            <option value="">Select budget</option>
                            {BUDGETS.map((b) => (
                              <option key={b} value={b}>
                                {b}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className={labelBase}>
                          Message <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={() => handleBlur("message")}
                          placeholder="Tell us about your business and what you're looking to achieve..."
                          className={`${inputBase} resize-none`}
                          data-ocid="contact.message_textarea"
                          aria-describedby={
                            errors.message ? "message-error" : undefined
                          }
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p
                            id="message-error"
                            className="mt-1.5 text-sm text-destructive"
                            data-ocid="contact.message.field_error"
                          >
                            {errors.message}
                          </p>
                        )}
                      </div>

                      {/* Privacy checkbox */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            name="privacy"
                            type="checkbox"
                            checked={formData.privacy}
                            onChange={handleChange}
                            onBlur={() => handleBlur("privacy")}
                            className="mt-0.5 w-4 h-4 rounded accent-primary cursor-pointer"
                            data-ocid="contact.privacy_checkbox"
                            aria-describedby={
                              errors.privacy ? "privacy-error" : undefined
                            }
                            aria-invalid={!!errors.privacy}
                          />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            I agree to the{" "}
                            <a
                              href="/privacy"
                              className="text-primary hover:underline font-medium"
                            >
                              Privacy Policy
                            </a>{" "}
                            and consent to being contacted
                          </span>
                        </label>
                        {errors.privacy && (
                          <p
                            id="privacy-error"
                            className="mt-1.5 text-sm text-destructive"
                            data-ocid="contact.privacy.field_error"
                          >
                            {errors.privacy}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 transition-smooth hover:opacity-90 hover:shadow-elevated active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{
                          background:
                            "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)",
                        }}
                        data-ocid="contact.submit_button"
                      >
                        {submitting ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Get Free SEO Audit
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* RIGHT: Contact Info */}
            <div
              ref={infoAnim.ref as React.RefObject<HTMLDivElement>}
              className={`lg:col-span-2 transition-all duration-700 delay-200 ${
                infoAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              data-ocid="contact.info_panel"
            >
              {/* Company Card */}
              <div className="glass rounded-2xl shadow-elevated p-7 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)",
                    }}
                  >
                    S
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base leading-tight">
                      SearchLift Technologies
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Premium SEO & Digital Marketing
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Chennai-based agency helping businesses grow online with
                  data-driven SEO, digital marketing, and web solutions.
                </p>
              </div>

              {/* Contact Details */}
              <div className="glass rounded-2xl shadow-elevated p-7 mb-6 space-y-5">
                <h3 className="font-semibold text-foreground text-base mb-1">
                  Get In Touch
                </h3>

                <ContactItem
                  icon={<MapPin className="w-5 h-5" />}
                  label="Address"
                  value="No. 123, Anna Salai, Chennai, Tamil Nadu 600002, India"
                />
                <ContactItem
                  icon={<Phone className="w-5 h-5" />}
                  label="Phone"
                  value="+91 98765 43210"
                  href="tel:+919876543210"
                />
                <ContactItem
                  icon={<Mail className="w-5 h-5" />}
                  label="Email"
                  value="contact@searchlift.in"
                  href="mailto:contact@searchlift.in"
                />
                <ContactItem
                  icon={<Clock className="w-5 h-5" />}
                  label="Business Hours"
                  value="Mon–Sat, 9 AM – 6 PM IST"
                />
              </div>

              {/* Social Media */}
              <div className="glass rounded-2xl shadow-elevated p-7">
                <h3 className="font-semibold text-foreground text-base mb-4">
                  Follow Us
                </h3>
                <div
                  className="flex items-center gap-3 flex-wrap"
                  data-ocid="contact.social_links"
                >
                  {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-smooth"
                      data-ocid={`contact.social.${label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section
        className="py-16 bg-muted/30"
        data-ocid="contact.map_section"
        ref={mapAnim.ref as React.RefObject<HTMLDivElement>}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div
            className={`transition-all duration-700 ${
              mapAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Find Us
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Visit us at our Chennai office
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
              <iframe
                title="SearchLift Technologies Location — Chennai, Tamil Nadu"
                src="https://maps.google.com/maps?q=Chennai,Tamil+Nadu,India&output=embed"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-ocid="contact.map_embed"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white"
        style={{
          background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)",
        }}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-sm text-foreground hover:text-primary transition-smooth break-words font-medium"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-foreground leading-relaxed">{value}</p>
        )}
      </div>
    </div>
  );
}
