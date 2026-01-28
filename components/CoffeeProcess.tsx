"use client";

import { useState } from "react";
import Image from "next/image";

const processSteps = [
  {
    id: 1,
    title: "Harvest",
    description: "Hand-picking ripe coffee cherries from highland farms",
    image: "/process-harvest.jpg",
  },
  {
    id: 2,
    title: "Sort & Soak",
    description: "Sorting the finest cherries and soaking overnight",
    image: "/process-sort.jpg",
  },
  {
    id: 3,
    title: "Sun Dry",
    description: "Drying under natural sunlight for 10-15 days",
    image: "/process-dry.jpg",
  },
  {
    id: 4,
    title: "Store",
    description: "Preserving quality in controlled conditions",
    image: "/process-store.jpg",
  },
];

export default function CoffeeProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" aria-labelledby="process-heading">
      <div className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-medium text-coffee-500 uppercase tracking-[0.2em] mb-4">
            Our Process
          </span>
          <h2
            id="process-heading"
            className="font-sans text-3xl sm:text-4xl font-semibold text-coffee-800 tracking-tight"
          >
            Natural Dry Process
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-coffee-200 transform -translate-x-1/2" />

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  <div className={`hidden md:block w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div
                      className={`inline-block transition-all duration-300 cursor-pointer ${
                        isActive ? "transform scale-105" : ""
                      }`}
                    >
                      <span className="text-xs font-medium text-coffee-400 uppercase tracking-[0.15em]">
                        Step {String(step.id).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl font-semibold text-coffee-800 mt-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-coffee-500 mt-2 max-w-xs inline-block">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden md:flex">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-coffee-300 bg-white transition-all duration-300 ${
                        isActive ? "scale-150 border-[#1C39BB] bg-[#1C39BB]" : ""
                      }`}
                    />
                  </div>

                  <div className={`hidden md:flex w-1/2 items-center ${isLeft ? "pl-12 justify-start" : "pr-12 justify-end"}`}>
                    <div
                      className={`transition-all duration-300 ${
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    >
                      <div className="relative w-56 h-40 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                          sizes="224px"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="md:hidden flex items-start gap-4 py-6">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full border-2 border-coffee-300 bg-white transition-all duration-300 ${
                          isActive ? "scale-125 border-[#1C39BB] bg-[#1C39BB]" : ""
                        }`}
                      />
                      {index < processSteps.length - 1 && (
                        <div className="w-px h-16 bg-coffee-200 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 -mt-1">
                      <span className="text-xs font-medium text-coffee-400 uppercase tracking-[0.15em]">
                        Step {String(step.id).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-coffee-800 mt-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-coffee-500 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-full">
                      <div className="w-px h-16 bg-coffee-200" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs font-medium text-coffee-400 uppercase tracking-[0.2em]">
            100% Natural Process
          </p>
        </div>
      </div>
    </section>
  );
}
