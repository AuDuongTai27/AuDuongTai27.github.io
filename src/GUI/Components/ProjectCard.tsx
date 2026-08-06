import { ExternalLink, Eye } from "lucide-react";
import type { ProjectItemData } from "../../data/projectsData";

interface ProjectCardProps {
  project: ProjectItemData;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-amber-500 text-zinc-950 flex items-center justify-center shadow-lg">
            <Eye className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 rounded-full bg-zinc-800 text-zinc-100 flex items-center justify-center shadow-lg">
            <ExternalLink className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-2 mb-2">
          {project.title}
        </h3>
        <p className="text-xs text-amber-400/80 font-medium mt-auto">
          {project.category}
        </p>
      </div>
    </a>
  );
};
