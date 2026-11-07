/**
 * Futuristic 3D Visuals Engine using Three.js
 * 1. Dynamic 3D Neural Particle Network (Background)
 * 2. Holographic 3D Wireframe Globe with Orbital Rings & Glowing Nodes (Hero)
 * 3. Animated Neural Data Stream (Footer)
 */

// -------------------------------------------------------------
// 1. FULLSCREEN 3D NEURAL PARTICLE NETWORK (BACKGROUND)
// -------------------------------------------------------------
class NeuralBackground {
  constructor() {
    this.canvas = document.getElementById('bg-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 240;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollY = 0;
    this.targetScrollY = 0;

    this.particleCount = window.innerWidth < 768 ? 90 : 180;
    this.maxDistance = 55;
    this.particles = [];

    this.initParticles();
    this.initEvents();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initParticles() {
    // Node positions and velocities
    const positions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);

    const cyan = new THREE.Color(0x00f3ff);
    const purple = new THREE.Color(0xbc13fe);

    for (let i = 0; i < this.particleCount; i++) {
      const x = (Math.random() - 0.5) * 320;
      const y = (Math.random() - 0.5) * 260;
      const z = (Math.random() - 0.5) * 200;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Velocity
      this.particles.push({
        x, y, z,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.25,
        baseX: x,
        baseY: y,
        baseZ: z
      });

      // Alternating cyan and electric purple
      const mixedColor = Math.random() > 0.4 ? cyan : purple;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    // Particle Cloud Geometry
    this.particleGeometry = new THREE.BufferGeometry();
    this.particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Material with Soft Glow Sprite
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(0, 243, 255, 0.8)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);

    this.particleMaterial = new THREE.PointsMaterial({
      size: 4.5,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.pointCloud = new THREE.Points(this.particleGeometry, this.particleMaterial);
    this.scene.add(this.pointCloud);

    // Line Connections (Synapses)
    const maxLines = this.particleCount * 6;
    this.linePositions = new Float32Array(maxLines * 6);
    this.lineColors = new Float32Array(maxLines * 6);

    this.lineGeometry = new THREE.BufferGeometry();
    this.lineGeometry.setAttribute('position', new THREE.DynamicDrawBufferAttribute(this.linePositions, 3));
    this.lineGeometry.setAttribute('color', new THREE.DynamicDrawBufferAttribute(this.lineColors, 3));

    this.lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.lines = new THREE.LineSegments(this.lineGeometry, this.lineMaterial);
    this.scene.add(this.lines);

    // Floating Data Pulses traversing synapses
    this.pulses = [];
    for (let i = 0; i < 15; i++) {
      this.pulses.push({
        nodeA: Math.floor(Math.random() * this.particleCount),
        nodeB: Math.floor(Math.random() * this.particleCount),
        progress: Math.random(),
        speed: 0.015 + Math.random() * 0.02
      });
    }

    const pulseGeom = new THREE.BufferGeometry();
    pulseGeom.setAttribute('position', new THREE.BufferAttribute(new Float32Array(15 * 3), 3));
    this.pulseMesh = new THREE.Points(
      pulseGeom,
      new THREE.PointsMaterial({
        size: 6,
        color: 0x00f3ff,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending
      })
    );
    this.scene.add(this.pulseMesh);
  }

  initEvents() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    }, { passive: true });

    window.addEventListener('scroll', () => {
      this.targetScrollY = window.scrollY;
    }, { passive: true });

    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    // Smooth lerp mouse & scroll
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;
    this.scrollY += (this.targetScrollY - this.scrollY) * 0.06;

    // Camera reacts to mouse movement and scroll depth
    this.camera.position.x = this.mouse.x * 25;
    this.camera.position.y = this.mouse.y * 20 - (this.scrollY * 0.04);
    this.camera.position.z = 240 + Math.sin(Date.now() * 0.0008) * 10;
    this.camera.lookAt(0, -(this.scrollY * 0.04), 0);

    const positions = this.particleGeometry.attributes.position.array;
    let lineIdx = 0;

    // Update particle positions & interactions
    for (let i = 0; i < this.particleCount; i++) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Bounce boundaries
      if (p.x < -160 || p.x > 160) p.vx *= -1;
      if (p.y < -130 || p.y > 130) p.vy *= -1;
      if (p.z < -100 || p.z > 100) p.vz *= -1;

      // Mouse influence in 3D
      const dx = p.x - this.mouse.x * 120;
      const dy = p.y - this.mouse.y * 100;
      const distToMouse = Math.sqrt(dx * dx + dy * dy);
      if (distToMouse < 60) {
        p.x += (dx / distToMouse) * 1.2;
        p.y += (dy / distToMouse) * 1.2;
      }

      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;

      // Calculate connections
      for (let j = i + 1; j < this.particleCount; j++) {
        const p2 = this.particles[j];
        const dist = Math.hypot(p.x - p2.x, p.y - p2.y, p.z - p2.z);

        if (dist < this.maxDistance && lineIdx < this.linePositions.length - 6) {
          const alpha = 1.0 - (dist / this.maxDistance);

          this.linePositions[lineIdx] = p.x;
          this.linePositions[lineIdx + 1] = p.y;
          this.linePositions[lineIdx + 2] = p.z;
          this.linePositions[lineIdx + 3] = p2.x;
          this.linePositions[lineIdx + 4] = p2.y;
          this.linePositions[lineIdx + 5] = p2.z;

          // Cyan / Purple blend
          this.lineColors[lineIdx] = 0.0;
          this.lineColors[lineIdx + 1] = 0.95 * alpha;
          this.lineColors[lineIdx + 2] = 1.0 * alpha;

          this.lineColors[lineIdx + 3] = 0.74 * alpha;
          this.lineColors[lineIdx + 4] = 0.07 * alpha;
          this.lineColors[lineIdx + 5] = 1.0 * alpha;

          lineIdx += 6;
        }
      }
    }

