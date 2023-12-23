import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import {useAnimations, useGLTF } from '@react-three/drei';
import birdScene from '../../assets/3d/bird.glb';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);
  

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock , camera }) => {
    const radius = 40; // Radius of the circle
    const speed = 0.5; // Speed of the rotation

    if (birdRef.current.position.x > camera.position.x + 10) {
      
      birdRef.current.rotation.y = Math.PI;
  
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = 0;
     
    }
  
    // Circular motion
    birdRef.current.position.x = Math.cos(clock.elapsedTime * speed) * radius;
    birdRef.current.position.z = Math.sin(clock.elapsedTime * speed) * radius;
  
    // Set the bird's rotation so that it always points to the right
    birdRef.current.rotation.y = -Math.PI / 2 - (clock.elapsedTime * speed);
  });
  
  

  return (
    <mesh position={[4, 3, 1]} scale={[0.008, 0.008, 0.008]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
