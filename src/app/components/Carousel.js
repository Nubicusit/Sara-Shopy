"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/img/banner/banner1.avif",
  "/img/banner/banner2.avif",
  "/img/banner/banner3.avif",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image(); // Avoid conflict with next/image
      img.src = src;
    });
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      {/* Carousel Images */}
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="absolute w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0} // Preload the first image
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/75 text-white px-3 py-2 rounded-full hover:bg-gray-900/90 transition-colors duration-200"
        aria-label="Previous Slide"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/75 text-white px-3 py-2 rounded-full hover:bg-gray-900/90 transition-colors duration-200"
        aria-label="Next Slide"
      >
        ➡
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            } transition-colors duration-200`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
