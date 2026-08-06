import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./GUI/Layout/MainLayout";
import { AboutPage } from "./GUI/Pages/AboutPage";
import { ResumePage } from "./GUI/Pages/ResumePage";
import { ContactPage } from "./GUI/Pages/ContactPage";
import { ErrorPage } from "./GUI/Pages/ErrorPage";

const ProjectsPage = lazy(() => import("./GUI/Pages/ProjectsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: "resume",
        element: <ResumePage />
      },
      {
        path: "projects",
        element: (
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-12 text-amber-400 font-medium animate-pulse">
                Đang tải danh sách dự án...
              </div>
            }
          >
            <ProjectsPage />
          </Suspense>
        )
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
