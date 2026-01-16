/**
 * Footer Component
 * Minimal footer with brand and copyright.
 */

export default function Footer() {
  return (
    <footer className="py-8 bg-coffee-800 text-coffee-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium tracking-[0.18em] text-white uppercase">
              ME THAI COFFEE
            </span>
          </div>
          <p className="text-xs font-medium tracking-[0.18em] text-coffee-200 uppercase">
            © {new Date().getFullYear()} ME THAI COFFEE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

