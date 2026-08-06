import React from "react";
import { BookOpen } from "lucide-react";
import { educationData } from "../../data/resumeData";
import { TimelineItem } from "../Components/TimelineItem";

export const ResumePage: React.FC = () => {
  return (
    <article className="space-y-12 animate-fade-in">
      {/* Title */}
      <header className="border-b border-zinc-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 relative inline-block">
          Sơ yếu lý lịch
          <span className="absolute left-0 bottom-[-17px] w-12 h-1 bg-amber-500 rounded-full" />
        </h2>
      </header>

      {/* Education Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 text-amber-400 flex items-center justify-center">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-zinc-100">Giáo dục</h3>
        </div>

        <ol className="mt-6 border-l-0">
          {educationData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </ol>
      </section>
    </article>
  );
};
