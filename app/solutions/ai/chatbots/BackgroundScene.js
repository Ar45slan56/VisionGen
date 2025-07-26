"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PointMaterial } from "@react-three/drei";

const ParticleLines = ({ count = 180 }) => {
    const pointsRef = useRef();
    const linesRef = useRef();
    const particleData = useRef([]);

    const particles = useMemo(() => {
        const pts = [];
        const data = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 60;
            const y = (Math.random() - 0.5) * 40;
            const z = (Math.random() - 0.5) * 50;
            pts.push(new THREE.Vector3(x, y, z));
            data.push({
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                ),
            });
        }
        particleData.current = data;
        return pts;
    }, [count]);

    const particlePositions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        particles.forEach((p, i) => {
            pos.set([p.x, p.y, p.z], i * 3);
        });
        return pos;
    }, [particles]);

    const linePositionsRef = useRef(new Float32Array());

    useFrame(() => {
        const pos = particlePositions;
        const lines = [];

        // Animate particles
        particles.forEach((p, i) => {
            const v = particleData.current[i].velocity;
            p.add(v);

            // Bounce within boundaries
            if (p.x > 30 || p.x < -30) v.x *= -1;
            if (p.y > 20 || p.y < -20) v.y *= -1;
            if (p.z > 25 || p.z < -25) v.z *= -1;

            // Update geometry buffer
            pos.set([p.x, p.y, p.z], i * 3);
        });

        if (pointsRef.current) {
            pointsRef.current.geometry.attributes.position.needsUpdate = true;
        }

        // Connect nearby particles with lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dist = particles[i].distanceTo(particles[j]);
                if (dist < 3) {
                    lines.push(
                        particles[i].x, particles[i].y, particles[i].z,
                        particles[j].x, particles[j].y, particles[j].z
                    );
                }
            }
        }

        linePositionsRef.current = new Float32Array(lines);
        if (linesRef.current) {
            linesRef.current.geometry.setAttribute(
                "position",
                new THREE.BufferAttribute(linePositionsRef.current, 3)
            );
        }
    });

    return (
        <>
            {/* White Dots */}
            <points ref={pointsRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particlePositions.length / 3}
                        array={particlePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <PointMaterial
                    color="#ffffff"
                    size={0.15}
                    sizeAttenuation
                    depthWrite={false}
                    transparent
                />
            </points>

            {/* Cyan Lines */}
            <lineSegments ref={linesRef}>
                <bufferGeometry />
                <lineBasicMaterial color="#00ffff" transparent opacity={0.25} />
            </lineSegments>
        </>
    );
};

const BackgroundScene = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 25], fov: 60 }}
                style={{ background: "#374659ff" }} // background color here
            >
                <ambientLight intensity={0.4} />
                <ParticleLines count={180} />
            </Canvas>

        </div>
    );
};

export default BackgroundScene;
