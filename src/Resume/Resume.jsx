import React, { useState, useEffect } from "react";
import {
  Download,
  Eye,
  FileText,
  ExternalLink,
  Maximize2,
  Minimize2,
} from "lucide-react";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-16 h-16 bg-blue-400 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-cyan-500 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent tracking-tight">
              Portfolio
            </h1>
          </div>
          <p className="text-xl text-gray-700 font-light tracking-wide">
            Professional Experience & Achievements
          </p>
        </div>

        {/* Resume Container */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            isFullscreen ? "fixed inset-6 z-50" : "w-full max-w-5xl"
          }`}
        >
          <div className="relative backdrop-blur-xl bg-white/70 border border-blue-200 rounded-3xl shadow-xl overflow-hidden">
            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-10 backdrop-blur-sm">
                <div className="text-center space-y-4">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-gray-800 font-medium">Loading Resume...</p>
                </div>
              </div>
            )}

            {/* Control bar */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-4 flex items-center justify-between border-b border-blue-200">
              <span className="text-gray-800 font-medium">
                Aadarsh_Resume.pdf
              </span>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* PDF Viewer */}
            <div
              className={`${
                isFullscreen ? "h-[calc(100vh-140px)]" : "h-[70vh] md:h-[80vh]"
              }`}
            >
              <iframe
                src="/resume.pdf"
                title="Resume"
                className="w-full h-full"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Primary button */}
          <a
            href="/resume.pdf"
            download="Aadarsh_Shrivastav_Resume.pdf"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center space-x-3"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>

          {/* Secondary button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-3"
          >
            <ExternalLink className="w-5 h-5" />
            <span>View Online</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Resume;
