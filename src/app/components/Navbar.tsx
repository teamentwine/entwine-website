'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";

export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen((open)=>!open)
    }

    const closeMobileMenu = () => {
        setIsOpen(false)
    }
    /* Closes the menu when window goes out of mobile size
    ** Prevents issue where opened mobile menu on screen expansion
    ** messes with desktop/tablet menu layout
    */
    useEffect(()=>{
        const handleWindowResize = () =>{
            if (window.innerWidth > 640) {
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    },[])

    return(
        <section id="header flex items-center ">
            <div className="bg-background-dark flex items-center justify-around text-white pt-2 pb-2 md:py-5 xxs:py-2">
                <div className="flex md:space-x-5 xxs:space-x-2">  
                    {/* Facebook Link */}
                    <Link href="#" className="social-link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-facebook svg" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </Link>
                    {/* LinkedIn Link */}
                    <Link href="#" className="social-link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-linkedin svg" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </Link>
                    {/* Twitter X Link */}
                    <Link href="#" className="social-link-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-twitter-x svg" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </Link>
                </div>

                {/* TODO: Conditional on which of 2 to display later
                when accounts are implemented */}
                {/* <div className="user flex items-center">
                    <Link href="#" className="sm:w-8 xxs:w-5 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle mr-3 svg" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                    </Link>
                    <p className="font-body">Hello, Sierra</p>
                </div> */}
                <div className="login-signup flex items-center  space-x-2">
                    <Link href="#"><p className="font-body">Login</p></Link>
                    <p>/</p>
                    <Link href="#"><p className="font-body">Sign Up</p></Link>
                </div>
                {/* - - - */}

                {/* Open mobile menu on mobile */}
                <div className="sm:w-10 xxs:w-7 md:hidden xxs:block">
                    {/* hamburger menu icon */}
                    <Link href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className={`bi bi-list svg ${isOpen ? "hidden" : "block"} `} onClick={toggleMobileMenu} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </Link>
                    {/* x icon */}
                    <Link href="#">
                        <svg xmlns="http://www.w3.org/2000/svg"fill="currentColor" 
                        className={`bi bi-x-lg fill-white svg ${isOpen ? "block" : "hidden"}`} onClick={closeMobileMenu} viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                        </svg>
                    </Link>
                </div>
            </div>

            <div className="nav-area flex bg-background-base">
                {/* Brand Logo Here */}
                <div className={`flex flex-col align-center items-center ${isOpen ? " drop-shadow-lg drop-shadow-gray-500": ""} bg-background-base`}>
                    <Link href="/"><Image src={logo} alt="entwine logo" className="logoImage" loading="eager"/></Link>
                </div>
                {/* Menu Naivation Links */}
                <div className={`menu-nav-container md:block xxs:hidden ${isOpen ? "mobile-menu-view" : ""}`}>
                    <p  className={`font-body ${isOpen ? "" : "hidden"}`}>MENU</p>
                    <div className="space-x-3 lg:text-xl md:text-sm font-light ">
                        <Link href="/about"><button className="primary-btn">about</button></Link>
                        <Link href="#"><button className="primary-btn">volunteer</button></Link>
                        <Link href="#"><button className="primary-btn">waitlist</button></Link>
                        <Link href="#"><button className="primary-btn">platform</button></Link>
                        <Link href="#"><button className="secondary-btn">donate</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}