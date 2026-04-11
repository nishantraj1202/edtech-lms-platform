import React from 'react';
import Link from 'next/link';

interface FormContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function FormContainer({ title, subtitle, children }: FormContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-12 md:py-20 relative overflow-hidden bg-brand-cream">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-gold/10 to-transparent opacity-60" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D98C40]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#766755]/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-md relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block group">
            <div className="flex flex-col items-center">
              {/* Simple subtle logo mark */}
              <div className="w-12 h-12 rounded-full border border-[#D98C40]/30 shadow-sm flex items-center justify-center mb-3 bg-white group-hover:bg-[#FAF8F5] transition-colors">
                 <span className="font-serif text-[#D98C40] text-xl font-bold">P</span>
              </div>
              <h1 className="font-serif text-3xl text-brand-brown font-semibold tracking-wide">
                Paratattva
              </h1>
              <p className="text-sm text-brand-brown-light tracking-[0.2em] uppercase mt-1">Catuṣpāṭhī</p>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-brown/10 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D98C40]/40 via-[#D98C40] to-[#D98C40]/40" />
          
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-serif font-semibold text-brand-brown mb-2">{title}</h2>
            {subtitle && <p className="text-brand-brown-light text-sm">{subtitle}</p>}
          </div>

          {children}
        </div>
        
        {/* Footer info/links could go here if needed, but handled in page */}
      </div>
    </div>
  );
}
