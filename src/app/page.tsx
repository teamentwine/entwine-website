import Image from "next/image";

const circle = "flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-[var(--color-secondary-base-2)] font-bold shadow-[-4px_4px_0px_0px_var(--color-secondary-base-2)]";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image
          src="/hero-image.jpg" alt="Hero background" fill className="object-cover" />
        <div className="relative z-20 h-full flex flex-col justify-center text-white px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Entwine
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            subtext
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-2xl mb-8">
            description here.
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
          <button className="text-black font-black py-3 px-8 rounded-full text-sm md:text-base border-2 border-black
            bg-[var(--color-primary-base-2)] transition-colors
            duration-300 active:bg-[var(--color-primary-base-3)] shadow-[0px_6px_0px_0px_var(--color-primary-base)]">
            Learn More
          </button>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1 relative h-80 md:h-96 rounded-lg">
              <Image
                src="/drawing.jpg"
                alt="Drawing Image"
                fill className="object-cover rounded-lg" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center">
                <div className={`${circle} mr-4`} />
                <div className="flex flex-col">
                  <h4 className="font-bold text-black text-lg">Step 01</h4>
                  <p className="">Step 1 description</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`${circle} mr-4`} />
                <div className="flex flex-col">
                  <h4 className="font-bold text-black text-lg">Step 02</h4>
                  <p className="">Step 2 description</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`${circle} mr-4`} />
                <div className="flex flex-col">
                  <h4 className="font-bold text-black text-lg">Step 03</h4>
                  <p className="">Step 3 description</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className={`${circle} mr-4`} />
                <div className="flex flex-col">
                  <h4 className="font-bold text-black text-lg">Step 04</h4>
                  <p className="">Step 4 description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h4 className="text-2xl md:text-3xl font-bold text-dark-text mb-4">
                Extra other info section
              </h4>
              <p className="text-dark-text mb-4">
                short descpriiton/info relating to section
              </p>
              <button className="text-black font-black py-3 px-8 rounded-full text-sm md:text-base border-2 border-black
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
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex items-center">
            <div className="w-1 h-32 bg-[var(--color-secondary-base-3)] rounded-full mr-4" />
              <h4 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-text">
                OUR <br /> TEAM
              </h4>
            </div>
            <div>
            <div className="order-2 md:order-1 relative h-auto rounded-lg bg-[var(--color-primary-base-3)] p-6 rounded-2xl border-2 border-black
              shadow-[-6px_8px_0px_0px_var(--color-primary-base)]">
              <p className="text-dark-text text-md md:text-lg">
                Info regarding the team and stuff, our team is dedicated to working with other nonprofits blah blah blah </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {/* Person 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black shadow-[-6px_6px_0px_0px_var(--color-secondary-base)]">
                <Image
                  src="/drawing.jpg" alt="Image 1" fill className="object-cover"/>
              </div>
              <h5 className="text-2xl font-bold text-dark-text">
                Person 1
              </h5>
              <p className="text-dark-text text-sm max-w-xs">
                Short description
              </p>
            </div>

            {/* Person 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black shadow-[-6px_6px_0px_0px_var(--color-primary-base)]">
                <Image
                  src="/drawing.jpg" alt="Image 2" fill className="object-cover"/>
              </div>
              <h5 className="text-2xl font-bold text-dark-text">
                Person 2
              </h5>
              <p className="text-dark-text text-sm max-w-xs">
                Short description
              </p>
            </div>

            {/* Person 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black shadow-[-6px_6px_0px_0px_var(--color-secondary-base)]">
                <Image
                  src="/drawing.jpg" alt="Image 3" fill className="object-cover"/>
              </div>
              <h5 className="text-2xl font-bold text-dark-text">
                Person 3
              </h5>
              <p className="text-dark-text text-sm max-w-xs">
                Short description
              </p>
            </div>

            {/* Person 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black shadow-[-6px_6px_0px_0px_var(--color-primary-base)]">
                <Image
                  src="/drawing.jpg" alt="Image 4" fill className="object-cover"/>
              </div>
              <h5 className="text-2xl font-bold text-dark-text">
                Person 4
              </h5>
              <p className="text-dark-text text-sm max-w-xs">
                Short description
              </p>
            </div>

            {/* Person 5 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black shadow-[-6px_6px_0px_0px_var(--color-secondary-base)]">
                <Image
                  src="/drawing.jpg" alt="Image 5" fill className="object-cover"/>
              </div>
              <h5 className="text-2xl font-bold text-dark-text">
                Person 5
              </h5>
              <p className="text-dark-text text-sm max-w-xs">
                Short description
              </p>
            </div>

            {/* Person 6 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-black shadow-[-6px_6px_0px_0px_var(--color-primary-base)]">
                <Image
                  src="/drawing.jpg" alt="Image 6" fill className="object-cover"/>
              </div>
              <h5 className="text-2xl font-bold text-dark-text">
                Person 6
              </h5>
              <p className="text-dark-text text-sm max-w-xs">
                Short description
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}