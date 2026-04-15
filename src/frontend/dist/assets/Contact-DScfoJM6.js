import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, M as MapPin, P as Phone, d as Mail, F as Facebook, I as Instagram, a as Linkedin, Y as Youtube, b as Twitter } from "./index-CkLZWR-p.js";
import { u as useScrollAnimation } from "./useScrollAnimation-vpRpZMww.js";
import { C as Clock } from "./clock-3Dt6KLfP.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]
];
const CircleCheckBig = createLucideIcon("circle-check-big", __iconNode$1);
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
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const SERVICES = [
  "SEO Services",
  "Digital Marketing",
  "Website Development",
  "Local SEO",
  "Social Media Management",
  "Full Digital Package"
];
const BUDGETS = [
  "Under ₹10,000/month",
  "₹10,000–₹25,000/month",
  "₹25,000–₹50,000/month",
  "₹50,000+/month"
];
const SOCIAL_LINKS = [
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Twitter, label: "Twitter / X", href: "https://twitter.com" }
];
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validateForm(data) {
  const errors = {};
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
const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  message: "",
  privacy: false
};
function Contact() {
  reactExports.useEffect(() => {
    document.title = "Contact | SearchLift Technologies";
  }, []);
  const heroAnim = useScrollAnimation();
  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();
  const mapAnim = useScrollAnimation();
  const [formData, setFormData] = reactExports.useState(emptyForm);
  const [errors, setErrors] = reactExports.useState({});
  const [touched, setTouched] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  function handleBlur(field) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateForm(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field]
    }));
  }
  function handleChange(e) {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? e.target.checked : void 0;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (touched[name]) {
      const updated = {
        ...formData,
        [name]: type === "checkbox" ? checked : value
      };
      const fieldErrors = validateForm(updated);
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name]
      }));
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const allTouched = Object.keys(formData).reduce(
      (acc, k) => {
        acc[k] = true;
        return acc;
      },
      {}
    );
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
  const inputBase = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-smooth";
  const labelBase = "block text-sm font-medium text-foreground mb-1.5";
  const formRef = reactExports.useRef(null);
  formAnim.ref.current = formRef.current;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden py-20 md:py-28",
        style: {
          background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)"
        },
        "data-ocid": "contact.hero",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-10 left-[8%] w-20 h-20 rounded-2xl bg-white/10 animate-float-slow rotate-12" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-24 right-[12%] w-14 h-14 rounded-full bg-white/10 animate-float-mid" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 left-[20%] w-10 h-10 rounded-xl bg-white/10 animate-float-fast -rotate-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 right-[25%] w-16 h-16 rounded-2xl bg-white/10 animate-float-slow rotate-45" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              ref: heroAnim.ref,
              className: `relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${heroAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-4 leading-tight", children: "Contact Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-white/85 font-medium", children: "Get your FREE SEO Audit — Let's grow your business together" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 md:py-20 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-10 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref: formRef,
          className: `lg:col-span-3 transition-all duration-700 delay-100 ${formAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
          "data-ocid": "contact.form_panel",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass rounded-2xl shadow-elevated p-8 md:p-10", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center justify-center py-12 text-center",
              "data-ocid": "contact.success_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-20 h-20 rounded-full flex items-center justify-center mb-6",
                    style: {
                      background: "linear-gradient(135deg, #16a34a 0%, #4ade80 100%)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "w-10 h-10 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground mb-3", children: "Message Sent Successfully!" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-base max-w-sm", children: "Thank you! We'll be in touch within 24 hours to discuss your SEO audit." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    className: "mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-smooth hover:opacity-90 active:scale-95",
                    style: {
                      background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)"
                    },
                    onClick: () => setSubmitted(false),
                    "data-ocid": "contact.send_another_button",
                    children: "Send Another Message"
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground mb-8", children: "Send Us a Message" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                noValidate: true,
                className: "space-y-5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "name", className: labelBase, children: [
                        "Full Name",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "name",
                          name: "name",
                          type: "text",
                          value: formData.name,
                          onChange: handleChange,
                          onBlur: () => handleBlur("name"),
                          placeholder: "Your full name",
                          className: inputBase,
                          "data-ocid": "contact.name_input",
                          "aria-describedby": errors.name ? "name-error" : void 0,
                          "aria-invalid": !!errors.name
                        }
                      ),
                      errors.name && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "name-error",
                          className: "mt-1.5 text-sm text-destructive",
                          "data-ocid": "contact.name.field_error",
                          children: errors.name
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "email", className: labelBase, children: [
                        "Email Address",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "email",
                          name: "email",
                          type: "email",
                          value: formData.email,
                          onChange: handleChange,
                          onBlur: () => handleBlur("email"),
                          placeholder: "you@company.com",
                          className: inputBase,
                          "data-ocid": "contact.email_input",
                          "aria-describedby": errors.email ? "email-error" : void 0,
                          "aria-invalid": !!errors.email
                        }
                      ),
                      errors.email && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "email-error",
                          className: "mt-1.5 text-sm text-destructive",
                          "data-ocid": "contact.email.field_error",
                          children: errors.email
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "phone", className: labelBase, children: [
                        "Phone Number",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "phone",
                          name: "phone",
                          type: "tel",
                          value: formData.phone,
                          onChange: handleChange,
                          onBlur: () => handleBlur("phone"),
                          placeholder: "+91 98765 43210",
                          className: inputBase,
                          "data-ocid": "contact.phone_input",
                          "aria-describedby": errors.phone ? "phone-error" : void 0,
                          "aria-invalid": !!errors.phone
                        }
                      ),
                      errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "phone-error",
                          className: "mt-1.5 text-sm text-destructive",
                          "data-ocid": "contact.phone.field_error",
                          children: errors.phone
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "company", className: labelBase, children: "Company Name" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          id: "company",
                          name: "company",
                          type: "text",
                          value: formData.company,
                          onChange: handleChange,
                          placeholder: "Your company name",
                          className: inputBase,
                          "data-ocid": "contact.company_input"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "website", className: labelBase, children: "Website URL" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "website",
                        name: "website",
                        type: "url",
                        value: formData.website,
                        onChange: handleChange,
                        placeholder: "https://yourwebsite.com",
                        className: inputBase,
                        "data-ocid": "contact.website_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "service", className: labelBase, children: [
                        "Service Required",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          id: "service",
                          name: "service",
                          value: formData.service,
                          onChange: handleChange,
                          onBlur: () => handleBlur("service"),
                          className: inputBase,
                          "data-ocid": "contact.service_select",
                          "aria-describedby": errors.service ? "service-error" : void 0,
                          "aria-invalid": !!errors.service,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a service" }),
                            SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s))
                          ]
                        }
                      ),
                      errors.service && /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          id: "service-error",
                          className: "mt-1.5 text-sm text-destructive",
                          "data-ocid": "contact.service.field_error",
                          children: errors.service
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "budget", className: labelBase, children: "Budget Range" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "select",
                        {
                          id: "budget",
                          name: "budget",
                          value: formData.budget,
                          onChange: handleChange,
                          className: inputBase,
                          "data-ocid": "contact.budget_select",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select budget" }),
                            BUDGETS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: b, children: b }, b))
                          ]
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "message", className: labelBase, children: [
                      "Message ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "textarea",
                      {
                        id: "message",
                        name: "message",
                        rows: 4,
                        value: formData.message,
                        onChange: handleChange,
                        onBlur: () => handleBlur("message"),
                        placeholder: "Tell us about your business and what you're looking to achieve...",
                        className: `${inputBase} resize-none`,
                        "data-ocid": "contact.message_textarea",
                        "aria-describedby": errors.message ? "message-error" : void 0,
                        "aria-invalid": !!errors.message
                      }
                    ),
                    errors.message && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "message-error",
                        className: "mt-1.5 text-sm text-destructive",
                        "data-ocid": "contact.message.field_error",
                        children: errors.message
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-3 cursor-pointer group", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "input",
                        {
                          name: "privacy",
                          type: "checkbox",
                          checked: formData.privacy,
                          onChange: handleChange,
                          onBlur: () => handleBlur("privacy"),
                          className: "mt-0.5 w-4 h-4 rounded accent-primary cursor-pointer",
                          "data-ocid": "contact.privacy_checkbox",
                          "aria-describedby": errors.privacy ? "privacy-error" : void 0,
                          "aria-invalid": !!errors.privacy
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground leading-relaxed", children: [
                        "I agree to the",
                        " ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "a",
                          {
                            href: "/privacy",
                            className: "text-primary hover:underline font-medium",
                            children: "Privacy Policy"
                          }
                        ),
                        " ",
                        "and consent to being contacted"
                      ] })
                    ] }),
                    errors.privacy && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        id: "privacy-error",
                        className: "mt-1.5 text-sm text-destructive",
                        "data-ocid": "contact.privacy.field_error",
                        children: errors.privacy
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "submit",
                      disabled: submitting,
                      className: "w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5 transition-smooth hover:opacity-90 hover:shadow-elevated active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed",
                      style: {
                        background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)"
                      },
                      "data-ocid": "contact.submit_button",
                      children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" }),
                        "Submitting..."
                      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                        "Get Free SEO Audit"
                      ] })
                    }
                  )
                ]
              }
            )
          ] }) })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          ref: infoAnim.ref,
          className: `lg:col-span-2 transition-all duration-700 delay-200 ${infoAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
          "data-ocid": "contact.info_panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl shadow-elevated p-7 mb-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-lg",
                    style: {
                      background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)"
                    },
                    children: "S"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground text-base leading-tight", children: "SearchLift Technologies" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Premium SEO & Digital Marketing" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: "Chennai-based agency helping businesses grow online with data-driven SEO, digital marketing, and web solutions." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl shadow-elevated p-7 mb-6 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-base mb-1", children: "Get In Touch" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContactItem,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-5 h-5" }),
                  label: "Address",
                  value: "No. 123, Anna Salai, Chennai, Tamil Nadu 600002, India"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContactItem,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5" }),
                  label: "Phone",
                  value: "+91 98765 43210",
                  href: "tel:+919876543210"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContactItem,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5" }),
                  label: "Email",
                  value: "contact@searchlift.in",
                  href: "mailto:contact@searchlift.in"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ContactItem,
                {
                  icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-5 h-5" }),
                  label: "Business Hours",
                  value: "Mon–Sat, 9 AM – 6 PM IST"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl shadow-elevated p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground text-base mb-4", children: "Follow Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex items-center gap-3 flex-wrap",
                  "data-ocid": "contact.social_links",
                  children: SOCIAL_LINKS.map(({ icon: Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      "aria-label": label,
                      className: "w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-smooth",
                      "data-ocid": `contact.social.${label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4.5 h-4.5" })
                    },
                    label
                  ))
                }
              )
            ] })
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 bg-muted/30",
        "data-ocid": "contact.map_section",
        ref: mapAnim.ref,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `transition-all duration-700 ${mapAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold text-foreground", children: "Find Us" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Visit us at our Chennai office" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden shadow-elevated border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "iframe",
                {
                  title: "SearchLift Technologies Location — Chennai, Tamil Nadu",
                  src: "https://maps.google.com/maps?q=Chennai,Tamil+Nadu,India&output=embed",
                  width: "100%",
                  height: "400",
                  style: { border: 0, display: "block" },
                  allowFullScreen: true,
                  loading: "lazy",
                  referrerPolicy: "no-referrer-when-downgrade",
                  "data-ocid": "contact.map_embed"
                }
              ) })
            ]
          }
        ) })
      }
    )
  ] });
}
function ContactItem({ icon, label, value, href }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-white",
        style: {
          background: "linear-gradient(135deg, #20417B 0%, #1E90FF 100%)"
        },
        children: icon
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5", children: label }),
      href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          className: "text-sm text-foreground hover:text-primary transition-smooth break-words font-medium",
          children: value
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed", children: value })
    ] })
  ] });
}
export {
  Contact as default
};
