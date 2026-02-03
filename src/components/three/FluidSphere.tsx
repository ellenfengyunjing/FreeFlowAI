import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

export function FluidSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, mouse } = useThree();
  
  // Create sphere geometry with high resolution for smooth deformation
  const geometry = useMemo(() => {
    return new THREE.SphereGeometry(1.5, 128, 128);
  }, []);
  
  // Glass material with dispersion for rainbow effect
  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 1,
      thickness: 3,
      ior: 1.5,
      dispersion: 1.2,
      clearcoat: 1,
      clearcoatRoughness: 0,
      attenuationColor: new THREE.Color(0xffffff),
      attenuationDistance: 5,
    });
  }, []);

  // Store original positions
  const originalPositions = useMemo(() => {
    const pos = geometry.attributes.position;
    const arr = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      arr[i * 3] = pos.getX(i);
      arr[i * 3 + 1] = pos.getY(i);
      arr[i * 3 + 2] = pos.getZ(i);
    }
    return arr;
  }, [geometry]);
  
  // Animation - fluid deformation
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const positions = meshRef.current.geometry.attributes.position;
      
      // Apply fluid deformation
      for (let i = 0; i < positions.count; i++) {
        const ox = originalPositions[i * 3];
        const oy = originalPositions[i * 3 + 1];
        const oz = originalPositions[i * 3 + 2];
        
        // Calculate spherical coordinates
        const r = Math.sqrt(ox * ox + oy * oy + oz * oz);
        const theta = Math.atan2(oy, ox);
        const phi = Math.acos(oz / r);
        
        // Apply multiple wave deformations for fluid effect
        const wave1 = Math.sin(theta * 3 + time * 0.8) * 0.08;
        const wave2 = Math.cos(phi * 4 + time * 0.6) * 0.06;
        const wave3 = Math.sin(theta * 5 + phi * 3 + time * 1.2) * 0.04;
        const wave4 = Math.cos(theta * 2 - time * 0.5) * 0.05;
        
        const deformation = 1 + wave1 + wave2 + wave3 + wave4;
        
        positions.setXYZ(
          i,
          ox * deformation,
          oy * deformation,
          oz * deformation
        );
      }
      
      positions.needsUpdate = true;
      meshRef.current.geometry.computeVertexNormals();
      
      // Gentle rotation
      meshRef.current.rotation.y = time * 0.1;
      meshRef.current.rotation.x = Math.sin(time * 0.15) * 0.1;
      
      // Mouse interaction
      const targetX = mouse.x * 0.2;
      const targetY = mouse.y * 0.2;
      meshRef.current.rotation.y += targetX * 0.3;
      meshRef.current.rotation.x -= targetY * 0.2;
    }
  });
  
  return (
    <>
      {/* Main fluid sphere */}
      <mesh 
        ref={meshRef} 
        geometry={geometry} 
        material={material}
        position={[0, 0, 0]}
        scale={viewport.width > 6 ? 1.3 : 0.9}
      />
      
      {/* Cyan light */}
      <pointLight
        position={[-4, 3, 4]}
        intensity={60}
        color="#00f0ff"
        distance={20}
      />
      
      {/* Purple light */}
      <pointLight
        position={[4, -2, 4]}
        intensity={50}
        color="#a855f7"
        distance={20}
      />
      
      {/* Pink light */}
      <pointLight
        position={[0, 4, -3]}
        intensity={40}
        color="#ec4899"
        distance={20}
      />
      
      {/* Ambient light */}
      <ambientLight intensity={0.4} />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
    </>
  );
}
