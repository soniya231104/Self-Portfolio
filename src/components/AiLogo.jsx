import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const AiLogo = ({ position }) => {
  const meshRef = useRef();

  // Animate rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
  });

  return (
    <mesh position={position} ref={meshRef}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial
        color="#00ffcc"
        emissive="#00ffaa"
        emissiveIntensity={0.6}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
};

export default AiLogo;
