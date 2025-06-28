import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiC, SiVite, SiNextdotjs, SiGit } from "react-icons/si";
import Education from "./Education";
import { Sertif } from "./sertif";
const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-green-600" /> },
  { name: "C", icon: <SiC className="text-blue-500" /> },
  { name: "Vite", icon: <SiVite className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-blue-500" /> },

];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <div id="porto" className="mx-auto sm:w-full md:w-3/4 lg:w-4xl px-4 mt-10">
      <div className="flex justify-left space-x-2 mb-0">
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "skills" ? "bg-gray-100" : "bg-white"}`}
          onClick={() => setActiveTab("skills")}
        >
          Tech Stack
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "tools" ? "bg-gray-100" : "bg-white"}`}
          onClick={() => setActiveTab("tools")}
        >
          Education
        </button>
        <button
          className={`px-4 py-2 rounded-md ${activeTab === "sertif" ? "bg-gray-100" : "bg-white"}`}
          onClick={() => setActiveTab("sertif")}
        >
          Certificate
        </button>
      </div>
      {activeTab === "skills" && (
        <section className="py-7 text-white text-center">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-3 border border-gray-300 bg-white text-black rounded-xl hover:scale-105 transition-all"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl">{skill.icon}</div>
                <span className="text-sm sm:text-base md:text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}
      {activeTab === "tools" && (
        <section className="py-7 text-center">
          <Education />
        </section>
      )}
      {activeTab === "sertif" && (
        <section className="py-7 text-center text-white">
          <Sertif />
        </section>
      )
      }

    </div >
  );
}
