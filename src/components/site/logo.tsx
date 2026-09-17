export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <span
        aria-hidden="true"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-gold/40 bg-gold-soft"
      >
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
          <path
            d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4H13a5 5 0 0 1 0 10H9"
            stroke="var(--gold)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17.5" cy="18" r="1.8" fill="var(--teal)" />
        </svg>
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-[0.98rem] font-semibold text-gold-gradient">
          Primeyield Ventures
        </span>
        {!compact && (
          <span className="block text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
            Software Engineering
          </span>
        )}
      </span>
    </span>
  );
}
