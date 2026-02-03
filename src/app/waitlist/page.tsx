'use client'
import Link from "next/link"
export default function Waitlist () {
    return(
        <section id="waitlist_page" className="flex flex-col">
                {/* Call to action */}
                <div className="flex flex-col items-center xxs:mx-5 xs:mx-8 sm:mx-15 2xl:mx-20 xxs:mt-10 sm:mt-20 xl:mt-30 xxs:space-y-5 md:space-y-10 2xl:space-y-20 ">
                    <p className="font-body text-secondary-base xxs:text-base sm:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">JOIN THE</p>
                    <p className="font-body xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold">WAITLIST<span className="text-secondary-base">!</span></p>
                    <p className="font-body xxs:text-xs sm:text-base lg:text-lg 2xl:text-3xl text-center">If you're a non-profit interested in our mission or want to hear more about the vision, please fill out our interest form or email us at <Link href="#"><span className="underline">info@entwine.org</span>.</Link> We'd love to hear any feedback or ideas we can. Thank you!</p>
                </div>
                {/* Form */}
                <form action="#" className="xxs:w-3/4 2xl:w-5xl flex flex-col mx-auto xxs:my-10 md:my-15 lg:my-20 xl:my-25 2xl:my-30 space-y-5 ">
                    <input type="text" id="orgnizationName" placeholder="* Organization" className="form-input" required/>
                    <div className="flex xxs:space-y-5 md:space-y-0 md:space-x-5 xxs:flex-col md:flex-row">
                        <input type="text" id="firstName" placeholder="* First Name" className="form-input" required/>
                        <input type="form-input" id="lastName" placeholder="* Last Name" className="form-input" required/>
                    </div>
                    <div className="flex xxs:space-y-5 md:space-y-0 md:space-x-5 xxs:flex-col md:flex-row">
                        <input type="email" id="email" placeholder="* Email" className=" form-input" required/>
                        <input type="text" id="phone" placeholder="* Phone Number" className="form-input" required/>
                    </div>
                    <input type="text" id="subject" placeholder="* Subject" className="form-input" required/>
                    <textarea type="textarea" rows="5" id="message" className="form-input" placeholder="* Message" required/>
                    {/* Submit button */}
                    <button type="submit" className="font-body bg-secondary-base-3 xxs:w-1/2 sm:w-1/3 lg:w-1/5 xl:w-1/7 rounded-2xl py-2 self-center border-2 border-dark-border drop-shadow-secondary font-bold cursor-pointer mt-5 xxs:text-sm">SUBMIT</button>
                </form>
        </section>
    )
}