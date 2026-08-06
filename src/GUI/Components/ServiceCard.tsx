import type { ServiceItem } from "../../data/servicesData";

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 shadow-md hover:border-amber-500/40 transition-all duration-300">
      <div className="p-3 rounded-xl bg-zinc-800/80 text-amber-400 shrink-0">
        <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-zinc-100 mb-2">{service.title}</h4>
        <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
};
