import Image from "next/image";
import teamwork_Image from "../assets/teamwork.jpg"
export default function about (){
    return(
        <section id="aboutus_page" className="flex flex-col">
            {/* team info */}
            <div className="xxs:m-10 md:m-20 flex 2xl:mx-auto 2xl:max-w-6xl">
                <div className="space-y-5">

                    <div className="flex xxs:flex-col xs:flex-row justify-between xxs:space-y-5">
                        <div className="xxs:self-start xs:self-end lg:self-center xxs:space-y-5 space-y-10">
                            <p className="font-body text-secondary-base-2 xxs:text-base md:text-xl xl:text-3xl text-4xl font-thin">Learn More</p>
                            <p className="font-body font-bold xxs:text-2xl sm:text-3xl md:text-4xl xl:text-5xl xxs:border-l-4 md:border-l-8 border-primary-base-2 pl-5">OUR TEAM</p>
                        </div>
                        
                       {/* img */}
                       <div className="flex flex-col xxs:float-start xs:float-right md:float-right md:ml-10">
                            <Image src={teamwork_Image} alt="image of people having a discussion" className="xxs:w-60 xs:w-55 sm:w-80 md:w-80 lg:w-120 xl:w-150 " />
                        {/* Attribution */}
                        <a href="https://www.vecteezy.com/free-vector/conference" className="text-[0.5rem] xxs:self-center xs:self-end">Conference Vectors by Vecteezy</a>
                        </div>
                    </div>
                
                    <p className="aboutus-text">In 2024, we started this project as a group of 4 high school students and since then, even as we've gone to different colleges we have been working to build this dreams we had... Praesent vel porta nulla. Nullam a dolor gravida, fringilla ex in, rutrum quam. Cras urna lacus, mollis ac laoreet sit amet, tincidunt ac nisi.</p>

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
                    <div className="cardProfileImage cardLeftProfile  bg-[url('./assets/profilecard.jpg')]
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv1">
                        <div className="card_content_container">
                            <p className="card_name">Lorem I.</p>
                            <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="cart_about">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>

                {/* card 2 */}
                <div className="relative lg:mt-25">
                    {/* card photo */}
                    <div className="cardProfileImage cardRightProfile bg-[url('./assets/profilecard.jpg')] 
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv2">
                        <div className="card_content_container">
                            <p className="card_name">Lorem I.</p>
                            <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="cart_about">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="relative">
                    {/* card photo */}
                    <div className="cardProfileImage cardLeftProfile  bg-[url('./assets/profilecard.jpg')]
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv1">
                        <div className="card_content_container">
                            <p className="card_name">Lorem I.</p>
                            <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="cart_about">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>

                {/* card 4 */}
                <div className="relative lg:mt-25">
                    {/* card photo */}
                    <div className="cardProfileImage cardRightProfile bg-[url('./assets/profilecard.jpg')] 
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv2">
                        <div className="card_content_container">
                            <p className="card_name">Lorem I.</p>
                            <p className="card_quote">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="cart_about">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}