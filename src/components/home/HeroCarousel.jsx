"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

export default function HeroCarousel({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [paused, reduce, slides.length, interval]);

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[512px] overflow-hidden rounded-3xl bg-primary-100 shadow-2xl ring-1 ring-primary-900/5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Our loan and tax services"
    >
      {slides.map((slide, i) => (
        <Image
          key={slide.alt}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 640px) 512px, 100vw"
          placeholder="blur"
          className={`object-contain transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Show slide ${i + 1}: ${slide.alt}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-accent-400" : "w-2 bg-white/70 hover:bg-white"}`}
          />
        ))}
      </div>
    </div>
  );
}
