/**
 * Cybernetic Interactive Terminal CLI
 * Provides an authentic AI Engineer terminal interface
 */
class CyberTerminal {
  constructor() {
    this.modal = document.getElementById('terminal-modal');
    this.body = document.getElementById('terminal-output');
    this.input = document.getElementById('terminal-input');
    this.closeBtn = document.getElementById('terminal-close-btn');
    this.openBtn = document.getElementById('terminal-trigger-btn');

    if (!this.modal || !this.input) return;

    this.history = [];
    this.historyIdx = -1;

    this.initEvents();
  }

  initEvents() {
    if (this.openBtn) {
      this.openBtn.addEventListener('click', () => this.open());
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        this.toggle();
      } else if (e.key === 'Escape' && !this.modal.classList.contains('hidden')) {
        this.close();
      }
    });

    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        this.executeCommand(cmd);
        if (cmd) {
          this.history.push(cmd);
          this.historyIdx = this.history.length;
        }
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        if (this.historyIdx > 0) {
          this.historyIdx--;
          this.input.value = this.history[this.historyIdx];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIdx < this.history.length - 1) {
          this.historyIdx++;
          this.input.value = this.history[this.historyIdx];
        } else {
          this.historyIdx = this.history.length;
          this.input.value = '';
        }
      }
    });
  }

  open() {
    this.modal.classList.remove('hidden');
    if (window.cyberAudio) window.cyberAudio.playClick();
    setTimeout(() => {
      this.input.focus();
    }, 100);
  }

  close() {
    this.modal.classList.add('hidden');
    if (window.cyberAudio) window.cyberAudio.playClick();
  }

  toggle() {
    if (this.modal.classList.contains('hidden')) {
      this.open();
    } else {
      this.close();
    }
  }

  printLine(html, type = 'normal') {
    const p = document.createElement('div');
    p.className = 'mb-1 leading-relaxed';
    if (type === 'cmd') {
      p.className += ' text-cyan-400 font-bold';
    } else if (type === 'success') {
      p.className += ' text-emerald-400';
    } else if (type === 'error') {
      p.className += ' text-rose-400';
    } else if (type === 'purple') {
      p.className += ' text-purple-400';
    } else {
      p.className += ' text-slate-300';
    }
    p.innerHTML = html;
    this.body.appendChild(p);
    this.body.scrollTop = this.body.scrollHeight;
  }

  executeCommand(rawCmd) {
    if (!rawCmd) return;
    this.printLine(`<span class="text-cyan-400">guest@local-node:~$</span> ${rawCmd}`, 'cmd');

    const parts = rawCmd.toLowerCase().split(' ');
    const cmd = parts[0];

    switch (cmd) {
      case 'help':
        this.printLine(`
Available commands:
  <span class="text-cyan-300">about</span>      - Engineer background and core mission
  <span class="text-cyan-300">benchmark</span>  - Compare Qwen3-VL vs Chandra 2 clinical metrics
  <span class="text-cyan-300">models</span>     - Open-source Vision-Language Models deployed
  <span class="text-cyan-300">specs</span>      - Apple Silicon hardware & MLX runtime details
  <span class="text-cyan-300">hire</span>       - Jump to secure contact transmission form
  <span class="text-cyan-300">clear</span>      - Clear terminal screen
  <span class="text-cyan-300">exit</span>       - Close terminal
        `);
        break;

      case 'about':
        this.printLine(`
<span class="text-cyan-300 font-bold">[ABOUT AI ENGINEER]</span>
Specialization: Local Model Deployment, OCR, Secure Data Pipelines
Hardware Target: Apple Silicon (MLX framework), Unified Memory Architecture
Core Philosophy: Privacy-First AI. Zero outbound telemetry. Clinical and Document Intelligence.
        `, 'normal');
        break;

      case 'benchmark':
        this.printLine(`
<span class="text-purple-400 font-bold">[BENCHMARK MATRIX: Qwen3-VL vs Chandra 2]</span>
+----------------------+--------------------+--------------------+
| Metric               | Qwen3-VL (MLX)     | Chandra 2 (MLX)    |
+----------------------+--------------------+--------------------+
| Dose Accuracy        | <span class="text-emerald-400 font-bold">96.7%</span> (Champion)   | 91.2%              |
| Hallucination Rate   | <span class="text-emerald-400 font-bold">0.18%</span> (Ultra-Low) | 0.45%              |
| Character Error Rate | <span class="text-emerald-400 font-bold">1.4%</span>               | 3.2%               |
| Memory Footprint     | <span class="text-emerald-400 font-bold">9.8 GB AWQ-4bit</span>    | 11.4 GB AWQ-4bit   |
| Hardware Platform    | Consumer Mac mini  | Enterprise Studio  |
+----------------------+--------------------+--------------------+
        `, 'normal');
        break;

      case 'models':
        this.printLine(`
<span class="text-cyan-300 font-bold">[DEPLOYED OPEN-SOURCE VISION-LANGUAGE MODELS]</span>
1. <span class="text-cyan-400">Qwen3-VL-8B-Instruct</span> (Apple MLX 4-bit / 8-bit quantized)
2. <span class="text-purple-400">Chandra 2 Document-Specialist</span> (High-density tabular OCR)
3. <span class="text-cyan-400">DeepSeek-OCR Engine</span> (Custom handwriting recognition pipeline)
4. <span class="text-purple-400">Ollama Local Orchestration Cluster</span> (REST API + local embeddings)
        `, 'normal');
        break;

      case 'specs':
        this.printLine(`
<span class="text-cyan-300 font-bold">[LOCAL RUNTIME HARDWARE TELEMETRY]</span>
Architecture    : Apple Silicon M-Series Unified Memory Architecture
Quantization    : 4-bit / 8-bit AWQ with custom Metal Performance Shaders
Inference Stack : Apple MLX + vLLM + PyTorch C++ bindings
Network Outbound: 0.0 KB/s (Completely Air-Gapped)
        `, 'normal');
        break;

      case 'hire':
        this.printLine(`<span class="text-emerald-400">Redirecting to encrypted contact portal...</span>`, 'success');
        this.close();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;

      case 'clear':
        this.body.innerHTML = '';
        break;

      case 'exit':
        this.close();
        break;

      default:
        this.printLine(`Command not recognized: '<span class="text-rose-400">${cmd}</span>'. Type '<span class="text-cyan-400">help</span>' for manual.`, 'error');
        break;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.cyberTerminal = new CyberTerminal();
});
