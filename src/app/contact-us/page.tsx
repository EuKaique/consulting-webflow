import Image from "next/image";

import { Hero } from "@/components/Hero";

import ContactImage from '../../assets/png/contactUs/ContactImage.png';

import ContactPerson from '../../assets/jpeg/ContactPerson.jpg';

import PhoneIcon from '../../assets/svg/icons/phone_icon.svg';
import MailIcon from '../../assets/svg/icons/mail_icon.svg';
import MapIcon from '../../assets/svg/icons/map_icon.svg';

import styles from './style.module.css';
import { ScrollToTop } from "@/components/ScrollToTop";

import ContactForm from './ContactForm';
import { getPlan } from '@/lib/plans';
import { services } from '@/lib/services';

export default function ContactUs({ searchParams }: { searchParams: { plan?: string; service?: string } }) {
  const plan = getPlan(searchParams.plan);
  const service = services.find(item => item.slug === searchParams.service);
  const initialSubject = plan ? 'Enquiry about the ' + plan + ' plan' : service ? 'Enquiry about ' + service.title : '';
  return (
        <div className={styles.page}>
            <Hero 
                page="Contact Us"
                title="Let's discuss your business"
                text={false}
                image={ContactImage}
                height="71.8%"
            />
            <ScrollToTop />
            <section className="grid-content">
                <div>
                    <Image src={ContactPerson} alt="Contact Person" />
                </div>
                <div className="pl-8">
                    <h4 className="font-semibold">🟩 Let's Talk</h4>
                    <h2 className="text-3xl py-2 font-bold">Get in touch with us</h2>
                    <p className="text-xs text-gray-500 pb-20 p-class">Completely synergize resource taxing relationships via premier niche ynamically innovate state of the art customer service.</p>
                    <div className="flex items-center pb-4 div-class">
                        <div className="border-radius">
                            <Image src={PhoneIcon} alt="Phone" />
                        </div>
                        <div className="pl-4 info-class">
                            <h6 className="text-xs font-light text-gray-400">Have any question?</h6>
                            <h5 className="text-sm font-semibold">Free +01 569 896 654</h5>
                        </div>
                    </div>
                    <div className="flex items-center pb-4 div-class">
                        <div className="border-radius">
                            <Image src={MailIcon} alt="Mail" />
                        </div>
                        <div className="pl-4 info-class">
                            <h6 className="text-xs font-light text-gray-400">White email</h6>
                            <h5 className="text-sm font-semibold">info@whitecollar.com</h5>
                        </div>
                    </div>
                    <div className="flex items-center div-class">
                        <div className="border-radius">
                            <Image src={MapIcon} alt="Map" style={{ width: '0.9rem'}}/>
                        </div>
                        <div className="pl-4 info-class">
                            <h6 className="text-xs font-light text-gray-400">Visit anytime</h6>
                            <h5 className="text-sm font-semibold">King Street, Prior Lake, New York</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h4 className="font-semibold text-center page-class">🟩 Contact Us</h4>
                <h2 className="text-3xl py-2 font-bold text-center">Tell us what you need</h2>
                <ContactForm initialSubject={initialSubject} />
            </section>
        </div>
    )
}