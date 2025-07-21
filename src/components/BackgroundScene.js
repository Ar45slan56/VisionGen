"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import gsap from "gsap";
import styles from "../styles/BackgroundScene.module.css";

const RobotModel = () => {
  const group = useRef();
  const { scene } = useGLTF("/models/robot.glb");

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  return <primitive object={scene} ref={group} scale={1.5} position={[0, -1, 0]} />;
};

const FloatingText = () => {
  const helloRef = useRef();
  const aiRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    tl.fromTo(helloRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })
      .to(helloRef.current, { opacity: 0, y: -20, duration: 1, delay: 1.5 })
      .fromTo(aiRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <div className={styles.textOverlay}>
      <h1 ref={helloRef}>Hello, I am your AI Assistant</h1>
      <h2 ref={aiRef}>Welcome to the AI Revolutional</h2>
    </div>
  );
};

const BackgroundScene = () => {
  return (
    <>
      <div className={styles.canvasWrapper}>
        <Canvas camera={{ position: [0, 1.5, 3.5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <RobotModel />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <FloatingText />
    </>
  );
};

export default BackgroundScene;
