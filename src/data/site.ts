export const site = {
  name: "Sree Recliners and Sofas",
  shortName: "Sree Recliners",
  tagline: "Premium recliners & custom sofas, made to order",
  description:
    "A trusted family manufacturing unit specializing in recliners, sofas, and sectionals — built with quality materials and delivered to your home.",
  phone: "+91 99858 59942",
  email: "info@sreerecliners.com",
  address: "Bachupally, Nizampet, Hyderabad",
  hours: "Mon–Sat: 9:00 AM – 6:00 PM",
  yearsInBusiness: "25+",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919985859942",
  },
} as const;

export const trustSignals = [
  { label: `${site.yearsInBusiness} years`, detail: "of craftsmanship" },
  { label: "Custom orders", detail: "any size & fabric" },
  { label: "Quality materials", detail: "solid frames & foam" },
  { label: "Free quotes", detail: "within 24 hours" },
] as const;
