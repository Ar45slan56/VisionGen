"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function RobotModel(props) {
  const { scene } = useGLTF("/models/robot.glb");
  const modelRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (modelRef.current) {
      modelRef.current.rotation.y = elapsed * 0.5; // slow spin
      modelRef.current.position.y = Math.sin(elapsed * 1.2) * 0.2; // float up and down
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={1.5}
      {...props}
    />
  );
}

useGLTF.preload("/models/robot.glb");
