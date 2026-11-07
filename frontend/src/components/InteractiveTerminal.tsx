'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Copy, Check, Cpu, ShieldCheck, Zap } from 'lucide-react';

const tabs = [
  {
    id: 'runtime',
    filename: 'cloud-engine.ts',
    lang: 'TypeScript',
    tag: 'DISTRIBUTED ARCHITECTURE',
    code: `// Moltivay High-Concurrency Microservices
import { CloudRuntime, EdgeCluster } from '@moltivay/core';

export const engine = new CloudRuntime({
  cluster: EdgeCluster.GLOBAL_MULTICAST,
  sla: '99.999% Zero-Downtime',
  concurrency: 50_000, // req/sec
  failoverBudget: '300ms',
});

await engine.deploy({ env: 'production' });
console.log('✓ Enterprise Core Deployed (8.4ms RTT)');`,
    telemetry: {
      status: 'SYSTEM ACTIVE',
      latency: '8.4ms RTT',
      metric: '50k req/s',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  },
  {
    id: 'ai',
    filename: 'sovereign-ai.py',
    lang: 'Python / MLX',
    tag: 'ON-PREM / ZERO LEAKAGE',
    code: `# Private Multimodal Neural Engine
import torch
from moltivay_mlx import SovereignModel, Enclave

enclave = Enclave(security_level="AIR_GAPPED")
model = SovereignModel.from_pretrained(
    weights="moltivay-vision-v2",
    quantization="4bit_mlx",
    device="apple_silicon_neural_engine"
)

tokens = model.stream(prompt=legal_doc, max_tokens=1024)
# TTFT: 38ms | Privacy: Zero external telemetry`,
    telemetry: {
      status: 'NEURAL STREAMING',
      latency: '38ms TTFT',
      metric: '124 tokens/s',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    },
  },
  {
    id: 'sqa',
    filename: 'zero-regression.spec.ts',
    lang: 'Playwright E2E',
    tag: '100% PASSING CI/CD',
    code: `// Automated Quality Verification Matrix
import { test, expect } from '@playwright/test';

test('Verify Zero-Regression Gate Across 14 Devices', async ({ page }) => {
  await page.goto('https://client.enterprise.com');
  await expect(page.locator('#auth-gateway')).toBeVisible();
  
  // Stress Concurrency & Penetration Audit
  const audit = await runSecurityScan({ owasp: 'strict' });
  expect(audit.vulnerabilities).toBe(0);
}); // ✓ 4,200 Automated Suites Passing`,
    telemetry: {
      status: 'ZERO FAILURES',
      latency: '100% PASS',
      metric: '4,200 Tests',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    },
  },
];

export const InteractiveTerminal = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const current = tabs[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-white/15 bg-slate-950/90 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900/80 border-b border-white/10">
        
        {/* MacOS Style Window Control Dots */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
          <span className="ml-2 text-[11px] text-slate-400 hidden sm:inline-block">
            moltivay-runtime-v4.1
          </span>
        </div>

        {/* Tab Switchers */}
        <div className="flex items-center gap-1">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3 py-1 rounded-lg text-[10px] sm:text-xs transition-all ${
                activeTab === idx
                  ? 'bg-blue-600/30 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {tab.filename}
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10"
          title="Copy Code"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Code Display Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="p-4 sm:p-5 text-slate-200 overflow-x-auto"
        >
          <pre className="font-mono text-[11px] sm:text-xs leading-relaxed">
            <code>
              {current.code.split('\n').map((line, lIdx) => {
                const isComment = line.trim().startsWith('//') || line.trim().startsWith('#');
                const isKeyword =
                  line.includes('import') ||
                  line.includes('export') ||
                  line.includes('const') ||
                  line.includes('await') ||
                  line.includes('from') ||
                  line.includes('test');
                return (
                  <div key={lIdx} className="flex">
                    <span className="w-6 text-slate-600 select-none text-right mr-4 flex-shrink-0">
                      {lIdx + 1}
                    </span>
                    <span
                      className={
                        isComment
                          ? 'text-slate-500 italic'
                          : isKeyword
                          ? 'text-cyan-400'
                          : 'text-slate-200'
                      }
                    >
                      {line}
                    </span>
                  </div>
                );
              })}
            </code>
          </pre>
        </motion.div>
      </AnimatePresence>

      {/* Real-time Telemetry Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-t border-white/10 text-[10px] sm:text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider">
            {current.telemetry.status}
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-400 hidden sm:inline-block">
            {current.tag}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 font-bold text-cyan-300">
            <Zap className="w-3 h-3 text-cyan-400" />
            <span>{current.telemetry.latency}</span>
          </div>
          <span className="px-2 py-0.5 rounded-full border text-[10px] font-bold font-mono tracking-tight text-white bg-white/5 border-white/15">
            {current.telemetry.metric}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InteractiveTerminal;
