import React from 'react';

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string; // Optional custom label (e.g. "5 out of 10 completed")
}

export default function ProgressBar({ progress, label }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-end mb-2">
        <span className="font-serif text-brand-brown font-medium">
          {label ? label : 'Course Progress'}
        </span>
        {!label && <span className="text-brand-brown-light font-medium text-sm">{Math.round(progress)}%</span>}
        {label && <span className="text-brand-brown-light font-medium text-sm">{Math.round(progress)}%</span>}
      </div>
      <div className="w-full bg-brand-brown-light/20 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-[#D98C40] h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
