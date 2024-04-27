import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./ornament_font_letter_a/scene.gltf");

  return (
    <primitive object={earth.scene} scale={.9} position-x={0} position-y={0} rotation-x={5} rotation-y={3} />
  );
};

const EarthCanvas = () => {
  return (
    <>

    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 5, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
    </>
  );
};

export default EarthCanvas;