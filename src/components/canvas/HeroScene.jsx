import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CyberCore from './CyberCore';
import ParticleConstellation from './ParticleConstellation';

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
        <div className="absolute inset-2 rounded-full border-2 border-purple-500/20 border-b-purple-400 animate-spin-slow" />
      </div>
    </div>
  );
}

export default function HeroScene() {
  return (
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-600/15 pointer-events-none rounded-3xl" />
      
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
          className="cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-6, -4, -3]} intensity={2.5} color="#00f0ff" />
          <pointLight position={[6, 4, 3]} intensity={3} color="#a855f7" />
          <pointLight position={[0, -5, 2]} intensity={1.5} color="#3b82f6" />

          <CyberCore />
          <ParticleConstellation count={320} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.6}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.3}
          />
        </Canvas>
      </Suspense>

    </div>
  );
}
