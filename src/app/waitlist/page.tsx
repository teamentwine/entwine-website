'use client'
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import posthog from "posthog-js"

export default function Waitlist () {

    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState('')
    const [orgnizationName, setOrganizationName] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')

    const [isPhoneValid, setIsPhoneValid] = useState(true)

    const timeoutRef = useRef(null);


    useEffect(() => {
        posthog.capture('waitlist_page_viewed');
    }, []);

    const handleFormSubmit = () => {

        posthog.capture('waitlist_form_submitted', {
            form_name: 'waitlist_form',
            email : email,
            firstName :firstName,
            lastName : lastName,
            message : message,
            orgnizationName : orgnizationName,
            phone : phone,
            subject : subject
        });
    };

    const handleEmailClick = () => {
        posthog.capture('email_link_clicked');
    };

    useEffect(()=>{
        if(phone !== ""){
            timeoutRef.current = setTimeout(()=>{
                const phoneRegex = /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?[-.\s]?)?(\d[-.\s]?){6,9}\d$/g
                const regexResult = phoneRegex.test(phone)
                if(regexResult){
                    setIsPhoneValid(true)
                }else{
                    setIsPhoneValid(false)
                }
            },500)
            return () => clearTimeout(timeoutRef.current)
        }
    },[phone])

    return(
        <section id="waitlist_page" className="flex flex-col">
                {/* Call to action */}
                <div className="flex flex-col items-center xxs:mx-5 xs:mx-8 sm:mx-15 2xl:mx-20 xxs:mt-10 sm:mt-20 xl:mt-30 xxs:space-y-5 md:space-y-10 2xl:space-y-20 ">
                    <p className="font-body text-secondary-base xxs:text-base sm:text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">JOIN THE</p>
                    <p className="font-body xxs:text-2xl xs:text-3xl sm:text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black">WAITLIST<span className="text-secondary-base">!</span></p>
                    <p className="font-body xxs:text-xs sm:text-base lg:text-lg 2xl:text-3xl text-center">If you're a non-profit interested in our mission or want to hear more about the vision, please fill out our interest form or email us at <Link href="#" onClick={handleEmailClick}><span className="underline">info@entwine.org</span>.</Link> We'd love to hear any feedback or ideas we can. Thank you!</p>
                </div>
                {/* Form */}
                <form action="#" onSubmit={handleFormSubmit} className="xxs:w-3/4 2xl:w-5xl flex flex-col mx-auto xxs:my-10 md:my-15 lg:my-20 xl:my-25 2xl:my-30 space-y-5 ">
                    {/* Error Message (if any)*/}
                    { !isPhoneValid && <p className="text-center text-red-600">* Please enter a valid phone number</p>}
                    {/* organization name */}
                    <input type="text" id="orgnizationName" placeholder="* Organization" className="form-input" value={orgnizationName} onChange={(e)=>setOrganizationName(e.target.value)} required/>
                    <div className="flex xxs:space-y-5 md:space-y-0 md:space-x-5 xxs:flex-col md:flex-row">
                        {/* first name */}
                        <input type="text" id="firstName" placeholder="* First Name" className="form-input" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required/>
                        {/* last name*/}
                        <input type="form-input" id="lastName" placeholder="* Last Name" className="form-input" value={lastName} onChange={(e)=>setLastName(e.target.value)} required/>
                    </div>
                    <div className="flex xxs:space-y-5 md:space-y-0 md:space-x-5 xxs:flex-col md:flex-row">
                        {/* email */}
                        <input type="email" id="email" placeholder="* Email" className=" form-input" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        {/* phone */}
                        <input type="text" id="phone" placeholder="* Phone Number" className="form-input" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </div>
                    {/* subject line */}
                    <input type="text" id="subject" placeholder="* Subject" className="form-input" value={subject} onChange={(e)=>setSubject(e.target.value)} required/>
                    {/* message */}
                    <textarea type="textarea" rows="5" id="message" className="form-input" placeholder="* Message" value={message} onChange={(e)=> setMessage(e.target.value)} required/>
                    {/* Submit button */}
                    <button type="submit" className="font-body bg-secondary-base-3 xxs:w-1/5 sm:w-1/4 lg:w-1/3 xl:w-1/2 rounded-2xl py-2 self-center border-2 border-dark-border drop-shadow-secondary font-bold cursor-pointer mt-5 xxs:text-sm">SUBMIT</button>
                </form>
        </section>
    )
}