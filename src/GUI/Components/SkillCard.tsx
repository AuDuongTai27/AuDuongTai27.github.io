import type { SkillItem } from "../../data/skillsData";

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="group relative flex items-center justify-center p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/50 hover:bg-zinc-800/80 transition-all duration-300">
      {/* Tooltip */}
      <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-amber-500 text-zinc-950 font-medium text-xs py-1 px-2.5 rounded shadow-lg pointer-events-none z-20 whitespace-nowrap">
        {skill.name}
      </span>
      <div className="h-12 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          style={{ width: skill.width || "40px" }}
          className="max-h-12 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
