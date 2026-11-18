import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import Questions from './Questions';

import FAQImage from '../../assets/png/faq/FaqImage.png';

import styles from './style.module.css';

export default function Faq(){
    return(
        <div className={styles.page}>
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
                <Questions />
            </section>
        </div>
    )
}