'use client'
import Image from "next/image";
import logo from "../assets/logo.png";
import Link from "next/link";
export default function Footerbar () {
    
    const scrollToTopofPage = () =>{
        window.scrollTo({
            top: 0,
            left:0,
            behavior: 'smooth'
        });
    };
  
    return(
        <section id="footer" className="bg-background-base flex flex-col">  
            <div className="border-t-3 flex md:flex-row xxs:flex-col xxs:items-center xxs:space-y-8 xxs:py-5 md:px-5 xxs:px-10 md:justify-evenly">
                {/* logo + socials */}
                <div className="flex flex-col items-center md:space-y-4 xxs:space-y-8">
                    <Link href="/">
                        <Image src={logo} alt="logo image" className="md:w-40 sm:w-50 xxs:w-40"/>
                    </Link> 
                    <div className="flex md:space-x-5 xxs:space-x-10">
                       {/* Facebook Link */}
                        <Link href="#" className="social-link-footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-facebook svg font-dark-text" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                            </svg>
                        </Link>
                        {/* LinkedIn Link */}
                        <Link href="#" className="social-link-footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg"className="bi bi-linkedin svg font-dark-text" viewBox="0 0 16 16">
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                            </svg>
                        </Link>
                        {/* Twitter X Link */}
                        <Link href="#" className="social-link-footer-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-twitter-x svg font-dark-text" viewBox="0 0 16 16">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="md:space-y-8 xxs:space-y-5 flex flex-col">
                    {/* menu links */}
                    <div className="xxs:grid md:grid-cols-5 xxs:grid-cols-3 items-center md:text-right md:gap-4 xxs:gap-10 font-body md:text-sm sm:text-lg xs:text-sm xxs:text-xs font-bold uppercase">
                        <Link href="/about"><p>about</p></Link>
                        <Link href="#"><p>volunteer</p></Link>
                        <Link href="#"><p>waitlist</p></Link>
                        <Link href="#"><p>platform</p></Link>
                        <Link href="#"><p>donate</p></Link>
                    </div>
                    {/* copyright*/}
                    <p className="font-body font-thin xxs:text-xs md:self-end xxs:self-center xxs:pb-5">Copyright @2026</p>
                </div>
            </div>  
            {/* Back to Top link */}
            <div className="backtop-link-container bg-background-dark w-full flex flex-col items-center xxs:py-3">
                <Link href="#" onClick={scrollToTopofPage}><p className="font-body text-white xxs:text-xs">BACK TO TOP</p></Link>
            </div>
        </section>
    )
}