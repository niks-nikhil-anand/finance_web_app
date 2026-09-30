import { twMerge } from "tailwind-merge";

export default function SectionHeading({ id, eyebrow, title, description, align = "center", dark = false, className }) {
  return (
    <div className={twMerge("mb-10 sm:mb-12 max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={twMerge("mb-2 text-sm font-semibold uppercase tracking-wider", dark ? "text-accent-300" : "text-primary-700")}>
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={twMerge("text-3xl font-bold leading-tight sm:text-4xl", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {description && (
        <p className={twMerge("mt-4 text-base sm:text-lg", dark ? "text-primary-100" : "text-ink-muted")}>{description}</p>
      )}
    </div>
  );
}
