"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  const [filter, setFilter] = useState<'All' | 'Self-Paced' | 'Live'>('All');

  const filteredCourses = courses.filter(course => {
    if (filter === 'All') return true;
    return course.type === filter;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-brand-cream min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl text-brand-brown tracking-widest uppercase mb-4">
              Explore Our Courses
            </h1>
            <p className="text-brand-brown-light max-w-2xl mx-auto">
              Immerse yourself in authentic Vedic knowledge taught by experienced practitioners. Choose a path that fits your spiritual journey.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-brand-beige border border-brand-brown-light/20 p-1.5 rounded-full">
              {['All', 'Self-Paced', 'Live'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab as any)}
                  className={`px-8 py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
                    filter === tab 
                    ? 'bg-white text-brand-brown shadow-sm border border-brand-brown-light/10' 
                    : 'text-brand-brown-light hover:text-brand-brown'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-20 text-brand-brown-light">
              <p>No courses found for the selected category.</p>
            </div>
          )}

        </div>
      </main>
      <footer className="bg-[#4A3F35] text-brand-beige py-12 text-center text-sm border-t-4 border-brand-gold">
        <p className="font-serif tracking-widest text-[#EAE0D5] mb-4">
          PARATATTVA CATUṢPĀṬHĪ & PUBLICATIONS
        </p>
        <p className="opacity-70">&copy; 2026 Paratattva. All Rights Reserved.</p>
      </footer>
    </>
  );
}
