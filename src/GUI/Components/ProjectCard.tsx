import { ExternalLink, Eye, Star, Code2 } from "lucide-react";

export interface GithubRepoItem {
  id: number | string;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
  image?: string;
}

interface ProjectCardProps {
  project: GithubRepoItem;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-2xl bg-zinc-900/60 border border-zinc-800 overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-zinc-950">
        <img
          src={project.image || "/assets/images/code.jpg"}
          alt={project.name}
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
        <h3 className="text-base font-semibold text-zinc-100 group-hover:text-amber-400 transition-colors line-clamp-1 mb-1.5" title={project.name}>
          {project.name}
        </h3>

        <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-4 flex-1">
          {project.description || "Dự án công khai trên GitHub."}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-zinc-800/60 text-xs text-zinc-400">
          {project.language ? (
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Code2 className="w-3.5 h-3.5" />
              {project.language}
            </span>
          ) : (
            <span className="text-zinc-600">Repository</span>
          )}

          {typeof project.stargazers_count === "number" && project.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-zinc-400">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {project.stargazers_count}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};
