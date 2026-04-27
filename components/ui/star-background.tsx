"use client";

import { cn } from "@/utils/cn";
import React, { useRef, Suspense, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Create a typed wrapper for the group element
const Group = React.forwardRef<THREE.Group, any>((props, ref) => {
  return React.createElement("group", { ref, ...props });
});
Group.displayName = "Group";

interface StarBackgroundProps {
  starCount?: number;
  [key: string]: any;
}

// Generate sphere positions safely without NaN values
const generateSpherePositions = (
  count: number,
  radius: number,
): Float32Array => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    // Generate random spherical coordinates
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u; // azimuthal angle
    const phi = Math.acos(2 * v - 1); // polar angle
    const r = radius * Math.cbrt(Math.random()); // random radius with cubic distribution

    // Convert to Cartesian coordinates
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    // Ensure no NaN values
    positions[i * 3] = isNaN(x) ? 0 : x;
    positions[i * 3 + 1] = isNaN(y) ? 0 : y;
    positions[i * 3 + 2] = isNaN(z) ? 0 : z;
  }

  return positions;
};

const StarBackground = ({
  starCount = 3200,
  ...props
}: StarBackgroundProps) => {
  const pointsRef = useRef<THREE.Points>(null);
  const sphere = useMemo(
    () => generateSpherePositions(starCount, 1.2),
    [starCount],
  );
  const frameBudgetRef = useRef(0);

  useFrame((_, delta) => {
    frameBudgetRef.current += delta;
    if (frameBudgetRef.current < 1 / 30) return;
    const step = frameBudgetRef.current;
    frameBudgetRef.current = 0;

    if (pointsRef.current) {
      pointsRef.current.rotation.x -= step / 10;
      pointsRef.current.rotation.y -= step / 15;
    }
  });

  return (
    <Group rotation={[0, 0, Math.PI / 4]} {...props}>
      <Points ref={pointsRef} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Group>
  );
};

interface StarsCanvasProps {
  fixed?: boolean;
  className?: string;
}

const StarsCanvas = ({ fixed = true, className }: StarsCanvasProps) => {
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  const starCount = isMobile ? 1700 : 3200;

  return (
    <div
      className={cn(
        "pointer-events-none inset-0 h-full w-full opacity-70",
        fixed ? "fixed z-0" : "absolute z-0",
        className,
      )}
    >
      <Canvas
        dpr={[0.8, 1.25]}
        camera={{ position: [0, 0, 1] }}
        gl={{
          antialias: false,
          depth: false,
          stencil: false,
          powerPreference: "low-power",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <Suspense fallback={null}>
          <StarBackground starCount={starCount} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