    this.particleGeometry.attributes.position.needsUpdate = true;

    // Update lines geometry
    this.lineGeometry.setDrawRange(0, lineIdx / 3);
    this.lineGeometry.attributes.position.needsUpdate = true;
    this.lineGeometry.attributes.color.needsUpdate = true;

    // Update dynamic data pulses
    const pulsePositions = this.pulseMesh.geometry.attributes.position.array;
    for (let pIdx = 0; pIdx < this.pulses.length; pIdx++) {
      const pulse = this.pulses[pIdx];
      pulse.progress += pulse.speed;
      if (pulse.progress >= 1) {
        pulse.progress = 0;
        pulse.nodeA = Math.floor(Math.random() * this.particleCount);
        pulse.nodeB = Math.floor(Math.random() * this.particleCount);
      }

      const pA = this.particles[pulse.nodeA];
      const pB = this.particles[pulse.nodeB];
      pulsePositions[pIdx * 3] = pA.x + (pB.x - pA.x) * pulse.progress;
      pulsePositions[pIdx * 3 + 1] = pA.y + (pB.y - pA.y) * pulse.progress;
      pulsePositions[pIdx * 3 + 2] = pA.z + (pB.z - pA.z) * pulse.progress;
    }
    this.pulseMesh.geometry.attributes.position.needsUpdate = true;

    // Slow ambient rotation of entire cloud
    this.pointCloud.rotation.y += 0.0006;
    this.lines.rotation.y += 0.0006;
    this.pulseMesh.rotation.y += 0.0006;

    this.renderer.render(this.scene, this.camera);
  }
}

