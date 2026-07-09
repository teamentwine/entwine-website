'use client'
import { useEffect, useRef, useState } from "react"
import posthog from "posthog-js"

export default function Waitlist () {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [orgnizationName, setOrganizationName] = useState('')
    const [aboutOrg, setAboutOrg] = useState('')

    const [isEmailValidFormat, setIsEmailValidFormat] = useState(true)
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
    const [submitError, setSubmitError] = useState('')
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const companyHoneypotRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        posthog.capture('waitlist_page_viewed');
    }, []);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isEmailValidFormat) return

        posthog.capture('waitlist_form_submitted', {
            form_name: 'waitlist_form',
            firstName: firstName,
            lastName: lastName,
            email: email,
            linkedin: linkedin,
            orgnizationName: orgnizationName,
        });

        setStatus('submitting')
        setSubmitError('')

        try {
            const res = await fetch('/api/submit-form', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    formType: 'waitlist',
                    firstName,
                    lastName,
                    email,
                    linkedin,
                    organization: orgnizationName,
                    aboutOrg,
                    company: companyHoneypotRef.current?.value ?? '',
                }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong. Please try again.')
            }

            setStatus('success')
            setFirstName('')
            setLastName('')
            setEmail('')
            setLinkedin('')
            setOrganizationName('')
            setAboutOrg('')
        } catch (err) {
            setStatus('error')
            setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
        }
    };

    const handleEmailClick = () => {
        posthog.capture('email_link_clicked');
    };

    const handlePhoneClick = () => {
        posthog.capture('phone_link_clicked');
    };

    useEffect(()=>{
        if(email !== ""){
            timeoutRef.current =  setTimeout(()=>{
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
                const regexResult = emailRegex.test(email);
                if(regexResult){
                  setIsEmailValidFormat(true)
                }else{
                  setIsEmailValidFormat(false)
                }
            },500)
            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current)
                    timeoutRef.current = null
                }
            }
        }
      }, [email])

    return(
        <main className="bg-white overflow-x-hidden">
            {/* Title */}
            <section className="py-16 md:py-24 px-4">
                <div className="flex flex-col sm:flex-row md:flex-col gap-6 sm:gap-4 md:gap-8 max-w-6xl mx-auto">
                    <div className="text-center sm:text-left md:text-center lg:text-center flex-shrink min-w-0">
                        <h1 className="heading-eyebrow">
                            JOIN THE
                        </h1>
                        <h2 className="heading-display">
                            WAITLIST<span className="text-brand-orange-text">!</span>
                        </h2>
                        <p className="max-w-2xl md:mx-auto text-ink/80 text-sm md:text-base lg:text-lg">
                            If you&apos;re a non-profit interested in our mission or want to hear more about the
                            vision, please fill out our interest form below. We&apos;d love to hear any feedback or
                            ideas you can share. Thank you!
                        </p>
                    </div>

                    {/* Contact Box - small screen */}
                    <div className="card-outline md:hidden flex-shrink-0 w-full max-w-xs mx-auto sm:mx-0 sm:w-48 sm:self-start lg:w-56 p-4 sm:p-6 text-center">
                        <h3 className="text-lg sm:text-xl font-bold mb-3">Contact Us</h3>
                        <p className="text-xs sm:text-xs mb-1">
                            Phone: <a href="tel:+12523689463" onClick={handlePhoneClick} className="hover:underline">+1 (252) 368-9463</a>
                        </p>
                        <p className="text-xs sm:text-xs mb-3">
                            Email: <a href="mailto:contact@projectentwine.org" onClick={handleEmailClick} className="hover:underline">contact@projectentwine.org</a>
                        </p>
                        <h4 className="text-lg sm:text-xl font-bold mb-3">Socials</h4>
                        <div className="flex gap-3 text-xl justify-center">
                            <a href="https://www.facebook.com/profile.php?id=61566499317368" target="_blank" rel="noopener noreferrer">
                                <svg className="h-8 w-8" viewBox="0 0 22 22">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/team-entwine/" target="_blank" rel="noopener noreferrer">
                                <svg className="h-8 w-8" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/teamentwine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                <svg className="h-8 w-8" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-24 px-4">
                {/* error / status messages */}
                { !isEmailValidFormat && <p className="text-left text-red-600 max-w-6xl mx-auto mb-5">* Please enter a valid email format</p>}
                { status === 'error' && <p className="text-left text-red-600 max-w-6xl mx-auto mb-5">{submitError}</p>}
                { status === 'success' && <p className="text-left text-green-600 max-w-6xl mx-auto mb-5">Thanks! We received your submission and will be in touch soon.</p>}
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {/* Form */}
                    <form
                        id="waitlist-form"
                        onSubmit={handleFormSubmit}
                        className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* honeypot field - hidden from real users, catches bots */}
                        <input type="text" name="company" ref={companyHoneypotRef} tabIndex={-1} autoComplete="off"
                               className="hidden" aria-hidden="true"/>
                        {/* First Name */}
                        <input className="field-input" placeholder="First Name*" value={firstName} onChange={(e)=> setFirstName(e.target.value)} required/>
                        {/* Last Name */}
                        <input className="field-input" placeholder="Last Name*" value={lastName} onChange={(e)=> setLastName(e.target.value)} required/>
                        {/* Email */}
                        <input type="email" className="field-input" placeholder="Email*" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                        {/* LinkedIn */}
                        <input className="field-input" placeholder="LinkedIn" value={linkedin} onChange={(e)=> setLinkedin(e.target.value)}/>
                        {/* Organization */}
                        <input className="field-input sm:col-span-2" placeholder="Organization" value={orgnizationName} onChange={(e)=> setOrganizationName(e.target.value)}/>
                        {/* About the org */}
                        <textarea className="field-input sm:col-span-2 h-32 resize-none" placeholder="Tell us about your organization" value={aboutOrg} onChange={(e)=> setAboutOrg(e.target.value)}/>
                    </form>

                    {/* Contact Box - medium+ screens */}
                    <div>
                        <div className="card-outline hidden md:block p-8">
                            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                            <p className="text-m mb-4">
                                Phone: <a href="tel:+12523689463" onClick={handlePhoneClick} className="hover:underline">+1 (252) 368-9463</a>
                            </p>
                            <p className="text-m mb-4">
                                Email: <a href="mailto:contact@projectentwine.org" onClick={handleEmailClick} className="hover:underline">contact@projectentwine.org</a>
                            </p>

                            <h4 className="text-2xl font-bold mb-4">Socials</h4>
                            <div className="flex gap-10 text-xl">
                                <a href="https://www.facebook.com/profile.php?id=61566499317368" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-8 w-8" viewBox="0 0 22 22">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/company/team-entwine/" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-8 w-8" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                    </svg>
                                </a>
                                <a href="https://www.instagram.com/teamentwine?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                    <svg className="h-8 w-8" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-end mt-4">
                            {/* Submit button */}
                            <button
                                type="submit"
                                form="waitlist-form"
                                disabled={status === 'submitting'}
                                className="btn-lift w-full sm:w-1/2 md:w-full py-4">
                                {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
