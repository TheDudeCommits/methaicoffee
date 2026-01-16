import Image from "next/image";

/**
 * Hero Section
 * Two-column layout: headline on left, cup image with beans on right.
 * Mobile: stacks vertically with image below text.
 */

export default function Hero() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center overflow-visible bg-[#FAFAFA]"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-8 lg:px-12 py-4 md:py-6 lg:pt-4 lg:pb-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left Column - Text + Buttons */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* <p className="text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase">
              Every cup
            </p> */}
            <h3 className="mt-2 font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight uppercase">
              <span className="text-blue-600">ME THAI COFFEE</span>
            </h3>
            <h3 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-coffee-800 leading-tight tracking-tight uppercase">
              TELLS A STORY
            </h3>

            <p className="mt-4 text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase">
              At "ME THAI COFFEE", we believe that coffee is more than just a beverage.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 text-xs font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                Explore
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 border border-coffee-600 text-coffee-700 text-xs font-medium tracking-[0.18em] uppercase rounded-full transition-all duration-300 hover:bg-coffee-700 hover:text-white"
              >
                Find Store
              </a>
            </div>
          </div>

          {/* Right Column - Cup Image + Single Floating Beans */}
          <div className="relative order-1 lg:order-2 flex items-center justify-center w-full">
            <div className="relative w-full max-w-xl">
              {/* Single beans icon above the cup */}
              <Image
                src="/beans.png"
                alt="Coffee beans"
                width={150}
                height={100}
                className="absolute z-20 w-[26%] h-auto object-contain animate-beans-drift"
                style={{
                  left: "calc(35% + 20px)",
                  top: "12%",
                  animationDelay: "-3s",
                  animationDuration: "15s",
                }}
              />

              {/* Cup Image - larger and prominent */}
              <Image
                src="/hero-cup.png"
                alt="ME THAI COFFEE iced coffee cup with rich caramel color and the ME THAI logo"
                width={1100}
                height={1400}
                className="relative z-10 w-auto h-[360px] sm:h-[420px] md:h-[480px] lg:h-[620px] xl:h-[700px] object-contain drop-shadow-[0_30px_60px_rgba(90,59,46,0.22)] transition-transform duration-500 ease-out group-hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text Row Underneath - Smaller Typography */}
        <div className="text-center max-w-2xl mx-auto mt-8 lg:mt-12">
          <h3
            id="hero-heading"
            className="font-sans text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-coffee-800 leading-tight tracking-tight"
          >
            FULLBODY FRUITY
          </h3>

          <p className="mt-4 text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase">
            Discover the taste of a real <span className="text-blue-600">thai</span> coffee.
          </p>

        </div>
      </div>
    </section>
  );
}
