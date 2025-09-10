import React, { useState } from "react";
import profilePic from "./assets/profile.jpg";
import { FaDocker, FaLinux, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiOracle, SiGrafana, SiPrometheus, SiTailwindcss } from "react-icons/si";
import { FiMoon, FiSun } from "react-icons/fi";

const techs = [
  { icon: FaLinux, name: "Linux", url: "https://www.linux.org/", color: "text-gray-700 dark:text-yellow-200" },
  { icon: FaDocker, name: "Docker", url: "https://www.docker.com/", color: "text-blue-500" },
  { icon: SiKubernetes, name: "Kubernetes", url: "https://kubernetes.io/", color: "text-sky-500" },
  { icon: SiOracle, name: "Oracle Cloud", url: "https://www.oracle.com/cloud/", color: "text-red-600" },
  { icon: FaGitAlt, name: "Git", url: "https://git-scm.com/", color: "text-orange-500" },
  { icon: SiPrometheus, name: "Prometheus", url: "https://prometheus.io/", color: "text-orange-500" },
  { icon: SiGrafana, name: "Grafana", url: "https://grafana.com/", color: "text-orange-600" },
  { icon: FaNodeJs, name: "Node.js", url: "https://nodejs.org/", color: "text-green-600" },
  { icon: FaReact, name: "React", url: "https://react.dev/", color: "text-cyan-400" },
  { icon: SiTailwindcss, name: "Tailwind CSS", url: "https://tailwindcss.com/", color: "text-sky-400" },
];

const summary = {
  en: "Cloud & DevOps engineer with hands-on experience in automation, monitoring, pipeline creation, and scalable solutions for modern infrastructure.",
  br: "Engenheiro Cloud & DevOps com experiência prática em automação, monitoramento, criação de pipelines e soluções escaláveis para infraestrutura moderna."
};

export default function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("en");
  const otherLang = lang === "en" ? "br" : "en";
  const flagIcon = otherLang === "en" ? "🇧🇷" : "🇺🇸" ;

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-gray-50 via-neutral-100 to-slate-100 dark:from-gray-900 dark:via-gray-950 dark:to-slate-900 transition-all">
      {/* Animated BG */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 animate-gradient-fade"
        style={{
          background: "linear-gradient(120deg, #f0f3fa 0%, #e8eaf6 33%, #cfd8dc 70%, #e0e7ef 100%)",
          opacity: dark ? 0.18 : 0.5,
          transition: "opacity 0.5s",
        }}
      ></div>

      {/* Floating Buttons */}
      <div className="fixed left-4 top-5 flex flex-col gap-3 z-30">
        <button
          onClick={() => setLang(otherLang)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 shadow hover:scale-110 transition-all text-2xl"
          title={lang === "en" ? "Mudar para Português" : "Switch to English"}
        >
          {flagIcon}
        </button>
        <button
          onClick={() => setDark((d) => !d)}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 border border-slate-200 dark:border-gray-700 shadow hover:scale-110 transition-all text-xl"
          title={dark ? "Light mode" : "Dark mode"}
        >
          {dark ? <FiSun /> : <FiMoon />}
        </button>
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-4 py-8">
        <img
          src={profilePic}
          alt="Alex Neme Marmontel"
          className="w-28 h-28 rounded-full border-4 border-slate-200 dark:border-gray-700 shadow-lg mb-5"
        />
        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-1 tracking-tight text-center">
          Alex Neme Marmontel
        </h1>
        <div className="text-lg text-slate-600 dark:text-slate-200 font-semibold mb-4 text-center">
          Cloud & DevOps Engineer
        </div>
        <div className="max-w-2xl text-center text-slate-700 dark:text-slate-300 mb-7 leading-relaxed text-base">
          {summary[lang]}
        </div>
        {/* Contact */}
        <div className="flex flex-wrap gap-5 items-center justify-center mb-8">
          <a href="mailto:alexneme@me.com" className="hover:underline text-blue-600 dark:text-blue-300 font-medium">
            {lang === "en" ? "Contact me" : "Contato via E-mail"}
          </a>
          <span className="text-gray-400">|</span>
          <a
            href="https://linkedin.com/in/alexneme"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-700 dark:text-blue-400 font-medium"
          >
            LinkedIn
          </a>
        </div>
        {/* Tech Stack */}
        <div className="w-full max-w-3xl flex flex-col items-center gap-3">
          <div className="text-center text-base font-semibold text-slate-700 dark:text-slate-200 mb-1">
            {lang === "en" ? "Used technologies" : "Tecnologias utilizadas"}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-items-center">
            {techs.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-24 h-24 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow hover:scale-110 hover:shadow-xl hover:ring-2 hover:ring-blue-300 dark:hover:ring-cyan-400 transition-transform ring-1 ring-slate-100 dark:ring-gray-800 group"
                title={t.name}
              >
                <t.icon className={`${t.color} mb-1 group-hover:animate-bounce transition-all`} size={34} />
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-1">{t.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Blog */}
        <div className="mt-10 w-full max-w-lg">
          <a
            href="https://blog.neme.site"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-lg text-center bg-white/80 dark:bg-gray-800/80 shadow p-4 text-slate-700 dark:text-slate-200 hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={lang === "en" ? "Visit my blog!" : "Visite meu blog!"}
          >
            <span className="underline-offset-4 group-hover:no-underline">
              {lang === "en" ? "Visit my blog!" : "Visite meu blog!"}
            </span>
          </a>
        </div>
        {/* Footer */}
        <footer className="w-full text-center text-xs text-slate-500 dark:text-slate-400 py-10 mt-8">
          © {new Date().getFullYear()} Alex Neme - {lang === "en" ? "All rights reserved" : "Todos os direitos reservados"}.  
        </footer>
      </main>
      {/* Tailwind for animation */}
      <style>
        {`
        @keyframes gradient-fade {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .animate-gradient-fade {
          background-size: 200% 200%;
          animation: gradient-fade 15s ease-in-out infinite;
        }
      `}
      </style>
    </div>
  );
}
