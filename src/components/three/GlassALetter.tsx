import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, SpotLight } from '@react-three/drei';
import * as THREE from 'three';

export function GlassALetter() {
  const meshRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.SpotLight>(null);
  const { viewport, mouse } = useThree();
  
  // Create A shape using Shape and ExtrudeGeometry
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Define A shape
    const width = 2;
    const height = 2.5;
    const thickness = 0.4;
    
    // Left leg
    shape.moveTo(-width/2, -height/2);
    shape.lineTo(-width/2 + thickness, -height/2);
    shape.lineTo(-0.1, height/2 - 0.3);
    shape.lineTo(-0.3, height/2 - 0.3);
    shape.lineTo(-width/2, -height/2);
    
    // Right leg
    shape.moveTo(width/2, -height/2);
    shape.lineTo(width/2 - thickness, -height/2);
    shape.lineTo(0.1, height/2 - 0.3);
    shape.lineTo(0.3, height/2 - 0.3);
    shape.lineTo(width/2, -height/2);
    
    // Crossbar
    const crossY = 0;
    const crossWidth = 0.8;
    const crossThickness = 0.35;
    shape.moveTo(-crossWidth/2, crossY - crossThickness/2);
    shape.lineTo(crossWidth/2, crossY - crossThickness/2);
    shape.lineTo(crossWidth/2, crossY + crossThickness/2);
    shape.lineTo(-crossWidth/2, crossY + crossThickness/2);
    shape.lineTo(-crossWidth/2, crossY - crossThickness/2);
    
    const extrudeSettings = {
      steps: 2,
      depth: 0.6,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5,
    };
    
    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, []);
  
  // Glass material with dispersion for rainbow effect
  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transmission: 1,
      thickness: 2.5,
      ior: 1.5,
      dispersion: 0.8,
      clearcoat: 1,
      clearcoatRoughness: 0,
      attenuationColor: new THREE.Color(0xffffff),
      attenuationDistance: 5,
    });
  }, []);
  
  // Animation
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
      
      // Mouse interaction
      const targetX = mouse.x * 0.3;
      const targetY = mouse.y * 0.2;
      meshRef.current.rotation.y += targetX * 0.5;
      meshRef.current.rotation.x -= targetY * 0.3;
    }
    
    // Animate light position
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 3 - 2;
      lightRef.current.position.y = Math.cos(state.clock.elapsedTime * 0.3) * 1 + 2;
      lightRef.current.target.position.set(0, 0, 0);
      lightRef.current.target.updateMatrixWorld();
    }
  });
  
  return (
    <>
      {/* Main glass A */}
      <mesh 
        ref={meshRef} 
        geometry={geometry} 
        material={material}
        position={[0, 0, 0]}
        scale={viewport.width > 6 ? 1.2 : 0.8}
      >
      </mesh>
      
      {/* Light beam passing through */}
      <SpotLight
        ref={lightRef}
        position={[-3, 3, 5]}
        angle={0.4}
        penumbra={0.5}
        intensity={80}
        distance={20}
        color="#00f0ff"
        castShadow
      />
      
      {/* Secondary warm light for rainbow effect */}
      <SpotLight
        position={[3, -2, 4]}
        angle={0.5}
        penumbra={0.6}
        intensity={40}
        distance={15}
        color="#ff6b9d"
      />
      
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      
      {/* Environment for reflections */}
      <Environment preset="city" />
      
      {/* Rainbow glow effect */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[8, 8]} />
        <meshBasicMaterial 
          color="#00f0ff"
          transparent
          opacity={0.05}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
