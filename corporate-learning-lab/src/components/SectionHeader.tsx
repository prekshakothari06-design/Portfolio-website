"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <AnimatedSection className="mb-16 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-accent" />
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
          {label}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base text-muted leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
