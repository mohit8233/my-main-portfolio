import React from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  GraduationCap,
} from "lucide-react";

import { MdQuiz } from "react-icons/md";

const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "QuizApp",
      subtitle: "Interactive Quiz Platform",
      description:
        "Test your knowledge with fun quizzes and get instant results.",
      icon: <MdQuiz className="w-8 h-8" />,
      gradient: "from-green-400 via-blue-500 to-purple-600",
      tags: ["HTML", "CSS", "JavaScript"],
      features: ["Multiple Choice Questions", "Instant Results"],
      website: "https://quiz-app-red-tau.vercel.app/",
      github: "https://github.com/mohit8233/Quiz-App",
    },

    {
      id: 2,
      title: "Student Management System",
      subtitle: "Manage Students Efficiently",
      description:
        "A complete student management platform to manage student records, attendance, courses, and performance reports.",
      icon: <GraduationCap className="w-8 h-8" />,
      gradient: "from-green-600 via-emerald-600 to-green-800",
      tags: ["React", "Tailwind", "Node", "MongoDB"],
      features: [
        "Student Records",
        "Attendance Tracking",
        "Course Management",
        "Performance Reports",
      ],
      website: "https://smg-self.vercel.app/login",
      github: "https://github.com/mohit8233/SMS",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>

          <p className="text-gray-700 max-w-2xl mx-auto">
            A collection of innovative applications showcasing modern web development.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl border border-blue-200 overflow-hidden shadow-md hover:scale-105 transition duration-500"
            >
              {/* glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}
              />

              {/* buttons */}
              <div className="absolute top-4 right-4 z-10 flex gap-2">
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600/10 hover:bg-blue-600 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600/10 hover:bg-purple-600 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="relative p-6">

                {/* ICON */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} mb-5 text-white`}
                >
                  {project.icon}
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>

                <p className="text-blue-600 text-sm mb-2">
                  {project.subtitle}
                </p>

                <p className="text-gray-700 text-sm mb-4">
                  {project.description}
                </p>

                {/* FEATURES */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-white/70 border border-blue-200 rounded-full"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 border-t pt-4 border-blue-200">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 text-white rounded bg-gradient-to-r ${project.gradient}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;