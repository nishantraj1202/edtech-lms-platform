"use client";

import React, { useState } from 'react';
import { Module, Lesson } from '@/data/courses';

interface AccordionProps {
  modules: Module[];
  activeLessonId?: string | null;
  completedLessonIds?: string[];
  isEnrolled: boolean;
  onSelectLesson: (lesson: Lesson) => void;
}

export default function Accordion({ modules, activeLessonId, completedLessonIds = [], isEnrolled, onSelectLesson }: AccordionProps) {
  // Determine an initially open module if needed. 
  // Let's open the module containing activeLessonId, or default to the first one.
  const initialOpen = modules.find(m => m.lessons.some(l => l.id === activeLessonId))?.id || modules[0]?.id;
  const [openModuleId, setOpenModuleId] = useState<string | null>(initialOpen || null);

  const toggleModule = (id: string) => {
    setOpenModuleId(openModuleId === id ? null : id);
  };

  return (
    <div className="border border-brand-brown-light/20 rounded-md overflow-hidden bg-brand-beige/50">
      {modules.map((module, index) => {
        const isOpen = openModuleId === module.id;
        
        return (
          <div key={module.id} className={index !== 0 ? "border-t border-brand-brown-light/20" : ""}>
            <button
              onClick={() => toggleModule(module.id)}
              className="w-full flex items-center justify-between p-4 bg-brand-beige hover:bg-brand-cream transition-colors text-left"
            >
              <h4 className="font-medium text-brand-brown flex-1 font-serif text-lg">{module.title}</h4>
              <span className="text-brand-brown-light ml-4 transform transition-transform duration-200">
                {isOpen ? (
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>
                ) : (
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                )}
              </span>
            </button>
            
            {isOpen && (
              <div className="bg-white divide-y divide-brand-brown-light/10">
                {module.lessons.map((lesson, curIndex) => {
                  const isActive = activeLessonId === lesson.id;
                  const isCompleted = completedLessonIds.includes(lesson.id);
                  // Simulate locked lessons: First lesson of first module is free, rest are locked unless enrolled.
                  const isLocked = !isEnrolled && !(index === 0 && curIndex === 0);

                  return (
                    <div 
                      key={lesson.id} 
                      onClick={() => !isLocked && onSelectLesson(lesson)}
                      className={`py-3 px-4 flex items-center justify-between group transition-colors ${
                        isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-brand-gold/5'
                      } ${isActive ? 'bg-brand-gold/10' : ''}`}
                    >
                      <div className="flex items-center gap-3 text-brand-brown">
                        <span className="flex-shrink-0">
                          {isCompleted ? (
                            <svg className="text-green-600" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                          ) : isLocked ? (
                            <svg className="text-brand-brown-light/50" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
                          ) : (
                            <svg className={`text-brand-gold ${isActive ? 'fill-brand-gold/20' : ''}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
                          )}
                        </span>
                        <span className={`text-sm md:text-base ${isActive ? 'font-semibold text-brand-gold' : 'group-hover:text-brand-gold'} transition-colors`}>
                          {lesson.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-brand-brown-light font-medium ml-4 shrink-0">
                        <span>{lesson.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
