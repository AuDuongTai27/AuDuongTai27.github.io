import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Rocket } from "lucide-react";

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans p-4 sm:p-6 lg:p-12 relative selection:bg-amber-500 selection:text-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 relative items-start">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Main Content Area */}
        <div className="flex-1 w-full bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md relative overflow-hidden mt-12 lg:mt-0">
          <Navbar />

          <main className="mt-8 lg:mt-12">
            <Outlet />
          </main>
        </div>
      </div>

      {/* Floating Switch to Creative Mode Button */}
      <a
        href="/creative/index.html"
        title="Switch to Creative Mode"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 bg-zinc-900 border border-zinc-700 text-zinc-100 rounded-full shadow-2xl hover:bg-zinc-800 hover:border-amber-400 hover:text-amber-400 hover:scale-105 transition-all duration-300 group"
      >
        <Rocket className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-xs font-semibold tracking-wide">Creative Mode</span>
      </a>
    </div>
  );
};
