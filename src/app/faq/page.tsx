"use client";

import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useState } from "react";

import FAQImage from '../../assets/png/faq/FaqImage.png';

import './style.css';

export default function Faq(){
    const [id1, setId1]     = useState(false)
    const [id2, setId2]     = useState(false)
    const [id3, setId3]     = useState(false)

    return(
        <>
            <Hero 
                page="Quick Solution"
                title="Frequently Asked Questions"
                text={false}
                height="71.8%"
                image={FAQImage}
            />
            <ScrollToTop />
            <section className="pb-16 grid-content">
                <div className="box-gray">
                    <h4 className="font-bold pl-5 pb-4 pt-2">Categories</h4>
                    <ul className="pl-4 list-one">
                        <li className="leading-loose active">Main Questions</li>
                        <li className="leading-loose">Common Queries</li>
                        <li className="leading-loose">General Questions</li>
                        <li className="leading-loose">Legal Information</li>
                    </ul>
                </div>
                <div className="box-content">
                    <div onClick={() => setId1(!id1)}>
                        {id1 ?
                            <div className="px-4 py-4 border mb-4 cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <div className="font-semibold text-md">How does our pricing works ?</div>
                                    <div>&#11165;</div>
                                </div>
                                <p className="pt-2 text-xs text-gray-500 leading-relaxed">Objectively innovated empowered manufactured products where as parallel holisticly predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                            </div>
                                               :
                            <div className="flex justify-between items-center px-4 py-4 border mb-4 cursor-pointer">
                                <div className="font-semibold text-md">How does our pricing works ?</div>
                                <div>&#11167;</div>
                            </div>
                        }
                    </div>
                    <div onClick={() => setId2(!id2)}>
                        {id2 ?
                            <div className="px-4 py-4 border mb-4 cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <div className="font-semibold text-md">Do You Offer Volume Or Loyalty Discounts ?</div>
                                    <div>&#11165;</div>
                                </div>
                                <p className="pt-2 text-xs text-gray-500 leading-relaxed">Objectively innovated empowered manufactured products where as parallel holisticly predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                            </div>
                                               :
                            <div className="flex justify-between items-center px-4 py-4 border mb-4 cursor-pointer">
                                <div className="font-semibold text-md">Do You Offer Volume Or Loyalty Discounts ?</div>
                                <div>&#11167;</div>
                            </div>
                        }
                    </div>
                    <div onClick={() => setId3(!id3)}>
                        {id3 ?
                            <div className="px-4 py-4 border mb-4 cursor-pointer">
                                <div className="flex justify-between items-center">
                                    <div className="font-semibold text-md">What Types Of Companies Do You Work With ?</div>
                                    <div>&#11165;</div>
                                </div>
                                <p className="pt-2 text-xs text-gray-500 leading-relaxed">Objectively innovated empowered manufactured products where as parallel holisticly predominat extensible testing procedures reliable supply chains dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                            </div>
                                               :
                            <div className="flex justify-between items-center px-4 py-4 border mb-4 cursor-pointer">
                                <div className="font-semibold text-md">What Types Of Companies Do You Work With ?</div>
                                <div>&#11167;</div>
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}