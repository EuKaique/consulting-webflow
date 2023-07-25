import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import OurService from '../../assets/png/ourServices/OurServices.png';

import BankingIcon from '../../assets/svg/icons/banking_management.svg';
import BusinessIcon from '../../assets/svg/icons/business_management.svg';
import CompanyIcon from '../../assets/svg/icons/company_management.svg';
import ConsultantsIcon from '../../assets/svg/icons/consultants_programs.svg';
import FinancialIcon from '../../assets/svg/icons/financial_consuntancy.svg';
import FinancialInsuranceIcon from '../../assets/svg/icons/financial_insurance_jobs.svg';

import DevelopmentIcon from '../../assets/svg/icons/development.svg';
import UiUxIcon from '../../assets/svg/icons/ui_ux.svg';
import DataAnalysisIcon from '../../assets/svg/icons/data_analysis.svg';
import ContentManagementIcon from '../../assets/svg/icons/content_management.svg';

import RightIcon from '../../assets/svg/icons/right_green.svg';

import Percent1Icon from '../../assets/svg/icons/95_percent.svg';
import Percent2Icon from '../../assets/svg/icons/85_percent.svg';

import NattashaKelvin from '../../assets/svg/people/nattasha_kelvin.svg';
import Cincinnati from '../../assets/svg/people/cincinnati.svg';
import Stars from '../../assets/svg/icons/stars.svg';

import './style.css';

