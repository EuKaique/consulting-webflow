import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Image from "next/image";

import BlogImage from '../../assets/png/blog/BlogImage.png';

import ImageGrid1 from '../../assets/png/blog/ImageGrid1.png';
import ImageGrid2 from '../../assets/png/blog/ImageGrid2.png';
import ImageGrid3 from '../../assets/png/blog/ImageGrid3.png';
import ImageGrid4 from '../../assets/png/blog/ImageGrid4.png';

import './style.css';

export default function Blog(){
    return (
        <>
            <Header />
            <Hero
                page="Recent News"
                title="We Keep You Updated"
                text={false}
                height="71.8%" 
                image={BlogImage}
            />
            <section>
                <h6 className="font-semibold pb-2 pt-20 text-center">🟩 Our Recent News</h6>
                <h2 className="text-center font-bold text-3xl w-4/12 mx-auto text-slate-800 pb-8">Featured News And Insights</h2>
                <div className="grid-content">
                    <div>
                        <Image src={ImageGrid1} alt="Image 1" />
                        <ul className="flex width-max">
                            <li className="btn">July 26/2023</li>
                            <li className="btn-green">Miranda Doe</li>
                            <div className="border-right"></div>
                            <li className="btn-green">Business</li>
                        </ul>
                        <h3 className="py-3 text-lg font-semibold">A Business Consulting That Can Produce</h3>
                        <p className="text-gray-500 text-xs pb-3 w-11/12">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        <span className="font-semibold text-indigo-600 py-4 text-sm">Read more</span>
                    </div>
                    <div>
                        <Image src={ImageGrid2} alt="Image 2" />
                        <ul className="flex width-max">
                            <li className="btn">July 26/2023</li>
                            <li className="btn-green">Miranda Doe</li>
                            <div className="border-right"></div>
                            <li className="btn-green">Business</li>
                        </ul>
                        <h3 className="py-3 text-lg font-semibold">Popular Email Marketing Techniques 2022</h3>
                        <p className="text-gray-500 text-xs pb-3 w-11/12">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        <span className="font-semibold text-indigo-600 py-4 text-sm">Read more</span>
                    </div>
                    <div>
                        <Image src={ImageGrid3} alt="Image 3" />
                        <ul className="flex width-max">
                            <li className="btn">July 26/2023</li>
                            <li className="btn-green">Miranda Doe</li>
                            <div className="border-right"></div>
                            <li className="btn-green">Business</li>
                        </ul>
                        <h3 className="py-3 text-lg font-semibold">What are backlinks and Why They are Important</h3>
                        <p className="text-gray-500 text-xs pb-3 w-11/12">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        <span className="font-semibold text-indigo-600 py-4 text-sm">Read more</span>
                    </div>
                    <div>
                        <Image src={ImageGrid4} alt="Image 4" />
                        <ul className="flex width-max">
                            <li className="btn">July 26/2023</li>
                            <li className="btn-green">Miranda Doe</li>
                            <div className="border-right"></div>
                            <li className="btn-green">Business</li>
                        </ul>
                        <h3 className="py-3 text-lg font-semibold">Importance of Keyword Research in a Blog</h3>
                        <p className="text-gray-500 text-xs pb-3 w-11/12">Leverage agile frameworks to provide a robust synopsis for high level overviews.Iterative approaches to corporate strategy foster collaborative thinking.</p>
                        <span className="font-semibold text-indigo-600 py-4 text-sm">Read more</span>
                    </div>
                </div>
                <div className="flex justify-center pt-24 pb-24">
                    <button className="btn font-light hover:opacity-75">Next &#10095;</button>
                </div>
            </section>
            <Footer />
        </>
    )
}