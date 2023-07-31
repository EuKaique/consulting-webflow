"use client";

import Image from "next/image";

import { useState } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import ImageTeam from '../../assets/png/team/ImageTeam.png';

import Nattasha from '../../assets/jpeg/Nattasha-Kelvin.jpg';
import David from '../../assets/jpeg/David-Simpson.jpg';
import Madeleine from '../../assets/jpeg/Madeleine-Grant.jpg';
import Jonathan from '../../assets/jpeg/Jonathan-Coleman.jpg';
import Wanda from '../../assets/jpeg/Wanda-Forsyth.jpg';
import Austin from '../../assets/jpeg/Austin-Randall.jpg';

import Instagram from '../../assets/svg/instagram.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Twitter from '../../assets/svg/twitter.svg';

import TeamImage from '../../assets/png/team/Team.png';

import CircleImage from '../../assets/svg/icons/year_team_circle.svg';

import './style.css';

export default function Team(){
    const [visible, setVisible] = useState(false)
    const [id, setId]           = useState('')

    const handleMove = () => {
        setVisible(true)
    }

    const handleLeave = () => {
        setVisible(false)
        setId('')
    }

    return (
        <>
            <Header />
            <Hero 
                page="Our Team"
                title="Meet Our Experts"
                text={false}
                height="71.8%"
                width="49.5%"
                image={ImageTeam}
            />
            <section className="grid-content pt-16 pb-24">
                <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image1')}>
                    {visible && id === 'image1' ? (
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
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image2')}>
                        {visible && id === 'image2' ? (
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
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image3')}>
                        {visible && id === 'image3' ? (
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
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image4')}>
                        {visible && id === 'image4' ? (
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
                                    <Image src={Jonathan} alt="Jonathan"/>
                                </div>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Jonathan Coleman</h3>
                                    <p className="font-light text-xs pt-1">Managing Director</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={Jonathan} alt="Jonathan"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Jonathan Coleman</h3>
                                    <p className="font-light text-xs pt-1">Managing Director</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image5')}>
                        {visible && id === 'image5' ? (
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
                                    <Image src={Wanda} alt="Wanda"/>
                                </div>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Wanda Forsyth</h3>
                                    <p className="font-light text-xs pt-1">Designer</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={Wanda} alt="Wanda"/>
                                <div className="box-people">
                                <h3 className="font-bold text-1xl">Wanda Forsyth</h3>
                                    <p className="font-light text-xs pt-1">Designer</p>
                                </div>
                            </>
                        )}
                    </div>
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image6')}>
                        {visible && id === 'image6' ? (
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
                                    <Image src={Austin} alt="Austin"/>
                                </div>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Austin Grant</h3>
                                    <p className="font-light text-xs pt-1">Marketing Specialist</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <Image src={Austin} alt="Austin"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Austin Grant</h3>
                                    <p className="font-light text-xs pt-1">Marketing Specialist</p>
                                </div>
                            </>
                        )}
                    </div>
            </section>
            <section className="grid-content-2 pt-16">
                <div className="bg-dark text-white">
                    <div className="py-6 px-4">
                        <h6 className="text-sm">🟩 Dedicated Team</h6>
                        <h3 className="py-2 text-lg font-bold">Professional Individuals</h3>
                        <p className="text-xs font-light w-11/12 pb-8">Leverage agile frameworks to provided  a synopsis for high overviews thinking overall proposition. </p>
                        <div className="flex items-center">
                            <div>
                                <Image src={CircleImage} alt="Year Team"/>
                            </div>
                            <div className="pl-4">
                                <h2 className="font-semibold text-2xl percent-class">75%</h2>
                                <h4 className="text-sm">Income Statement</h4>
                                <p className="text-xs pt-1 font-light">Leverage agile frameworks to provide a robust proposition. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={TeamImage} alt="Team" />
                </div>
            </section>
            <Footer />
        </>
    )
}