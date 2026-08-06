import { Mail, Phone } from "lucide-react";
import { profileData } from "../../data/profileData";

const LinkedinIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const ContactPage = () => {
  return (
    <article className="space-y-8 animate-fade-in">
      {/* Title */}
      <header className="border-b border-zinc-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 relative inline-block">
          Liên hệ tôi
          <span className="absolute left-0 bottom-[-17px] w-12 h-1 bg-amber-500 rounded-full" />
        </h2>
      </header>

      <section className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
        <p>
          Cảm ơn bạn đã quan tâm kết nối với tôi! Cho dù bạn có thắc mắc về các dự án của tôi, quan tâm đến việc hợp tác hay chỉ muốn liên hệ, hãy thoải mái sử dụng bất kỳ phương pháp nào sau đây để liên hệ.
        </p>

        <h3 className="text-xl font-bold text-zinc-100 pt-4">Thông tin liên hệ:</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Email */}
          <a
            href={`mailto:${profileData.contacts.find((c) => c.iconName === "mail")?.value}`}
            className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 text-amber-400 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-semibold uppercase">Email</p>
              <p className="text-sm font-medium text-zinc-200 group-hover:text-amber-400 transition-colors">
                {profileData.contacts.find((c) => c.iconName === "mail")?.value}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${profileData.contacts.find((c) => c.iconName === "phone")?.value}`}
            className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 text-amber-400 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-zinc-500 font-semibold uppercase">Phone</p>
              <p className="text-sm font-medium text-zinc-200 group-hover:text-amber-400 transition-colors">
                {profileData.contacts.find((c) => c.iconName === "phone")?.value}
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={profileData.socials.find((s) => s.icon === "linkedin")?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 text-amber-400 flex items-center justify-center shrink-0">
              <LinkedinIcon />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-zinc-500 font-semibold uppercase">LinkedIn</p>
              <p className="text-sm font-medium text-zinc-200 group-hover:text-amber-400 transition-colors truncate">
                {profileData.socials.find((s) => s.icon === "linkedin")?.url}
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={profileData.socials.find((s) => s.icon === "github")?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/40 transition-colors group"
          >
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 text-amber-400 flex items-center justify-center shrink-0">
              <GithubIcon />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-zinc-500 font-semibold uppercase">GitHub</p>
              <p className="text-sm font-medium text-zinc-200 group-hover:text-amber-400 transition-colors truncate">
                {profileData.socials.find((s) => s.icon === "github")?.url}
              </p>
            </div>
          </a>
        </div>
      </section>
    </article>
  );
};
