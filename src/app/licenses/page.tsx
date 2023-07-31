import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useRouter } from "next/navigation";

export default function Licenses(){
    const router = useRouter();

    return (
        <>
            <Header router={router}/>
            <section>
                <h5 className="text-center text-sm font-semibold pt-24 pb-4">🟩 Template information</h5>
                <h2 className="text-center text-5xl pb-6 font-bold">Licencing</h2>
                <div className="w-9/12 mx-auto">
                    <h3 className="text-2xl font-bold pb-2">Icons & Graphics</h3>
                    <p className="text-sm leading-relaxed text-gray-500 pb-8">Icons and Graphics were manually designed by the VictorFlow team. You may download these and edit them to fit your website without asking for permission or providing credit.</p>
                    <h4 className="font-bold text-lg pb-12">Phosphor Icons: <span className="text-emerald-400 font-normal">License</span></h4>
                    <h3 className="text-2xl font-bold pb-2">Photography</h3>
                    <p className="text-sm leading-relaxed text-gray-500 pb-4">All images used in the WhiteCollar Webflow Template are licensed for free personal and commercial use. If you'd like to use any specific image, you can check the licenses and download the images for free on Unsplash, Pexels.</p>
                    <h4 className="font-bold text-lg pb-2">Pexels: <span className="text-emerald-400 font-normal">License</span></h4>
                    <p className="text-emerald-400 pb-8">Image 1,Image 2,Image 3,Image 4,Image 5,Image 6,Image 7,Image 8,Image 9,Image 10,Image 11,Image 12,Image 13,Image 14,Image 15,Image 16,Image 17,Image 18,Image 19,Image 20</p>
                    <h4 className="font-bold text-lg pb-2">Unsplash: <span className="text-emerald-400 font-normal">License</span></h4>
                    <p className="text-emerald-400 pb-24 text-sm">Image 1,Image 2,Image 3,Image 4,Image 5,Image 6,Image 7,Image 8,Image 9,Image 10,Image 11,Image 12,Image 13,Image 14,Image 15,Image 16,Image 17,Image 18,Image 19,Image 20</p>
                    <h3 className="text-2xl font-bold pb-2">Fonts</h3>
                    <p className="text-gray-500 pb-16 text-sm text-gray-400">WhiteCollar template uses free licensed <span className="text-emerald-400">Google Fonts.</span> Please check <span className="text-emerald-400">Poppins</span> and <span className="text-emerald-400">Inter.</span></p>
                </div>
            </section>
            <Footer />
        </>
    )
}