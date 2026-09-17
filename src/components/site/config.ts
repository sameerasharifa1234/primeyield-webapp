// ---------------------------------------------------------------------------
// Configure the company WhatsApp number here (international format, digits only)
// Example: "919876543210". Leave the placeholder until the real number is known.
// ---------------------------------------------------------------------------
export const WHATSAPP_NUMBER = "0000000000";
export const WHATSAPP_MESSAGE = "Hello Primeyield Ventures, I'd like to discuss a project.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const CONTACT_EMAIL = "hello@primeyieldventures.com";

export const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];
