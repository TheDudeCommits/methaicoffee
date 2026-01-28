/**
 * Contact Section
 * Location, hours, and contact information.
 */

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-coffee-50/50"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-coffee-500 uppercase tracking-wider mb-4">
            Visit Us
          </span>
          <h2
            id="contact-heading"
            className="font-sans text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-coffee-800 leading-tight tracking-tight"
          >
            Find your perfect cup
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Address Card */}
          <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-coffee-100 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-coffee-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-coffee-800 mb-2">
              Location
            </h3>
            <address className="not-italic text-coffee-600 leading-relaxed">
              67 Sukhumvit 36
              <br />
              Phra Khanong, Bangkok 10110
            </address>
            <p className="mt-3 text-sm text-coffee-500">
              Located in: Krudam Muay Thai School
            </p>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-coffee-100 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-coffee-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-coffee-800 mb-2">
              Hours
            </h3>
            <p className="text-coffee-600">
              Daily from 7:30 AM to 7 PM
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-glow transition-shadow md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-coffee-100 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-coffee-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-coffee-800 mb-2">
              Contact
            </h3>
            <a
              href="tel:+66821542645"
              className="text-xl text-coffee-700 font-medium hover:text-coffee-500 transition-colors"
            >
              082 154 2645
            </a>
            <div className="mt-6">
              <a
                href="https://maps.google.com/?q=67+Sukhumvit+36+Bangkok"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

