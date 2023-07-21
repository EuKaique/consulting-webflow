import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

import OurService from '../../assets/png/ourServices/OurServices.png'

export default function OurServices(){
    return (
        <>
            <Header />
            <Hero page="Our Services" title="We're Offering" image={OurService} height="50%"/>
            <div>
                Our Services
            </div>
            <Footer />
        </>
    )
}