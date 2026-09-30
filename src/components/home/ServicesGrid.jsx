"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Tabs from "@/components/ui/Tabs";
import { serviceCategories, services } from "@/data/home/services";

const INITIAL_VISIBLE = 6;

export default function ServicesGrid() {
  const [category, setCategory] = useState(serviceCategories[0].id);
  const [expanded, setExpanded] = useState(false);

  const items = services.filter((s) => s.category === category);
  const visible = expanded ? items : items.slice(0, INITIAL_VISIBLE);

  const changeCategory = (id) => {
    setCategory(id);
    setExpanded(false);
  };

  return (
    <>
      <div className="mb-10 flex justify-center">
        <Tabs tabs={serviceCategories} value={category} onChange={changeCategory} label="Service categories" />
      </div>

      <div id={`panel-${category}`} role="tabpanel" aria-labelledby={`tab-${category}`} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s) => {
          const body = (
            <>
              <div className="relative aspect-[16/10] overflow-hidden bg-primary-50">
                <Image src={s.image} alt={s.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                {s.comingSoon && (
                  <span className="absolute right-3 top-3 rounded-full bg-accent-400 px-3 py-1 text-xs font-semibold text-primary-950">Coming soon</span>
                )}
              </div>
              <div className="flex items-center justify-between gap-3 p-5">
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                {!s.comingSoon && (
                  <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-primary-700">
                    {s.cta} <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </div>
            </>
          );
          const cardClass = "group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-lg";
          return s.comingSoon ? (
            <div key={s.title} className={cardClass}>
              {body}
            </div>
          ) : (
            <Link key={s.title} href={s.href} className={`${cardClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-700`}>
              {body}
            </Link>
          );
        })}
      </div>

      {items.length > INITIAL_VISIBLE && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="rounded-lg border border-primary-700 px-6 py-2.5 text-sm font-semibold text-primary-700 hover:bg-primary-50"
          >
            {expanded ? "Show fewer services" : `View all ${items.length} services`}
          </button>
        </div>
      )}
    </>
  );
}
