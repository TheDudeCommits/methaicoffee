"use client";

import { useState } from "react";

const processSteps = [
  {
    id: 1,
    title: "Harvest",
    thaiTitle: "เก็บกาแฟเชอรี่",
    description: "Hand-picking ripe coffee cherries from our highland farms in Northern Thailand.",
    icon: "🌿",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  {
    id: 2,
    title: "Sort & Soak",
    thaiTitle: "คัดเมล็ดและแช่น้ำ",
    description: "Sorting the best cherries and soaking overnight to separate floaters.",
    icon: "💧",
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    id: 3,
    title: "Sun Dry",
    thaiTitle: "ตากแดด 10-15 วัน",
    description: "Drying under the Thai sun for 10-15 days until reaching 7.5-8% moisture.",
    icon: "☀️",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    id: 4,
    title: "Store",
    thaiTitle: "เก็บรักษาคุณภาพ",
    description: "Carefully storing dried beans to preserve their exceptional quality and flavor.",
    icon: "☕",
    color: "from-amber-700 to-amber-900",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-300",
  },
];

export default function CoffeeProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 overflow-hidden" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium text-[#1C39BB] uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2
            id="process-heading"
            className="font-sans text-3xl sm:text-4xl md:text-[2.6rem] font-semibold text-coffee-800 leading-tight tracking-tight"
          >
            Natural Dry Process
          </h2>
          <p className="mt-4 text-coffee-600 max-w-2xl mx-auto">
            From farm to cup, discover the traditional Thai method that gives our coffee its unique fruity character.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-300 via-blue-300 via-amber-300 to-amber-600 transform -translate-y-1/2 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative"
                onMouseEnter={() => setHoveredStep(step.id)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
              >
                <div className="hidden lg:flex absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all duration-300 bg-gradient-to-br ${step.color} ${
                      hoveredStep === step.id || activeStep === step.id ? "scale-125" : ""
                    }`}
                  />
                </div>

                <div
                  className={`relative mt-8 lg:mt-6 p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${step.bgColor} ${step.borderColor} ${
                    hoveredStep === step.id || activeStep === step.id
                      ? "transform scale-105 shadow-xl"
                      : "shadow-md hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {step.icon}
                    </span>
                    <div>
                      <span className="text-xs font-bold text-coffee-400 uppercase tracking-wider">
                        Step {String(step.id).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold text-coffee-800">{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-coffee-600 mb-3">{step.thaiTitle}</p>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeStep === step.id || hoveredStep === step.id
                        ? "max-h-32 opacity-100"
                        : "max-h-0 opacity-0 lg:max-h-32 lg:opacity-100"
                    }`}
                  >
                    <p className="text-sm text-coffee-500 leading-relaxed">{step.description}</p>
                  </div>

                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <svg className="w-6 h-6 text-coffee-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 16l-6-6h12l-6 6z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                    hoveredStep === step.id ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                  }`}
                >
                  <span className="text-xs font-medium text-coffee-400 whitespace-nowrap">
                    Click to learn more
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-coffee-100 rounded-full">
            <span className="text-2xl">🌱</span>
            <span className="text-sm font-medium text-coffee-700">
              100% Natural Process • No Chemicals • Highland Grown
            </span>
            <span className="text-2xl">🏔️</span>
          </div>
        </div>
      </div>
    </section>
  );
}
