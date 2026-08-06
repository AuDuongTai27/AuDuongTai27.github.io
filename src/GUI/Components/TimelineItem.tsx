import type { TimelineItemData } from "../../data/resumeData";

interface TimelineItemProps {
  item: TimelineItemData;
}

export const TimelineItem = ({ item }: TimelineItemProps) => {
  return (
    <li className="relative pl-8 pb-8 last:pb-0 group">
      {/* Circle marker */}
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-zinc-950 group-hover:scale-125 transition-transform duration-300" />
      {/* Line */}
      <div className="absolute left-[6px] top-5 bottom-0 w-[2px] bg-zinc-800 group-last:hidden" />
      
      <h4 className="text-base font-semibold text-zinc-100 mb-1">{item.title}</h4>
      <span className="inline-block text-xs font-medium text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full mb-2">
        {item.period}
      </span>
      <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
    </li>
  );
};
