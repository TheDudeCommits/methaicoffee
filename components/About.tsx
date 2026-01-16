import Image from "next/image";

/**
 * About Section
 * Brief story about ME THAI COFFEE heritage.
 */

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-cream"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-stretch">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-medium text-coffee-500 uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2
              id="about-heading"
              className="font-sans text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-coffee-800 leading-tight tracking-tight"
            >
              From farm to cup
            </h2>
            <div className="mt-6 space-y-4 text-coffee-600 text-lg leading-relaxed">
              <p>
                We are the heirs of coffee farmers, carrying forward a legacy
                that spans over four decades. Our family has been growing,
                roasting, and distributing specialty coffee since before
                specialty coffee had a name.
              </p>
              <p>
                Every cup of ME THAI COFFEE tells a story of misty mountain
                mornings, of hands that carefully pick only the ripest cherries,
                of roasters who know exactly when the beans are ready.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <span className="block text-3xl md:text-4xl font-display text-coffee-700">
                  40+
                </span>
                <span className="text-sm text-coffee-500">Years of expertise</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-display text-coffee-700">
                  100%
                </span>
                <span className="text-sm text-coffee-500">Thai grown beans</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-display text-coffee-700">
                  Full
                </span>
                <span className="text-sm text-coffee-500">Body & fruity notes</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative self-start w-full h-full">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-glow">
              {/* Brand Image - Coffee farmer by rawpixel.com */}
              <Image
                src="/main-img.png"
                alt="Thai coffee farmer harvesting coffee cherries - ME THAI COFFEE heritage"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent" />
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-soft">
              <div className="flex items-center gap-3">
                {/* Icon container - flexible width for horizontal icons/logos */}
                <div className="flex items-center justify-center h-12 min-w-[3rem] px-4 rounded-full bg-coffee-100">
                  <svg
                    className="h-6 w-auto text-coffee-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm font-medium text-coffee-700">
                    Premium Quality
                  </span>
                  <span className="text-xs text-coffee-500">
                    Specialty Grade Coffee
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

