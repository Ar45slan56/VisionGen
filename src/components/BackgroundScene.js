"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Ring, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const GlowingNetwork = () => {
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 12; // Spread across full space
  }

  return (
    <Points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <PointMaterial
        color="#00ffff"
        size={0.08}
        transparent
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

const GlowingRings = () => {
  return (
    <>
      <Ring args={[1.5, 1.7, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#0ff" emissive="#00ffff" emissiveIntensity={2} />
      </Ring>
      <Ring args={[2.5, 2.7, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#6ef1ff" emissive="#4ff" emissiveIntensity={1.2} />
      </Ring>
      <Ring args={[3.5, 3.7, 64]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#aaf" emissive="#ccf" emissiveIntensity={0.8} />
      </Ring>
    </>
  );
};

const BackgroundScene = () => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <Stars radius={100} depth={60} count={7000} factor={5} fade speed={1.5} />
          <GlowingNetwork />
          <GlowingRings />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.2} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
