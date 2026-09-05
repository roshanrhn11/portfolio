"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Grid } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function HolographicGrid() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.position.z += delta * 0.08;

    if (groupRef.current.position.z > 2) {
      groupRef.current.position.z = 0;
    }
  });

  return (
    <group ref={groupRef} position={[0, -2.2, 0]}>
      <Grid
        args={[30, 30]}
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#087ea4"
        sectionSize={2.5}
        sectionThickness={1}
        sectionColor="#16b8e8"
        fadeDistance={18}
        fadeStrength={1.5}
        infiniteGrid
      />
    </group>
  );
}