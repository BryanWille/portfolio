"use client";

import React, { useEffect, useRef } from "react";

// Pares oficiais: símbolos técnicos que se transformam em valor real
const CODE_VALUE_PAIRS = [
  { code: "{ }", value: "R$" },
  { code: "</>", value: "+ROI" },
  { code: "fn()", value: "✓" },
  { code: "=>", value: "$" },
  { code: "const", value: "20%" },
  { code: "git", value: "✓" },
  { code: "{ }", value: "+ROI" },
  { code: "</>", value: "R$" },
  { code: "fn()", value: "$" },
  { code: "=>", value: "20%" },
  { code: "const", value: "✓" },
  { code: "git", value: "R$" },
  { code: "{ }", value: "$" },
  { code: "</>", value: "20%" },
  { code: "fn()", value: "+ROI" },
  { code: "=>", value: "✓" },
  { code: "const", value: "R$" },
  { code: "git", value: "+ROI" },
];

export default function CodeToValueBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Atualiza as dimensões do canvas respeitando a densidade de pixels da tela (Retina/High-DPI)
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    // Inicialização das partículas distribuídas ao longo de toda a área do Hero
    const numParticles = 18;
    const particles = Array.from({ length: numParticles }, (_, i) => {
      const pair = CODE_VALUE_PAIRS[i % CODE_VALUE_PAIRS.length];
      const slotWidth = width / numParticles;
      return {
        code: pair.code,
        value: pair.value,
        x: (i + 0.5) * slotWidth + (Math.random() - 0.5) * (slotWidth * 0.7),
        // Já inicia distribuído por toda a altura para que a tela não comece vazia
        y: Math.random() * height,
        speed: 0.35 + Math.random() * 0.25, // Subida suave e lenta
        driftSpeed: 0.001 + Math.random() * 0.002,
        driftAmp: 8 + Math.random() * 10,
        driftPhase: Math.random() * Math.PI * 2,
        fontSize: 11 + (i % 3), // 11px, 12px ou 13px (minúsculas e discretas)
      };
    });

    let time = 0;

    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Atualiza posição vertical
        p.y -= p.speed;

        // Ao sair pelo topo, ressurge suavemente na base
        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * (width - 40) + 20;
        }

        // Leve oscilação horizontal orgânica
        const currentX = p.x + Math.sin(time * p.driftSpeed + p.driftPhase) * p.driftAmp;

        // Progresso vertical: 0 (base) até 1 (topo)
        const progress = Math.max(0, Math.min(1, 1 - p.y / height));

        // Curva de opacidade: fade-in na base (0 -> 0.15) e fade-out no topo (0.85 -> 1.0)
        let alpha = 0.32;
        if (progress < 0.15) {
          alpha = (progress / 0.15) * 0.32;
        } else if (progress > 0.85) {
          alpha = ((1 - progress) / 0.15) * 0.32;
        }

        if (alpha <= 0.01) return;

        // Janela de transição/flip: entre 42% e 58% da altura
        const flipStart = 0.42;
        const flipEnd = 0.58;

        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (progress < flipStart) {
          // Fase 1: Símbolo técnico (Código)
          ctx.globalAlpha = alpha;
          ctx.fillStyle = "#737373"; // text-neutral-500
          ctx.font = `500 ${p.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
          ctx.fillText(p.code, currentX, p.y);
        } else if (progress > flipEnd) {
          // Fase 2: Indicador de valor real transformado
          ctx.globalAlpha = alpha * 1.15;
          ctx.fillStyle = "#047857"; // text-emerald-700 sutil
          ctx.font = `700 ${p.fontSize + 1}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
          ctx.fillText(p.value, currentX, p.y);
        } else {
          // Fase de Transição: Rotação 3D suave (flip vertical)
          const flipPhase = (progress - flipStart) / (flipEnd - flipStart); // 0 a 1
          const angle = flipPhase * Math.PI; // 0 a PI (180deg)
          const scaleY = Math.cos(angle);

          ctx.translate(currentX, p.y);
          ctx.scale(1, scaleY);

          if (scaleY >= 0) {
            // Primeira metade do flip: Código virando de perfil
            ctx.globalAlpha = alpha * Math.max(0.2, scaleY);
            ctx.fillStyle = "#737373";
            ctx.font = `500 ${p.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
            ctx.fillText(p.code, 0, 0);
          } else {
            // Segunda metade do flip: Valor real desvirando para a frente
            ctx.globalAlpha = alpha * Math.max(0.2, -scaleY) * 1.15;
            ctx.fillStyle = "#047857";
            ctx.font = `700 ${p.fontSize + 1}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
            ctx.fillText(p.value, 0, 0);
          }
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Observador de redimensionamento responsivo
    const resizeObserver = new ResizeObserver(() => {
      resize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 w-full h-full select-none"
    />
  );
}
