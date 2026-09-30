import { twMerge } from "tailwind-merge";

const tones = {
  white: "bg-white",
  muted: "bg-surface-muted",
  tint: "bg-primary-50",
  dark: "bg-primary-950 text-white",
};

export default function Section({ id, tone = "white", labelledBy, className, containerClassName, children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={twMerge("py-16 sm:py-20 scroll-mt-20", tones[tone], className)}>
      <div className={twMerge("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>{children}</div>
    </section>
  );
}
