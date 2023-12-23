import {useRef , useEffect} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import planeScene from '../../assets/3d/plane.glb';

const plane = ({planeScale, planePosition, rotation, isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    let timeoutId;
  
    if (isRotating) {
      actions["Take 001"]?.play();
    } else {
     
      timeoutId = setTimeout(() => {
        actions["Take 001"]?.stop();
      }, 1000); 
    }
  
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [actions, isRotating]);
  

  return (
    <mesh scale={planeScale} position={planePosition} rotation={rotation} {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default plane;
