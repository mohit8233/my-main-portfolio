import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 95, icon: "🌐" },
      { name: "CSS", level: 92, icon: "🎨" },
      { name: "JavaScript", level: 95, icon: "⚡" },
      { name: "React", level: 92, icon: "⚛️" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
      { name: "Bootstrap", level: 88, icon: "🅱️" }
    ],
    color: "from-purple-500 to-pink-500",
    description:
      "Modern frontend technologies for building responsive and interactive web applications"
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, icon: "📋" },
      { name: "GitHub", level: 92, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" }
    ],
    color: "from-indigo-500 to-blue-500",
    description:
      "Development tools I use daily for efficient workflow"
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const SkillBar = ({ skill, delay }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }, [skill.level, delay]);

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="font-semibold text-gray-700">
              {skill.name}
            </span>
          </div>
          <span className="text-sm text-gray-500 font-medium">
            {skill.level}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${animatedLevel}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 px-6 py-16 relative overflow-hidden">

      {/* Mouse Light Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.15), transparent 40%)`
        }}
      />

      {/* Floating Dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my frontend development skills and tools I use to
            build modern web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div
                className={`absolute -inset-2 rounded-3xl blur-lg opacity-20 bg-gradient-to-r ${category.color}`}
              ></div>

              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 p-8 hover:-translate-y-2 transition-all duration-500">
                <h2
                  className={`text-2xl font-bold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h2>

                <p className="text-gray-600 text-sm mb-6">
                  {category.description}
                </p>

                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    delay={skillIdx * 200}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="text-center mt-16">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/projects">
              <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
                View My Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="cursor-pointer border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;