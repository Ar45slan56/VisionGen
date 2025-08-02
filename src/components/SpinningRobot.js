"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RobotModel from "../../public/models/RobotModel";

export default function SpinningRobot() {
  return (
    <Canvas style={{ width: "100%", height: "100%" }} camera={{ position: [0, 0, 3.5] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <RobotModel />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
