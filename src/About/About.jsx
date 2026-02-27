import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const achievements = [
    { number: "1+", label: "Years of Learning", icon: "🎓" },
    { number: "10+", label: "Projects Built", icon: "🚀" },
    { number: "5+", label: "Technologies", icon: "⚡" },
    { number: "100%", label: "Passion Level", icon: "❤️" },
  ];

  const interests = [
    {
      title: "Web Development",
      desc: "Building responsive and modern web applications",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Solving algorithmic challenges and improving problem-solving skills",
      icon: "🧠",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "AI & Machine Learning",
      desc: "Exploring the fascinating world of artificial intelligence",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Data Science",
      desc: "Exploring data analysis, visualization, and ML to uncover insights",
      icon: "📊",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const timeline = [
    {
      year: "2024",
      event: "Started B.Tech in Computer Science",
      desc: "Began my journey into the world of technology",
    },
    {
      year: "2024",
      event: "First Web Development Project",
      desc: "Built my first complete web application",
    },
    {
      year: "2025",
      event: "Advanced Learning Phase",
      desc: "Diving deeper into modern frameworks and technologies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 px-4 sm:px-8 py-12 sm:py-16 relative overflow-hidden">
      {/* Mouse glow effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-40 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            About Me
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-600 mt-4 sm:mt-6 max-w-2xl mx-auto">
            Passionate developer on a journey to create meaningful digital
            experiences
          </p>
        </div>

        {/* My Story & Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Left - Journey */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl sm:text-3xl">👨‍💻</span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  My Journey
                </h2>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Hi there! I'm{" "}
                <span className="font-bold text-blue-600">
                  Aadarsh Shrivastav
                </span>{" "}
                👋, a passionate{" "}
                <span className="font-semibold text-purple-600">
                  2nd-year B.Tech Computer Science student
                </span>{" "}
                who believes in the transformative power of technology.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                What drives me is not just writing code, but solving real-world
                problems through technology. I'm constantly amazed by how a few
                lines of code can automate processes, connect people, or create
                experiences that delight users.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Beyond academics, I'm an avid learner who thrives on challenges.
                Whether debugging at 2 AM or learning a new framework over the
                weekend, I approach every obstacle as an opportunity to grow.
              </p>
            </div>
          </div>

          {/* Right - Interests */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-3">
                <span className="text-2xl sm:text-3xl">🎯</span>
                What I'm Passionate About
              </h2>
              {interests.map((interest, index) => (
                <div
                  key={interest.title}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${0.9 + index * 0.2}s`,
                    animationFillMode: "forwards",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${interest.color} flex items-center justify-center text-white text-lg sm:text-xl shadow-lg`}
                    >
                      {interest.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">
                        {interest.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {interest.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className="mb-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
            My Journey in Numbers
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <div className="text-2xl sm:text-3xl mb-2">
                  {achievement.icon}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                  {achievement.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          className="opacity-0 animate-fade-in-up"
          style={{ animationDelay: "1.8s", animationFillMode: "forwards" }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            My Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full hidden sm:block"></div>
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`flex flex-col sm:flex-row items-center mb-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"
                  }`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">
                      {item.event}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex w-2/12 justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-full sm:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-12 sm:mt-16 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "2.1s", animationFillMode: "forwards" }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Let's Build Something Amazing Together!
            </h3>
            <p className="text-sm sm:text-lg mb-6 opacity-90">
              I'm always excited to collaborate on interesting projects and
              learn from fellow developers.
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center flex-wrap">
              <Link
                to="/projects"
                className="bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                View My Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
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
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
