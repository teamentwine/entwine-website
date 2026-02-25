import Image from "next/image";

export default function Volunteer() {
  return (
    <main className="bg-white overflow-x-hidden">
      {/* Title */}
      <section className="py-16 md:py-24 px-4">
        <div className="flex flex-row md:flex-col gap-4 md:gap-8 max-w-6xl mx-auto">
          <div className="text-left md:text-center lg:text-center flex-shrink min-w-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--color-secondary-base)] mb-4 md:mb-6">
              WANT TO
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-dark-text mb-4 md:mb-6 break-words">
              VOLUNTEER?
            </h2>
            <p className="max-w-2xl md:mx-auto text-dark-text/80 text-sm md:text-base lg:text-lg">
              If you're interested in the mission and want to help, please reach out.
              We are open to anyone who would like to volunteer with us.
            </p>
            <p className="mt-4 text-xs md:text-sm text-dark-text/70">
              *If you're looking for specific positions, look at our postings on{" "}
              <a href="https://idealist.org" className="underline font-semibold">
                Idealist
              </a>
            </p>
          </div>

          {/* Contact Box - small screen */}
          <div className="md:hidden flex-shrink-0 w-48 sm:w-56 border-2 border-black rounded-2xl p-4 sm:p-6 shadow-[-6px_6px_0px_0px_var(--color-primary-base)] h-fit text-center">
            <h3 className="text-lg sm:text-xl font-bold mb-3">Contact Us</h3>
            <p className="text-xs sm:text-sm mb-1">Phone: +1 (555) 555 5555</p>
            <p className="text-xs sm:text-sm mb-3">Email: contact@email.com</p>
            <h4 className="text-lg sm:text-xl font-bold mb-3">Socials</h4>
            <div className="flex gap-3 text-xl justify-center">
            <a href="https://facebook.com">
                <svg className="h-8 w-8" viewBox="0 0 22 22">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://indeed.com">
                <svg className="h-8 w-8" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a href="https://x.com">
                <svg className="h-8 w-8" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Form */}
          <form
            id="volunteer-form"
            className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="border-2 border-black rounded-lg p-3 w-full" placeholder="First Name*" />
            <input className="border-2 border-black rounded-lg p-3 w-full" placeholder="Last Name*" />
            <input className="border-2 border-black rounded-lg p-3 w-full" placeholder="Email*" />
            <input className="border-2 border-black rounded-lg p-3 w-full" placeholder="Phone*" />
            <input className="border-2 border-black rounded-lg p-3 sm:col-span-2 w-full" placeholder="Subject*" />
            <textarea className="border-2 border-black rounded-lg p-3 sm:col-span-2 h-40 resize-none w-full" placeholder="Message*" />
          </form>

          {/* Contact Box - medium+ screens */}
          <div>
            <div className="hidden md:block border-2 border-black rounded-2xl p-8 shadow-[-6px_6px_0px_0px_var(--color-primary-base)] h-fit">
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-m mb-4">Phone: +1 (555) 555 5555</p>
              <p className="text-m mb-4">Email: contact@email.com</p>

              <h4 className="text-2xl font-bold mb-4">Socials</h4>
              <div className="flex gap-10 text-xl">
              <a href="https://facebook.com">
                  <svg className="h-8 w-8" viewBox="0 0 22 22">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="https://indeed.com">
                  <svg className="h-8 w-8" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </a>
                <a href="https://x.com">
                  <svg className="h-8 w-8" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="sm:col-span-2 flex justify-center md:justify-end mt-4">
              <button
                type="submit"
                form="volunteer-form"
                className="w-1/4 md:w-full py-4 font-extrabold rounded-2xl border-2 border-black
                bg-[var(--color-secondary-base-3)] shadow-[0px_6px_0px_0px_var(--color-secondary-base)]
                active:translate-y-2 active:shadow-none transition">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
