/* eslint-disable react/prop-types */
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import './Cube.css';

const Box = ({ color, position }) => {
  return (
    <mesh position={position}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
};

const Plane = () => {
  return (
    <mesh position={[0, -4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
};


const Cube = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight 
        position={[10, 15, 10]} angle={0.3}
      />
      <Plane />
      <Box color={'lightpink'} position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Cube;
