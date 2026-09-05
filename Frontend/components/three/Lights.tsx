"use client";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <pointLight
        position={[0, 4, 3]}
        intensity={8}
        distance={15}
        color="#168fc0"
      />

      <pointLight
        position={[-6, 1, -2]}
        intensity={5}
        distance={12}
        color="#075a9c"
      />

      <pointLight
        position={[6, 2, -3]}
        intensity={5}
        distance={12}
        color="#0bb8e8"
      />
    </>
  );
}