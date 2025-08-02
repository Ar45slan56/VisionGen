"use client";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const AnimatedBackground = () => {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0 }} camera={{ position: [0, 0, 5], fov: 75 }}>
      <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
    </Canvas>
  );
};

export default AnimatedBackground;
