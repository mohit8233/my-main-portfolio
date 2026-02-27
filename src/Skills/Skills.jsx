import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

const categories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", level: 85, icon: "⚙️" },
      { name: "C++", level: 90, icon: "🔧" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "JavaScript", level: 95, icon: "⚡" },
      { name: "Python", level: 88, icon: "🐍" }
    ],
    color: "from-blue-600 to-purple-600",
    bgColor: "from-blue-100 to-purple-100",
    description: "Core programming languages I use to solve problems and build applications"
  },
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 92, icon: "⚛️" },
      { name: "HTML", level: 95, icon: "🌐" },
      { name: "CSS", level: 90, icon: "🎨" },
      { name: "Tailwind", level: 88, icon: "💨" },
      { name: "MERN Stack", level: 85, icon: "📚" },
      { name: "Django", level: 75, icon: "🐍" }
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-100 to-pink-100",
    description: "Modern web technologies for creating dynamic user experiences"
  },
  {
    title: "Database & Backend",
    skills: [
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "MySQL", level: 82, icon: "🐬" },
      { name: "PostgreSQL", level: 82, icon: "🐬" },
      { name: "MongoDB", level: 80, icon: "🍃" },
      { name: "Node.js", level: 88, icon: "🟢" }
    ],
    color: "from-green-500 to-cyan-500",
    bgColor: "from-green-100 to-cyan-100",
    description: "Data management and server-side technologies"
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 90, icon: "📋" },
      { name: "GitHub", level: 92, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Tkinter", level: 78, icon: "🖥️" }
    ],
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-100 to-blue-100",
    description: "Development tools and frameworks I work with daily"
  },
  {
    title: "Computer Science",
    skills: [
      { name: "Data Structures", level: 85, icon: "🏗️" },
      { name: "Algorithms", level: 82, icon: "🧠" },
      { name: "Computer Architecture", level: 78, icon: "🔧" },
      { name: "System Design", level: 75, icon: "📐" }
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-100 to-red-100",
    description: "Fundamental computer science concepts and principles"
  }
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      <div className="mb-4 group">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="font-semibold text-gray-700">{skill.name}</span>
          </div>
          <span className="text-sm text-gray-500 font-medium">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="h-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
            style={{ width: `${animatedLevel}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 px-8 py-16 relative overflow-hidden">

      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      />
      

      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            My Skills
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across different domains of software development
          </p>
        </div>

    
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 opacity-0 animate-fade-in-up`} style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-sm text-gray-600 font-medium">Technologies</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
            <div className="text-sm text-gray-600 font-medium">Categories</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-green-600 mb-2">1+</div>
            <div className="text-sm text-gray-600 font-medium">Years Learning</div>
          </div>
          <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
            <div className="text-sm text-gray-600 font-medium">Passion</div>
          </div>
        </div>

      
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className={`relative group transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ animationDelay: `${0.6 + idx * 0.15}s` }}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
          
              <div
                className={`absolute -inset-3 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500 bg-gradient-to-r ${category.color}`}
              />

            
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl border border-white/50 p-8 transform transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl">
          
                <div className="mb-6">
                  <h2 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

         
                <div className="space-y-1">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      delay={600 + idx * 150 + skillIdx * 100}
                    />
                  ))}
                </div>

           
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300 ${hoveredCard === idx ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`}></div>
              </div>
            </div>
          ))}
        </div>

   
        <div className={`mt-20 text-center opacity-0 animate-fade-in-up`} style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Continuous Learning</h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Always Growing, Always Learning</h3>
              <p className="text-lg mb-6 opacity-90">
                Technology evolves rapidly, and so do I. I'm constantly learning new frameworks, 
                exploring emerging technologies, and refining my existing skills. My journey in 
                tech is just beginning, and I'm excited about what lies ahead.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                  🎯 Currently Learning: Next.js
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                  🚀 Next Goal: Cloud Computing
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold">
                  💡 Exploring: AI/ML
                </div>
              </div>
            </div>
          </div>
        </div>

    
        <div className={`text-center mt-16 opacity-0 animate-fade-in-up`} style={{ animationDelay: '2.1s', animationFillMode: 'forwards' }}>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to='/projects'>
            <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105">
              View My Projects
            </button>
            </Link>

            <Link to='/contact'>
            <button className="cursor-pointer border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Let's Collaborate
            </button>
            </Link>
          </div>
        </div>
      </div>

     
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skills;