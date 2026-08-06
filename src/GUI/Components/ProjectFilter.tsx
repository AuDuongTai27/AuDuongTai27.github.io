import type { FilterCategory } from "../../data/projectsData";

interface ProjectFilterProps {
  categories: FilterCategory[];
  activeCategory: string;
  onSelectCategory: (slug: string) => void;
}

export const ProjectFilter = ({
  categories,
  activeCategory,
  onSelectCategory
}: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.slug;
        return (
          <button
            key={cat.slug}
            onClick={() => onSelectCategory(cat.slug)}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-amber-500 text-zinc-950 shadow-md font-semibold"
                : "bg-zinc-900/60 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200"
            }`}
          >
            {cat.name}
          </button>
        );
      })}
    </div>
  );
};
