import Image from "next/image";


/* 
** TODO: Make responsive for screen sizes
**
*/

export default function about (){
    return(
        <section id="aboutus_page" className="flex flex-col">
            {/* about us info */}
            <div className="aboutus-container m-20 flex space-y-5">
                <div className="space-y-5">
                    <p className="font-body text-secondary-base-2 text-4xl font-thin">Learn More</p>
                    {/* img placehodler */}
                    <div className="w-80 h-50 border-2 float-right ml-10 mb-10"></div>
                    <p className="font-body font-bold text-6xl border-l-8 border-primary-base-2 pl-5">ABOUT US</p>
                
                    <p className="aboutus-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus risus at pulvinar lobortis. Praesent vel porta nulla. Nullam a dolor gravida, fringilla ex in, rutrum quam. Cras urna lacus, mollis ac laoreet sit amet, tincidunt ac nisi. Aenean mollis ligula sed nisi posuere, eget congue ipsum bibendum. Proin tincidunt risus et pulvinar ullamcorper. </p>
                    <p className="aboutus-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus risus at pulvinar lobortis. Praesent vel porta nulla. Nullam a dolor gravida, fringilla ex in, rutrum quam. Cras urna lacus, mollis ac laoreet sit amet, tincidunt ac nisi. Aenean mollis ligula sed nisi posuere, eget congue ipsum bibendum. Proin tincidunt risus et pulvinar ullamcorper. </p>
                    <p className="aboutus-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus risus at pulvinar lobortis. Praesent vel porta nulla. Nullam a dolor gravida, fringilla ex in, rutrum quam. Cras urna lacus, mollis ac laoreet sit amet, tincidunt ac nisi. Aenean mollis ligula sed nisi posuere, eget congue ipsum bibendum. Proin tincidunt risus et pulvinar ullamcorper. </p>
                </div>
            </div>
            {/* Our founder title */}
            <div className="flex flex-col ">
                <div className="flex items-center ml-20">
                    <p className="font-body font-bold text-8xl mr-10">OUR</p>
                    <div className="w-full h-2 bg-secondary-base"></div>
                </div>
                <div className="flex items-center mr-140">
                    <div className="w-full h-2 bg-primary-base-2"></div>
                    <p className="font-body font-bold text-8xl ml-10">FOUNDERS</p>
                </div>
            </div>
            {/* founder cards container */}
            {/*    grid grid-cols-2 place-items-center  */}
            <div className="my-40 mx-20 flex flex-wrap justify-evenly gap-y-50">

                {/* card 1 */}
                <div className="relative">
                    {/* card photo */}
                    <div className="cardProfileImage cardLeftProfile  bg-[url('./assets/profilecard.jpg')]
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv1">
                        <div className="font-body text-center text-2xl space-y-5">
                            <p className="font-bold text-5xl">Lorem I.</p>
                            <p className="font-light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="text-start">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>

                 {/* card 2 */}
                 <div className="relative mt-25">
                    {/* card photo */}
                    <div className="cardProfileImage cardRightProfile bg-[url('./assets/profilecard.jpg')] 
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv2">
                        <div className="font-body text-center text-2xl space-y-5">
                            <p className="font-bold text-5xl">Lorem I.</p>
                            <p className="font-light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="text-start">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
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
                        <div className="font-body text-center text-2xl space-y-5">
                            <p className="font-bold text-5xl">Lorem I.</p>
                            <p className="font-light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="text-start">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>

                 {/* card 4 */}
                 <div className="relative mt-25">
                    {/* card photo */}
                    <div className="cardProfileImage cardRightProfile bg-[url('./assets/profilecard.jpg')] 
                   ">     
                    </div>
                    {/* card text */}
                    <div className="founderCard cardv2">
                        <div className="font-body text-center text-2xl space-y-5">
                            <p className="font-bold text-5xl">Lorem I.</p>
                            <p className="font-light">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                            <p className="text-start">Suspendisse sodales dolor vel condimentum tincidunt. Vestibulum interdum blandit tincidunt. Aenean ultricies augue ac lorem consequat,</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}