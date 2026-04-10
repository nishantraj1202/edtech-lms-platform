import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/data/courses';
import ProgressBar from '@/components/ProgressBar';

interface CourseCardProps {
  course: Course;
  enrolledData?: {
    progressPercentage: number;
    lastAccessedLessonId?: string;
  };
}

export default function CourseCard({ course, enrolledData }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`} className="block h-full">
      <div className="bg-brand-beige shadow-sm hover:shadow-soft border border-white rounded-lg p-5 flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
        
        {/* Thumbnail */}
        <div className="relative w-full aspect-video rounded-md overflow-hidden mb-5 border border-brand-brown-light/10 bg-white">
          <Image 
            src={course.thumbnail} 
            alt={course.title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-brand-brown text-white text-xs px-2.5 py-1 rounded-full font-medium tracking-wide">
              {course.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
          <h3 className="font-serif text-lg font-medium text-brand-brown leading-tight mb-2 group-hover:text-brand-gold transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-brand-brown-light line-clamp-2 mb-4 leading-relaxed flex-grow">
            {course.description}
          </p>
          
          {enrolledData ? (
            <div className="mt-auto mb-4 pt-4 border-t border-brand-brown-light/10">
              <ProgressBar progress={enrolledData.progressPercentage} />
            </div>
          ) : (
            <div className="flex items-center justify-between text-sm mb-5 pt-4 border-t border-brand-brown-light/10 mt-auto">
              <div className="flex items-center gap-1">
                <span className="text-brand-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </span>
                <span className="font-medium text-brand-brown">{course.rating}</span>
              </div>
              <div className="text-brand-brown-light font-medium bg-white px-3 py-1 rounded-full border border-brand-brown-light/10">
                ₹{course.price.toFixed(2)}
              </div>
            </div>
          )}
          
          {/* CTA Button */}
          <div className={`w-full text-center font-medium py-2.5 rounded-full transition-colors ${enrolledData ? 'bg-[#D98C40] text-white hover:bg-[#C27A34]' : 'bg-brand-gold/10 text-brand-brown group-hover:bg-[#D98C40] group-hover:text-white'}`}>
            {enrolledData ? 'Continue Learning' : 'View Course'}
          </div>
        </div>

      </div>
    </Link>
  );
}
