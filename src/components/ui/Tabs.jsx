"use client";
import { twMerge } from "tailwind-merge";

// Controlled, accessible tab list (arrow-key navigation between tabs).
export default function Tabs({ tabs, value, onChange, label, className }) {
  const onKeyDown = (e, index) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (index + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    onChange(tabs[next].id);
    e.currentTarget.parentElement.children[next].focus();
  };

  return (
    <div role="tablist" aria-label={label} className={twMerge("inline-flex flex-wrap justify-center gap-2 rounded-xl bg-primary-50 p-1.5", className)}>
      {tabs.map((tab, i) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={active}
            aria-controls={`panel-${tab.id}`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={twMerge(
              "rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
              active ? "bg-primary-700 text-white shadow" : "text-primary-800 hover:bg-white"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
