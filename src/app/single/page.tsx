"use client";

import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import SingleImage from '../../assets/png/single/Single.png';

import DocumentPdf from '../../assets/svg/icons/document_pdf.svg';
import DocumentZip from '../../assets/svg/icons/document_zip.svg';

import SingleBox from '../../assets/png/single/SingleBox.jpg';

import RightIcon from '../../assets/svg/icons/right.svg';

import SingleOffice from '../../assets/png/single/SingleOffice.png';

import './style.css';
import { useRouter } from "next/navigation";

export default function Single(){
    const router = useRouter();

    return (
        <>
            <Header router={router}/>
            <Hero 
                page="About The Services"
                title="Business Management"
                text={true}
                height="71.8%"
                image={SingleImage}
            />
            <section className="grid-content">
                <div>
                    <div className="box-gray">
                        <h3 className="font-semibold text-lg pl-2 pb-4">Services</h3>
                        <ul>
                            <li className="flex justify-between px-2 py-4 active">
                                <div>Financial Consuntancy</div>
                                <div className="text-grey-400">&#10095;</div>
                            </li>
                            <li className="flex justify-between px-2 py-2">
                                <div>Business Management</div>
                                <div className="text-grey-400">&#10095;</div>
                            </li>
                            <li className="flex justify-between px-2 py-2">
                                <div>Consultancy Program</div>
                                <div className="text-grey-400">&#10095;</div>
                            </li>
                            <li className="flex justify-between px-2 py-2">
                                <div>Marketing Consultancy</div>
                                <div className="text-grey-400">&#10095;</div>
                            </li>
                            <li className="flex justify-between px-2 py-2">
                                <div>Financial Insurance & Jobs</div>
                                <div className="text-grey-400">&#10095;</div>
                            </li>
                            <li className="flex justify-between px-2 py-2">
                                <div>Bank Management</div>
                                <div className="text-grey-400">&#10095;</div>
                            </li>
                        </ul>
                    </div>
                    <div className="box-gray">
                        <h3 className="font-semibold text-lg pl-2 pb-4 border-bottom">Download</h3>
                        <p className="text-gray-500 py-4 text-sm w-11/12">One-to-one customer service with robust deliverables.</p>
                        <div className="pb-4">
                            <button className="btn"><Image src={DocumentPdf} alt="Document"/> Document.pdf</button>
                        </div>
                        <div className="flex">
                            <button className="btn"><Image src={DocumentZip} alt="Document"/> Document.zip</button>
                        </div>
                    </div>
                    <div className="box-green">
                        <h6 className="text-sm font-semibold text-center pt-20 pb-8">🟪 Have any question</h6>
                        <h2 className="font-bold text-2xl text-slate-800 text-center">Do you need</h2>
                        <h2 className="font-bold text-2xl text-white text-center">any help?</h2>
                        <p className="text-center pt-2 pb-8 w-8/12 text-sm text-slate-800 mx-auto">Leverage agile frameworks to provide a robust synopsis for high level.</p>
                        <div className="flex justify-center">
                            <button className="btn-2">Contact Us</button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={SingleBox} alt="Single Box"/>
                    <h3 className="pt-4 pb-2 w-9/12 font-bold text-lg text-slate-800">Why Us For International Business  Management Consulting!</h3>
                    <p className="text-gray-500 pb-4 text-xs text-justify leading-relaxed">Completely synergized resourced taxings relationships premiers markets ultivate one-to-one customer service with robust ideas dynamically innovated resources leveling customer service for state of the art  customer service innovate product  for reliable supply engage web services cutting-edge deliverables.</p>
                    <h5 className="text-purple-600 font-semibold pb-2 text-sm">Proactively envisioned multimedia based expertise media growth  superior collaboration.</h5>
                    <p className="text-gray-500 pb-4 text-xs text-justify leading-relaxed">One-to-one customer service with robust ideas dynamically innovated resources for reliable supply engage web services cutting-edge deliverables.</p>
                    <div className="flex pb-4">
                        <div className="mr-4 mt-2">
                            <Image src={SingleOffice} alt="Image" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Our benefits</h3>
                            <h4 className="text-sm pb-4 font-semibold text-cyan-500">Incubate standards compliant channels benefits.</h4>
                            <ul>
                                <li className="flex items-center pb-4">
                                    <Image src={RightIcon} alt="Credibly" style={{ width: 20, marginRight: 5}} /> <small className="text-xs text-gray-700">Credibly reintermediate backend</small>
                                </li>
                                <li className="flex items-center pb-4">
                                    <Image src={RightIcon} alt="Holistically" style={{ width: 20, marginRight: 5}} /> <small className="text-xs text-gray-700">Holistically foster superior</small>
                                </li>
                                <li className="flex items-center pb-4">
                                    <Image src={RightIcon} alt="Distinctively" style={{ width: 20, marginRight: 5}} /> <small className="text-xs text-gray-700">Distinctively exploit optimal</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">Frequently Asked Questions</h3>
                    <p className="text-gray-500 text-xs pt-2 pb-3">Leveling customer service for state of the art  customer service innovate product  for reliable supply engage web services cutting-edge deliverables.</p>
                    <div>
                        <ul>
                            <li className="flex items-center justify-between px-3 py-2 mb-4 border"><div>How does our pricing works ?</div><div className="text-3xl font-light">+</div></li>
                            <li className="flex items-center justify-between px-3 py-2 mb-4 border"><div>Where do I look for “Frequently Asked” Questions?</div><div className="text-3xl font-light">+</div></li>
                            <li className="flex items-center justify-between px-3 py-2 mb-4 border"><div>Which template is the best for business?</div><div className="text-3xl font-light">+</div></li>
                            <li className="flex items-center justify-between px-3 py-2 mb-4 border"><div>Which template is the best for business?</div><div className="text-3xl font-light">+</div></li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}