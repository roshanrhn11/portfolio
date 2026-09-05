"use client";

import { Float, Stars } from "@react-three/drei";
import Lights from "./Lights";
import HolographicGrid from "./HolographicGrid";
import HolographicScreen from "./HolographicScreen";

function FloatingRing({
  position,
  rotation,
  scale = 1,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
}) {
  return (
    <Float
      speed={1}
      rotationIntensity={0.25}
      floatIntensity={0.4}
    >
      <mesh
        position={position}
        rotation={rotation}
        scale={scale}
      >
        <torusGeometry args={[1.8, 0.018, 16, 128]} />
        <meshBasicMaterial
          color="#12b9ed"
          transparent
          opacity={0.45}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#02070c"]} />

      <fog
        attach="fog"
        args={["#02070c", 8, 28]}
      />

      <Lights />

      <Stars
        radius={40}
        depth={25}
        count={900}
        factor={1.5}
        saturation={0}
        fade
        speed={0.25}
      />

      <HolographicGrid />
      <HolographicScreen />

      <FloatingRing
        position={[-4, 1.5, -3]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1}
      />

      <FloatingRing
        position={[4, 2, -5]}
        rotation={[Math.PI / 3, 0.3, 0]}
        scale={0.7}
      />

      <FloatingRing
        position={[0, 4, -8]}
        rotation={[Math.PI / 2.5, 0, 0]}
        scale={1.4}
      />
    </>
  );
}