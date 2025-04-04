import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Mobile Clinic Access',
      description: 'Get healthcare services anytime, anywhere through our mobile clinic platform — designed to reach underserved areas with ease.'
    },
    {
      title: 'Simple Booking System',
      description: 'Book your appointments quickly with just a few clicks. No long queues or paperwork — your health, simplified.'
    },
    {
      title: 'Clean & Friendly Design',
      description: 'Easy-to-use interface with clear navigation and calming colors to make your experience smooth and stress-free.'
    }
  ];

  return (
    // Using CSS Grid for responsive card layout
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Added slide-in animation for title */}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 animate-[slideIn_1s_ease-in-out]">
          Key Features
        </h2>
        {/* Responsive grid layout with gap */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            // Added hover animations and transform effects
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md border-t-4 border-amber-400 
                       hover:shadow-lg transition-all duration-300 hover:-translate-y-2
                       opacity-0 animate-[fadeIn_0.5s_ease-in_forwards]"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;