// -------------------------------------------------------------
// 2. HERO SECTION 3D WIREFRAME GLOBE & NEURAL CORE
// -------------------------------------------------------------
class Hero3DGlobe {
  constructor() {
    this.canvas = document.getElementById('hero-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 100);
    this.camera.position.z = 7.2;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.globeGroup = new THREE.Group();
    this.scene.add(this.globeGroup);

    this.isDragging = false;
    this.prevMouse = { x: 0, y: 0 };
    this.targetRotation = { x: 0.2, y: 0 };
    this.currentRotation = { x: 0.2, y: 0 };

    this.initGlobe();
    this.initOrbitalRings();
    this.initSatellites();
    this.initEvents();

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  initGlobe() {
    // 1. Outer Wireframe Globe (Cyan Neon)
    const globeGeom = new THREE.IcosahedronGeometry(2.35, 3);
    const globeMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    this.wireframeGlobe = new THREE.Mesh(globeGeom, globeMat);
    this.globeGroup.add(this.wireframeGlobe);

    // 2. Inner Glowing Core Sphere (Electric Purple)
    const coreGeom = new THREE.SphereGeometry(1.65, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xbc13fe,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending
    });
    this.coreSphere = new THREE.Mesh(coreGeom, coreMat);
    this.globeGroup.add(this.coreSphere);

    // 3. Dense Surface Points (Glowing Nodes on the Globe)
    const nodeGeom = new THREE.BufferGeometry();
    const nodeCount = 120;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeColors = new Float32Array(nodeCount * 3);

    const cyan = new THREE.Color(0x00f3ff);
    const purple = new THREE.Color(0xbc13fe);

    for (let i = 0; i < nodeCount; i++) {
      // Golden spiral distribution on sphere surface
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 2.36;

      nodePositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      nodePositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      nodePositions[i * 3 + 2] = radius * Math.cos(phi);

      const col = Math.random() > 0.35 ? cyan : purple;
      nodeColors[i * 3] = col.r;
      nodeColors[i * 3 + 1] = col.g;
      nodeColors[i * 3 + 2] = col.b;
    }

    nodeGeom.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    nodeGeom.setAttribute('color', new THREE.BufferAttribute(nodeColors, 3));

    const nodeMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    });

    this.nodes = new THREE.Points(nodeGeom, nodeMat);
    this.globeGroup.add(this.nodes);
  }

  initOrbitalRings() {
    this.rings = [];

    // Ring 1 (Cyan Orbit)
    const ringGeom1 = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI * 0.38;
    ring1.rotation.y = Math.PI * 0.15;
    this.globeGroup.add(ring1);
    this.rings.push({ mesh: ring1, rotX: 0.001, rotY: 0.003, rotZ: 0.002 });

    // Ring 2 (Purple Orbit)
    const ringGeom2 = new THREE.TorusGeometry(3.45, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xbc13fe,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.x = -Math.PI * 0.28;
    ring2.rotation.z = Math.PI * 0.25;
    this.globeGroup.add(ring2);
    this.rings.push({ mesh: ring2, rotX: -0.002, rotY: 0.002, rotZ: 0.004 });

    // Ring 3 (Outer Equator Grid Ring)
    const ringGeom3 = new THREE.RingGeometry(3.7, 3.73, 64);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });
    const ring3 = new THREE.Mesh(ringGeom3, ringMat3);
    ring3.rotation.x = Math.PI * 0.5;
    this.globeGroup.add(ring3);
    this.rings.push({ mesh: ring3, rotX: 0.0005, rotY: 0.001, rotZ: 0.0015 });
  }

  initSatellites() {
    this.satellites = [];
    const satCount = 4;
    for (let i = 0; i < satCount; i++) {
      const satGeom = new THREE.SphereGeometry(0.08, 16, 16);
      const satMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f3ff : 0xbc13fe,
        blending: THREE.AdditiveBlending
      });
      const satMesh = new THREE.Mesh(satGeom, satMat);
      this.globeGroup.add(satMesh);

      this.satellites.push({
        mesh: satMesh,
        angle: (i / satCount) * Math.PI * 2,
        speed: 0.012 + i * 0.005,
        radius: 3.1 + (i % 2) * 0.35,
        tilt: 0.4 + i * 0.25
      });
    }
  }

  initEvents() {
    // Interactive mouse rotation on canvas
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.prevMouse = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isDragging) {
        const deltaX = e.clientX - this.prevMouse.x;
        const deltaY = e.clientY - this.prevMouse.y;
        this.targetRotation.y += deltaX * 0.008;
        this.targetRotation.x += deltaY * 0.008;
        this.prevMouse = { x: e.clientX, y: e.clientY };
      } else {
        // Subtle tilt on pointer hover
        const rect = this.canvas.getBoundingClientRect();
        if (
          e.clientX >= rect.left && e.clientX <= rect.right &&
          e.clientY >= rect.top && e.clientY <= rect.bottom
        ) {
          const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
          this.targetRotation.y += normX * 0.003;
          this.targetRotation.x -= normY * 0.003;
        }
      }
    });

    window.addEventListener('resize', () => {
      if (!this.canvas) return;
      const width = this.canvas.clientWidth;
      const height = this.canvas.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    // Natural continuous auto-rotation
    this.targetRotation.y += 0.0035;

    // Smooth inertia lerp
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.06;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.06;

    this.globeGroup.rotation.x = this.currentRotation.x;
    this.globeGroup.rotation.y = this.currentRotation.y;

    // Pulsing inner sphere
    const pulseScale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
    this.coreSphere.scale.set(pulseScale, pulseScale, pulseScale);
    this.coreSphere.rotation.y -= 0.004;

    // Rotate orbital rings
    this.rings.forEach(r => {
      r.mesh.rotation.x += r.rotX;
      r.mesh.rotation.y += r.rotY;
      r.mesh.rotation.z += r.rotZ;
    });

    // Orbit satellites
    this.satellites.forEach(sat => {
      sat.angle += sat.speed;
      sat.mesh.position.x = Math.cos(sat.angle) * sat.radius;
      sat.mesh.position.z = Math.sin(sat.angle) * sat.radius;
      sat.mesh.position.y = Math.sin(sat.angle * 2) * Math.sin(sat.tilt) * 1.2;
    });

    this.renderer.render(this.scene, this.camera);
  }
}

