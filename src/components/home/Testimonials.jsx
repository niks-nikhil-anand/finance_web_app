import { Quote, Star } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/home/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials" tone="tint" labelledBy="testimonials-title">
      <SectionHeading id="testimonials-title" eyebrow="Testimonials" title="What our customers say" />
      <ul className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card">
              <Quote aria-hidden className="h-8 w-8 text-accent-400" />
              <div className="mt-3 flex gap-0.5" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} aria-hidden className={`h-4 w-4 ${i < t.rating ? "fill-accent-400 text-accent-400" : "text-slate-300"}`} />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span aria-hidden className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-ink-subtle">{t.service}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </Section>
  );
}
