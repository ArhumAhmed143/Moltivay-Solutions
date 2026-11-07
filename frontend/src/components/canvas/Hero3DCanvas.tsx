'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set up Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 4.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      return;
    }

    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. Central Wireframe Geometry: Torus Knot + Icosahedron Core
    const torusGeometry = new THREE.TorusKnotGeometry(1.2, 0.35, 120, 24, 2, 3);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x7c5cff,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
      emissive: 0x22134a,
      emissiveIntensity: 0.5,
    });
    const torusKnot = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torusKnot);

    // 2. Inner Glowing Icosahedron Core
    const coreGeometry = new THREE.IcosahedronGeometry(0.7, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      wireframe: true,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.4,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    scene.add(coreMesh);

    // 3. Floating Stardust Particle Field (1200 particles)
    const particleCount = 750;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x22d3ee);
    const violetColor = new THREE.Color(0x7c5cff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const mixed = Math.random() > 0.5 ? cyanColor : violetColor;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 3, 10);
    cyanLight.position.set(3, 3, 2);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x7c5cff, 3, 10);
    violetLight.position.set(-3, -2, 2);
    scene.add(violetLight);

    // Mouse interactive target rotation
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetX = mouseX * 0.45;
      targetY = mouseY * 0.45;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (!reducedMotion) {
        torusKnot.rotation.x += delta * 0.25;
        torusKnot.rotation.y += delta * 0.35;

        coreMesh.rotation.x -= delta * 0.3;
        coreMesh.rotation.y -= delta * 0.4;

        particles.rotation.y += delta * 0.08;
      }

      // Smooth mouse follow parallax
      torusKnot.position.x += (targetX - torusKnot.position.x) * 0.05;
      torusKnot.position.y += (targetY - torusKnot.position.y) * 0.05;
      coreMesh.position.x = torusKnot.position.x;
      coreMesh.position.y = torusKnot.position.y;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      torusGeometry.dispose();
      torusMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none opacity-85"
    />
  );
};

export default Hero3DCanvas;
