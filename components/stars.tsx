export function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox="0 0 16 16" className={`h-3.5 w-3.5 ${index < value ? "text-violet" : "text-white/20"}`} aria-hidden="true">
          <path
            fill="currentColor"
            d="M8 1.2 9.9 5.6l4.8.4-3.6 3.2.1 4.8L8 11.6 4.8 14l.1-4.8L1.3 6l4.8-.4L8 1.2Z"
          />
        </svg>
      ))}
    </span>
  );
}
