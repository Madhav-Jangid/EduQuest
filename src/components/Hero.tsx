import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import DownloadButton from './DownloadButton';
import HomeImage from '../Assets/Home.png';
import TasksImage from '../Assets/Tasks.png';

const Hero = () => {
  return (
    <section className="relative items-center pt-24 pb-20 md:pt-32 md:pb-24 overflow-hidden bg-gradient-to-b from-white to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-b from-indigo-200/30 to-purple-200/30 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-t from-purple-200/30 to-pink-200/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8 ml-0 lg:ml-32  text-center lg:text-left">
            <div className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/50 rounded-full px-3 py-1 text-sm font-medium text-indigo-800 dark:text-indigo-300 mb-2">
              <Star size={16} className="mr-1 text-yellow-500" />
              <span>AI-powered learning for students</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">Revolutionize Your</span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Learning Journey</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              EduQuest combines AI tutoring, personalized study roadmaps, and interactive learning to help students excel in their academic journey.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <DownloadButton size="lg" />

              <a href="#features" className="group inline-flex items-center px-6 py-3 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium">
                Learn More
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 border-2 border-white dark:border-slate-800 flex items-center justify-center text-xs font-bold text-gray-800 dark:text-gray-200">
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">1,000+</span> students already learning
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10   bg-black dark:bg-slate-800 w-max rounded-3xl shadow-3xl p-2 max-w-xs mx-auto">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={HomeImage}
                  alt="EduQuest app interface"
                  className="w-auto h-[70vh]"
                />
              </div>
              <div className="absolute -bottom-4 -right-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg p-4 text-white text-sm font-medium">
                AI Tutor Available 24/7
              </div>
            </div>
            <div className=" absolute top-10 -ml-5 md:ml-16 z-8 bg-black dark:bg-slate-800 w-max rounded-3xl shadow-xl p-2 max-w-xs mx-auto">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={TasksImage}
                  alt="EduQuest app interface"
                  className="w-auto h-[60vh]"
                />
              </div>

            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;