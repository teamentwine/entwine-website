'use client'
import Image from "next/image";
import teamwork_Image from "../assets/teamwork.jpg"
import posthog from "posthog-js"
import { useEffect } from "react";

export default function About (){

    useEffect(() => {
        posthog.capture('team_page_viewed');
    }, []);

    return(
        <section id="aboutus_page" className="flex flex-col">
            {/* team info */}
            <div className="xxs:m-10 md:m-20 flex 2xl:mx-auto 2xl:max-w-6xl">
                <div className="space-y-5">

                    <div className="flex xxs:flex-col xs:flex-row justify-between xxs:space-y-5">
                        <div className="xxs:self-start xs:self-end lg:self-center xxs:space-y-5 space-y-10">
                            {/*<p className="font-body text-secondary-base-2 xxs:text-base md:text-xl xl:text-3xl text-4xl font-thin">Learn More</p>*/}
                            <p className="font-body font-bold xxs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl xxs:border-l-4 md:border-l-8 border-primary-base-2 pl-5">OUR TEAM</p>
                        </div>
                        
                       {/* img */}
                       <div className="flex flex-col xxs:float-start xs:float-right md:float-right md:ml-10">
                            <Image src={teamwork_Image} alt="image of people having a discussion" className="xxs:w-60 xs:w-55 sm:w-80 md:w-80 lg:w-120 xl:w-150 " />
                        {/* Attribution */}
                        <a href="https://www.vecteezy.com/free-vector/conference" className="text-[0.5rem] xxs:self-center xs:self-end">Conference Vectors by Vecteezy</a>
                        </div>
                    </div>
                
                    <p className="aboutus-text">In 2024, we started this project as a group of 4 high school students sitting in a classroom after just finishing finals. Since then, even as we've gone to different colleges we have been working to build the dreams we had with a team of 10 people total. Learn more about our 4 founders below.</p>

                </div>
            </div>
            {/* Our founder title */}
            <div className="flex flex-col ">
                <div className="flex items-center xxs:ml-10 md:ml-20">
                    <p className="font-body font-bold xxs:text-3xl sm:text-5xl md:text-6xl xl:text-7xl mr-10">OUR</p>
                    <div className="w-full xxs:h-1 md:h-2 bg-secondary-base"></div>
                </div>
                <div className="flex items-center xxs:mr-10 md:mr-30 xl:mr-140">
                    <div className="w-full xxs:h-1 md:h-2 bg-primary-base-2"></div>
                    <p className="font-body font-bold xxs:text-3xl sm:text-5xl md:text-6xl xl:text-7xl ml-10">FOUNDERS</p>
                </div>
            </div>
            {/* founder cards container */}
            <div className="xxs:mt-30 md:mt-40 xl:mt-30 xxs:mb-20 xxs:px-10 lg:px-20 xl:px-30 flex flex-wrap justify-evenly xxs:gap-y-30 md:gap-y-30 lg:gap-y-15 2xl:gap-x-15 xl:grid xl:grid-cols-2 xl:place-items-center 2xl:max-w-max 2xl:mx-auto
            ">
                {/* card 1 */}
                <div className="relative">
                    {/* card photo */}
                    <div
                        className="
                            cardProfileImage
                            cardLeftProfile
                            overflow-hidden
                            rounded-2xl
                            bg-[url('./assets/shom_pfp.jpg')]
                            bg-[length:400%]
                            bg-[400%_20%]
                            bg-no-repeat
                          "
                    ></div>
                    {/* card text */}
                    <div className="founderCard cardv1">
                        <div className="card_content_container">
                            <p className="card_name">Shom</p>
                            {/* <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p> */}
                            <p className="cart_about">Hi, I’m Shom Tailor, one of the co-directors and founders of Entwine. One of my biggest motivations for helping create Entwine was the belief that technology should serve society and create positive change. It can often feel like technology does more harm than good, but I hope Entwine can help show that it also has the power to connect people and improve lives. Outside of Entwine, I love playing and watching soccer, and I’m a huge fan of FC Barcelona.</p>
                            <p className="cart_about"> Have any feedback or thoughts email me at <a
                                className="text-blue-900"
                                href="mailto:noelk@projectentwine.org">shomt@projectentwine.org</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="relative lg:mt-25">
                    {/* card photo */}
                    <div className="cardProfileImage cardRightProfile object-center bg-[url('./assets/noel_pfp.png')] bg-center bg-cover"></div>
                    {/* card text */}
                    <div className="founderCard cardv2">
                        <div className="card_content_container">
                            <p className="card_name">Noel</p>
                            {/* <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p> */}
                            <p className="cart_about">Hello, I am Noel Kurian, the cofounder and co executive here at Entwine. The inspiration to create Entwine came from a class that me and Shom were in back in high school where we saw a video in biology about creating natural bridges for animals to cross. We saw something totally different and a space to have a positive impact on the world as different non-profits were struggling with similar issues, all while feeling disconnected.</p>
                            <p className="cart_about">Outside of my responsibilities at Entwine, I love biking and enjoying the great outdoors, while also being a huge sports fan. Go Eagles! Feel free to email me at: <a className="text-blue-900" href="mailto:noelk@projectentwine.org">noelk@projectentwine.org</a></p>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="relative">
                    {/* card photo */}
                    <div className="cardProfileImage cardLeftProfile  bg-[url('./assets/jd_pfp.jpg')]
                   ">
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv1">
                        <div className="card_content_container">
                            <p className="card_name">JD</p>
                            <p className="card_about">Hello, I’m Jeyadev Jayaprakash, I go by JD. I’m one of the cofounders at Entwine. I tend to focus more on people and connections, as it goes better with my mixed pre-med/biology interests. More importantly, I love seeing how my actions can make a difference in other’s lives and personal goals. That smile's always worth my time. Away from Entwine, I like to game to experience stories firsthand from people I’d never meet, and finding new hobbies to hyperfixate on for a few months.</p>
                            <p className="cart_about">If you want to talk about Entwine or anything, please email me at <a
                                className="text-blue-900"
                                href="mailto:jjayaprakash@projectentwine.org">jjayaprakash@projectentwine.org</a>
                                !</p>
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div className="relative lg:mt-25">
                    {/* card photo */}
                    <div
                        className="cardProfileImage cardRightProfile object-center bg-[url('./assets/chris_pfp.jpeg')] bg-center bg-cover"></div>
                    {/* card text */}
                    <div className="founderCard cardv2">
                        <div className="card_content_container">
                            <p className="card_name">Chris</p>
                            {/* <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p> */}
                            <p className="cart_about">Hello, I’m Chris Peter, and I’m one of the cofounders at Entwine. I’ve seen the role that nonprofits play in our community and am part of a religious nonprofit in the RTP area. The framework of emphasizing communication and collaboration over competition really appealed to me, hopefully making Entwine the start of something bigger and making a positive impact in nonprofit culture.</p>
                            <p className="cart_about">Outside of Entwine, I’m very interested in linguistics and political data analytics, and enjoy watching sports, playing chess, and going outside in my free time. Feel free to email me at   <a className="text-blue-900"
                                                href="mailto:chrisp@projectentwine.org">chrisp@projectentwine.org</a>!</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}