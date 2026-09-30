import { twMerge } from "tailwind-merge";

export default function Card({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={twMerge("rounded-2xl border border-slate-200 bg-white shadow-card", className)} {...props}>
      {children}
    </Tag>
  );
}
