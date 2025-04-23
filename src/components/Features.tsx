import React from 'react';
import { Brain, BookOpen, CheckCircle, MessageSquare, BarChart3, UserPlus } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "AI Study Roadmaps",
      description: "Personalized learning paths created by AI based on your learning style, goals, and current knowledge."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "AI Tutor Chat",
      description: "Chat with our AI tutor 24/7 to get immediate help with homework, concepts, and exam preparation."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Task Management",
      description: "Organize study tasks, track progress, and receive intelligent reminders to stay on schedule."
    },
    {
      icon: <UserPlus size={24} />,
      title: "Tutor-Student Chat",
      description: "Connect with real tutors for advanced guidance and personalized feedback on complex topics."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Progress Analytics",
      description: "Detailed analytics on your learning progress, strengths, weaknesses, and improvement suggestions."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Parent Dashboard",
      description: "Parents can monitor progress, view upcoming assignments, and receive performance insights."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supercharge Your Learning
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            EduQuest combines the power of AI with proven learning techniques to help you excel in your studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;