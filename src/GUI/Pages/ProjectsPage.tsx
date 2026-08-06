import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Loader2, AlertCircle } from "lucide-react";
import { ProjectCard } from "../Components/ProjectCard";
import { fetchGithubRepos, type GithubRepo } from "../../services/githubService";

export const ProjectsPage = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchGithubRepos("AuDuongTai27")
      .then((data) => {
        if (isMounted) {
          setRepos(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message || "Không thể tải danh sách dự án từ GitHub.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const totalPages = Math.ceil(repos.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRepos = repos.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <article className="space-y-8 animate-fade-in">
      {/* Title Header */}
      <header className="border-b border-zinc-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 relative inline-block">
          Dự án cá nhân
          <span className="absolute left-0 bottom-[-17px] w-12 h-1 bg-amber-500 rounded-full" />
        </h2>
      </header>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 gap-3 text-amber-400">
          <Loader2 className="w-8 h-8 animate-spin" />
          <p className="text-sm font-medium text-zinc-300">Đang đồng bộ repositories từ GitHub...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>{error}</p>
        </div>
      )}

      {/* Projects Grid & Pagination */}
      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentRepos.map((repo) => (
              <ProjectCard
                key={repo.id}
                project={{
                  id: repo.id,
                  name: repo.name,
                  description: repo.description,
                  html_url: repo.html_url,
                  language: repo.language,
                  stargazers_count: repo.stargazers_count,
                  image: "/assets/images/code.jpg"
                }}
              />
            ))}
          </div>

          {repos.length === 0 && (
            <p className="text-center text-zinc-500 py-12">Không tìm thấy repository nào.</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6 border-t border-zinc-800/80">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-amber-500/40 hover:text-amber-400 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Trước</span>
              </button>

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
        </>
      )}
    </article>
  );
};

export default ProjectsPage;
