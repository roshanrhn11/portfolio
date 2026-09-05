"use client";

import { useRef } from "react";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function HolographicScreen() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.elapsedTime;

    // Very subtle floating movement
    groupRef.current.position.y = 1.1 + Math.sin(time * 0.7) * 0.08;

    // Very subtle 3D rotation
    groupRef.current.rotation.y = Math.sin(time * 0.35) * 0.025;
    groupRef.current.rotation.x = Math.sin(time * 0.25) * 0.012;
  });

  return (
    <Float
      speed={0.6}
      rotationIntensity={0.08}
      floatIntensity={0.15}
    >
      <group
        ref={groupRef}
        position={[0, 1.1, -1.5]}
      >
        {/* Main glass surface */}
        <mesh>
          <planeGeometry args={[8, 4.8]} />

          <meshPhysicalMaterial
            color="#07141d"
            transparent
            opacity={0.32}
            roughness={0.18}
            metalness={0.15}
            transmission={0.15}
            thickness={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Outer holographic border */}
        <lineSegments>
          <edgesGeometry
            args={[
              new THREE.PlaneGeometry(8, 4.8),
            ]}
          />

          <lineBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.75}
          />
        </lineSegments>

        {/* Inner screen */}
        <mesh position={[0, 0, 0.015]}>
          <planeGeometry args={[7.7, 4.5]} />

          <meshBasicMaterial
            color="#06202b"
            transparent
            opacity={0.08}
          />
        </mesh>

        {/* Top light line */}
        <mesh position={[0, 2.36, 0.035]}>
          <planeGeometry args={[7.2, 0.012]} />

          <meshBasicMaterial
            color="#38e8ff"
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Bottom light line */}
        <mesh position={[0, -2.36, 0.035]}>
          <planeGeometry args={[5.2, 0.008]} />

          <meshBasicMaterial
            color="#0891b2"
            transparent
            opacity={0.55}
          />
        </mesh>

        {/* Left holographic marker */}
        <mesh position={[-3.82, 1.7, 0.04]}>
          <planeGeometry args={[0.08, 0.8]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Right holographic marker */}
        <mesh position={[3.82, -1.7, 0.04]}>
          <planeGeometry args={[0.08, 0.8]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Corner indicators */}
        <mesh position={[-3.75, 2.15, 0.05]}>
          <planeGeometry args={[0.4, 0.025]} />

          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
          />
        </mesh>

        <mesh position={[3.55, -2.15, 0.05]}>
          <planeGeometry args={[0.4, 0.025]} />

          <meshBasicMaterial
            color="#67e8f9"
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </Float>
  );
}