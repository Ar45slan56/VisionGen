"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// ✅ Component that holds the animated points (MUST be inside Canvas)
function DotsGroup() {
  const ref = useRef();

  const geometry = useMemo(() => {
    const points = [];
    for (let i = 0; i < 3000; i++) {
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        )
      );
    }
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={ref}>
      <Points geometry={geometry}>
        <PointMaterial
          transparent
          color="#00ffc3"
          size={0.02}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// ✅ Main Canvas wrapper
export default function AnimatedDots() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 6], fov: 75 }}
    >
      <DotsGroup />
    </Canvas>
  );
}
