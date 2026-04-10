"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Course, Lesson } from '@/data/courses';
import { UserEnrolledCourse } from '@/data/user';
import Accordion from './Accordion';
import VideoPlayer from './VideoPlayer';
import ProgressBar from './ProgressBar';

interface CourseDetailClientProps {
  course: Course;
  enrolledData?: UserEnrolledCourse;
}

export default function CourseDetailClient({ course, enrolledData }: CourseDetailClientProps) {
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);

  // Initialize active lesson
  useEffect(() => {
    if (course.modules.length > 0 && course.modules[0].lessons.length > 0) {
      if (enrolledData && enrolledData.lastAccessedLessonId) {
        // Find the lesson
        for (const m of course.modules) {
          const l = m.lessons.find(x => x.id === enrolledData.lastAccessedLessonId);
          if (l) {
             setActiveLesson(l);
             return;
          }
        }
      }
      // Default to first lesson
      setActiveLesson(course.modules[0].lessons[0]);
    }
  }, [course, enrolledData]);

  // Calculate generic totals
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessonsCount = enrolledData ? enrolledData.completedLessonIds.length : 0;
  
  const handleContinueLearning = () => {
    // Basic interaction simulation
    if (activeLesson) {
       alert(`Resuming: ${activeLesson.title}`);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      
      {/* Left Content Area */}
      <div className="w-full lg:w-2/3">
        
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block bg-brand-gold/10 text-brand-gold text-sm px-3 py-1 rounded-full font-medium mb-4">
            {course.type} Course
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-brand-brown leading-tight mb-4">
            {course.title}
          </h1>
          <p className="text-brand-brown-light text-lg mb-6 leading-relaxed">
            {course.longDescription}
          </p>

          {/* Instructor Inline Profile */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-4 bg-white rounded-lg border border-brand-brown-light/10 mb-8 mt-2">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-beige flex-shrink-0">
               <Image src={course.instructorAvatar} alt={course.instructor} fill className="object-cover" />
            </div>
            <div>
               <h3 className="font-serif text-brand-brown font-medium text-lg">{course.instructor}</h3>
               <p className="text-brand-brown-light text-sm mt-1">{course.instructorBio}</p>
            </div>
          </div>
        </div>

        {/* Dynamic Video Player */}
        <VideoPlayer thumbnail={course.thumbnail} activeLesson={activeLesson} />

        {/* Interactive Course Content */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl text-brand-brown mb-6">Course Content</h2>
          {course.modules && course.modules.length > 0 ? (
            <Accordion 
              modules={course.modules} 
              activeLessonId={activeLesson?.id}
              completedLessonIds={enrolledData?.completedLessonIds}
              isEnrolled={!!enrolledData}
              onSelectLesson={(lesson) => setActiveLesson(lesson)}
            />
          ) : (
            <div className="p-6 bg-brand-beige rounded-md border border-brand-brown-light/20 text-brand-brown-light text-center">
               Modules are currently being finalized for this course.
            </div>
          )}
        </div>

        {/* Reviews Section */}
        {course.reviews && course.reviews.length > 0 && (
          <div className="mb-10">
            <h2 className="font-serif text-2xl text-brand-brown mb-6">Student Reviews</h2>
            <div className="grid gap-6">
              {course.reviews.map(review => (
                <div key={review.id} className="p-6 bg-white rounded-lg border border-brand-brown-light/10 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < review.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                    ))}
                  </div>
                  <p className="text-brand-brown-light leading-relaxed mb-4">"{review.comment}"</p>
                  <p className="font-medium text-brand-brown text-sm">— {review.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Right Sidebar (Sticky Purchase/Enroll Card) */}
      <div className="w-full lg:w-1/3">
        <div className="sticky top-28 bg-white border border-brand-brown-light/10 shadow-soft rounded-xl p-8 transition-all">
          
          {enrolledData ? (
            // Enrolled View
            <div className="mb-8">
              <ProgressBar 
                progress={enrolledData.progressPercentage} 
                label={`${completedLessonsCount} out of ${totalLessons} lessons completed`} 
              />
              <button 
                onClick={handleContinueLearning}
                className="w-full mt-8 bg-[#D98C40] hover:bg-[#C27A34] text-white py-3.5 rounded-full font-medium transition-colors shadow-sm"
              >
                Continue Learning
              </button>
            </div>
          ) : (
            // Unenrolled View
            <div className="mb-8 text-center pb-8 border-b border-brand-brown-light/10">
              <div className="text-4xl font-serif text-brand-brown mb-2">₹{course.price.toFixed(2)}</div>
              <button className="w-full mt-6 bg-[#D98C40] hover:bg-[#C27A34] text-white py-3.5 rounded-full font-medium transition-colors shadow-sm">
                Buy Course
              </button>
              <p className="text-xs text-brand-brown-light mt-4">30-Day Money-Back Guarantee</p>
            </div>
          )}

          {/* Includes List */}
          <div>
            <h3 className="font-medium text-brand-brown mb-4">This course includes:</h3>
            <ul className="space-y-4">
              {course.includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-brand-brown-light text-sm">
                  <span className="text-brand-gold mt-0.5 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
