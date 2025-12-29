'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from "next/image";
import Layout from "@/components/Layout";

const mediaImages = [
  '/media/1.jpeg',
  '/media/2.jpeg',
  '/media/3.jpeg',
  '/media/4.jpeg',
  '/media/5.jpeg',
  '/media/6.jpeg',
  '/media/7.jpeg',
  '/media/8.jpeg',
  '/media/9.jpeg',
  '/media/10.jpeg',
  '/media/11.jpeg',
  '/media/12.jpeg',
  '/media/13.png'
];

export default function Media() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-slideshow: 5 second interval, pauses on hover
  useEffect(() => {
    if (isPaused || lightboxOpen) {
      setProgress(0);
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaImages.length);
          return 0;
        }
        return prev + 2; // 2% every 100ms = 5 seconds total
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPaused, lightboxOpen]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length);
    setProgress(0);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % mediaImages.length);
    setProgress(0);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + mediaImages.length) % mediaImages.length);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % mediaImages.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') lightboxPrev();
      if (e.key === 'ArrowRight') lightboxNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <Layout>
      <div className="bg-linear-to-b from-stone-50 via-white to-stone-50 min-h-screen">
        {/* Premium Header */}
        <div className="pt-24 pb-12 sm:pt-32 sm:pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium tracking-[0.3em] text-stone-500 uppercase mb-4">
                Gallery
              </p>
              <h1 className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide text-stone-900">
                Media
              </h1>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-linear-to-r from-transparent to-stone-300"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-stone-400"></div>
                <div className="h-px w-12 bg-linear-to-l from-transparent to-stone-300"></div>
              </div>
              <p className="mt-6 text-lg leading-8 text-stone-600 font-light">
                A visual journey through conferences, research, and academic engagements
              </p>
            </div>
          </div>
        </div>

        {/* Main Slideshow */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-8">
          <div
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Image Container */}
            <div className="relative aspect-16/10 sm:aspect-video overflow-hidden rounded-2xl shadow-2xl bg-stone-900">
              {mediaImages.map((src, index) => (
                <div
                  key={src}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Media ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                </div>
              ))}

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

              {/* Paused Indicator */}
              {isPaused && (
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-opacity duration-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Paused
                </div>
              )}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                {/* Progress Bar */}
                <div className="mb-4 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                {/* Counter */}
                <div className="flex items-center justify-between">
                  <span className="text-white/90 text-sm font-medium">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(mediaImages.length).padStart(2, '0')}
                  </span>
                  <button
                    onClick={() => openLightbox(currentIndex)}
                    className="text-white/90 text-sm font-medium flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                    View Full Size
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {mediaImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-stone-800'
                      : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="font-cinzel text-2xl sm:text-3xl font-light text-stone-900 text-center mb-8">
            All Photos
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3">
            {mediaImages.map((src, index) => (
              <button
                key={src}
                onClick={() => openLightbox(index)}
                className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  index === currentIndex
                    ? 'ring-3 ring-stone-800 ring-offset-2'
                    : 'hover:ring-2 hover:ring-stone-400 hover:ring-offset-1'
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 16vw"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-stone-800/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white shadow-lg" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
            {String(lightboxIndex + 1).padStart(2, '0')} / {String(mediaImages.length).padStart(2, '0')}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] m-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={mediaImages[lightboxIndex]}
              alt={`Full size image ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
            {mediaImages.map((src, index) => (
              <button
                key={src}
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(index); }}
                className={`relative w-10 h-10 rounded-md overflow-hidden transition-all duration-200 ${
                  index === lightboxIndex
                    ? 'ring-2 ring-white scale-110'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
