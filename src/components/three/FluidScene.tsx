import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FluidSphere } from './FluidSphere';

export function FluidScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <FluidSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
