import Image from "next/image"

import InstagramIcon from "../../assets/svg/instagram.svg"
import FacebookIcon from "../../assets/svg/facebook.svg"
import TwitterIcon from "../../assets/svg/twitter.svg"
import PinterestIcon from "../../assets/svg/pinterest.svg"

import LocalPng from '../../assets/png/localization.png'
import MailPng from '../../assets/png/mail.png'
import ClockPng from '../../assets/png/clock.png'

import Logo from '../../assets/png/logo.png'

export const Header = () => {
    return (
        <header>
            <div className="bg-slate-800 h-12 text-white">
                <div className="flex justify-evenly">
                    <div>
                        <ul className="flex py-4">
                            <li className="flex items-center">
                                <i><Image src={LocalPng} alt="localização" height="20" width="20" style={{ filter: "invert(100%)"}} /></i>
                                <span className="text-xs font-light"> 24 Olive Street, Prairie, NY 53590</span>
                            </li>
                            <li className="flex items-center pl-6">
                                <i className="pr-1"><Image src={MailPng} alt="E-mail" height="20" width="20" style={{ filter: "invert(100%)"}} /></i> 
                                <span className="text-xs font-light">whitecollar@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex py-4">
                            <li className="flex items-center">
                                <i><Image src={ClockPng} alt="Horário de atendimento" height="20" width="20" style={{ filter: "invert(100%)"}} /></i>
                                <span className="text-xs font-light pl-1"> Mon - Fri: 8:00am - 5:00pm</span>
                            </li>
                            <ul className="flex items-center pl-6">
                                <li><Image src={InstagramIcon} height="20" width="20" alt="Instagram" style={{ filter: "invert(100%)", marginRight: '0.2rem'}} /></li>
                                <li><Image src={FacebookIcon} height="20" width="20" alt="Facebook" style={{ filter: "invert(100%)", marginRight: '0.2rem'}} /></li>
                                <li><Image src={TwitterIcon} height="20" width="20" alt="Twitter" style={{ filter: "invert(100%)", marginRight: '0.2rem'}} /></li>
                                <li><Image src={PinterestIcon} height="20" width="20" alt="Pinterest" style={{ filter: "invert(100%)", marginRight: '0.2rem'}} /></li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white h-28">
                <nav className="flex justify-evenly py-8 px-12">
                    <div>
                        <Image src={Logo} alt="Logo" />
                    </div>
                    <ul className="flex items-center">
                        <li className="text-sm pr-4 hover:opacity-30 cursor-pointer">Home</li>
                        <li className="text-sm pr-4 hover:opacity-30 cursor-pointer">About Us</li>
                        <li className="text-sm pr-4 hover:opacity-30 cursor-pointer">Pages</li>
                        <li className="text-sm pr-4 hover:opacity-30 cursor-pointer">Services</li>
                        <li className="text-sm pr-4 hover:opacity-30 cursor-pointer">Blog</li>
                        <li className="text-sm pr-4 hover:opacity-30 cursor-pointer">Contact Us</li>
                        <li className="text-sm bg-indigo-600 p-3 hover:opacity-60 cursor-pointer">
                            <button style={{ color: '#FFF'}}>Get Consulting</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}