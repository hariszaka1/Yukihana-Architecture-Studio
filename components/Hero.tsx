import React, { useState, useEffect, useCallback } from 'react';
import { HERO_SLIDES } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000); // Change slide every 7 seconds
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen -mt-24 flex items-center justify-center text-white overflow-hidden">
      {/* Background Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center ${index === currentSlide ? 'animate-ken-burns-in' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
          <div className="absolute inset-0 bg-brand-dark/60"></div>
        </div>
      ))}

      {/* Text Content - re-mounts on slide change to re-trigger animations */}
      <div key={currentSlide} className="relative z-20 text-center p-6">
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up" 
          style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)', animationDelay: '200ms', animationFillMode: 'backwards'}}
        >
          {HERO_SLIDES[currentSlide].title}
        </h1>
        <p 
          className="max-w-3xl mx-auto text-lg md:text-xl text-brand-gray mb-8 animate-fade-in-up" 
          style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)', animationDelay: '400ms', animationFillMode: 'backwards'}}
        >
          {HERO_SLIDES[currentSlide].subtitle}
        </p>
        <div className="animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'backwards'}}>
          <Button to={HERO_SLIDES[currentSlide].link}>
            {HERO_SLIDES[currentSlide].buttonText}
          </Button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-yellow scale-125' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-panel hover:bg-white/20 transition hidden md:block" aria-label="Previous slide">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full glass-panel hover:bg-white/20 transition hidden md:block" aria-label="Next slide">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
    </section>
  );
};

export default Hero;