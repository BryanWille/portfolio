"use client";

import React from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import NoobiePreview from "./NoobiePreview";
import BookiePreview from "./BookiePreview";
import BR381Preview from "./BR381Preview";
import NotecorePreview from "./NotecorePreview";
import MedusaPreview from "./MedusaPreview";
import PrespPreview from "./PrespPreview";
import AwsPreview from "./AwsPreview";

export default function ProjectPreviewDispatcher({ project, onOpenDetails }) {
  if (!project) return null;

  switch (project.id) {
    case "noobie":
      return <NoobiePreview project={project} onOpenDetails={onOpenDetails} />;
    case "bookie":
      return <BookiePreview project={project} onOpenDetails={onOpenDetails} />;
    case "br381":
      return <BR381Preview project={project} onOpenDetails={onOpenDetails} />;
    case "notecore":
      return <NotecorePreview project={project} onOpenDetails={onOpenDetails} />;
    case "medusa-bot":
      return <MedusaPreview project={project} onOpenDetails={onOpenDetails} />;
    case "presp":
      return <PrespPreview project={project} onOpenDetails={onOpenDetails} />;
    case "aws-s3":
      return <AwsPreview project={project} onOpenDetails={onOpenDetails} />;
    default:
      return (
        <div
          onClick={() => onOpenDetails(project)}
          className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-md transition-all hover:shadow-xl hover:scale-[1.01] h-[385px] flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-4 py-2.5 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-[11px] font-mono text-neutral-500">
              {project.name}
            </span>
            <Maximize2 className="h-3.5 w-3.5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
          </div>

          <div className="p-6 bg-gradient-to-br from-white to-neutral-50 flex-1 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wide">
                Visão Geral
              </span>
              <h4 className="mt-2 text-xl font-bold text-neutral-900">
                {project.name}
              </h4>
              <p className="mt-2 text-xs text-neutral-600 line-clamp-3 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
              <span>Clique para ver telas e galeria</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      );
  }
}

