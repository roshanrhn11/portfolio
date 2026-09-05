
"use client";

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import HolographicCube from "@/components/holographic/HolographicCube";

export type Screen = "home" | "about" | "projects" | "contact";

export default function Home() {
  const [activeScreen, setActiveScreen] =
    useState<Screen>("home");

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#050b14]">
      {/* =====================================================
          HOLOGRAPHIC BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.08),transparent_55%)]" />

        {/* Technical grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.08]
            [background-image:linear-gradient(rgba(0,245,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.22)_1px,transparent_1px)]
            [background-size:50px_50px]
          "
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />
      </div>

      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <Navbar
        activeScreen={activeScreen}
        onNavigate={setActiveScreen}
      />

      {/* =====================================================
          MAIN 3D ENVIRONMENT
      ====================================================== */}
      <main className="relative z-10 h-full w-full">
        <HolographicCube
          activeScreen={activeScreen}
          onFaceChange={setActiveScreen}
        />
      </main>

      {/* =====================================================
          BOTTOM SYSTEM IDENTIFIER
      ====================================================== */}
      <div className="pointer-events-none fixed bottom-4 left-4 z-40 hidden font-mono text-[9px] tracking-[2px] text-cyan-400/50 md:block">
        PORTFOLIO_OS // NODE_{activeScreen.toUpperCase()}
      </div>

      {/* =====================================================
          SYSTEM STATUS
      ====================================================== */}
      <div className="pointer-events-none fixed bottom-4 right-4 z-40 hidden items-center gap-2 font-mono text-[9px] tracking-[2px] text-cyan-400/50 md:flex">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
        SYSTEM_ONLINE
      </div>
    </div>
  );
}
