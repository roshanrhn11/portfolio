"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Scene from "./Scene";

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 1, 10],
          fov: 45,
        }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}