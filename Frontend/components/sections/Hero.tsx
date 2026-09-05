
"use client";

import HeroScene from "../three/HeroScene";
import HoloHUD from "../holographic/HoloHUD";
import HoloDeveloperPanel from "../holographic/HoloDeveloperPanel";
import HoloSidePanels from "../holographic/HoloSidePanels";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        pt-20
        pb-12
      "
    >
      {/* 3D ENVIRONMENT */}
      <HeroScene />

      {/* HOLOGRAPHIC HUD */}
      <HoloHUD />

      {/* INTERACTIVE SIDE HUD PANELS */}
      <HoloSidePanels />

      {/* MAIN DEVELOPER HOLOGRAM */}
      <div
        className="
          relative
          z-30
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          items-center
          justify-center
          px-6
        "
      >
        <HoloDeveloperPanel />
      </div>
    </section>
  );
}

