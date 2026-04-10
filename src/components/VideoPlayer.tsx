import React from 'react';
import Image from 'next/image';
import { Lesson } from '@/data/courses';

interface VideoPlayerProps {
  thumbnail: string;
  activeLesson?: Lesson | null;
}

export default function VideoPlayer({ thumbnail, activeLesson }: VideoPlayerProps) {
  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10 bg-brand-brown shadow-lg border border-brand-brown-light/20 group cursor-pointer">
      <Image 
        src={thumbnail} 
        alt="Video Preview" 
        fill 
        className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-20 h-20 bg-brand-gold/90 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-brand-gold transition-all duration-300">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>

      {/* Lesson Overlay */}
      {activeLesson && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-6 pt-5">
          <p className="text-white/80 text-sm font-medium tracking-wide uppercase mb-1">Now Playing</p>
          <h3 className="text-white font-serif text-xl md:text-2xl drop-shadow-md">{activeLesson.title}</h3>
        </div>
      )}
    </div>
  );
}
