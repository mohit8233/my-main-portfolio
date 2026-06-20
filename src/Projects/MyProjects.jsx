import React from "react";
import {
  ExternalLink,
  Github,
  Sparkles,
  Link as LinkIcon,
  Brain,
  DollarSign,
  Video,
  FileText,
} from "lucide-react";
import { MdQuiz, MdWork } from "react-icons/md";
const MyProjects = () => {
  const projects = [
    {
      id: 1,
      title: "JobFinder",
      subtitle: "Smart Job Search",
      description: "Find your dream job effortlessly with advanced search and alerts.",
      icon: <MdWork className="w-8 h-8" />,
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      tags: ["React", "Node", "Job Portal","Express", "Tailwind"],
      features: ["Job Listings", "Email Alerts", "Application Tracking","DashBoard","Login"],
      website: "https://worknest-yas4.vercel.app/",
      github: "https://github.com/mohit8233/worknest",
    },
    {
      id: 2,
      title: "QuizApp",
      subtitle: "Interactive Quiz Platform",
      description: "Test your knowledge with fun quizzes and get instant results.",
      icon: <MdQuiz className="w-8 h-8" />, 
      gradient: "from-green-400 via-blue-500 to-purple-600",
      tags: ["HTML", "CSS", "JavaScript"],
      features: ["Multiple Choice Questions", "Instant Results"],
      website: "https://quiz-app-red-tau.vercel.app/",
      github: "https://github.com/mohit8233/Quiz-App",
    },

   {
  id: 4,
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
    "Performance Reports"
  ],
  website: "https://smg-self.vercel.app/login",
  github: "https://github.com/mohit8233/SMS",
},

  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>
          <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A collection of innovative applications and platforms I've built,
            showcasing modern web technologies and user-centric design
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white/70 backdrop-blur-md rounded-2xl border border-blue-200 overflow-hidden shadow-md transition-all duration-500 hover:scale-105"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}
              />

              {/* Action Buttons (Always Visible) */}
              <div className="absolute top-4 right-4 z-10">
                <div className="flex gap-2">
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-purple-600/10 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative p-6 sm:p-8">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6`}
                >
                  <div className="text-white">{project.icon}</div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-white/70 text-gray-800 rounded-full border border-blue-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-blue-200">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs font-medium rounded bg-gradient-to-r ${project.gradient} text-white`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.gradient}`}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 px-4">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-8 py-4 bg-white/70 backdrop-blur-md rounded-full border border-blue-200">
            <span className="text-gray-800 text-sm sm:text-base">
              Want to see more of my work?
            </span>
            <a
              href="https://github.com/mohit8233"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
