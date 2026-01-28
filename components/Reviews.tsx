"use client";

const reviews = [
  {
    quote:
      "Wonderful coffee. Farm-grown, rich, and truly unique in flavour. Absolutely delicious and unlike any other. Highly recommended!",
    author: "K L",
    badge: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "Excellent coffee shop between Rams IV and Sukhumvit. The shop looks low-key. And it somehow is. But the coffee they serve is very good and great value for money. Especially in this area. They also serve some pastries and beans. Good place to do some remote work as well. A pleasant surprise!",
    author: "Christian Breitkreutz",
    badge: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "Everything from the coffee and salted bread to the meals was absolutely delicious! The flavors are clean and not too strong, making it easy to enjoy. Highly recommend this place for lunch. The owner is also very kind!",
    author: "Bababa",
    badge: "",
    rating: 5,
  },
  {
    quote:
      "Lunch at ME Thai didn't disappoint! The Khao Soi with Chicken was rich and flavorful — creamy curry broth with just the right amount of spice. The Pork Larb was packed with herbs, tangy, and had a satisfying kick. Simple dishes done right. Definitely coming back for more!",
    author: "MonZterella Lee",
    badge: "Local Guide",
    rating: 5,
  },
  {
    quote:
      "Small place but nice home-grown organic coffee served. The place smells and feels coffee. It is a must-go. The best-tasting coffee in Bangkok. I have lived in Italy for 9 years. So, know a thing or two about coffee. And this place knows a great deal about real coffees.",
    author: "Dorji",
    badge: "Local Guide",
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

function GoogleIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <blockquote className="flex-shrink-0 w-[340px] md:w-[400px] bg-white rounded-2xl p-6 shadow-soft">
      <div className="flex items-center gap-3 mb-4">
        <GoogleIcon />
        <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} filled={i < review.rating} />
          ))}
        </div>
      </div>

      <p className="text-coffee-700 text-sm leading-relaxed line-clamp-4">
        &ldquo;{review.quote}&rdquo;
      </p>

      <footer className="mt-4 flex items-center gap-2">
        <cite className="not-italic text-sm font-medium text-coffee-800">
          {review.author}
        </cite>
        {review.badge && (
          <span className="text-xs text-coffee-400">
            {review.badge}
          </span>
        )}
      </footer>
    </blockquote>
  );
}

export default function Reviews() {
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-cream overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-medium text-coffee-500 uppercase tracking-[0.2em] mb-4">
            Reviews
          </span>
          <h2
            id="reviews-heading"
            className="font-sans text-3xl sm:text-4xl font-semibold text-coffee-800 tracking-tight uppercase"
          >
            What People Say
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.google.com/maps/place/ME+THAI+COFFEE/@13.7186807,100.5737306,17z/data=!4m8!3m7!1s0x311d630b3d8e3ec9:0xc62766ad87fbce70!8m2!3d13.7186755!4d100.5763055!9m1!1b1!16s%2Fg%2F11hds_9nlm?entry=ttu&g_ep=EgoyMDI2MDEyNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-coffee-500 hover:text-[#1C39BB] transition-colors"
        >
          <GoogleIcon />
          <span>View all reviews on Google</span>
        </a>
      </div>
    </section>
  );
}
