import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image }) => (
  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
    <div className="mb-4 text-indigo-500 dark:text-indigo-400">
      <Quote size={24} />
    </div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{quote}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote: "EduQuest has revolutionized my study routine. The AI tutor helped me understand complex physics concepts that I had been struggling with for months.",
      name: "Alex Johnson",
      role: "Computer Science Student",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The personalized study roadmaps are incredible. It's like having a personal academic advisor who knows exactly what I need to work on.",
      name: "Samantha Chen",
      role: "Biology Major",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a parent, I love the insights I get about my daughter's progress. It helps me support her studies without having to constantly ask about assignments.",
      name: "Michael Torres",
      role: "Parent",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join thousands of students who are transforming their academic performance with EduQuest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300 rounded-full px-4 py-2 text-sm font-medium">
            <span className="mr-2">🏆</span>
            <span>Rated 4.8/5 by students across 20+ colleges</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;