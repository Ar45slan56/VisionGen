"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, MeshDistortMaterial } from "@react-three/drei";

export default function FloatingShape() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh>
          <torusKnotGeometry args={[1.2, 0.4, 128, 32]} />
          <MeshDistortMaterial
            color="#00ffff"
            distort={0.5}
            speed={3}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
}
