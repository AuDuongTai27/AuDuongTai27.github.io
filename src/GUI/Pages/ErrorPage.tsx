import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export function ErrorPage() {
  const error = useRouteError();
  let errorMessage = "Đã xảy ra lỗi không xác định hoặc trang không tồn tại.";

  if (isRouteErrorResponse(error)) {
    errorMessage = error.statusText || error.data?.message || `Lỗi ${error.status}`;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans flex items-center justify-center p-6 selection:bg-amber-500 selection:text-zinc-950">
      <div className="max-w-md w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl backdrop-blur-md text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-zinc-100">Rất tiếc!</h1>
          <p className="text-zinc-400 text-sm">{errorMessage}</p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-zinc-950 font-semibold rounded-xl hover:bg-amber-400 transition-colors shadow-lg"
        >
          <Home className="w-4 h-4" />
          <span>Quay lại trang chủ</span>
        </Link>
      </div>
    </div>
  );
}
