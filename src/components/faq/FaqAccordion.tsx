"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  title: string;
  items: FaqItem[];
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 shrink-0 text-rouge transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-noir text-sm sm:text-base leading-snug">
          {item.question}
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="pb-5 text-gris-texte text-sm leading-relaxed pr-8">
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="space-y-10">
      {categories.map((cat) => (
        <div key={cat.title}>
          <h2 className="font-heading text-lg font-bold text-rouge uppercase tracking-widest mb-4 text-xs">
            {cat.title}
          </h2>
          <div className="bg-white rounded-3xl border border-border px-6 divide-y-0">
            {cat.items.map((item) => (
              <AccordionItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
