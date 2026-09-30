"use client";
import { useId } from "react";
import { clamp } from "@/lib/finance/format";

// Paired range slider + number input sharing one numeric value.
export default function RangeField({ label, value, onChange, min, max, step = 1, prefix, suffix, format }) {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        <div className="flex items-center rounded-lg border border-slate-300 bg-white px-3 py-1.5 focus-within:border-primary-600 focus-within:ring-2 focus-within:ring-primary-100">
          {prefix && <span className="mr-1 text-sm text-ink-muted">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="decimal"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(e.target.value === "" ? min : Number(e.target.value))}
            onBlur={(e) => onChange(clamp(e.target.value, min, max))}
            className="w-24 bg-transparent text-right text-sm font-semibold text-ink outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
          />
          {suffix && <span className="ml-1 text-sm text-ink-muted">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        aria-label={label}
        min={min}
        max={max}
        step={step}
        value={clamp(value, min, max)}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-primary-700"
        style={{ background: `linear-gradient(to right, #1D4ED8 ${percent}%, #DBEAFE ${percent}%)` }}
      />
      {format && (
        <div className="mt-1 flex justify-between text-xs text-ink-subtle">
          <span>{format(min)}</span>
          <span>{format(max)}</span>
        </div>
      )}
    </div>
  );
}
