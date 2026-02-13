export default function Platform () {
    return(
        <section id="platofirm_page flex flex-col xxs:relative">
            {/* Top image area */}
            <div className="flex flex-col bg-[url('./assets/platformImg.jpg')] xxs:bg-no-repeat xxs:h-50 xs:h-70 lg:h-90 xl:h-100 2xl:h-120 xxs:bg-cover xxs:bg-center xxs:justify-center">
                {/* Text Heading */}
                <div className="flex flex-col xxs:items-center md:items-start xxs:space-y-2 md:ml-[50%] lg:ml-[45%]">
                    <p className="font-body text-secondary-base xxs:text-xl xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">TEXT HERE</p>
                    <p className="text-white font-medium font-body xxs:text-3xl xs:text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl">BIG TEXT</p>
                </div>
            </div>
            {/* Page Content */}
            <div className="xxs:mx-10 xxs:mb-10  xxs:text-xs xs:text-sm sm:text-base md:text-xl lg:text-2xl md:overflow-hidden max-w-6xl  md:mx-auto">
                {/* image block */}
                <div className="flex flex-col xxs:w-50 xs:w-70 lg:w-90 xxs:h-60 xs:h-80 md:h-100 lg:h-120 bg-gray-500 xxs:float md:absolute xxs:mt-[-40] md:mt-[-50] lg:mt-[-40] xxs:mx-auto md:mx-0 md:ml-[7%] lg:ml-[5%] xl:ml-[3%] 2xl:ml-[-2%]">
                </div>
                {/* Paragraphs */}
                <div className="xxs:space-y-5 xxs:mt-5 lg:my-15 md:ml-[50%] lg:ml-[45%] md:mr-10 indent-5">
                    <p className="font-body"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales leo rhoncus, finibus nisi facilisis, placerat ligula. Nulla sed ante tempor, convallis urna a, porta odio. Fusce ornare risus id ligula vulputate consequat. </p>
                    <p className="font-body">  Etiam a maximus felis. Nam accumsan velit ligula, sit amet sollicitudin turpis laoreet at. Cras ornare, metus ac placerat varius, massa mi sollicitudin lacus, quis maximus quam elit nec tortor. Mauris ut vulputate arcu, in imperdiet quam!</p>
                </div>
            </div>
        </section>
    )
}