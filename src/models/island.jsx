/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Michał Solarek (https://sketchfab.com/misiek13)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-little-japanese-town-street-200fc33b8a2b4da98e71590feeb255a8
Title: Stylized Little Japanese Town Street
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame , useThree } from '@react-three/fiber'
import islandScene from '../../assets/3d/stylized_little_japanese_town_street.glb';
import React from 'react';


import { a } from '@react-spring/three'

const island = ({isRotating, setIsRotating, setCurrentStage, currentFocusPoint, ...props}) => {

  const islandRef = useRef();
  const { nodes, materials } = useGLTF(islandScene);
  const {gl, viewport} = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  };
  
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };
  
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
  
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };
  
  const handleKeyDown = (e) => {
  
    if (e.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (e.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.05 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };
  
  const handleKeyup = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup" , handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("keyup", handleKeyup);

    return () => {
        canvas.removeEventListener("pointerdown", handlePointerDown);
        canvas.removeEventListener("pointerup" , handlePointerUp);
        canvas.removeEventListener("pointermove", handlePointerMove);
        canvas.removeEventListener("keydown", handleKeyDown);
        canvas.removeEventListener("keyup", handleKeyup);

    }
  }, [gl , handlePointerDown , handlePointerUp , handlePointerMove]);

  useFrame(()=> {
    if(!isRotating) {
        rotationSpeed.current *= dampingFactor;
        if(Math.abs(rotationSpeed.current) < 0.001) {
            rotationSpeed.current = 0;
        }
        islandRef.current.rotation.y += rotationSpeed.current;
        
    } else {
        const rotation = islandRef.current.rotation.y;
        const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        switch (true) {
          case normalizedRotation >= 0 && normalizedRotation < 1.57:
              setCurrentStage(1);
              break;
          case normalizedRotation >= 1.57 && normalizedRotation < 3.14:
              setCurrentStage(4);
              break;
          case normalizedRotation >= 3.14 && normalizedRotation < 4.71:
              setCurrentStage(3);
              break;
          case normalizedRotation >= 4.71 && normalizedRotation <= 6.28:
              // or simply "case normalizedRotation >= 4.71:" if normalizedRotation never exceeds 6.28
              setCurrentStage(2);
              break;
          default:
              setCurrentStage(null);
      }
      
    }
  });

  return (
    <a.group ref={islandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-20.22, 305.439, -19.554]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.54}
          >
            <group position={[-96.786, -52.619, -120.32]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_3.geometry}
                material={materials["13___Default"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.defaultMaterial_4.geometry}
                material={materials["13___Default"]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials["08___Default"]}
              position={[50.984, -213.906, -116.617]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials["09___Default"]}
              position={[90.99, -81.507, -120.251]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials["19___Default"]}
              position={[-70.374, 170.437, -120.251]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_5.geometry}
              material={materials["14___Default"]}
              position={[89.515, 123.647, -120.251]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_6.geometry}
              material={materials["15___Default"]}
              position={[81.404, 200.691, -120.251]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_7.geometry}
              material={materials["01___Default"]}
              position={[91.323, 184.667, -124.505]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_8.geometry}
              material={materials["20___Default"]}
              position={[-21.302, 15.657, -119.547]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.999}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial_9.geometry}
              material={materials["07___Default"]}
              position={[-75.078, -189.472, -120.251]}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
}

export default island




