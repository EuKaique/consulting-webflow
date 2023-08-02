"use client";

import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import ContactImage from '../../assets/png/contactUs/ContactImage.png';

import ContactPerson from '../../assets/jpeg/ContactPerson.jpg';

import PhoneIcon from '../../assets/svg/icons/phone_icon.svg';
import MailIcon from '../../assets/svg/icons/mail_icon.svg';
import MapIcon from '../../assets/svg/icons/map_icon.svg';

import './style.css';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ContactUs(){
    const router = useRouter();

    useEffect(() => {
        router.push('/contact-us');
    }, []);

    const handleSubmit = () => {
        alert('Mensagem enviada com sucesso!')
    }

    return (
        <>
            <Header router={router}/>
            <Hero 
                page="Contact Us"
                title="Feel Free Reach Us"
                text={false}
                image={ContactImage}
                height="71.8%"
            />
            <section className="grid-content">
                <div>
                    <Image src={ContactPerson} alt="Contact Person" />
                </div>
                <div className="pl-8">
                    <h4 className="font-semibold">🟩 Let's Talk</h4>
                    <h2 className="text-3xl py-2 font-bold">Get in touch with us</h2>
                    <p className="text-xs text-gray-500 pb-20 p-class">Completely synergize resource taxing relationships via premier niche ynamically innovate state of the art customer service.</p>
                    <div className="flex items-center pb-4 div-class">
                        <div className="border-radius">
                            <Image src={PhoneIcon} alt="Phone" />
                        </div>
                        <div className="pl-4 info-class">
                            <h6 className="text-xs font-light text-gray-400">Have any question?</h6>
                            <h5 className="text-sm font-semibold">Free +01 569 896 654</h5>
                        </div>
                    </div>
                    <div className="flex items-center pb-4 div-class">
                        <div className="border-radius">
                            <Image src={MailIcon} alt="Mail" />
                        </div>
                        <div className="pl-4 info-class">
                            <h6 className="text-xs font-light text-gray-400">White email</h6>
                            <h5 className="text-sm font-semibold">info@whitecollar.com</h5>
                        </div>
                    </div>
                    <div className="flex items-center div-class">
                        <div className="border-radius">
                            <Image src={MapIcon} alt="Map" style={{ width: '0.9rem'}}/>
                        </div>
                        <div className="pl-4 info-class">
                            <h6 className="text-xs font-light text-gray-400">Visit anytime</h6>
                            <h5 className="text-sm font-semibold">King Street, Prior Lake, New York</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h4 className="font-semibold text-center page-class">🟩 Contact Us</h4>
                <h2 className="text-3xl py-2 font-bold text-center">Request A Call Back !</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-between">
                        <input className="textfield" type="text" name="name" id="name" placeholder="Your name" required/>
                        <input className="textfield" type="email" name="email" id="email" placeholder="E-mail address" required/>
                    </div>
                    <div className="flex justify-between">
                        <input className="textfield" type="text" name="phone" id="phone" placeholder="Phone number" required/>
                        <input className="textfield" type="text" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                    <div className="w-full">
                        <textarea name="message" id="message" placeholder="Message..."></textarea>
                    </div>
                    <div className="flex justify-center pt-6">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}