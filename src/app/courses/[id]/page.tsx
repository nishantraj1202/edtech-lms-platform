import React from 'react';
import Navbar from '@/components/Navbar';
import CourseDetailClient from '@/components/CourseDetailClient';
import { courses } from '@/data/courses';
import { mockUser } from '@/data/user';
import { notFound } from 'next/navigation';

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = courses.find((c) => c.id === resolvedParams.id);

  if (!course) {
    notFound();
  }

  // Simulate checking if the user is enrolled
  const enrolledData = mockUser.enrolledCourses.find(c => c.courseId === course.id);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-brand-cream min-h-screen py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseDetailClient course={course} enrolledData={enrolledData} />
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
