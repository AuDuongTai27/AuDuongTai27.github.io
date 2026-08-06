import { useState } from "react";
import { Mail, Phone, Calendar, MapPin, ChevronDown } from "lucide-react";
import { profileData } from "../../data/profileData";

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

export const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const getContactIcon = (iconName: string) => {
    switch (iconName) {
      case "mail":
        return <Mail className="w-4 h-4" />;
      case "phone":
        return <Phone className="w-4 h-4" />;
      case "calendar":
        return <Calendar className="w-4 h-4" />;
      case "location":
        return <MapPin className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return <FacebookIcon />;
      case "github":
        return <GithubIcon />;
      case "linkedin":
        return <LinkedinIcon />;
      default:
        return <GithubIcon />;
    }
  };

  return (
    <aside className="w-full lg:w-72 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 shadow-2xl backdrop-blur-md shrink-0 self-start transition-all duration-300">
      {/* Header Info */}
      <div className="flex lg:flex-col items-center lg:text-center gap-4 lg:gap-5">
        <div className="relative w-20 h-20 lg:w-32 lg:h-32 rounded-2xl lg:rounded-3xl overflow-hidden bg-zinc-800 border-2 border-zinc-700 p-1 shrink-0">
          <img
            src={profileData.avatar}
            alt={profileData.name}
            className="w-full h-full object-cover rounded-xl lg:rounded-2xl"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-xl lg:text-2xl font-bold text-zinc-100 mb-1.5" title={profileData.name}>
            {profileData.name}
          </h1>
          <span className="inline-block text-xs font-medium text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            {profileData.title}
          </span>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="lg:hidden flex items-center gap-1.5 text-xs text-amber-400 bg-zinc-800/80 border border-zinc-700 px-3 py-2 rounded-xl hover:bg-zinc-800 transition-colors ml-auto"
        >
          <span>{showMore ? "Ẩn bớt" : "Hiện thêm"}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Expandable Contacts & Socials */}
      <div className={`mt-6 pt-6 border-t border-zinc-800 space-y-6 ${showMore ? "block" : "hidden lg:block"}`}>
        {/* Contact List */}
        <ul className="space-y-4">
          {profileData.contacts.map((contact, index) => (
            <li key={index} className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-amber-400 flex items-center justify-center shrink-0">
                {getContactIcon(contact.iconName)}
              </div>
              <div className="overflow-hidden">
                <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-0.5">
                  {contact.title}
                </p>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-xs text-zinc-300 hover:text-amber-400 transition-colors truncate block"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-xs text-zinc-300 truncate">{contact.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="h-px bg-zinc-800" />

        {/* Social List */}
        <ul className="flex items-center justify-center gap-3">
          {profileData.socials.map((social, index) => (
            <li key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-zinc-400 hover:text-amber-400 hover:border-amber-500/40 flex items-center justify-center transition-all duration-300"
              >
                {getSocialIcon(social.icon)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
