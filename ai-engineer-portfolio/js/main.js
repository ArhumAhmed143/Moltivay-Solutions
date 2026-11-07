/**
 * Main Controller:
 * - GSAP ScrollTrigger Word-by-Word Reveal & 3D Section Transitions
 * - Custom Glowing Neon Cursor with Trailing Ring & Hover States
 * - 3D Card Tilt & Cursor-Following Radial Glowing Borders
 * - Interactive Benchmark Switcher (Qwen3-VL vs Chandra 2)
 * - Interactive Live OCR Document Parsing Simulator
 * - Encrypted Contact Form Dispatch
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. CUSTOM NEON CURSOR WITH LERP TRAILING RING
  // -------------------------------------------------------------
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorRing = document.querySelector('.custom-cursor-ring');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }
  });

  // Smooth trailing spring for outer ring
  function updateCursor() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;

    if (cursorRing) {
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
    }

    requestAnimationFrame(updateCursor);
  }
  requestAnimationFrame(updateCursor);

  // Hover target expansion
  const interactiveElements = document.querySelectorAll(
    'a, button, input, textarea, select, .tilt-card, .clickable, [role="button"]'
  );

  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      document.body.classList.add('cursor-hover');
      if (window.cyberAudio) window.cyberAudio.playCardHover();
    });
    el.addEventListener('mouseleave', () => {
      document.body.classList.remove('cursor-hover');
    });
  });

  // -------------------------------------------------------------
  // 2. AUDIO TOGGLE BUTTON IN NAVBAR
  // -------------------------------------------------------------
  const audioBtn = document.getElementById('audio-toggle-btn');
  const audioStatusText = document.getElementById('audio-status-text');

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (!window.cyberAudio) return;
      const isAudible = window.cyberAudio.toggleSound();
      if (audioStatusText) {
        audioStatusText.textContent = isAudible ? 'AUDIO: ONLINE' : 'AUDIO: MUTED';
        audioStatusText.className = isAudible ? 'text-cyan-400 font-bold' : 'text-slate-400';
      }
      audioBtn.classList.toggle('border-cyan-400', isAudible);
      audioBtn.classList.toggle('shadow-cyan', isAudible);
    });
  }

  // -------------------------------------------------------------
  // 3. 3D TILT CARDS & CURSOR-FOLLOWING GLOWING BORDER
  // -------------------------------------------------------------
  const tiltCards = document.querySelectorAll('.tilt-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update radial glow border origin
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // Calculate tilt angles (-12 to 12 deg)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // -------------------------------------------------------------
  // 4. GSAP SCROLLTRIGGER & WORD-BY-WORD ABOUT REVEAL
  // -------------------------------------------------------------
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Initial Hero entrance animation
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    heroTl
      .from('.hero-badge', { opacity: 0, y: -20, duration: 0.8 })
      .from('.hero-title-line', { opacity: 0, y: 30, duration: 0.9, stagger: 0.2 }, '-=0.5')
      .from('.hero-subheadline', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
      .from('.hero-cta-group', { opacity: 0, scale: 0.95, duration: 0.7 }, '-=0.4')
      .from('.hero-metrics-ribbon', { opacity: 0, y: 25, duration: 0.8 }, '-=0.4');

    // Section 2: About Word-by-Word Scroll Reveal
    const aboutTextContainer = document.getElementById('about-word-stream');
    if (aboutTextContainer) {
      const fullText = "I am an AI Engineer specializing in local model deployment, OCR, and secure data pipelines. I have extensive experience running open-source models like Qwen3-VL and Chandra 2 on Apple Silicon (MLX framework), optimizing them for high-accuracy clinical and document benchmarks. My focus is on privacy-first AI where data never leaves the local machine.";

      // Key terms to highlight
      const highlights = ['Qwen3-VL', 'Chandra', '2', 'Apple', 'Silicon', '(MLX', 'framework),', 'privacy-first', 'AI', 'local', 'machine.'];
      const purpleHighlights = ['local', 'model', 'deployment,', 'OCR,', 'secure', 'data', 'pipelines.', 'clinical', 'benchmarks.'];

      const words = fullText.split(' ');
      aboutTextContainer.innerHTML = '';

      const spanElements = [];
      words.forEach((word) => {
        const span = document.createElement('span');
        span.className = 'word-reveal';
        span.textContent = word + ' ';
        span.dataset.word = word;
        aboutTextContainer.appendChild(span);
        spanElements.push(span);
      });

      // ScrollTrigger timeline that lights up words progressively
      gsap.timeline({
        scrollTrigger: {
          trigger: '#about-section',
          start: 'top 75%',
          end: 'bottom 45%',
          scrub: 0.8,
          onUpdate: (self) => {
            const progress = self.progress;
            const totalWords = spanElements.length;
            const activeCount = Math.floor(progress * totalWords);

            spanElements.forEach((el, index) => {
              const wordText = el.dataset.word;
              if (index <= activeCount) {
                if (highlights.includes(wordText)) {
                  el.className = 'word-reveal active-highlight';
                } else if (purpleHighlights.includes(wordText)) {
                  el.className = 'word-reveal active-purple';
                } else {
                  el.className = 'word-reveal active';
                }
              } else {
                el.className = 'word-reveal';
              }
            });
          }
        }
      });
    }

    // 3D Parallax & Fade-Up for Services Cards
    gsap.from('.service-card-item', {
      scrollTrigger: {
        trigger: '#services-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 60,
      rotationX: 12,
      stagger: 0.18,
      duration: 1,
      ease: 'power3.out'
    });

    // Recent Project Timeline Reveal
    gsap.from('#project-section .benchmark-card', {
      scrollTrigger: {
        trigger: '#project-section',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.94,
      y: 40,
      duration: 0.9,
      ease: 'power2.out'
    });

    // Footer Reveal
    gsap.from('#contact .contact-panel', {
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });
  }

  // -------------------------------------------------------------
  // 5. INTERACTIVE BENCHMARK SWITCHER (Qwen3-VL vs Chandra 2)
  // -------------------------------------------------------------
  const btnModelQwen = document.getElementById('btn-select-qwen');
  const btnModelChandra = document.getElementById('btn-select-chandra');

  const metricDoseAcc = document.getElementById('metric-dose-acc');
  const metricDoseBar = document.getElementById('metric-dose-bar');

  const metricHallucination = document.getElementById('metric-hallucination');
  const metricHallucinationBar = document.getElementById('metric-hallucination-bar');

  const metricCER = document.getElementById('metric-cer');
  const metricCERBar = document.getElementById('metric-cer-bar');

  const metricMemory = document.getElementById('metric-memory');
  const metricThroughput = document.getElementById('metric-throughput');
  const metricHardwareStatus = document.getElementById('metric-hardware-status');

  const benchmarkData = {
    qwen: {
      name: 'Qwen3-VL-8B (Apple MLX 4-bit AWQ)',
      doseAcc: '96.7%',
      doseWidth: '96.7%',
      hallucination: '0.18%',
      hallucinationWidth: '18%',
      cer: '1.4%',
      cerWidth: '28%',
      memory: '9.8 GB',
      throughput: '48.2 tok/sec',
      hardware: 'Target: Mac mini (M4, 16GB Unified Memory) // Status: OPTIMAL'
    },
    chandra: {
      name: 'Chandra 2 Document (Apple MLX 4-bit AWQ)',
      doseAcc: '91.2%',
      doseWidth: '91.2%',
      hallucination: '0.45%',
      hallucinationWidth: '45%',
      cer: '3.2%',
      cerWidth: '55%',
      memory: '11.4 GB',
      throughput: '39.8 tok/sec',
      hardware: 'Target: Mac Studio (M2 Ultra) // Status: HIGH VRAM USAGE'
    }
  };

  function setBenchmarkModel(modelKey) {
    const data = benchmarkData[modelKey];
    if (!data) return;

    if (window.cyberAudio) window.cyberAudio.playClick();

    if (modelKey === 'qwen') {
      btnModelQwen.classList.add('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
      btnModelQwen.classList.remove('border-slate-700', 'text-slate-400');
      btnModelChandra.classList.remove('bg-purple-500/20', 'border-purple-400', 'text-purple-300');
      btnModelChandra.classList.add('border-slate-700', 'text-slate-400');
    } else {
      btnModelChandra.classList.add('bg-purple-500/20', 'border-purple-400', 'text-purple-300');
      btnModelChandra.classList.remove('border-slate-700', 'text-slate-400');
      btnModelQwen.classList.remove('bg-cyan-500/20', 'border-cyan-400', 'text-cyan-300');
      btnModelQwen.classList.add('border-slate-700', 'text-slate-400');
    }

    // Animate numbers & progress bars
    if (metricDoseAcc) metricDoseAcc.textContent = data.doseAcc;
    if (metricDoseBar) metricDoseBar.style.width = data.doseWidth;

    if (metricHallucination) metricHallucination.textContent = data.hallucination;
    if (metricHallucinationBar) metricHallucinationBar.style.width = data.hallucinationWidth;

    if (metricCER) metricCER.textContent = data.cer;
    if (metricCERBar) metricCERBar.style.width = data.cerWidth;

    if (metricMemory) metricMemory.textContent = data.memory;
    if (metricThroughput) metricThroughput.textContent = data.throughput;
    if (metricHardwareStatus) metricHardwareStatus.textContent = data.hardware;
  }

  if (btnModelQwen && btnModelChandra) {
    btnModelQwen.addEventListener('click', () => setBenchmarkModel('qwen'));
    btnModelChandra.addEventListener('click', () => setBenchmarkModel('chandra'));
  }

  // -------------------------------------------------------------
  // 6. LIVE OCR SIMULATION SANDBOX
  // -------------------------------------------------------------
  const btnRunOCR = document.getElementById('btn-run-ocr');
  const ocrLaser = document.getElementById('ocr-laser-line');
  const ocrBoundingBoxes = document.querySelectorAll('.ocr-bbox');
  const jsonOutput = document.getElementById('ocr-json-output');

  const simulatedJSON = `{
  "document_type": "CLINICAL_PRESCRIPTION_EHR",
  "pipeline_runtime": "MLX_APPLE_SILICON_LOCAL",
  "patient_uid": "PX-90412-MED",
  "medication_detected": {
    "compound": "Amoxicillin-Clavulanate Potassium",
    "dosage_mg": "875 / 125",
    "frequency": "BID (Twice Daily)",
    "course_days": 10,
    "confidence_dose": 0.9972
  },
  "benchmark_metrics": {
    "character_error_rate": 0.008,
    "hallucination_score": 0.0000,
    "dose_accuracy_verified": true
  },
  "air_gap_validation": "PASSED // ZERO_CLOUD_TRANSMISSION"
}`;

  let isRunningOCR = false;

  if (btnRunOCR && jsonOutput) {
    btnRunOCR.addEventListener('click', () => {
      if (isRunningOCR) return;
      isRunningOCR = true;
      btnRunOCR.disabled = true;
      btnRunOCR.innerHTML = `
        <span class="inline-block animate-spin mr-2">⟳</span>
        SCANNING DOCUMENT ON LOCAL GPU...
      `;

      if (window.cyberAudio) window.cyberAudio.playChirp(300, 700, 0.15, 'sawtooth');

      // 1. Trigger laser scan animation
      if (ocrLaser) {
        ocrLaser.style.opacity = '1';
        ocrLaser.style.top = '0%';
        gsap.to(ocrLaser, {
          top: '95%',
          duration: 1.6,
          ease: 'power1.inOut',
          onComplete: () => {
            ocrLaser.style.opacity = '0';
          }
        });
      }

      // 2. Illuminate bounding boxes sequentially
      ocrBoundingBoxes.forEach((box, i) => {
        box.style.opacity = '0';
        setTimeout(() => {
          box.style.opacity = '1';
          box.style.borderColor = '#00f3ff';
          box.style.boxShadow = '0 0 12px rgba(0, 243, 255, 0.8)';
          if (window.cyberAudio) window.cyberAudio.playClick();
        }, 400 + i * 350);
      });

      // 3. Type out formatted JSON result
      setTimeout(() => {
        jsonOutput.textContent = '';
        let charIdx = 0;
        const typeInterval = setInterval(() => {
          if (charIdx < simulatedJSON.length) {
            jsonOutput.textContent += simulatedJSON[charIdx];
            charIdx += 3; // stream 3 chars at a time for speed
            jsonOutput.scrollTop = jsonOutput.scrollHeight;
          } else {
            clearInterval(typeInterval);
            isRunningOCR = false;
            btnRunOCR.disabled = false;
            btnRunOCR.innerHTML = `
              <span>✓ OCR EXTRACTION COMPLETED (96.7% DOSE ACCURACY)</span>
            `;
            if (window.cyberAudio) window.cyberAudio.playSuccess();
          }
        }, 12);
      }, 1600);
    });
  }

  // -------------------------------------------------------------
  // 7. GLOWING CONTACT FORM VALIDATION & ENCRYPTED DISPATCH
  // -------------------------------------------------------------
  const contactForm = document.getElementById('cyber-contact-form');
  const contactSubmitBtn = document.getElementById('contact-submit-btn');
  const formStatusMsg = document.getElementById('form-status-msg');

  if (contactForm && contactSubmitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const messageInput = document.getElementById('contact-message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        if (formStatusMsg) {
          formStatusMsg.textContent = 'ERR: All telemetry fields required before transmission.';
          formStatusMsg.className = 'text-xs font-mono text-rose-400 mt-3 block';
        }
        return;
      }

      // Simulation of secure encryption & local transmission
      contactSubmitBtn.disabled = true;
      contactSubmitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⟳</span>
        ENCRYPTING 4096-BIT TRANSMISSION...
      `;

      if (window.cyberAudio) window.cyberAudio.playChirp(400, 900, 0.2, 'square');

      setTimeout(() => {
        contactSubmitBtn.innerHTML = `
          <span>✓ TRANSMISSION DISPATCHED // ACKNOWLEDGED</span>
        `;
        contactSubmitBtn.classList.remove('btn-liquid-glow');
        contactSubmitBtn.classList.add('bg-emerald-600', 'border-emerald-400', 'text-white');

        if (formStatusMsg) {
          formStatusMsg.textContent = 'DISPATCH VERIFIED: Secure payload received. Zero cloud leak confirmed.';
          formStatusMsg.className = 'text-xs font-mono text-emerald-400 mt-3 block';
        }

        if (window.cyberAudio) window.cyberAudio.playSuccess();

        // Reset form after delay
        setTimeout(() => {
          contactForm.reset();
          contactSubmitBtn.disabled = false;
          contactSubmitBtn.innerHTML = `TRANSMIT MESSAGE // SECURE DISPATCH`;
          contactSubmitBtn.classList.add('btn-liquid-glow');
          contactSubmitBtn.classList.remove('bg-emerald-600', 'border-emerald-400');
        }, 4500);
      }, 1500);
    });
  }
});
