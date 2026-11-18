"use client";
import Image from "next/image";
import { useState } from "react";
import Nattasha from '../../assets/jpeg/Nattasha-Kelvin.jpg';
import David from '../../assets/jpeg/David-Simpson.jpg';
import Madeleine from '../../assets/jpeg/Madeleine-Grant.jpg';
import Instagram from '../../assets/svg/instagram.svg';
import Facebook from '../../assets/svg/facebook.svg';
import Twitter from '../../assets/svg/twitter.svg';
export default function PeopleGrid() {
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState('');
    const handleMove = () => setVisible(true);
    const handleLeave = () => { setVisible(false); setId(''); };
    return (<div className="grid-content-4">
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image1')}>
                        {visible && id === 'image1' ? (<>
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
                            </>) : (<>
                                <Image src={Nattasha} alt="Nattasha"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Nattasha Kelvin</h3>
                                    <p className="font-light text-xs pt-1">Managing Director</p>
                                </div>
                            </>)}
                    </div>
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image2')}>
                        {visible && id === 'image2' ? (<>
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
                            </>) : (<>
                                <Image src={David} alt="David"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">David Simpson</h3>
                                    <p className="font-light text-xs pt-1">Designer</p>
                                </div>
                            </>)}
                    </div>
                    <div onMouseEnter={handleMove} onMouseLeave={handleLeave} onMouseMove={() => setId('image3')}>
                        {visible && id === 'image3' ? (<>
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
                            </>) : (<>
                                <Image src={Madeleine} alt="Madeleine"/>
                                <div className="box-people">
                                    <h3 className="font-bold text-1xl">Madeleine Grant</h3>
                                    <p className="font-light text-xs pt-1">Marketing Specialist</p>
                                </div>
                            </>)}
                    </div>
                </div>);
}
