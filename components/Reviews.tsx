/**
 * Reviews Section
 * Curated customer testimonials.
 * Note: Google Maps API integration can be added later.
 */

const reviews = [
  {
    quote:
      "A small and charming place with a dedicated owner who clearly cares about quality. The atmosphere is pleasant, and you can feel the passion in every cup.",
    author: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "Honey lemon espresso had a good balance of sweetness and citrus without being overwhelming. The iced latte was nice as well—smooth and not too bitter.",
    author: "Coffee Enthusiast",
    rating: 5,
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-amber-400" : "text-coffee-200"}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="section-padding bg-cream"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-medium text-coffee-500 uppercase tracking-wider mb-4">
            Reviews
          </span>
          <h2
            id="reviews-heading"
            className="font-sans text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-coffee-800 leading-tight tracking-tight"
          >
            What people say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <blockquote
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-soft"
            >
              {/* Quote mark */}
              <svg
                className="absolute top-6 left-6 w-8 h-8 text-coffee-100"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>

              <div className="relative">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-coffee-700 leading-relaxed italic">
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className="mt-4">
                  <cite className="not-italic text-sm font-medium text-coffee-500">
                    — {review.author}
                  </cite>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>

        {/* Google Maps integration note */}
        <p className="mt-8 text-center text-sm text-coffee-400">
          More reviews coming soon via Google Maps integration
        </p>
      </div>
    </section>
  );
}

