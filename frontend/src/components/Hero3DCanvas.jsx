import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Hero3DCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 5, 28);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 2. Interactive 3D Particle Wave Grid
    const cols = 45;
    const rows = 35;
    const count = cols * rows;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colElectric = new THREE.Color('#2563eb');
    const colLightBlue = new THREE.Color('#60a5fa');
    const colCyan = new THREE.Color('#06b6d4');

    let idx = 0;
    const spacing = 1.4;
    const startX = -((cols - 1) * spacing) / 2;
    const startZ = -((rows - 1) * spacing) / 2 - 2;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = startX + i * spacing;
        const z = startZ + j * spacing;
        const y = 0;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = y;
        positions[idx * 3 + 2] = z;

        const mixed = i % 2 === 0 ? colElectric : (j % 2 === 0 ? colLightBlue : colCyan);
        colors[idx * 3] = mixed.r;
        colors[idx * 3 + 1] = mixed.g;
        colors[idx * 3 + 2] = mixed.b;

        idx++;
      }
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circular particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(37, 99, 235, 1)');
    grad.addColorStop(0.4, 'rgba(96, 165, 250, 0.7)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.85,
      map: pTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.NormalBlending,
      depthWrite: false,
    });

    const particleWave = new THREE.Points(particleGeom, particleMat);
    particleWave.rotation.x = 0.4;
    scene.add(particleWave);

    // 3. Floating 3D Tech Objects Group (React Atom, Node Polygon, AI Chip)
    const techGroup = new THREE.Group();
    scene.add(techGroup);

    // 3A. React 3D Atom Model
    const reactGroup = new THREE.Group();
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const ringGeom = new THREE.TorusGeometry(2.4, 0.04, 16, 60);

    const orbit1 = new THREE.Mesh(ringGeom, ringMat);
    orbit1.rotation.x = Math.PI / 3;
    const orbit2 = new THREE.Mesh(ringGeom, ringMat);
    orbit2.rotation.y = Math.PI / 3;
    const orbit3 = new THREE.Mesh(ringGeom, ringMat);
    orbit3.rotation.z = Math.PI / 3;

    const coreSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 24, 24),
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.8 })
    );

    reactGroup.add(orbit1, orbit2, orbit3, coreSphere);
    reactGroup.position.set(16, 3, -4);
    reactGroup.scale.set(0.9, 0.9, 0.9);
    techGroup.add(reactGroup);

    // 3B. Node.js Hexagonal Geometric Mesh
    const nodeGeom = new THREE.IcosahedronGeometry(2, 1);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
    nodeMesh.position.set(-16, 2, -6);
    techGroup.add(nodeMesh);

    // 3C. AI Neural Microchip 3D Block
    const chipGroup = new THREE.Group();
    const chipBaseGeom = new THREE.BoxGeometry(2.6, 0.4, 2.6);
    const chipBaseMat = new THREE.MeshBasicMaterial({
      color: 0x0f172a,
      transparent: true,
      opacity: 0.7,
    });
    const chipBase = new THREE.Mesh(chipBaseGeom, chipBaseMat);

    const chipWireGeom = new THREE.BoxGeometry(2.62, 0.42, 2.62);
    const chipWireMat = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    const chipWire = new THREE.Mesh(chipWireGeom, chipWireMat);

    const chipCore = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.45, 1.2),
      new THREE.MeshBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.9 })
    );

    chipGroup.add(chipBase, chipWire, chipCore);
    chipGroup.position.set(0, -6, 2);
    chipGroup.rotation.x = 0.5;
    chipGroup.rotation.y = 0.4;
    techGroup.add(chipGroup);

    // 4. Mouse Coordinates & Parallax Tracking
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // 5. Responsive Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 6. Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera parallax
      camera.position.x = mouse.x * 3.5;
      camera.position.y = 5 + mouse.y * 2.5;
      camera.lookAt(0, 0, 0);

      // Animate 3D Particle Wave
      const posArray = particleGeom.attributes.position.array;
      let pIdx = 0;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const u = i / cols;
          const v = j / rows;
          // Dual sine wave + mouse ripple
          const wave1 = Math.sin(u * 5 + time * 1.5) * 1.2;
          const wave2 = Math.cos(v * 4 + time * 1.2) * 0.9;
          const mouseDist = Math.hypot(posArray[pIdx * 3] - mouse.x * 12, posArray[pIdx * 3 + 2] - mouse.y * 8);
          const mouseBump = mouseDist < 10 ? Math.sin((10 - mouseDist) * 0.6) * 1.5 : 0;

          posArray[pIdx * 3 + 1] = wave1 + wave2 + mouseBump - 3.5;
          pIdx++;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;

      // Float and rotate 3D Tech Icons
      reactGroup.rotation.x += 0.008;
      reactGroup.rotation.y += 0.012;
      reactGroup.position.y = 3 + Math.sin(time * 1.3) * 0.6;

      nodeMesh.rotation.x += 0.006;
      nodeMesh.rotation.y += 0.008;
      nodeMesh.position.y = 2 + Math.cos(time * 1.1) * 0.7;

      chipGroup.rotation.y += 0.005;
      chipGroup.position.y = -6 + Math.sin(time * 0.9) * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default Hero3DCanvas;
