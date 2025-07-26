"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// Component: Animated Rotating Particles on Sphere
function AnimatedParticles() {
  const pointsRef = useRef();

  // Create positions for a sphere
  const sphere = new THREE.SphereGeometry(1.5, 80, 80);
  const positions = new Float32Array(sphere.attributes.position.count * 3);
  for (let i = 0; i < sphere.attributes.position.count; i++) {
    positions.set(sphere.attributes.position.array.slice(i * 3, i * 3 + 3), i * 3);
  }

  // GSAP animation for continuous rotation
  useEffect(() => {
    gsap.to(pointsRef.current.rotation, {
      y: Math.PI * 2,
      duration: 40,
      repeat: -1,
      ease: "linear",
    });
  }, []);

  // Auto rotation using R3F frame
  useFrame(({ clock }) => {
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          color="#00ffee"
          size={0.01}
          sizeAttenuation
          transparent
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Main Export: Fullscreen Animated Background with Overlay
export default function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4], fov: 70 }}>
        <ambientLight intensity={0.3} />
        <AnimatedParticles />
        <Preload all />
      </Canvas>

      {/* Optional Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000cc] via-transparent to-[#000000cc] pointer-events-none" />
    </div>
  );
}
