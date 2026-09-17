import { WHATSAPP_LINK } from "./config";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-3 focus-visible:outline-none"
    >
      <span className="pointer-events-none translate-x-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium whitespace-nowrap text-foreground opacity-0 shadow-[var(--shadow-soft)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">
        Chat with us
      </span>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-teal text-accent-foreground shadow-[0_14px_34px_-12px_var(--teal)] transition-transform duration-300 group-hover:scale-110 group-focus-visible:ring-2 group-focus-visible:ring-ring group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background">
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
          <path d="M16.04 3.2c-7.08 0-12.83 5.74-12.83 12.82 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.53-1.7a12.8 12.8 0 0 0 6.3 1.64h.01c7.08 0 12.83-5.75 12.83-12.83 0-3.43-1.34-6.65-3.76-9.07a12.74 12.74 0 0 0-9.07-3.75Zm0 23.13h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.02 1.05 1.07-3.92-.25-.4a10.63 10.63 0 0 1-1.63-5.68c0-5.88 4.79-10.66 10.68-10.66 2.85 0 5.53 1.11 7.54 3.13a10.6 10.6 0 0 1 3.12 7.54c0 5.89-4.79 10.65-10.71 10.65Zm5.85-7.98c-.32-.16-1.9-.94-2.19-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.58-1.59-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.73-.98-2.36-.26-.62-.52-.54-.71-.55l-.6-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.16-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </span>
    </a>
  );
}
