import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GlassALetter } from './GlassALetter';

export function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <GlassALetter />
        </Suspense>
      </Canvas>
    </div>
  );
}
