"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useRouter } from "next/navigation";

import PriceImage from '../../assets/png/price/PriceImage.png';

import './style.css';

export default function Price(){
    const router = useRouter();

    setTimeout(() => {
        router.refresh();
    },3000)

    return (
        <>
            <Header router={router}/>
            <Hero
                page="Pricing Package"
                title="Affordable Plans For Customers"
                text={false}
                height="71.8%"
                image={PriceImage}
            />
            <section>
                <h6 className="font-semibold pb-2 pt-20 text-center page-class">🟩 Single Pricing Option</h6>
                <h2 className="text-center font-bold text-3xl w-4/12 mx-auto text-slate-800 title-class">Choose the Right Plan for Your and Your Team</h2>
                <div className="grid-content">
                    <div>
                        <h3 className="text-center text-lg font-bold">Basic</h3>
                        <div className="border-top"></div>
                        <h3 className="text-center pt-8 pb-2 font-bold text-2xl">$7.99<small className="text-sm">/ month</small></h3>
                        <div className="flex justify-center border-bottom pb-2">
                            <button className="btn-green">Billed as $96 per year</button>
                        </div>
                        <div className="flex justify-center">
                            <ul className="flex justify-center flex-col items-center py-4">
                                <li className="text-xs text-center line-height font-light">Unlimited members</li>
                                <li className="text-xs text-center line-height font-light"><b className="font-bold">Unlimited</b> feedback</li>
                                <li className="text-xs text-center line-height font-light">Weekly team Feedback Friday</li>
                                <li className="text-xs text-center line-height font-light">Custom Kudos <b className="font-bold">+9 illustration</b></li>
                                <li className="text-xs text-center line-height font-light">Team feedback history (30 items)</li>
                                <li className="text-xs text-center line-height font-light">Personal feedback </li>
                            </ul>
                        </div>
                        <div className="flex justify-center pt-14">
                            <button className="btn-purple">Get Started</button>
                        </div>
                    </div>
                    <div className="margin-top">
                        <div className="bg-emerald-400 py-2 flex justify-center">
                            <h5 className="text-white">Most Popular</h5>
                        </div>
                        <div className="bg-indigo-500">
                            <h3 className="text-center text-lg font-bold text-white pt-3">Advanced</h3>
                            <div className="border-top-white"></div>
                            <h3 className="text-center pt-8 pb-2 font-bold text-2xl text-white">$9.99<small className="text-sm">/ month</small></h3>
                            <div className="flex justify-center border-bottom-white pb-2">
                                <button className="btn-white">Billed as $119 per year</button>
                            </div>
                            <div>
                                <ul className="flex justify-center flex-col items-center py-4">
                                    <li className="text-xs text-center line-height text-white font-light">Unlimited members</li>
                                    <li className="text-xs text-center line-height text-white font-light"><b className="font-bold text-emerald-500">Unlimited</b> feedback</li>
                                    <li className="text-xs text-center line-height text-white font-light">Weekly team Feedback Friday</li>
                                    <li className="text-xs text-center line-height text-white font-light">Custom Kudos <b className="font-bold text-emerald-500">+9 illustration</b></li>
                                    <li className="text-xs text-center line-height text-white font-light">Team feedback history (30 items)</li>
                                    <li className="text-xs text-center line-height text-white font-light">Personal feedback history (6 items)</li>
                                    <li className="text-xs text-center line-height text-white font-light">Slack integration</li>
                                </ul>
                            </div>
                            <div className="flex justify-center pt-8">
                                <button className="btn-white-2">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-center text-lg font-bold">Pro</h3>
                        <div className="border-top"></div>
                        <h3 className="text-center pt-8 pb-2 font-bold text-2xl">$11.99<small className="text-sm">/ month</small></h3>
                        <div className="flex justify-center border-bottom pb-2">
                            <button className="btn-green">Billed as $139 per year</button>
                        </div>
                        <div className="flex justify-center">
                            <ul className="flex justify-center flex-col items-center py-4">
                                <li className="text-xs text-center line-height font-light">Unlimited members</li>
                                <li className="text-xs text-center line-height font-light"><b className="font-bold">Unlimited</b> feedback</li>
                                <li className="text-xs text-center line-height font-light">Weekly team Feedback Friday</li>
                                <li className="text-xs text-center line-height font-light">Custom Kudos <b className="font-bold">+12 illustration</b></li>
                                <li className="text-xs text-center line-height font-light">Team feedback history (60 items)</li>
                                <li className="text-xs text-center line-height font-light">Personal feedback history (15 items)</li>
                                <li className="text-xs text-center line-height font-light">Slack integration</li>
                            </ul>
                        </div>
                        <div className="flex justify-center pt-8">
                            <button className="btn-purple">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}