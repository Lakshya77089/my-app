"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function RippleImage() {
  return (
    <div className="absolute w-full h-full object-cover">
      <Canvas orthographic camera={{ zoom: 100, position: [0, 0, 100] }}>
        <RipplePlane />
      </Canvas>
    </div>
  );
}

function RipplePlane() {
  const texture = useLoader(THREE.TextureLoader, "/section1/background-rectangle.png");
  const viewport = useThree((state) => state.viewport);

  const scale = useMemo(() => [viewport.width, viewport.height, 1], [viewport]);

  return (
    <mesh scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
