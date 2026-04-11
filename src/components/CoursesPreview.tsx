import React from 'react';
import Image from 'next/image';

export default function CoursesPreview() {
  return (
    <section id="courses" className="py-20 bg-brand-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Group */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 border-t border-brand-gold/30"></div>
          <h2 className="mx-6 font-serif text-3xl md:text-4xl text-brand-brown tracking-widest uppercase">
            Courses
          </h2>
          <div className="flex-1 border-t border-brand-gold/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Card 1: Self Study */}
          <div className="bg-brand-beige border-[12px] border-white shadow-soft rounded-sm p-8 flex flex-col items-center justify-between group hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-serif text-xl tracking-widest text-[#4A3F35] mb-8 uppercase text-center font-medium">
              Self Study Courses
            </h3>
            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-md flex items-center justify-center border border-[#EAE0D5] bg-white">
              <Image
                src="/images/self-study.png"
                alt="Self Study Courses Illustration"
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <button className="bg-[#D98C40] hover:bg-[#C27A34] text-white px-8 py-2.5 rounded-full font-medium transition-colors shadow-sm whitespace-nowrap">
              View Courses
            </button>
          </div>

          {/* Card 2: Live Courses */}
          <div className="bg-brand-beige border-[12px] border-white shadow-soft rounded-sm p-8 flex flex-col items-center justify-between group hover:-translate-y-1 transition-all duration-300">
            <h3 className="font-serif text-xl tracking-widest text-[#4A3F35] mb-8 uppercase text-center font-medium">
              Live Courses (Zoom)
            </h3>
            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden rounded-md flex items-center justify-center border border-[#EAE0D5] bg-white">
              {/* Reusing hero image for live course representation, framed in a laptop metaphor if desired, but we'll stick to displaying the image gracefully */}
              <Image
                src="/images/hero.jpeg"
                alt="Live Zoom Classes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <button className="bg-[#D98C40] hover:bg-[#C27A34] text-white px-8 py-2.5 rounded-full font-medium transition-colors shadow-sm whitespace-nowrap">
              View Live Classes
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
