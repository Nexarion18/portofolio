import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiC, SiVite, SiNextdotjs, SiGit } from "react-icons/si";

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
  return (
            <div id="porto" className="mx-auto sm:w-full md:w-3/4 lg:w-4xl px-4 mt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-left pb-5">SKILLS</h1>
    
    <section className="py-16 text-white text-center">
      <div className="max-w-md mx-auto  grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill, idx) => (

            <div
            key={idx}
            className="w-16 sm:w-15 md:w-20 lg:w-20 xl:w-32 h-16 sm:h-15 md:h-20 lg:h-20 xl:h-32 flex items-center justify-center border border-gray-300 rounded-2xl hover:scale-105 transition-all"
            title={skill.name}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{skill.icon}</div>
            </div>
        ))}
      </div>
    </section>
        </div>
  );
}
