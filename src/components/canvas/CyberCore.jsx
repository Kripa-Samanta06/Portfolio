import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export default function CyberCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Gentle floating and mouse parallax
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        state.pointer.x * 0.45 + time * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -state.pointer.y * 0.3,
        0.05
      );
    }

    // Individual orbital rings rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.4;
      ring1Ref.current.rotation.y = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.35;
      ring2Ref.current.rotation.z = time * 0.25;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -time * 0.3;
      ring3Ref.current.rotation.z = -time * 0.4;
    }

    // Core pulsing scale
    if (coreRef.current) {
      const s = 1 + Math.sin(time * 2) * 0.04;
      coreRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating inner energy sphere */}
      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.35, 3]} />
          <MeshDistortMaterial
            color="#00f0ff"
            emissive="#005577"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            distort={0.35}
            speed={2.2}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Holographic Wireframe Outer Shell */}
      <mesh>
        <dodecahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#6d28d9"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Orbiting Ring 1 (Cyan) */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.3, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.2}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Ring 2 (Purple) */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.6, 0.02, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.1}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Ring 3 (Deep Electric Blue) */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.9, 0.018, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={1.0}
          roughness={0.2}
        />
      </mesh>

      {/* Orbiting Tech Satellite Spheres */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        const radius = 2.4 + (i % 2) * 0.4;
        return (
          <group key={i} rotation={[0, angle, (i * Math.PI) / 4]}>
            <Sphere args={[0.08, 16, 16]} position={[radius, 0, 0]}>
              <meshStandardMaterial
                color={i % 2 === 0 ? "#00f0ff" : "#ec4899"}
                emissive={i % 2 === 0 ? "#00f0ff" : "#ec4899"}
                emissiveIntensity={2}
              />
            </Sphere>
          </group>
        );
      })}
    </group>
  );
}
