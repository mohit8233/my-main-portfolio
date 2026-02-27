import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-gray-800 flex items-center justify-center px-4 sm:px-8 relative overflow-hidden">
      {/* Mouse glow background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Main grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
        {/* Left content */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent text-center md:text-left">
              Hi, I'm Aadarsh
            </h1>
            <span className="text-2xl sm:text-3xl md:text-4xl animate-bounce">
              👋
            </span>
          </div>

          <div className="mb-8 text-center md:text-left">
            <div
              className="text-lg sm:text-xl text-blue-600 font-semibold mb-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              Full Stack Developer
            </div>
            <p
              className="text-base sm:text-lg text-gray-700 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
            >
              I am a passionate developer who loves building elegant, efficient,
              and user-friendly web applications. Welcome to my portfolio, where
              I showcase my skills, projects, and journey in the world of
              software development.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-wrap justify-center md:justify-start gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}
          >
            <Link to="/projects">
              <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                View My Work
              </button>
            </Link>

            <Link to="/contact">
              <button className="cursor-pointer border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                Get In Touch
              </button>
            </Link>
          </div>

          {/* Skills */}
          <div
            className="mt-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["React", "Node.js", "Python", "JavaScript", "Django"].map(
                (skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/70 backdrop-blur-sm border border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:bg-blue-100 transition-all duration-300 cursor-default hover:scale-110"
                    style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right image */}
        <div
          className={`flex justify-center transition-all duration-1000 ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="relative group w-64 sm:w-72 md:w-80">
            {/* Glowing background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

            {/* Main image container */}
            <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <img
                src="./channels4_profile.jpg"
                alt="Aadarsh"
                className="w-full h-auto rounded-2xl object-cover"
              />

              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-5 sm:w-6 h-5 sm:h-6 bg-purple-500 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div className="absolute top-1/4 -left-6 sm:-left-8 w-3 sm:w-4 h-3 sm:h-4 bg-indigo-500 rounded-full animate-pulse"></div>
              <div
                className="absolute bottom-1/4 -right-6 sm:-right-8 w-4 sm:w-5 h-4 sm:h-5 bg-cyan-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.7s" }}
              ></div>
            </div>

            {/* Status indicator */}
            <div className="absolute top-4 right-4 bg-green-500 w-3 sm:w-4 h-3 sm:h-4 rounded-full animate-pulse shadow-lg">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping"></div>
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

export default Home;
