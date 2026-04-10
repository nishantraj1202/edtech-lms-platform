
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-cream/90 backdrop-blur-md border-b justify-center flex border-brand-beige shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center bg-brand-beige">
                <span className="font-serif text-brand-gold text-sm tracking-widest font-semibold">LOGO</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {['Dashboard', 'Courses', 'Books', 'Blog', 'Contact Us'].map((item) => {
              const staticHref = item === 'Courses' ? '/courses' : item === 'Dashboard' ? '/dashboard' : `/#${item.toLowerCase().replace(' ', '-')}`;
              return (
                <div key={item} className="flex items-center">
                  <Link
                    href={staticHref}
                    className="text-brand-brown hover:text-brand-gold transition-colors font-medium font-serif tracking-wide text-[15px]"
                  >
                    {item}
                  </Link>
                  {/* Subtle separator except for last item */}
                  {item !== 'Contact Us' && (
                    <span className="mx-5 text-brand-brown-light/30">|</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-brand-brown hover:text-brand-gold focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
