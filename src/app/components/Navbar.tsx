'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png"
import { useEffect, useState } from "react";
import posthog from "posthog-js";

export default function Navbar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen((open)=>!open)
    }

    const closeMobileMenu = () => {
        setIsOpen(false)
    }

    const handleNavLinkClick = (label: string) => {
        closeMobileMenu();
        posthog.capture('nav_link_clicked', { label });
    };
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
        <section id="header flex items-center" className={`${ isOpen ? "fixed h-screen overflow-y-auto w-full z-100": ""}`} >
            <div className="bg-background-dark flex items-center justify-around text-white pt-2 pb-2 md:py-5 xxs:py-2">
                <div></div>
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
                <div className="login-signup flex space-x-2 md:ml-auto md:pr-20">
                    <Link href="#"><p className="font-body">Login</p></Link>
                    <p>/</p>
                    <Link href="#"><p className="font-body">Sign Up</p></Link>
                </div>
                {/* - - - */}

                {/* Open mobile menu on mobile */}
                <div className="sm:w-10 xxs:w-7 md:hidden xxs:block">
                    {/* hamburger menu icon */}
                    <Link href="#" aria-label="open mobile menu icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" className={`bi bi-list svg ${isOpen ? "hidden" : "block"} `} onClick={toggleMobileMenu} viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </Link>
                    {/* x icon */}
                    <Link href="#" aria-label="close mobile menu icon">
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
                    <Link href="/"><Image src={logo} alt="entwine logo" className="logoImage" loading="eager" onClick={()=> handleNavLinkClick('/')}/></Link>
                </div>
                {/* a "div block" to add more spacing between */}
                <div className="xl:block 2xl:w-100 xl:w-50  xxs:hidden"></div>
                {/* Menu Naivation Links */}
                <div className={`md:block xxs:hidden ${isOpen ? "mobile-menu-view h-screen" : ""}`}>
                    <p  className={`font-body ${isOpen ? "" : "hidden"}`}>MENU</p>
                    <div className="space-x-3 lg:text-xl md:text-sm font-light">
                        <Link href="/team"><button className="primary-btn" onClick={() => handleNavLinkClick('team')}>team</button></Link>
                        <Link href="/volunteer"><button className="primary-btn" onClick={() => handleNavLinkClick('volunteer')}>volunteer</button></Link>
                        <Link href="/waitlist"><button className="primary-btn" onClick={() => handleNavLinkClick('waitlist')}>waitlist</button></Link>
                        <Link href="/platform"><button className="secondary-btn" onClick={() => handleNavLinkClick('platform')}>platform</button></Link>
                        {/* <Link href="#"><button className="secondary-btn">donate</button></Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}