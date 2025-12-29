"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import { books } from "@/data/books";
import { publications } from "@/data/publications";
import { cvSections } from "@/data/cv";

export default function Home() {
  const [carouselSpeed, setCarouselSpeed] = useState<'1x' | '2x' | '3x'>('1x');

  const getSpeedClass = () => {
    switch (carouselSpeed) {
      case '1x': return 'animate-scroll-1x';
      case '2x': return 'animate-scroll-2x';
      case '3x': return 'animate-scroll-3x';
      default: return 'animate-scroll-1x';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-0 items-center py-8 sm:py-12 lg:py-0 lg:min-h-screen">

            {/* Left side - Content */}
            <div className="py-8 sm:py-12 lg:py-20 space-y-6 sm:space-y-8 lg:space-y-10 pr-0 sm:pr-4 lg:pr-8">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-cinzel font-bold leading-[0.95] text-gray-900 tracking-tight">
                Maruf Hasan Rumi
              </h1>

              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-gray-800">
                <div className="space-y-3 sm:space-y-4">
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-space-grotesk font-light leading-relaxed text-gray-700">
                    Early-Career Academic | Researcher and Educator
                  </h2>
                  <div className="space-y-1 sm:space-y-2">
                    <p className="text-sm sm:text-base lg:text-lg font-space-grotesk font-light leading-relaxed">
                      Graduate Teaching Assistant | J.T. and Margaret Talkington Fellow
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-space-grotesk font-light leading-relaxed">
                      Department of Political Science, Texas Tech University
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg font-space-grotesk font-light leading-relaxed">
                      Assistant Professor (On Leave), Department of Public Administration, University of Dhaka
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div className="h-px bg-linear-to-r from-gray-400 to-transparent w-8 sm:w-12"></div>
                  <p className="text-sm sm:text-base lg:text-lg font-space-grotesk font-medium text-gray-600 whitespace-nowrap">
                    University of Dhaka • Texas Tech University
                  </p>
                  <div className="h-px bg-linear-to-l from-gray-400 to-transparent w-8 sm:w-12"></div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 sm:p-5 lg:p-6 border-l-4 border-gray-400 space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base font-space-grotesk font-light leading-relaxed text-gray-700">
                    Maruf Hasan Rumi is an early career researcher, policy analyst, and public commentator working at the intersection of empirical research, public policy, and social institutions. Trained in both quantitative and qualitative methods, his research emphasizes rigorous empirical analysis, including large-scale survey research, experimental design, and systematic evidence synthesis, complemented by interpretive and qualitative insight. Through this mixed-method approach, he examines how policies shape lived experiences and how institutions reflect deeper moral, political, and structural dynamics.
                  </p>
                  <p className="text-sm sm:text-base font-space-grotesk font-light leading-relaxed text-gray-700">
                    Alongside his academic work, Rumi is an active policy writer whose commentary appears in regional and international outlets. His public-facing writing bridges scholarly research and civic discourse, translating complex policy debates into accessible, evidence-based narratives. Across research, teaching, and public communication, he is guided by a commitment to critical inquiry, collaboration, and the belief that policymaking should be a humane pursuit aimed at generating meaningful and just social impact.
                  </p>
                </div>

              </div>
            </div>

            {/* Right side - Photo */}
            <div className="relative flex items-center justify-center order-first lg:order-last py-4 lg:py-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] mx-auto">
                {/* Premium photo container */}
                <div className="relative overflow-hidden">
                  <Image
                    src="/Rumi, Maruf Hasan (Headshot 5).jpg"
                    alt="Maruf Hasan Rumi"
                    width={500}
                    height={700}
                    className="object-cover object-center rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl w-full h-auto"
                    priority
                  />
                  {/* Subtle gradient overlay for premium effect */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl"></div>
                </div>

                {/* Premium decorative elements */}
                <div className="absolute -inset-2 sm:-inset-4 bg-purple-200/30 rounded-2xl sm:rounded-3xl blur-xl -z-10"></div>
                <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-32 sm:h-32 bg-blue-200/40 rounded-full blur-xl sm:blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 w-12 h-12 sm:w-24 sm:h-24 bg-indigo-200/40 rounded-full blur-xl sm:blur-2xl"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Areas of Interest Section */}
      <section className="bg-linear-to-b from-stone-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-space-grotesk font-medium tracking-widest uppercase text-stone-400 mb-4">Scholarly Pursuits</p>
            <h2 className="text-4xl sm:text-5xl font-cinzel font-bold tracking-tight text-stone-800">
              Areas of Interest
            </h2>
            <div className="mt-6 w-20 h-0.5 bg-linear-to-r from-transparent via-stone-400 to-transparent mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {/* Card 1 - Technology & Governance */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-stone-100 flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/technology and governance.png"
                  alt="Technology & Governance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-stone-100 mt-auto">
                <h3 className="text-sm sm:text-base lg:text-lg font-cinzel font-bold tracking-wide text-stone-800 text-center">
                  Technology & Governance
                </h3>
              </div>
            </div>

            {/* Card 2 - Behavioral Science */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-stone-100 flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/behavioral science.png"
                  alt="Behavioral Science"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-stone-100 mt-auto">
                <h3 className="text-sm sm:text-base lg:text-lg font-cinzel font-bold tracking-wide text-stone-800 text-center">
                  Behavioral Science
                </h3>
              </div>
            </div>

            {/* Card 3 - Intersectionality */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-stone-100 flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/Intersectionality.png"
                  alt="Intersectionality"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-stone-100 mt-auto">
                <h3 className="text-sm sm:text-base lg:text-lg font-cinzel font-bold tracking-wide text-stone-800 text-center">
                  Intersectionality
                </h3>
              </div>
            </div>

            {/* Card 4 - Public Administration */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-stone-100 flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/Public Administration.png"
                  alt="Public Administration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-stone-100 mt-auto">
                <h3 className="text-sm sm:text-base lg:text-lg font-cinzel font-bold tracking-wide text-stone-800 text-center">
                  Public Administration
                </h3>
              </div>
            </div>

            {/* Card 5 - Public Health */}
            <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-stone-100 flex flex-col w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]">
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src="/Public Health.png"
                  alt="Public Health"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white border-t border-stone-100 mt-auto">
                <h3 className="text-sm sm:text-base lg:text-lg font-cinzel font-bold tracking-wide text-stone-800 text-center">
                  Public Health
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accolades Section */}
      <section className="bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 sm:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-px bg-linear-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto mb-6"></div>
              <h2 className="text-4xl sm:text-5xl font-cinzel font-bold tracking-tight text-slate-800 mb-4">
                Accolades
              </h2>
              <div className="h-px bg-linear-to-r from-transparent via-slate-400 to-transparent w-16 mx-auto"></div>
            </div>

            {/* Speed Controls */}
            <div className="mt-6 flex items-center justify-center gap-1 sm:gap-2">
              <span className="text-xs font-space-grotesk text-slate-500 mr-1 sm:mr-2">Speed:</span>
              {(['1x', '2x', '3x'] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setCarouselSpeed(s)}
                  className={`min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] px-3 sm:px-4 py-2 text-xs sm:text-sm font-space-grotesk font-semibold rounded-full transition-all duration-200 ${
                    carouselSpeed === s
                      ? 'bg-slate-700 text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Full-width auto-scrolling carousel */}
          <div className="relative w-full overflow-hidden">
            <div className={`flex ${getSpeedClass()}`}>
              {/* First set of accolades */}
              <div className="flex space-x-6 sm:space-x-10 md:space-x-16 pl-4 sm:pl-6">
                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/1.svg"
                      alt="Texas Tech University Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    J.T. and Margaret Talkington Graduate Fellowship
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Texas Tech University
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/dhaka university.png"
                      alt="University of Dhaka Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    UGC-Dhaka University Research Fellowship
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    University of Dhaka
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/dean.svg"
                      alt="University of Dhaka Dean's Award Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    Dean's Award for Academic Excellence
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    University of Dhaka in Social Science Faculty
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/2022 UGC Scholarships.png"
                      alt="University Grants Commission Bangladesh Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    2022 UGC Scholarships
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Government of Bangladesh
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/2020 Provost Award.png"
                      alt="University Provost Award Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    2020 Provost Award
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Highest CGPA in BSS (Hons) Examination
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/2020 Johns Hopkins Fellowship.png"
                      alt="Johns Hopkins University Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    2020 Johns Hopkins Fellowship
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Johns Hopkins University
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/Chancellor's Gold Medal .svg"
                      alt="Chancellor's Gold Medal"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    Chancellor's Gold Medal
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    University of Dhaka
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/PrimeMinistersGoldMedal.svg"
                      alt="Prime Minister's Gold Medal"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    Prime Minister's Gold Medal
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Government of Bangladesh
                  </p>
                </div>
              </div>

              {/* Second set of accolades (duplicate for seamless loop) */}
              <div className="flex space-x-6 sm:space-x-10 md:space-x-16 ml-6 sm:ml-10 md:ml-16">
                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/1.svg"
                      alt="Texas Tech University Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    J.T. and Margaret Talkington Graduate Fellowship
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Texas Tech University
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/dhaka university.png"
                      alt="University of Dhaka Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    UGC-Dhaka University Research Fellowship
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    University of Dhaka
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/dean.svg"
                      alt="University of Dhaka Dean's Award Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    Dean's Award for Academic Excellence
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    University of Dhaka in Social Science Faculty
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/2022 UGC Scholarships.png"
                      alt="University Grants Commission Bangladesh Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    2022 UGC Scholarships
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Government of Bangladesh
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/2020 Provost Award.png"
                      alt="University Provost Award Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    2020 Provost Award
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Highest CGPA in BSS (Hons) Examination
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/2020 Johns Hopkins Fellowship.png"
                      alt="Johns Hopkins University Logo"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    2020 Johns Hopkins Fellowship
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Johns Hopkins University
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/Chancellor's Gold Medal .svg"
                      alt="Chancellor's Gold Medal"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    Chancellor's Gold Medal
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    University of Dhaka
                  </p>
                </div>

                <div className="flex flex-col items-center group w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px]">
                  <div className="mb-6 group-hover:scale-105 transition-all duration-300">
                    <img
                      src="/PrimeMinistersGoldMedal.svg"
                      alt="Prime Minister's Gold Medal"
                      className="w-20 h-20 object-contain mx-auto"
                    />
                  </div>
                  <h3 className="text-center text-sm font-cinzel font-bold text-slate-800 mb-2 leading-tight px-6 min-h-20 flex items-center">
                    Prime Minister's Gold Medal
                  </h3>
                  <p className="text-xs text-center text-slate-600 font-space-grotesk font-medium px-6">
                    Government of Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Book Chapters</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              Contributions to edited volumes on governance, policy, and social issues.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {books.slice(0, 3).map((book) => (
              <article key={book.id} className="flex max-w-xl flex-col items-start group hover:shadow-lg transition-all duration-300 rounded-2xl p-6">
                <div className="relative w-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    className="aspect-4/5 w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/3 shadow-lg"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500 font-space-grotesk">{book.publishDate}</time>
                    <span className="text-gray-500 font-space-grotesk">{book.publisher}</span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-cinzel font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link href="/books">
                        <span className="absolute inset-0" />
                        {book.title}
                      </Link>
                    </h3>
                    {book.subtitle && (
                      <h4 className="mt-2 text-sm font-space-grotesk text-gray-600">
                        {book.subtitle}
                      </h4>
                    )}
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 font-space-grotesk">
                      {book.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/books"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-700 text-base font-cinzel font-medium rounded-full text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              View All Book Chapters
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Publications Section */}
      <section className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Publications</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              Latest research contributions to academic journals and scholarly publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.slice(0, 4).map((publication) => (
              <article key={publication.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold ${
                    publication.type === 'journal' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {publication.type === 'journal' ? 'Journal Article' : 'Book Chapter'}
                  </span>
                  <span className="text-sm font-space-grotesk text-gray-500">{publication.year}</span>
                </div>

                <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {publication.title}
                </h3>

                {publication.journal && (
                  <p className="text-sm font-space-grotesk text-gray-600 mb-3 italic">
                    Published in {publication.journal}
                  </p>
                )}

                <p className="text-sm font-space-grotesk text-gray-700 line-clamp-3 leading-relaxed">
                  {publication.abstract}
                </p>

                {publication.category && (
                  <div className="mt-4">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-space-grotesk">
                      {publication.category}
                    </span>
                  </div>
                )}
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/publications"
              className="inline-flex items-center px-6 py-3 border-2 border-slate-700 text-base font-cinzel font-medium rounded-full text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
            >
              View All Publications
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Complete CV Section */}
      <section className="bg-linear-to-br from-slate-50 via-gray-50 to-stone-50 py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block">
              <div className="h-px bg-linear-to-r from-transparent via-slate-400 to-transparent w-24 mx-auto mb-6"></div>
              <h2 className="text-4xl sm:text-5xl font-cinzel font-bold tracking-tight text-slate-800 mb-4">
                Curriculum Vitae
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk max-w-2xl mx-auto">
                A comprehensive overview of academic achievements, research contributions, and professional experience.
              </p>
              <div className="h-px bg-linear-to-r from-transparent via-slate-400 to-transparent w-24 mx-auto mt-6"></div>
            </div>
          </div>

          {/* CV Download Button */}
          <div className="text-center mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center px-8 py-4 bg-linear-to-r from-slate-800 to-slate-700 text-white font-cinzel font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Full CV (PDF)
              </a>
              <Link
                href="/cv"
                className="inline-flex items-center text-slate-600 hover:text-slate-800 font-space-grotesk font-medium text-sm tracking-wide transition-colors duration-200 group"
              >
                View Detailed CV Page
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* CV Sections Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {cvSections.filter(s => s.title !== 'Publications').slice(0, 5).map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-linear-to-b from-slate-600 to-slate-400 rounded-full mr-4"></div>
                  <h3 className="text-2xl font-cinzel font-bold text-slate-800">
                    {section.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {section.items.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="flex flex-col">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                          <h4 className="text-base font-space-grotesk font-semibold text-gray-900 leading-tight">
                            {item.title}
                          </h4>
                          {item.date && (
                            <span className="text-sm font-space-grotesk text-slate-500 mt-1 sm:mt-0 sm:ml-4 shrink-0">
                              {item.date}
                            </span>
                          )}
                        </div>

                        {item.organization && (
                          <p className="text-sm font-space-grotesk text-gray-600 mb-2">
                            {item.organization}
                            {item.location && <span className="text-gray-500"> • {item.location}</span>}
                          </p>
                        )}

                        {item.description && (
                          <div className="text-sm font-space-grotesk text-gray-600 leading-relaxed">
                            {item.description.includes('•') ? (
                              <div className="space-y-1">
                                {item.description.split('•').filter(line => line.trim()).slice(0, 3).map((line, lineIndex) => (
                                  <p key={lineIndex} className="flex items-start">
                                    <span className="text-slate-400 mr-2 mt-1 text-xs">•</span>
                                    <span className="flex-1">{line.trim()}</span>
                                  </p>
                                ))}
                                {item.description.split('•').filter(line => line.trim()).length > 3 && (
                                  <p className="text-xs text-slate-500 italic">...and more</p>
                                )}
                              </div>
                            ) : (
                              <div className="space-y-1">
                                {item.description.split('\n').map((line, lineIndex) => (
                                  <p key={lineIndex}>{line}</p>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      {itemIndex < section.items.slice(0, 3).length - 1 && (
                        <div className="mt-4 border-b border-gray-100"></div>
                      )}
                    </div>
                  ))}

                  {section.items.length > 3 && (
                    <div className="pt-4 border-t border-gray-200">
                      <Link
                        href={section.title === 'Research Projects' ? '/research-projects' : '/cv'}
                        className="text-sm font-space-grotesk text-slate-600 hover:text-slate-800 transition-colors duration-200 group inline-flex items-center"
                      >
                        View all {section.title === 'Research Projects' ? 19 : section.items.length} entries
                        <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Publications Card - Uses publications.ts data */}
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-2 h-8 bg-linear-to-b from-slate-600 to-slate-400 rounded-full mr-4"></div>
                <h3 className="text-2xl font-cinzel font-bold text-slate-800">
                  Publications
                </h3>
              </div>

              <div className="space-y-6">
                {/* Book Chapters */}
                <div className="relative">
                  <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-base font-space-grotesk font-semibold text-gray-900 leading-tight">
                        Book Chapters
                      </h4>
                      <span className="text-sm font-space-grotesk text-slate-500 mt-1 sm:mt-0 sm:ml-4 shrink-0">
                        {publications.filter(p => p.type === 'book-chapter').length} chapters
                      </span>
                    </div>
                    <div className="text-sm font-space-grotesk text-gray-600 leading-relaxed">
                      <div className="space-y-1">
                        {publications.filter(p => p.type === 'book-chapter').slice(0, 2).map((pub, idx) => (
                          <p key={idx} className="flex items-start">
                            <span className="text-slate-400 mr-2 mt-1 text-xs">•</span>
                            <span className="flex-1">{pub.title}</span>
                          </p>
                        ))}
                        <p className="text-xs text-slate-500 italic">...and more</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-b border-gray-100"></div>
                </div>

                {/* Journal Articles */}
                <div className="relative">
                  <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h4 className="text-base font-space-grotesk font-semibold text-gray-900 leading-tight">
                        Journal Articles
                      </h4>
                      <span className="text-sm font-space-grotesk text-slate-500 mt-1 sm:mt-0 sm:ml-4 shrink-0">
                        {publications.filter(p => p.type === 'journal').length} articles
                      </span>
                    </div>
                    <div className="text-sm font-space-grotesk text-gray-600 leading-relaxed">
                      <div className="space-y-1">
                        {publications.filter(p => p.type === 'journal').slice(0, 2).map((pub, idx) => (
                          <p key={idx} className="flex items-start">
                            <span className="text-slate-400 mr-2 mt-1 text-xs">•</span>
                            <span className="flex-1">{pub.title}</span>
                          </p>
                        ))}
                        <p className="text-xs text-slate-500 italic">...and more</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href="/publications"
                    className="text-sm font-space-grotesk text-slate-600 hover:text-slate-800 transition-colors duration-200 group inline-flex items-center"
                  >
                    View all {publications.length} publications
                    <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Training */}
          <div className="mt-16 bg-linear-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-6">Training</h3>
            <div className="bg-white rounded-xl p-6 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
              <div className="shrink-0">
                <img
                  src="/training.png"
                  alt="University of Oxford - Saïd Business School"
                  className="h-24 object-contain"
                />
              </div>
              <div>
                <h4 className="text-lg font-cinzel font-semibold text-slate-800 mb-2">AI and Digital Transformation in Government</h4>
                <p className="text-sm font-space-grotesk text-gray-700">University of Oxford - Saïd Business School</p>
                <p className="text-sm font-space-grotesk text-gray-600 mt-1">2026 • Funded by UNESCO</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16 bg-linear-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100">
            <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-5 border border-teal-100">
                <h4 className="text-sm font-cinzel font-bold text-slate-800 mb-2">Quantitative Tools</h4>
                <p className="text-sm font-space-grotesk text-gray-600">Stata, R, SPSS</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-teal-100">
                <h4 className="text-sm font-cinzel font-bold text-slate-800 mb-2">Qualitative Tools</h4>
                <p className="text-sm font-space-grotesk text-gray-600">Atlas.ti, Rayaans.ai, VOS viewer</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-teal-100">
                <h4 className="text-sm font-cinzel font-bold text-slate-800 mb-2">Data Collection Tools</h4>
                <p className="text-sm font-space-grotesk text-gray-600">Kobo Toolbox, Survey CTO</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-teal-100">
                <h4 className="text-sm font-cinzel font-bold text-slate-800 mb-2">Reporting & Visualization</h4>
                <p className="text-sm font-space-grotesk text-gray-600">Power BI, ArcGIS, LaTeX (Overleaf)</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-teal-100 md:col-span-2 lg:col-span-2">
                <h4 className="text-sm font-cinzel font-bold text-slate-800 mb-2">Languages</h4>
                <p className="text-sm font-space-grotesk text-gray-600">Bengali (Native Speaker), English (Fluent - Academic and Professional use)</p>
              </div>
            </div>
          </div>

          {/* Presentations & Talks */}
          <div className="mt-16 bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100">
            <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-6">Presentations & Talks</h3>
            <div className="bg-white rounded-xl p-6 border border-purple-100">
              <p className="text-sm font-space-grotesk text-gray-700 leading-relaxed">
                <span className="font-semibold">Rumi, M. H.</span> (2025, January 8). <em>Usage of artificial intelligence for youth in Bangladesh</em> [Invited speaker]. Program jointly organized by Community Development for Peace, BRAC University, and the American Embassy in Bangladesh, Dhaka, Bangladesh.
              </p>
            </div>
          </div>

          {/* Key Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">20+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">5+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Book Chapters</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">8+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Awards & Honors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-cinzel font-bold text-slate-800">3+</div>
              <div className="text-sm font-space-grotesk text-gray-600 mt-1">Years Teaching</div>
            </div>
          </div>

          {/* Professional Memberships */}
          <div className="mt-16 bg-linear-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-8 text-center">Professional Memberships</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* APSA */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 w-full">
                  <Image
                    src="/apsa.png"
                    alt="American Political Science Association"
                    width={180}
                    height={100}
                    className="mx-auto object-contain h-20"
                  />
                </div>
                <p className="mt-4 text-sm font-space-grotesk text-gray-700 font-medium">American Political Science Association</p>
              </div>

              {/* Asiatic Society Bangladesh */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 w-full">
                  <Image
                    src="/asiatic-society-bangladesh.png"
                    alt="Asiatic Society Bangladesh"
                    width={180}
                    height={100}
                    className="mx-auto object-contain h-20"
                  />
                </div>
                <p className="mt-4 text-sm font-space-grotesk text-gray-700 font-medium">Asiatic Society Bangladesh</p>
              </div>

              {/* Bangladesh Tobacco Control Research Network */}
              <div className="flex flex-col items-center text-center group">
                <div className="bg-white rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-shadow duration-300 w-full">
                  <Image
                    src="/btcrn.png"
                    alt="Bangladesh Tobacco Control Research Network"
                    width={180}
                    height={100}
                    className="mx-auto object-contain h-20"
                  />
                </div>
                <p className="mt-4 text-sm font-space-grotesk text-gray-700 font-medium">Bangladesh Tobacco Control Research Network</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-16 bg-linear-to-br from-slate-100 to-gray-100 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-cinzel font-bold text-slate-800 mb-6 text-center">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-space-grotesk font-semibold text-gray-800 mb-3">Academic Address (Bangladesh)</h4>
                <div className="text-sm font-space-grotesk text-gray-600 space-y-1">
                  <p>Department of Public Administration</p>
                  <p>University of Dhaka</p>
                  <p>Dhaka 1000, Bangladesh</p>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-sm font-space-grotesk font-semibold text-gray-800 mb-3">Graduate Address (USA)</h4>
                <div className="text-sm font-space-grotesk text-gray-600 space-y-1">
                  <p>Department of Political Science</p>
                  <p>Texas Tech University</p>
                  <p>Lubbock, TX 79409, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-linear-to-br from-orange-50 via-amber-50 to-yellow-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay Updated
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              Subscribe to my newsletter for updates on new publications, speaking engagements, and academic insights.
            </p>
            <form action="https://formspree.io/f/xgoepvyd" method="POST" className="mt-6 flex max-w-md gap-x-4 mx-auto">
              <label htmlFor="email-address" className="sr-only font-space-grotesk">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-full border-2 border-slate-700 px-5 py-2.5 text-sm font-cinzel font-semibold text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
