"use client";

import { ReactNode } from "react";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
}

export default function GlassPanel({
  children,
  className = "",
}: GlassPanelProps) {
  return (
    <div
      className={`
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-300/20
        bg-cyan-950/10
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(0,180,255,0.08)]
        ${className}
      `}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/[0.08] via-transparent to-blue-500/[0.04]" />

      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="relative">
        {children}
      </div>
    </div>
  );
}