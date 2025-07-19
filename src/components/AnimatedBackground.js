"use client";

import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Dynamically import Canvas without SSR
const Canvas = dynamic(() => import("./AnimatedCanvas"), {
  ssr: false,
});

const ParticleNetwork = () => {
  const groupRef = useRef();
  const count = 250;

  const { geometry, lineSegments } = useMemo(() => {
    const positions = [];
    const points = [];

    // Generate random points
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 10;
      points.push(new THREE.Vector3(x, y, z));
      positions.push(x, y, z);
    }

    // Geometry for points
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

    // Line segments between close points
    const lineVertices = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dist = points[i].distanceTo(points[j]);
        if (dist < 1.8) {
          lineVertices.push(points[i].x, points[i].y, points[i].z);
          lineVertices.push(points[j].x, points[j].y, points[j].z);
        }
      }
    }

    const lineSegments = new THREE.BufferGeometry();
    lineSegments.setAttribute("position", new THREE.Float32BufferAttribute(lineVertices, 3));

    return { geometry, lineSegments };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={geometry}>
        <primitive
          object={new THREE.PointsMaterial({
            color: "#00ffc3",
            size: 0.06,
            sizeAttenuation: true,
            transparent: true,
          })}
        />
      </points>
      <lineSegments geometry={lineSegments}>
        <primitive
          object={new THREE.LineBasicMaterial({
            color: "#00ffc3",
            opacity: 0.3,
            transparent: true,
          })}
        />
      </lineSegments>
    </group>
  );
};

const AnimatedBackground = () => {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, zIndex: 0 }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <ambientLight intensity={0.5} />
      <ParticleNetwork />
    </Canvas>
  );
};

export default AnimatedBackground;
