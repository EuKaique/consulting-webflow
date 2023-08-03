"use client"

import Phone from '../../assets/png/footer/phone.png'
import Mail from '../../assets/png/footer/mail.png'
import Location from '../../assets/png/footer/localization.png'
import Logo from '../../assets/png/footer/logo.png'

import Instagram from '../../assets/svg/instagram.svg'
import Facebook from '../../assets/svg/facebook.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Pinterest from '../../assets/svg/pinterest.svg'

import Image from 'next/image'

import './style.css'

export const Footer = () => {

    return (
        <footer className="bg-slate-900">
            <div className="padding-class">
                <div className="flex justify-between border-b border-slate-300 w-full pb-6 footer-class-1">
                    <div>
                        <Image src={Logo} alt="Logo"/>
                    </div>
                    <ul className="flex text-white">
                        <li>
                            <div className='flex mr-12'>
                                <div className="flex border-radius-50 bg-slate-800 px-4 py-3">
                                    <Image src={Phone} alt="Phone" width="20"/>
                                </div>
                                <div className="flex items-start flex-col pt-1 ml-2">
                                    <h4 className="text-base">Call Us</h4>
                                    <p className='text-xs font-light text-slate-300'>+01 569 896 654</p>
                                </div>
                            </div>                     
                        </li>
                        <li>
                            <div className='flex mr-12'>
                                <div className="flex border-radius-50 bg-slate-800 px-4 py-4 ml-2">
                                    <Image src={Mail} alt="Mail" width="20"/>
                                </div>
                                <div className="flex items-start flex-col pt-1 ml-2">
                                    <h4 className="text-base">Mail Us</h4>
                                    <p className='text-xs font-light text-slate-300'>info@example.com</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex'>
                                <div className="flex border-radius-50 bg-slate-800 px-4 py-3 ml-2">
                                    <Image src={Location} alt="Map" width="14"/>
                                </div>
                                <div className="flex items-start flex-col pt-1 ml-2">
                                    <h4 className="text-base">Location</h4>
                                    <p className='text-xs font-light text-slate-300'>Amsterdam, 109-74</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="pt-6 flex-class-1 border-b pb-6">
                    <ul className="w-full ul-class">
                        <div className='flex flex-class'>
                            <div>
                                <li className="title-link">
                                    🟪 Quick Link
                                </li>
                                <li className="mt-3 text-white font-light li-hover leading-relaxed">
                                    <a href="/">Home</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/about-us">About Us</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/blog">Blog</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/our-services">Services</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/contact-us">Contact</a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span>🟪</span><span className="title-link">Our Services</span>
                                </li>
                                <li className="mt-3 text-white font-light li-hover leading-relaxed">
                                    <a href="/">Financial Consulting</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/single">Bussiness Management</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/">Consult & Programs</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/">Company Management</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/">Insurance & Finance</a>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <span>🟪</span><span className="title-link">Utility Page</span>
                                </li>
                                <li className="mt-3 text-white font-light li-hover leading-relaxed">
                                    <a href="/">Style Guide</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/licenses">Licenses</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/">Instructions</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/">Changelog</a>
                                </li>
                                <li className="text-white font-light li-hover leading-relaxed">
                                    <a href="/not-found">404 Page</a>
                                </li>
                            </div>

                        </div>
                    </ul>
                    <div className="text-white box-grey bg-slate-800">
                        <h3>Subscribe</h3>
                        <p className="font-light text-sm">Join Our Mailing List & to get our news.</p>
                        <div className='flex pt-3'>
                            <input type="text" placeholder='your email address' className="px-2 py-1 text-sm text-black outline-none"/>
                            <button className="btn-footer">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="copy-class">
                    <div>
                        <span>Copyright &copy; <em className="text-teal-400">WhiteCollar</em> | Designed by <em className="text-purple-400">VictorFlow</em> Templates - Powered by Webflow</span>
                    </div>
                    <div>
                        <ul className="flex">
                            <li className="text-white ml-2 socials-footer">
                                <a href="/">
                                    <Image src={Instagram} alt="Instagram"/>
                                </a>
                            </li>
                            <li className="socials-footer">
                                <a href="/">
                                    <Image src={Facebook} alt="Facebook"/>
                                </a>
                            </li>
                            <li className="socials-footer">
                                <a href="/">
                                    <Image src={Twitter} alt="Twitter"/>
                                </a>
                            </li>
                            <li className="socials-footer">
                                <a href="/">
                                    <Image src={Pinterest} alt="Pinterest"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}