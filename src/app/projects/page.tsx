"use client";

import Image from "next/image";

import { Hero } from "@/components/Hero";

import ProjectsImage from '../../assets/png/projects/ProjectsImage.png';

import FinancialInvestment from '../../assets/png/projects/FinancialInvestment.png';
import MarketingStrategy from '../../assets/png/projects/MarketingStrategy.png';
import BusinessConsulting from '../../assets/png/projects/BusinessConsulting.png';
import InsuranceFinances from '../../assets/png/projects/InsuranceFinances.png';
import WebDevelopment from '../../assets/png/projects/WebDevelopment.png';
import ConsultEPrograms from '../../assets/png/projects/ConsultEPrograms.png';

import Calendary from '../../assets/svg/icons/calendary.svg';

import './style.css';
import { ScrollToTop } from "@/components/ScrollToTop";

export default function Projects(){
    return (
        <>
            <Hero 
                page="The Case Studies"
                title="Our Latest Projects"
                text={false}
                image={ProjectsImage}
                height="71.8%"
            />
            <ScrollToTop />
            <section>
                <h6 className="text-slate-800 page-class">🟩 Latest Projects</h6>
                <h2 className="text-slate-800 title-class">Discover our latest client projects</h2>
                <p className="text-center text-gray-500 py-2 w-7/12 mx-auto text-sm text-class">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking to further the overal.</p>
                <div className="grid-content">
                    <div className="mb-2">
                        <Image src={FinancialInvestment} alt="Financial Investment"/>
                        <div>
                            <h6 className="font-semibold py-2">Financial Investment</h6>
                            <div className="flex items-center">
                                <Image src={Calendary} alt="Calendary"/><small className="text-gray-500 text-xs"> Sep 2023</small>
                            </div>
                            <div className="flex justify-end margin-top">
                                <span className="font-light text-gray-500 arrow-class">&#10095;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={MarketingStrategy} alt="Marketing Strategy"/>
                        <div>
                            <h6 className="font-semibold py-2">Marketing Strategy</h6>
                            <div className="flex items-center">
                                <Image src={Calendary} alt="Calendary"/><small className="text-gray-500 text-xs"> Sep 2023</small>
                            </div>
                            <div className="flex justify-end margin-top">
                                <span className="font-light text-gray-500 arrow-class">&#10095;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={BusinessConsulting} alt="Business Consulting"/>
                        <div>
                            <h6 className="font-semibold py-2">Business Consulting</h6>
                            <div className="flex items-center">
                                <Image src={Calendary} alt="Calendary"/><small className="text-gray-500 text-xs"> Sep 2023</small>
                            </div>
                            <div className="flex justify-end margin-top">
                                <span className="font-light text-gray-500 arrow-class">&#10095;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={InsuranceFinances} alt="Insurance Finances"/>
                        <div>
                            <h6 className="font-semibold py-2">Insurance Finances</h6>
                            <div className="flex items-center">
                                <Image src={Calendary} alt="Calendary"/><small className="text-gray-500 text-xs"> Sep 2023</small>
                            </div>
                            <div className="flex justify-end margin-top">
                                <span className="font-light text-gray-500 arrow-class">&#10095;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={WebDevelopment} alt="Web Development"/>
                        <div>
                            <h6 className="font-semibold py-2">Web Development</h6>
                            <div className="flex items-center">
                                <Image src={Calendary} alt="Calendary"/><small className="text-gray-500 text-xs"> Sep 2023</small>
                            </div>
                            <div className="flex justify-end margin-top">
                                <span className="font-light text-gray-500 arrow-class">&#10095;</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={ConsultEPrograms} alt="Consult & Programs"/>
                        <div>
                            <h6 className="font-semibold py-2">Consult & Programs</h6>
                            <div className="flex items-center">
                                <Image src={Calendary} alt="Calendary"/><small className="text-gray-500 text-xs"> Sep 2023</small>
                            </div>
                            <div className="flex justify-end margin-top">
                                <span className="font-light text-gray-500 arrow-class">&#10095;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}