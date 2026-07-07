"use client";

import { useState } from "react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  r: number;
  kind: "core" | "skill";
};

const nodes: Node[] = [
  { id: "core", label: "Kenan", x: 300, y: 220, r: 34, kind: "core" },
  { id: "react", label: "React", x: 110, y: 90, r: 24, kind: "skill" },
  { id: "ts", label: "TypeScript", x: 300, y: 50, r: 24, kind: "skill" },
  { id: "node", label: "Node / Express", x: 490, y: 90, r: 24, kind: "skill" },
  { id: "python", label: "Python", x: 70, y: 260, r: 24, kind: "skill" },
  { id: "fastapi", label: "FastAPI", x: 150, y: 400, r: 24, kind: "skill" },
  { id: "django", label: "Django", x: 340, y: 420, r: 24, kind: "skill" },
  { id: "postgres", label: "PostgreSQL", x: 530, y: 320, r: 24, kind: "skill" },
];

const edges = nodes
  .filter((n) => n.kind === "skill")
  .map((n) => ({ from: "core", to: n.id }));

export default function SkillGraph() {
  const [active, setActive] = useState<string | null>(null);

  const getNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <svg
      viewBox="0 0 600 470"
      className="w-full h-auto max-w-xl"
      role="img"
      aria-label="Node graph connecting Kenan to his core technical skills: React, TypeScript, Node and Express, Python, FastAPI, Django, and PostgreSQL"
    >
      <g>
        {edges.map((e, i) => {
          const from = getNode(e.from);
          const to = getNode(e.to);
          const isActive = active === to.id;
          return (
            <line
              key={i}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isActive ? "#4FD1C5" : "#2A2F3B"}
              strokeWidth={isActive ? 2 : 1.25}
              className="transition-all duration-300"
              style={{
                strokeDasharray: 400,
                strokeDashoffset: 0,
                animation: `draw-line 1.1s ease-out ${0.15 * i}s both`,
              }}
            />
          );
        })}
      </g>

      {nodes.map((n, i) => {
        const isCore = n.kind === "core";
        const isActive = active === n.id;
        return (
          <g
            key={n.id}
            onMouseEnter={() => !isCore && setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            className="cursor-default"
            style={{
              animation: `node-in 0.5s ease-out ${0.1 * i}s both`,
              transformOrigin: `${n.x}px ${n.y}px`,
            }}
          >
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={isCore ? "#0F1115" : "#171A21"}
              stroke={isCore ? "#4FD1C5" : isActive ? "#4FD1C5" : "#2A2F3B"}
              strokeWidth={isCore ? 2 : isActive ? 2 : 1.25}
              className="transition-all duration-300"
            />
            <text
              x={n.x}
              y={n.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className={`font-mono transition-all duration-300 ${
                isCore ? "fill-paper" : isActive ? "fill-teal" : "fill-muted"
              }`}
              style={{ fontSize: isCore ? 13 : 11 }}
            >
              {n.label}
            </text>
          </g>
        );
      })}

      <style>{`
        @keyframes draw-line {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes node-in {
          from { opacity: 0; transform: scale(0.6); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </svg>
  );
}
