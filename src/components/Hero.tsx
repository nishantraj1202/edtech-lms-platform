
import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-beige pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4af37\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-brown leading-tight tracking-wide mb-2 uppercase">
              Paratattva
            </h1>
            <p className="font-serif text-lg tracking-widest text-brand-brown-light uppercase mb-8">
              Catuspathi & Publications
            </p>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-brand-brown mb-6">
              Description
            </h2>

            <p className="text-brand-brown-light text-base lg:text-lg mb-8 max-w-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Discover ancient wisdom through our carefully curated courses.
            </p>

            <button className="bg-[#B75C3D] hover:bg-[#A04D31] text-white px-8 py-3 rounded-full font-medium transition-transform hover:-translate-y-0.5 shadow-md font-sans">
              Explore Courses
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center flex-col items-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-white shadow-xl overflow-hidden group">
              <Image
                src="/images/hero.jpeg"
                alt="Spiritual Teacher"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            <p className="mt-6 font-serif italic text-brand-brown text-lg text-center md:text-right w-full">
              A.C. Bhaktivedanta Swami Srila Prabhupada
            </p>
          </div>

        </div>

        {/* Decorative Divider beneath */}
        <div className="mt-20 flex justify-center items-center">
          <div className="h-px bg-brand-gold/30 w-1/4"></div>
          <div className="mx-4 text-brand-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            </svg>
          </div>
          <div className="h-px bg-brand-gold/30 w-1/4"></div>
        </div>
      </div>
    </section>
  );
}
