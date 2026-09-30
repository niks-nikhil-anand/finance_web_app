import Link from "next/link";
import { twMerge } from "tailwind-merge";

const variants = {
  accent: "bg-accent-400 text-primary-950 hover:bg-accent-300 focus-visible:outline-accent-500",
  primary: "bg-primary-700 text-white hover:bg-primary-800 focus-visible:outline-primary-700",
  outline: "border border-primary-700 text-primary-700 bg-white hover:bg-primary-50 focus-visible:outline-primary-700",
  ghostLight: "border border-white/40 text-white hover:bg-white/10 focus-visible:outline-white",
};

const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export const buttonClasses = ({ variant = "accent", size = "md", className } = {}) =>
  twMerge(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

// Renders a Next.js Link when `href` is given, otherwise a <button>.
export default function Button({ href, variant, size, className, children, ...props }) {
  const classes = buttonClasses({ variant, size, className });
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
