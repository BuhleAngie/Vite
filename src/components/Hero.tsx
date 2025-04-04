import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      
        title: "Vital Wheels",
        description: "Care That Moves With You",
        image: "https://www.pharmaccess.org/wp-content/uploads/2016/05/MisterSister.jpg"
      
      
    },

    {
      
        title: "Mobile Clinic Access",
        description: "Bringing essential healthcare services directly to your community—anytime, anywhere.",
        image: "https://d7.westerncape.gov.za/sites/www.westerncape.gov.za/files/picture_2_0.jpg"
      
      
    },
    {
      
      
        title: "Easy & Accessible",
        description: "Book appointments anytime. No long queues. No travel hassles. Just care — simplified.",
        image: "https://static.zawya.com/view/acePublic/alias/contentid/image.200518100354YJCD/3/200518100354yjcd-jpg.webp?f=3%3A2&q=0.75&w=3840"
      
      
      }
      
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center">
            {/* Animated title with bounce effect */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white opacity-0 animate-[bounceIn_1s_ease-out_forwards]">
              {slides[currentSlide].title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className="inline-block hover:animate-bounce hover:text-amber-400 transition-colors duration-300"
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Animated description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 animate-[slideUp_1s_ease-in_0.5s_forwards]">
              {slides[currentSlide].description}
            </p>

            {/* Buttons with bounce effect on hover */}
            <div className="flex justify-center gap-4">
              <button className="bg-amber-400 hover:bg-amber-500 text-black font-bold py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 transform hover:animate-bounce">
                Get Started
              </button>
              <button className="bg-transparent hover:bg-gray-800 text-white border border-gray-400 font-bold py-3 px-6 rounded-md transition-all duration-300 hover:border-amber-400 hover:animate-bounce">
                Learn More
              </button>
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide
                      ? 'bg-amber-400 w-6'
                      : 'bg-gray-400 hover:bg-amber-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;