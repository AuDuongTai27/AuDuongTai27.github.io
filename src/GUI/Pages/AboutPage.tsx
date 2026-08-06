import React from "react";
import { profileData } from "../../data/profileData";
import { servicesData } from "../../data/servicesData";
import { skillGroupsData, otherToolsData } from "../../data/skillsData";
import { ServiceCard } from "../Components/ServiceCard";
import { SkillCard } from "../Components/SkillCard";

export const AboutPage: React.FC = () => {
  return (
    <article className="space-y-12 animate-fade-in">
      {/* Title */}
      <header className="border-b border-zinc-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 relative inline-block">
          Về bản thân tôi
          <span className="absolute left-0 bottom-[-17px] w-12 h-1 bg-amber-500 rounded-full" />
        </h2>
      </header>

      {/* Hero / About text */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-64 sm:w-60 sm:h-80 rounded-full overflow-hidden border-4 border-amber-500/20 shadow-xl shrink-0">
          <img
            src={profileData.aboutPhoto}
            alt={profileData.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {profileData.bioParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Services / What I'm doing */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-zinc-100">Tôi đang làm gì</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Skills Groups */}
      <section className="space-y-8">
        <h3 className="text-xl font-bold text-zinc-100">Các kỹ năng</h3>
        {skillGroupsData.map((group, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-sm font-semibold text-amber-400 uppercase tracking-wider">
              {group.categoryTitle}
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {group.skills.map((skill, sIdx) => (
                <SkillCard key={sIdx} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Other Tools */}
      <section className="space-y-4 pt-4">
        <h3 className="text-xl font-bold text-zinc-100">Công cụ khác</h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {otherToolsData.map((tool, tIdx) => (
            <SkillCard key={tIdx} skill={tool} />
          ))}
        </div>
      </section>
    </article>
  );
};
