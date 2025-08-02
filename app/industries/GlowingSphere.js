"use client";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Plane, MeshDistortMaterial } from '@react-three/drei';

export default function GlowingSphere() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />

        <Plane args={[4, 2]} rotation={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#00ffff"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
            metalness={0.9}
          />
        </Plane>

        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}
