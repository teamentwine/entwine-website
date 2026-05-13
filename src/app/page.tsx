'use client'
import Image from "next/image";
import posthog from "posthog-js";
import { useEffect } from "react";

const circle = "flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[var(--color-secondary-base-2)] font-bold shadow-[-4px_4px_0px_0px_var(--color-secondary-base-2)]";

export default function Home() {

  useEffect(() => {
    posthog.capture('home_page_viewed');
  }, []);

  const handleLearnMoreClick = (section: string) => {
    posthog.capture('home_learn_more_clicked', { section });
  };

import Image from 'next/image';

export default function Homepage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full sm:h-[400px] min-h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" />
        <Image
          src="/hero-image.jpg"
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 text-center justify-center px-8">
          <h1 className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            ENTWINE
          </h1>
          <p className="mt-4 sm:text-xl md:text-2xl lg:text-3xl">
            <span className="text-[var(--color-primary-base-2)]">connect.</span>
            <span className="text-[var(--color-secondary-base)]">collaborate.</span>
            <span className="text-black">entwine</span>
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-text mb-6">
            About Entwine
          </h2>
          <hr className="border-t-4 border-[var(--color-secondary-base)] my-5 mx-auto w-16 md:w-32 lg:w-48 " />
          <p className="text-dark-text/80 text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
            whatever thou heart desires (place something here).
          </p>
          <button onClick={() => handleLearnMoreClick('about')} className="text-black font-black py-3 px-8 rounded-full text-sm md:text-base border-2 border-black
            bg-[var(--color-primary-base-2)] transition-colors
            duration-300 active:bg-[var(--color-primary-base-3)] shadow-[0px_6px_0px_0px_var(--color-primary-base)]">
            Learn More
          </button>
        </div>
      </section>
      <section className="w-full max-w-4xl px-6 sm:px-8 md:px-10 mx-auto py-14 sm:py-20 text-center">
        {/* Observations */}
        <h2 className="text-black text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Entwine was founded on{' '}
          <span className="text-[var(--color-secondary-base)]">two</span>{' '}observations:
        </h2>

        {/* Bullet Points */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10">

          <div className="flex flex-col gap-8 text-left flex-1">
            <div className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[var(--color-primary-base-2)]" />
              <p className="text-black text-sm sm:text-base md:text-lg leading-snug">
                Collaboration makes problem solving more effective
              </p>
              <button onClick={() => handleLearnMoreClick('info')} className="text-black font-black py-3 px-8 rounded-full text-sm md:text-base border-2 border-black
                bg-[var(--color-secondary-base-2)] transition-colors
                duration-300 active:bg-[var(--color-secondary-base-3)] shadow-[-6px_6px_0px_0px_var(--color-secondary-base)]">
                Learn More
              </button>
            </div>
            <div>
            <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-lg">
              <Image
                src="/drawing.jpg"
                alt="Drawing Image"
                fill className="object-cover rounded-lg" />
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[var(--color-primary-base-2)]" />
              <p className="text-black text-sm sm:text-base md:text-lg leading-snug">
                But, the barriers to collaborate in the social good sector are too high to be feasible to many organizations
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-[70%] sm:w-[75%] md:w-[85%] lg:w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] bg-black/10">
              <Image
                src="/collab.jpg"
                alt="Collaboration illustration"
                fill className="object-cover rounded-xl" />
             </div>
          </div>
        </div>

        {/* paragraph */}
        <p className="mt-12 text-black text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          That's why we are building a tool and space that allows organizations with overlapping goals to connect and collaborate in the smoothest and most effortless way possible.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/platform"
            className="
            w-full max-w-xs sm:w-auto text-center
            inline-block px-7 py-3 rounded-full border-2 border-black
            text-black text-sm do-semibold
            bg-[var(--color-secondary-base-3)]
            shadow-[0px_6px_0px_0px_var(--color-secondary-base)]
            active:translate-y-2 active:shadow-none transition">
            learn about the platform
          </a>

          <a
            href="/volunteer"
            className="
            w-full max-w-xs sm:w-auto text-center
            inline-block px-7 py-3 rounded-full border-2 border-black
            text-black text-sm do-semibold
            bg-[var(--color-secondary-base-3)]
            shadow-[0px_6px_0px_0px_var(--color-secondary-base)]
            active:translate-y-2 active:shadow-none transition">
            volunteer with us
          </a>
        </div>
      </section>
    </main>
  );
}
