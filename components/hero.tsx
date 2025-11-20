'use client'

import { useState, useEffect } from 'react'

const heroSlides = [
  {
    id: 1,
    title: 'Express Air Freight',
    subtitle: 'Fast & Reliable Global Delivery',
    description: 'Experience swift international shipping with our premium air freight services. We deliver to 190 countries worldwide, guaranteeing timely delivery of your cargo with real-time tracking and comprehensive insurance coverage.',
    image: '/air.jpg',
    cta: 'Learn About Air Freight'
  },
  {
    id: 2,
    title: 'Sea Freight & Warehousing',
    subtitle: 'Complete Logistics Solutions',
    description: 'Optimize your shipping costs with our comprehensive sea freight services and state-of-the-art warehousing facilities. From FCL to LCL shipments, we handle all logistics efficiently with secure storage and dedicated customer support.',
    image: '/Container.jpeg',
    cta: 'Explore Our Services'
  }
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsTransitioning(false)
      }, 300)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const slide = heroSlides[currentSlide]

  const handlePrevious = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  const handleNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section className="bg-white pt-20 md:pt-0 relative overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 items-center min-h-screen">
        {/* Image Section */}
        <div className="h-96 md:h-full bg-gray-200 order-2 md:order-2 relative">
          <img 
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />
          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentSlide(index)
                    setIsTransitioning(false)
                  }, 300)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-red-accent w-8'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Section - White Box */}
        <div className={`bg-white p-8 md:p-16 order-1 md:order-1 h-96 md:h-full flex flex-col justify-center transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          <p className="text-red-accent font-bold text-sm mb-2 uppercase tracking-wide">
            {slide.subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-4">
            {slide.title}
          </h1>
          <p className="text-navy-blue text-lg md:text-xl font-semibold mb-4 italic">
            Delivering Peace of Mind Worldwide.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            {slide.description}
          </p>
          <button className="bg-red-accent text-white px-8 py-3 font-bold hover:bg-red-accent/90 transition w-fit">
            {slide.cta}
          </button>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 md:hidden">
          <button
            onClick={handlePrevious}
            className="bg-red-accent text-white p-2 rounded-full hover:bg-red-accent/90 transition"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-red-accent text-white p-2 rounded-full hover:bg-red-accent/90 transition"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
