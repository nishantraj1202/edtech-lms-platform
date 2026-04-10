import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ProgressBar from '@/components/ProgressBar';
import { courses } from '@/data/courses';
import { mockUser } from '@/data/user';

export default function MyLearningPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-brand-cream min-h-screen py-10 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12">
            <h1 className="font-serif text-3xl md:text-5xl text-brand-brown mb-4">My Learning</h1>
            <p className="text-brand-brown-light">Track your progress and resume your enrolled courses instantly.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            {mockUser.enrolledCourses.map(enrolled => {
              const course = courses.find(c => c.id === enrolled.courseId);
              if (!course) return null;

              // Find current active lesson string
              let activeLessonTitle = "Start Learning";
              if (enrolled.lastAccessedLessonId) {
                for (const m of course.modules) {
                  const l = m.lessons.find(x => x.id === enrolled.lastAccessedLessonId);
                  if (l) {
                    activeLessonTitle = l.title;
                    break;
                  }
                }
              }

              return (
                <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-soft border border-brand-brown-light/10 p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-shadow">
                  
                  {/* Thumbnail */}
                  <div className="relative w-full md:w-64 aspect-video rounded-md overflow-hidden flex-shrink-0">
                    <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 w-full relative">
                     <h3 className="font-serif text-xl md:text-2xl font-medium text-brand-brown mb-2">{course.title}</h3>
                     <p className="text-sm text-brand-brown-light mb-6">
                        <span className="font-medium text-brand-brown">Up Next:</span> {activeLessonTitle}
                     </p>
                     
                     <div className="max-w-md mb-6">
                       <ProgressBar progress={enrolled.progressPercentage} />
                     </div>

                     <Link href={`/courses/${course.id}`} className="inline-block bg-[#D98C40] hover:bg-[#C27A34] text-white px-8 py-2.5 rounded-full font-medium transition-colors shadow-sm text-sm">
                       Resume Course
                     </Link>
                  </div>

                </div>
              );
            })}
          </div>

          {mockUser.enrolledCourses.length === 0 && (
             <div className="text-center py-16 bg-white rounded-lg border border-brand-brown-light/10 mt-8">
                <p className="text-brand-brown-light mb-6">You haven't started any courses yet.</p>
                <Link href="/courses" className="bg-[#D98C40] hover:bg-[#C27A34] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
                   Explore Courses
                </Link>
             </div>
          )}

        </div>
      </main>
      <footer className="bg-[#4A3F35] text-brand-beige py-12 text-center text-sm border-t-4 border-brand-gold mt-auto">
        <p className="font-serif tracking-widest text-[#EAE0D5] mb-4">
          PARATATTVA CATUṢPĀṬHĪ & PUBLICATIONS
        </p>
        <p className="opacity-70">&copy; 2026 Paratattva. All Rights Reserved.</p>
      </footer>
    </>
  );
}
