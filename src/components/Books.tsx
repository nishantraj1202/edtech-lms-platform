import Image from 'next/image';

export default function Books() {
  const books = [1, 2, 3, 4, 5, 6];

  return (
    <section id="books" className="py-20 bg-brand-cream border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Group */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px bg-brand-gold/30 w-16 md:w-32"></div>
          <svg className="w-4 h-4 mx-2 text-brand-gold/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" /></svg>
          <h2 className="mx-6 font-serif text-3xl md:text-4xl text-brand-brown tracking-widest uppercase">
            Books
          </h2>
          <svg className="w-4 h-4 mx-2 text-brand-gold/60" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" /></svg>
          <div className="h-px bg-brand-gold/30 w-16 md:w-32"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12 bg-white rounded-lg shadow-sm border border-brand-beige p-6 pt-10 pb-12">
          <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar snap-x snap-mandatory">
            {books.map((book) => (
              <div
                key={book}
                className="flex-none snap-center group relative cursor-pointer"
                style={{ width: "180px", height: "240px" }}
              >
                <div className="absolute inset-0 shadow-soft md:group-hover:-translate-y-2 md:group-hover:shadow-xl transition-all duration-300 rounded overflow-hidden">
                  <Image
                    src="/images/book.png"
                    alt={`Vedic Book ${book}`}
                    fill
                    className="object-cover"
                  />
                  {/* Spine effect */}
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-black/20 z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel dots metaphor */}
          <div className="flex justify-center mt-8 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${i === 1 ? 'bg-brand-brown-light' : 'bg-brand-beige border border-brand-brown-light/20'}`}></div>
            ))}
          </div>

          {/* Nav arrows metaphor */}
          <button className="absolute left-2 top-1/2 -translate-y-1/2 text-brand-brown-light/50 hover:text-brand-brown">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-brown-light/50 hover:text-brand-brown">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="text-center">
          <button className="bg-[#D98C40] hover:bg-[#C27A34] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-sm">
            Browse All Books
          </button>
        </div>

      </div>
    </section>
  );
}