// -------------------------------------------------------------
// 3. FOOTER STREAM CANVAS (NEURAL DATA STREAMS)
// -------------------------------------------------------------
class FooterStreamCanvas {
  constructor() {
    this.canvas = document.getElementById('footer-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.resize();

    this.tokens = [
      'QWEN3-VL', 'CHANDRA-2', 'APPLE-MLX', 'AWQ-4BIT', 'CER:0.014',
      'WER:0.021', 'DOSE_ACC:96.7%', 'AIR_GAP_OK', 'VRAM_OPT', 'ZERO_LEAK',
      'ON_PREM', 'OCR_EXTRACT', 'TENSOR_STREAM', 'HALLUCINATION:0.0018', 'LOCAL_VLM'
    ];

    this.columns = [];
    this.initColumns();

    window.addEventListener('resize', () => {
      this.resize();
      this.initColumns();
    });

    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.canvas.width = this.canvas.clientWidth;
    this.canvas.height = this.canvas.clientHeight;
  }

  initColumns() {
    this.columns = [];
    const colCount = Math.floor(this.canvas.width / 130);
    for (let i = 0; i < colCount; i++) {
      this.columns.push({
        x: i * 130 + 15,
        y: Math.random() * this.canvas.height,
        speed: 0.6 + Math.random() * 0.8,
        tokenIdx: Math.floor(Math.random() * this.tokens.length),
        opacity: 0.2 + Math.random() * 0.4
      });
    }
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.font = '11px "JetBrains Mono", monospace';

    for (let i = 0; i < this.columns.length; i++) {
      const col = this.columns[i];
      col.y += col.speed;

      if (col.y > this.canvas.height + 40) {
        col.y = -20;
        col.tokenIdx = (col.tokenIdx + 1) % this.tokens.length;
        col.speed = 0.6 + Math.random() * 0.8;
      }

      const text = this.tokens[col.tokenIdx];
      const isCyan = i % 2 === 0;

      // Glow effect
      this.ctx.shadowBlur = 8;
      this.ctx.shadowColor = isCyan ? 'rgba(0, 243, 255, 0.6)' : 'rgba(188, 19, 254, 0.6)';
      this.ctx.fillStyle = isCyan ? `rgba(0, 243, 255, ${col.opacity})` : `rgba(188, 19, 254, ${col.opacity})`;

      this.ctx.fillText(text, col.x, col.y);

      // Trailing subtle grid line
      this.ctx.shadowBlur = 0;
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      this.ctx.beginPath();
      this.ctx.moveTo(col.x, 0);
      this.ctx.lineTo(col.x, this.canvas.height);
      this.ctx.stroke();
    }
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.neuralBackground = new NeuralBackground();
  window.heroGlobe = new Hero3DGlobe();
  window.footerStream = new FooterStreamCanvas();
});
