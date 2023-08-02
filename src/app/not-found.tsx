"use client";

import { Footer } from "@/components/NotFound/Footer";
import { Header } from "@/components/NotFound/Header";
import { useRouter } from "next/navigation";

import './404.css';

export default function PageNotFound(){
    const router = useRouter();

    return(
        <>
            <Header router={router}/>
            <div className="page-404">
                <h1 className="text-9xl text-center text-white pt-16 font-bold">404</h1>
                <h2 className="text-5xl text-center text-white py-2 font-bold">Oops! Page not found!</h2>
                <p className="text-center text-xs text-white w-5/12 py-2 mx-auto font-light">Leveling customer service for state of the art  customer service innovate product  for reliable supply engage web services cutting-edge deliverables.</p>
                <div className="flex justify-center pt-4 pb-24">
                    <a href="/">
                        <button className="btn">Back to Home</button>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}