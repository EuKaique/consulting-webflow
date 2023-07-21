"use client"

import Image from "next/image";
import dynamic from "next/dynamic";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import HeroImage from '../../assets/jpeg/HeroAbout.jpg';
import Peoples from '../../assets/png/aboutUs/peoples.png';
import RightIcon from '../../assets/svg/icons/right.svg';

import DateIcon from '../../assets/svg/icons/date.svg';
import PuzzleIcon from '../../assets/svg/icons/puzzle.svg';
import ShieldIcon from '../../assets/svg/icons/shield.svg';

import BagIcon from '../../assets/svg/icons/bag.svg';
import HandsIcon from '../../assets/svg/icons/hands.svg';
import CodeIcon from '../../assets/svg/icons/code.svg';
import PeopleIcon from '../../assets/svg/icons/people.svg';

import Nattasha from '../../assets/jpeg/Nattasha-Kelvin.jpg';
import David from '../../assets/jpeg/David-Simpson.jpg';
import Madeleine from '../../assets/jpeg/Madeleine-Grant.jpg';

import Instagram from '../../assets/svg/instagram.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Twitter from '../../assets/svg/twitter.svg';

import './style.css';
import { useState } from "react";

const AboutUs = () => {
    const [visible, setVisible] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [visible3, setVisible3] = useState(false)

    const Play = dynamic(
        () => import('../../components/ButtonPlay'),
        { ssr: false }
    )

    const handleMove = () => {
        setVisible(true)
    }

    const handleMove2 = () => {
        setVisible2(true)
    }

    const handleMove3 = () => {
        setVisible3(true)
    }

    const handleLeave = () => {
        setVisible(false)
    }

    const handleLeave2 = () => {
        setVisible2(false)
    }

    const handleLeave3 = () => {
        setVisible3(false)
    }
    
    return (
        <>
            <Header />
            <Hero 
                page="About Us" 
                title="Know About Us" 
                height="49.8%"
                image={HeroImage} 
            />
            <section className="grid-content-1">
                <aside className="bg-slate-200">
                    <div className="px-24 py-16">
                        <Image src={Peoples} alt="Peoples"/>
                        <h3 className="text-3xl font-semibold py-3">We're Ready To Grow Your Business With Us</h3>
                        <p className="pr-5 text-slate-500 mb-4">Leverage agile frameworjs to provide a robust synopsis for high level overviews, thinking to further the overall value proposition.</p>
                        <span className="font-semibold underline-offset-2 border-b-2 border-black">Get in Touch</span>
                    </div>
                </aside>
                <div className="px-12 pt-16">
                    <h6 className="font-semibold pb-2">🟩 Welcome Whitecollar</h6>
                    <h2 className="text-3xl font-bold w-3/5 pb-4 pt-2 text-gray-900">We Care About Your Business Plan.</h2>
                    <p className="text-gray-500 text-gray-500 w-11/12">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.</p>
                    <br />
                    <p className="text-gray-500">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy </p>
                    <div className="border-2 my-8 py-4 px-4 hover:border-purple-400 transition duration-150 ease-out">
                        <div className="flex">
                            <Image src={RightIcon} alt="Our Vision" /><h4 className="font-semibold text-lg ml-2 text-gray-900"> Our Vision</h4>
                        </div>
                        <p className="text-gray-400 text-sm pl-9 w-3/4 py-4">Capitalize on low hanging fruit to identify a ballpark value added activity to beta clickthroughs.</p>
                    </div>
                    <div className="border-2 py-4 px-4 hover:border-purple-400 transition duration-150 ease-out">
                        <div className="flex">
                            <Image src={RightIcon} alt="Our Mision" /><h4 className="font-semibold text-lg ml-2 text-gray-900"> Our Mision</h4>
                        </div>
                        <p className="text-gray-400 text-sm pl-9 w-3/4 py-4">Podcasting operational change management inside of workflows to establish a framework.</p>
                    </div>
                    <button className="btn">More About Us</button>
                </div>
            </section>
            <section>
                <h6 className="font-normal pb-2 pt-24 text-center">🟩 Work Process</h6>
                <h2 className="text-3xl font-bold text-center text-slate-800 pb-16">How We Work</h2>
                <div className="grid-content-2">
                    <div>
                        <div className="circle-green">
                            <Image src={DateIcon} alt="Calendary"/>
                        </div>
                        <h4 className="text-center font-semibold py-4">Make Appointment</h4>
                        <p className="text-center px-2 text-xs font-normal text-slate-500">Leverage agile frameworks providesynopsishigh level overviewsvalue proposition.</p>
                        <p className="text-center pt-4 text-sm font-semibold text-purple-700">Testimonials</p>
                    </div>
                    <div>
                        <div className="circle-purple">
                            <Image src={PuzzleIcon} alt="Puzzle"/>
                        </div>
                        <h4 className="text-center font-semibold py-4">Consultation</h4>
                        <p className="text-center px-2 text-xs font-normal text-slate-500">Leverage agile frameworks providesynopsishigh level overviewsvalue proposition.</p>
                        <p className="text-center pt-4 text-sm font-semibold text-purple-700">Testimonials</p>
                    </div>
                    <div>
                        <div className="circle-green">
                            <Image src={ShieldIcon} alt="Shield"/>
                        </div>
                        <h4 className="text-center font-semibold py-4">Enjoy the Service</h4>
                        <p className="text-center px-2 text-xs font-normal text-slate-500">Leverage agile frameworks providesynopsishigh level overviewsvalue proposition.</p>
                        <p className="text-center pt-4 text-sm font-semibold text-purple-700">Testimonials</p>
                    </div>
                </div>
            </section>
            <section className="grid-content-3">
                <div className="box">
                    <div className="circle-white">
                        <Image src={BagIcon} alt="Bag"/>
                    </div>
                    <h3 className="text-center py-4 text-xl font-semibold text-green-500">10+</h3>
                    <h5 className="font-semibold text-sm text-center pb-3">Years Of Experience</h5>
                    <p className="text-xs text-slate-600 text-center">Synopsishigh level overviews value proposition.</p>
                </div>
                <div className="box">
                    <div className="circle-purple-2">
                        <Image src={HandsIcon} alt="Hands"/>
                    </div>
                    <h3 className="text-center py-4 text-xl font-semibold text-green-500">5960</h3>
                    <h5 className="font-semibold text-sm text-center pb-3">Satisfied Clients</h5>
                    <p className="text-xs text-slate-600 text-center">Synopsishigh level overviews value proposition.</p>
                </div>
                <div className="box">
                    <div className="circle-white">
                        <Image src={CodeIcon} alt="Code"/>
                    </div>
                    <h3 className="text-center py-4 text-xl font-semibold text-green-500">50k</h3>
                    <h5 className="font-semibold text-sm text-center pb-3">IT Problems Solved</h5>
                    <p className="text-xs text-slate-600 text-center">Synopsishigh level overviews value proposition.</p>
                </div>
                <div className="box">
                    <div className="circle-white">
                        <Image src={PeopleIcon} alt="People"/>
                    </div>
                    <h3 className="text-center py-4 text-xl font-semibold text-green-500">25+</h3>
                    <h5 className="font-semibold text-sm text-center pb-3">Pro Team Members</h5>
                    <p className="text-xs text-slate-600 text-center">Synopsishigh level overviews value proposition.</p>
                </div>
            </section>
            <section className="bg-emerald-500 video-class">
                <h6 className="font-normal pb-2 pt-8 text-center">🟪 Short Video</h6>
                <h2 className="text-center font-semibold text-3xl">Our Presentation</h2>
                <p className="text-center pt-12 font-light padding-x">Collaboratively administrate channels whereas virtual tailers predominate procedures reliable supply chains.</p>
                <div>
                    <Play />
                </div>
            </section>
            <section>
                <h6 className="font-normal pb-2 pt-8 text-center">🟩 Our Team</h6>
                <h2 className="text-center font-bold text-3xl">Meet Our Experts</h2>
                <div className="grid-content-4">
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave}>
                        {visible ? (
                            <>
                                    <ul className="socials">
                                        <div>
                                            <li>
                                                <Image src={Instagram} alt="Instagram"/>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Image src={Facebook} alt="Facebook"/>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Image src={Twitter} alt="Twitter"/>
                                            </li>
                                        </div>
                                    </ul>
                                <div className="purple-bg">
                                    <Image src={Nattasha} alt="Nattasha"/>
                                </div>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Nattasha Kelvin</h3>
                                    <p className="font-light text-xs pt-1">Managing Director</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={Nattasha} alt="Nattasha"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Nattasha Kelvin</h3>
                                    <p className="font-light text-xs pt-1">Managing Director</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div onMouseEnter={handleMove2} onMouseLeave={handleLeave2}>
                        {visible2 ? (
                            <>
                                    <ul className="socials">
                                        <div>
                                            <li>
                                                <Image src={Instagram} alt="Instagram"/>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Image src={Facebook} alt="Facebook"/>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Image src={Twitter} alt="Twitter"/>
                                            </li>
                                        </div>
                                    </ul>
                                <div className="purple-bg">
                                    <Image src={David} alt="David"/>
                                </div>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">David Simpson</h3>
                                    <p className="font-light text-xs pt-1">Designer</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={David} alt="David"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">David Simpson</h3>
                                    <p className="font-light text-xs pt-1">Designer</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div onMouseEnter={handleMove3} onMouseLeave={handleLeave3}>
                        {visible3 ? (
                            <>
                                    <ul className="socials">
                                        <div>
                                            <li>
                                                <Image src={Instagram} alt="Instagram"/>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Image src={Facebook} alt="Facebook"/>
                                            </li>
                                        </div>
                                        <div>
                                            <li>
                                                <Image src={Twitter} alt="Twitter"/>
                                            </li>
                                        </div>
                                    </ul>
                                <div className="purple-bg">
                                    <Image src={Madeleine} alt="Madeleine"/>
                                </div>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Madeleine Grant</h3>
                                    <p className="font-light text-xs pt-1">Marketing Specialist</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={Madeleine} alt="Madeleine"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Madeleine Grant</h3>
                                    <p className="font-light text-xs pt-1">Marketing Specialist</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AboutUs