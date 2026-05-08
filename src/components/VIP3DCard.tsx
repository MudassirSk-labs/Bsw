"use client";

import { useRef, useMemo, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { RoundedBox, Text, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";

// ============================================================
// Fireworks Particle System
// ============================================================
interface Particle {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  color: THREE.Color;
  life: number;
  maxLife: number;
  size: number;
}

function Fireworks({ count = 50 }: { count?: number }) {
  const particles = useRef<Particle[]>([]);
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const positionsRef = useRef<Float32Array>(new Float32Array(count * 3));
  const colorsRef = useRef<Float32Array>(new Float32Array(count * 3));
  const sizesRef = useRef<Float32Array>(new Float32Array(count));

  const palette = useMemo(
    () => [
      new THREE.Color("#ffd700"), // gold
      new THREE.Color("#ff6b6b"), // red
      new THREE.Color("#ff4757"), // crimson
      new THREE.Color("#ffa502"), // orange
      new THREE.Color("#ffffff"), // white
      new THREE.Color("#ffecd2"), // champagne
      new THREE.Color("#e63946"), // BSW red
      new THREE.Color("#f4a261"), // BSW gold
    ],
    []
  );

  // Initialize fireworks burst
  const burst = useCallback(() => {
    const burstCount = Math.floor(Math.random() * 60) + 30;
    const center = new THREE.Vector3(
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 2 - 1,
      (Math.random() - 0.5) * 6
    );
    const baseColor = palette[Math.floor(Math.random() * palette.length)];

    for (let i = 0; i < burstCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const speed = 2 + Math.random() * 3;
      const color = baseColor.clone().lerp(
        palette[Math.floor(Math.random() * palette.length)],
        Math.random() * 0.4
      );

      particles.current.push({
        position: center.clone(),
        velocity: new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta) * speed,
          Math.sin(phi) * Math.sin(theta) * speed + 2,
          Math.cos(phi) * speed
        ),
        color,
        life: 0,
        maxLife: 1 + Math.random() * 1.5,
        size: 0.08 + Math.random() * 0.15,
      });
    }
  }, [palette]);

  // Spawn initial bursts
  useEffect(() => {
    const initialBursts = 3;
    for (let i = 0; i < initialBursts; i++) {
      setTimeout(() => burst(), i * 300);
    }
  }, [burst]);

  // Auto-burst on timer
  useEffect(() => {
    const timer = setInterval(() => {
      burst();
    }, 2000);
    return () => clearInterval(timer);
  }, [burst]);

  useFrame((_, delta) => {
    const positions = positionsRef.current;
    const colors = colorsRef.current;
    const sizes = sizesRef.current;
    let idx = 0;

    // Update particles
    for (let i = particles.current.length - 1; i >= 0; i--) {
      const p = particles.current[i];
      p.life += delta;

      if (p.life >= p.maxLife) {
        particles.current.splice(i, 1);
        continue;
      }

      const progress = p.life / p.maxLife;
      const gravity = -4.9 * progress;

      p.position.x += p.velocity.x * delta;
      p.position.y += (p.velocity.y + gravity) * delta;
      p.position.z += p.velocity.z * delta;

      // Fade out
      const alpha = 1 - progress * progress;
      const fadeColor = p.color.clone().multiplyScalar(alpha);

      if (idx < count) {
        positions[idx * 3] = p.position.x;
        positions[idx * 3 + 1] = p.position.y;
        positions[idx * 3 + 2] = p.position.z;
        colors[idx * 3] = fadeColor.r;
        colors[idx * 3 + 1] = fadeColor.g;
        colors[idx * 3 + 2] = fadeColor.b;
        sizes[idx] = p.size * (1 + progress * 0.5);
        idx++;
      }
    }

    // Fill remaining with dead particles (off screen)
    while (idx < count) {
      positions[idx * 3] = 999;
      positions[idx * 3 + 1] = 999;
      positions[idx * 3 + 2] = 999;
      colors[idx * 3] = 0;
      colors[idx * 3 + 1] = 0;
      colors[idx * 3 + 2] = 0;
      sizes[idx] = 0;
      idx++;
    }

    if (geometryRef.current) {
      geometryRef.current.attributes.position.needsUpdate = true;
      geometryRef.current.attributes.color.needsUpdate = true;
      geometryRef.current.attributes.size.needsUpdate = true;
    }
  });

  return (
      <points>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            args={[positionsRef.current, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colorsRef.current, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[sizesRef.current, 1]}
          />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

// ============================================================
// 3D Premium VIP Card
// ============================================================
function VIPCard() {
  const groupRef = useRef<THREE.Group>(null);
  const shimmerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Load logo texture
  const logoTexture = useLoader(TextureLoader, "/images/logo.png");

  // Auto-rotate and shimmer
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.25) * 0.3;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.15) * 0.08;
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.4) * 0.15;
    }

    // Shimmer effect on the card face
    if (shimmerRef.current) {
      const t = (Math.sin(clock.getElapsedTime() * 0.6) + 1) * 0.5;
      shimmerRef.current.position.x = -1.2 + t * 2.4;
    }
  });

  // Scale based on viewport
  const scale = Math.min(viewport.width / 4.5, 1.6);

  return (
    <group ref={groupRef} scale={scale}>
      {/* Outer glow ring */}
      <mesh ref={glowRef}>
        <ringGeometry args={[1.05, 1.6, 64]} />
        <meshBasicMaterial
          color="#ffd700"
          transparent
          opacity={0.06}
          side={THREE.DoubleSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        {/* Card body - Rounded Box */}
        <RoundedBox args={[2.2, 3.2, 0.12]} radius={0.12} smoothness={8}>
          <meshPhysicalMaterial
            color="#0f1923"
            metalness={0.85}
            roughness={0.2}
            clearcoat={0.8}
            clearcoatRoughness={0.3}
            envMapIntensity={1.5}
          />
        </RoundedBox>

        {/* Gold border trim */}
        <RoundedBox args={[2.25, 3.25, 0.04]} radius={0.14} smoothness={8}>
          <meshPhysicalMaterial
            color="#ffd700"
            metalness={1}
            roughness={0.15}
            transparent
            opacity={0.5}
          />
        </RoundedBox>

        {/* Card face - front panel */}
        <RoundedBox
          args={[2.0, 3.0, 0.06]}
          radius={0.08}
          smoothness={8}
          position={[0, 0, 0.08]}
        >
          <meshPhysicalMaterial
            color="#1a1a2e"
            metalness={0.3}
            roughness={0.6}
          />
        </RoundedBox>

        {/* Logo on card */}
        <sprite position={[0, 0.8, 0.12]} scale={[0.8, 0.8, 1]}>
          <spriteMaterial
            map={logoTexture}
            transparent
            opacity={0.95}
            depthTest={false}
          />
        </sprite>

        {/* VIP Text */}
        <Text
          position={[0, -0.15, 0.12]}
          fontSize={0.4}
          font="/fonts/Geist-Bold.woff"
          color="#ffd700"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.15}
        >
          VIP
        </Text>

        {/* Subtitle */}
        <Text
          position={[0, -0.65, 0.12]}
          fontSize={0.13}
          color="#8899aa"
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.08}
        >
          PREMIUM MEMBERSHIP
        </Text>

        {/* Gold line divider */}
        <mesh position={[0, -0.4, 0.12]}>
          <planeGeometry args={[1.2, 0.008]} />
          <meshBasicMaterial color="#ffd700" transparent opacity={0.5} />
        </mesh>

        {/* Bottom text */}
        <Text
          position={[0, -1.1, 0.12]}
          fontSize={0.1}
          color="#556677"
          anchorX="center"
          anchorY="middle"
        >
          BSW OUTLET
        </Text>

        {/* Shimmer sweep */}
        <mesh ref={shimmerRef} position={[-1.5, 0, 0.14]}>
          <planeGeometry args={[0.4, 3.5]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.04}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </Float>

      {/* Floating particles around card */}
      <Sparkles
        count={30}
        scale={3}
        size={0.03}
        speed={0.3}
        color="#ffd700"
        opacity={0.4}
      />
    </group>
  );
}

// ============================================================
// Camera Controller
// ============================================================
function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return null;
}

// ============================================================
// Main VIP3DCard Component (exported)
// ============================================================
export default function VIP3DCard() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a] via-[#0f0f2e] to-[#1a0a2e]" />

      {/* Gold vignette overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,215,0,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        <CameraController />
        <ambientLight intensity={0.3} />
        <pointLight position={[2, 3, 4]} intensity={1.5} color="#ffd700" />
        <pointLight position={[-2, -1, 3]} intensity={0.8} color="#e63946" />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={0.5}
          intensity={1}
          color="#ffffff"
        />
        <VIPCard />
        <Fireworks count={150} />
      </Canvas>
    </div>
  );
}
