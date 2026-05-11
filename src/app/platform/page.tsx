'use client'
import Image from "next/image"
import climbingImage from "../assets/moutainclimbing.jpg"
import posthog from "posthog-js"
import { useEffect } from "react";

export default function Platform () {

    useEffect(() => {
        posthog.capture('platform_page_viewed');
    }, []);

    return(
        <section id="platofirm_page flex flex-col xxs:relative">
            {/* Top image banner */}
            <div className="flex flex-col bg-[url('./assets/platformImg.jpg')] xxs:bg-no-repeat xxs:h-50 xs:h-70 lg:h-90 xl:h-100 2xl:h-120 xxs:bg-cover xxs:bg-center xxs:justify-center">
                {/* Text Heading */}
                <div className="flex flex-col xxs:space-y-2 xxs:mx-auto ">
                    <p className="font-body text-secondary-base xxs:text-lg xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">THE</p>
                    <p className="text-white font-medium font-body xxs:text-2xl xs:text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl">ENTWINE PLATFORM</p>
                </div>
            </div>
            {/* Goals */}
            <div className="xxs:mx-10 xxs:mb-10 xxs:mt-10  xxs:text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl max-w-6xl md:mx-auto">
                {/* Paragraphs */}
                <div className="xxs:space-y-5 md:space-y-10 xxs:mt-5 md:m-10 lg:my-15  ">
                    {/* text group #1 */}
                    <p className="font-body"> To achieve our goals, we are building a digital platform that focuses on minimizing the effort to: </p>
                    <ul className="list-disc marker:text-secondary-base leading-15 font-light pl-10 md:flex md:justify-between ">
                        <div className="md:space-y-5 md:max-w-[45%]">
                            <li className="bulleted-list">Make first contact</li>
                            <li className="bulleted-list">Coordinate actions</li>
                        </div>
                        <div className="md:max-w-[45%]">
                            <li className="bulleted-list">Establish boundaries with any organization</li>
                        </div>
                    </ul>
                    {/* text group #2 */}
                    <p className="font-body">Based on these principles we've decided our platform needs to have a way to:</p>
                    <ul className="list-disc marker:text-secondary-base leading-15 font-light pl-10 md:flex md:justify-between">
                        <div className="md:space-y-5 md:max-w-[45%]">
                            <li className="bulleted-list">Recommend potential organizations you can collaborate with</li>
                            <li className="bulleted-list">Facilitate communication</li>
                        </div>
                        <div className="md:space-y-5 md:max-w-[45%]">
                            <li className="bulleted-list">Signal to the wider community of what types of collaborations you are looking for</li>
                            <li className="bulleted-list">Pick and choose mutual agreements and boundaries with your partners</li>
                        </div>
                    </ul>
                </div>
            </div>
            {/* Our Journey / Timeline History */}
            <div className="flex xxs:flex-col xxs:mx-5 md:mx-auto lg:flex-row  max-w-6xl  ">
                {/* Heading and image */}
                <div className="flex xxs:mx-5 sm:mx-10 md:mx-20 lg:ml-10 lg:mr-0 xxs:flex-col-reverse lg:flex-col lg:translate-y-40">
                    <div className="lg:mb-20">
                        <p className="text-6xl xxs:text-xl sm:text-2xl md:text-5xl 2xl:text-6xl text-primary-base font-bold xxs:mb-5 md:mb-10">OUR</p>
                        <p className="xxs:text-4xl md:text-7xl 2xl:text-8xl text-secondary-base font-bold">JOURNEY</p>
                    </div>
                    <div className=" flex flex-col xxs:items-end lg:items-start">
                        <Image src={climbingImage} className="xxs:w-250 xl:w-400 2xl:w-500 xxs:justify-center" alt="three people climbing mountainside"/>
                        <a href="https://www.vecteezy.com/free-vector/conference" className="text-[0.5rem]">Conference Vectors by Vecteezy</a>
                        </div>
                    </div>
                {/* timeline */}
                <div className="font-body relative xxs:mb-10 sm:mx-10 md:mx-20 lg:mx-10 xxs:mt-20 md:mt-40">
                    {/* line */}
                    <div className="benchmark-line bg-[#989898aa] z-[-1] absolute"></div>
                    {/* benchmark */}
                    <div className="flex benchmark-container">
                        <p className="benchmark-heading font-bold whitespace-nowrap">AUG 2025</p>
                        {/* circle marker */}
                        <div className="benchmark-marker flex-none   bg-secondary-base border-1 rounded-full align-end"></div>
                        {/* heading and text */}
                        <div className="flex flex-col">
                            <p className="benchmark-heading whitespace-nowrap font-bold">Benchmark Heading</p>
                            <p className="benchmark-body-text font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nisl ut orci ultricies, ut malesuada felis elementum. Curabitur condimentum scelerisque ligula a iaculis.</p>
                        </div>
                    </div>
                    {/* benchmark */}
                    <div className="flex benchmark-container">
                        <p className="benchmark-heading font-bold whitespace-nowrap">AUG 2025</p>
                        {/* circle marker */}
                        <div className="benchmark-marker flex-none   bg-primary-base border-1 rounded-full align-end"></div>
                        {/* heading and text */}
                        <div className="flex flex-col">
                            <p className="benchmark-heading whitespace-nowrap font-bold">Benchmark Heading</p>
                            <p className="benchmark-body-text font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nisl ut orci ultricies, ut malesuada felis elementum. Curabitur condimentum scelerisque ligula a iaculis.</p>
                        </div>
                    </div>
                    {/* benchmark */}
                    <div className="flex benchmark-container">
                        <p className="benchmark-heading font-bold whitespace-nowrap">AUG 2025</p>
                        {/* circle marker */}
                        <div className="benchmark-marker flex-none   bg-secondary-base border-1 rounded-full align-end"></div>
                        {/* heading and text */}
                        <div className="flex flex-col">
                            <p className="benchmark-heading whitespace-nowrap font-bold">Benchmark Heading</p>
                            <p className="benchmark-body-text font-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum nisl ut orci ultricies, ut malesuada felis elementum. Curabitur condimentum scelerisque ligula a iaculis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}