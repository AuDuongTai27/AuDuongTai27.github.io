import { useState } from "react";
import { projectCategoriesData, projectsData } from "../../data/projectsData";
import { ProjectFilter } from "../Components/ProjectFilter";
import { ProjectCard } from "../Components/ProjectCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // 1. Khai báo state phân trang & số lượng sản phẩm/trang
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6; // Số lượng dự án trên 1 trang

  // 2. Lọc danh sách dự án theo category
  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.categorySlug === activeCategory);

  // 3. Tính toán số trang & cắt mảng dự án hiển thị ở trang hiện tại
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // 4. Hàm chuyển Category (Reset về trang 1)
  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1);
  };

  return (
    <article className="space-y-8 animate-fade-in">
      {/* Title */}
      <header className="border-b border-zinc-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 relative inline-block">
          Dự án cá nhân
          <span className="absolute left-0 bottom-[-17px] w-12 h-1 bg-amber-500 rounded-full" />
        </h2>
      </header>

      {/* Filter Tabs */}
      <ProjectFilter
        categories={projectCategoriesData}
        activeCategory={activeCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/* Projects Grid (Chỉ render currentProjects thay vì tất cả) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-zinc-500 py-12">
          Không có dự án nào trong danh mục này.
        </p>
      )}

      {/* 5. UI Thanh Phân Trang (Pagination Controls) */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6 border-t border-zinc-800/80">
          {/* Nút Trước */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-500/40 hover:text-amber-400 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Trước</span>
          </button>

          {/* Các nút số trang */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 text-xs font-semibold rounded-xl transition-all ${currentPage === page
                ? "bg-amber-500 text-zinc-950 shadow-lg scale-105"
                : "bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                }`}
            >
              {page}
            </button>
          ))}

          {/* Nút Sau */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-500/40 hover:text-amber-400 transition-all"
          >
            <span>Sau</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </article>
  );
};

export default ProjectsPage;
