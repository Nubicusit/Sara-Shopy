"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Card 1", image: "/img/slider/slider1.jpeg" },
    { id: 2, title: "Card 2", image: "/img/slider/slider2.jpeg" },
    { id: 3, title: "Card 3", image: "/img/slider/slider3.jpeg" },
    { id: 4, title: "Card 4", image: "/img/slider/slider1.jpeg" },
    { id: 5, title: "Card 5", image: "/img/slider/slider2.jpeg" },
    { id: 6, title: "Card 6", image: "/img/slider/slider3.jpeg" },
  ];

  const [autoScroll, setAutoScroll] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Auto-scroll functionality
  const scrollToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      scrollToNext();
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [autoScroll, scrollToNext]);

  // Handle scroll position
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const cardWidth = container.firstChild?.offsetWidth || 0;
      const gap = 16; // gap-4 = 16px
      container.scrollTo({
        left: currentIndex * (cardWidth + gap),
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setAutoScroll(false);
  const handleMouseLeave = () => setAutoScroll(true);

  return (
    <div
      className="w-full py-8 relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="flex gap-4 px-4 overflow-x-scroll scrollbar-hide snap-x scroll-smooth"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 relative rounded-xl overflow-hidden shadow-lg transition-transform
            "
            style={{ width: "350px", height: "200px" }}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
              priority={card.id <= 2} // Preload first two images
            />
           
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-blue-500 w-6" : "bg-gray-300"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
