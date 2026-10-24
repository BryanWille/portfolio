"use client";

import React from "react";
import { getPillStyle, getPillDotColor } from "./carouselThemes";

export default function CarouselPills({ projects, currentIndex, onSelect }) {
  const activeProjectId = projects[currentIndex]?.id;

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
      {projects.map((project, idx) => {
        const isCurrent = currentIndex === idx;

        return (
          <button
            key={project.id}
            onClick={() => onSelect(idx)}
            className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${getPillStyle(
              project.id,
              isCurrent,
              activeProjectId
            )}`}
          >
            <span
              className={`h-2 w-2 rounded-full ${getPillDotColor(
                project.id,
                isCurrent
              )}`}
            />
            <span>{project.name}</span>
          </button>
        );
      })}
    </div>
  );
}