export default function OurServices(){
    return (
        <>
            <Header />
            <Hero 
                page="Our Services" 
                title="We're Offering"
                text={true} 
                image={OurService} 
                height="50%"
            />
            <section>
                <h6 className="font-normal pb-2 pt-8 text-center">🟩 Our Services</h6>
                <h2 className="text-center font-bold text-3xl w-4/12 mx-auto text-slate-900 mb-10">We Provide Professional Business Solutions.</h2>
                <div className="flex-content">
                    <div>
                        <div>
                            <h3 className="font-semibold text-lg">Financial Consultancy</h3>
                            <Image src={FinancialIcon} alt="Financial Consultancy"/>
                        </div>
                        <span>Read more</span>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold text-lg">Business Management</h3>
                            <Image src={BusinessIcon} alt="Business Management"/>
                        </div>
                        <span>Read more</span>       
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold text-lg">Consultants & Programs</h3>
                            <Image src={ConsultantsIcon} alt="Consultants & Programs"/>
                        </div>
                        <span>Read more</span> 
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold text-lg">Company Management</h3>
                            <Image src={CompanyIcon} alt="Company Management"/>
                        </div>
                        <span>Read more</span>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold text-lg w-full">Financial & Insurance jobs</h3>
                            <Image src={FinancialInsuranceIcon} alt="Financial & Insurance jobs"/>
                        </div>
                        <span>Read more</span>
                    </div>
                    <div>
                        <div>
                            <h3 className="font-semibold text-lg">Banking Management</h3>
                            <Image src={BankingIcon} alt="Banking Management"/>
                        </div>
                        <span>Read more</span>
                    </div>
                </div>
            </section>
            <section className="bg-slate-800">
                <div className="mx-auto w-9/12 py-16">
                    <div className="info">
                        <div>
                            <h6 className="text-sm pb-2 text-white font-light">🟩 What we're offering</h6>
                            <h3 className="text-2xl text-white font-semibold">Services we’re providing to our customers</h3>
                        </div>
                        <div>
                            <p className="text-white text-sm leading-relaxed font-light">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with service for state of the art customer service.</p>
                        </div>
                    </div>
                    <div className="grid-content">
                        <div className="box">
                            <div>
                                <Image src={DevelopmentIcon} alt="Development"/>
                            </div>
                            <h4 className="text-center text-white font-semibold pb-4">Product development</h4>
                            <p className="text-center text-white font-light text-xs pt-2">level overviews proposition.</p>
                        </div>
                        <div className="box">
                            <div>
                                <Image src={UiUxIcon} alt="Ui/Ux"/>
                            </div>
                            <h4 className="text-center text-white font-semibold pb-4">UI/UX designing</h4>
                            <p className="text-center text-white font-light text-xs pt-2">level overviews proposition.</p>
                        </div>
                        <div className="box">
                            <div>
                                <Image src={DataAnalysisIcon} alt="Data Analysis"/>
                            </div>
                            <h4 className="text-center text-white font-semibold pb-4">Data Analysis</h4>
                            <p className="text-center text-white font-light text-xs pt-2">level overviews proposition.</p>
                        </div>
                        <div className="box">
                            <div>
                                <Image src={ContentManagementIcon} alt="Content Management"/>
                            </div>
                            <h4 className="text-center text-white font-semibold pb-4">Content Management</h4>
                            <p className="text-center text-white font-light text-xs pt-2">level overviews proposition.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h6 className="text-sm pb-2 font-semibold pl-40 pt-12">🟩 Why Choose Me</h6>
                <h3 className="text-2xl font-bold w-4/12 pl-40 pt-2 text-slate-900">We Provide Solutions To Grow Your Business</h3>
                <div className="grid-content-2">
                    <div>
                        <p className="pt-2 leading-normal text-gray-500 font-normal pl-40 pb-8">Leverage agile frameworks to provide a robust synopsis for high level overviews. thinking to further the overall proposition. </p>
                        <div className="flex-content-2-child">
                            <div className="box">
                                <div className="flex">
                                    <Image src={RightIcon} alt="Check"/>
                                    <h4><b>2,800+ </b>Active clients</h4>
                                </div>
                                <p className="text-grey-800 text-sm w-11/12 py-2 text-gray-600 pl-8">provide a robust synopsis for high level overviews.</p>
                            </div>
                            <div className="box">
                                <div className="flex">
                                    <Image src={RightIcon} alt="Check"/>
                                    <h4><b>106+ </b>Team members</h4>
                                </div>
                                <p className="text-grey-800 text-sm w-11/12 py-2 text-gray-600 pl-8">provide a robust synopsis for high level overviews.</p>
                            </div>
                            <div className="box pt-8">
                                <div className="flex">
                                    <Image src={RightIcon} alt="Check"/>
                                    <h4><b>106+ </b>Team members</h4>
                                </div>
                                <p className="text-grey-800 text-sm w-11/12 py-2 text-gray-600 pl-8">provide a robust synopsis for high level overviews.</p>
                            </div>
                            <div className="box pt-8">
                                <div className="flex">
                                    <Image src={RightIcon} alt="Check"/>
                                    <h4><b>1,670+ </b><span className="text-amber-400">5⭐️ stars</span> reviews</h4>
                                </div>
                                <p className="text-grey-800 text-sm w-11/12 py-2 text-gray-600 pl-8">provide a robust synopsis for high level overviews.</p>
                            </div>
                        </div>
                        <div className="pl-40 pt-8 pb-16">
                            <button className="btn">Appointment</button>
                        </div>
                    </div>
                    <div>
                        <div className="percent-class">
                            <div>
                                <Image src={Percent1Icon} alt="Clients"/>
                            </div>
                            <div>
                                <h5 className="text-sm">Clients</h5>
                                <h4 className="font-semibold py-1">Quick Response</h4>
                                <p className="text-sm w-10/12 font-light">Objectively products whereas parallel platforms procedures</p>
                            </div>
                        </div>
                        <div className="percent-class">
                            <div>
                                <Image src={Percent2Icon} alt="Projects"/>
                            </div>
                            <div>
                                <h5 className="text-sm">Projects</h5>
                                <h4 className="font-semibold py-1">Finished Jobs</h4>
                                <p className="text-sm w-10/12 font-light">Objectively products whereas parallel platforms procedures</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial">
                <div>
                    <h6 className="text-sm pb-2 pt-20 font-semibold">🟩 Testimonial</h6>
                    <h3 className="text-2xl font-bold text-slate-800 w-6/12 pb-4">What Our Client Say's</h3>
                    <p className="w-10/12 text-gray-600">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative</p>
                </div>
                <div className="testimonial-box">
                    <div className="box">
                        <div>
                            <Image src={NattashaKelvin} alt="Nattasha"/>
                        </div>
                        <div>
                            <h4 className="font-bold pb-1">Nattasha Kelvin</h4>
                            <span className="font-light text-sm">Designer</span>
                            <Image src={Stars} alt="Stars" style={{paddingTop: '3%'}}/>
                        </div>
                    </div>
                    <div className="pt-8">
                        <p className="text-gray-600 text-sm w-10/12">
                            <i>“dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.</i>
                        </p>
                    </div>
                </div>
                <div className="testimonial-box">
                    <div className="box">
                        <div>
                            <Image src={Cincinnati} alt="Cincinnati"/>
                        </div>
                        <div>
                            <h4 className="font-bold pb-1">Cincinnati</h4>
                            <span className="font-light text-sm">Designer</span>
                            <Image src={Stars} alt="Stars" style={{paddingTop: '3%'}}/>
                        </div>
                    </div>
                    <div className="pt-8">
                        <p className="text-gray-600 text-sm w-10/12">
                            <i>“Leverage agile frameworks to provide a robust synopsis for high level overviews ”</i>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}