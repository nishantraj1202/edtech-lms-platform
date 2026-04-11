import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';
import { mockUser } from '@/data/user';
import AuthGuard from '@/components/AuthGuard';

export default function DashboardPage() {
  return (
    <AuthGuard>
      <Navbar />
      <main className="flex-1 bg-brand-cream min-h-screen py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: User Profile */}
          <div className="bg-white rounded-xl shadow-soft border border-brand-brown-light/10 p-8 mb-12 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-brand-beige flex-shrink-0">
               <Image src={mockUser.avatar} alt={mockUser.name} fill className="object-cover" />
            </div>
            <div className="text-center md:text-left flex-1 mt-2">
              <h1 className="font-serif text-3xl md:text-4xl text-brand-brown mb-2">{mockUser.name}</h1>
              <p className="text-brand-brown-light mb-6">Welcome back! You are making great progress on your spiritual journey.</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                 <Link href="/learning" className="bg-[#D98C40] hover:bg-[#C27A34] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm text-sm">
                   View My Learning List
                 </Link>
                 <Link href="/courses" className="bg-brand-gold/10 text-brand-brown hover:bg-brand-gold/20 px-6 py-2.5 rounded-full font-medium transition-colors text-sm">
                   Browse More Courses
                 </Link>
              </div>
            </div>
            
            <div className="hidden lg:flex flex-col gap-4 border-l border-brand-brown-light/10 pl-8 min-w-[200px]">
               <div>
                 <p className="text-sm text-brand-brown-light font-medium uppercase tracking-wider mb-1">Enrolled Courses</p>
                 <p className="font-serif text-3xl text-brand-brown text-center">{mockUser.enrolledCourses.length}</p>
               </div>
            </div>
          </div>

          {/* Section: My Courses */}
          <div className="mb-8 flex items-center justify-between border-b border-brand-brown-light/10 pb-4">
             <h2 className="font-serif text-2xl text-brand-brown">My Current Courses</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockUser.enrolledCourses.map(enrolled => {
              const course = courses.find(c => c.id === enrolled.courseId);
              if (!course) return null;

              return (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  enrolledData={enrolled} 
                />
              );
            })}
          </div>

          {mockUser.enrolledCourses.length === 0 && (
             <div className="text-center py-16 bg-white rounded-lg border border-brand-brown-light/10 mt-8">
                <p className="text-brand-brown-light mb-6">You are not enrolled in any courses yet.</p>
                <Link href="/courses" className="bg-[#D98C40] hover:bg-[#C27A34] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
                   Explore Courses
                </Link>
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
    </AuthGuard>
  );
}
