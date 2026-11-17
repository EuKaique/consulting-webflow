import Image from "next/image";

import { Hero } from "@/components/Hero";

import ImageTeam from '../../assets/png/team/ImageTeam.png';

import TeamImage from '../../assets/png/team/Team.png';

import CircleImage from '../../assets/svg/icons/year_team_circle.svg';

import styles from './style.module.css';
import { ScrollToTop } from "@/components/ScrollToTop";

import PeopleGrid from './PeopleGrid';

export default function Team(){

    return (
        <div className={styles.page}>
            <Hero 
                page="Our Team"
                title="Meet Our Experts"
                text={false}
                height="71.8%"
                image={ImageTeam}
            />
            <ScrollToTop />
            <PeopleGrid />

            <section className="grid-content-2 pt-16">
                <div className="bg-dark text-white">
                    <div className="py-6 px-4">
                        <h6 className="text-sm">🟩 Dedicated Team</h6>
                        <h3 className="py-2 text-lg font-bold">Professional Individuals</h3>
                        <p className="text-xs font-light w-11/12 pb-8">Leverage agile frameworks to provided  a synopsis for high overviews thinking overall proposition. </p>
                        <div className="flex items-center">
                            <div>
                                <Image src={CircleImage} alt="Year Team"/>
                            </div>
                            <div className="pl-4">
                                <h2 className="font-semibold text-2xl percent-class">75%</h2>
                                <h4 className="text-sm">Income Statement</h4>
                                <p className="text-xs pt-1 font-light">Leverage agile frameworks to provide a robust proposition. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={TeamImage} alt="Team" />
                </div>
            </section>
        </div>
    )
}