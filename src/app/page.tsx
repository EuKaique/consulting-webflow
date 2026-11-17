import Image from 'next/image';
import Link from 'next/link';
import HomeImage from '@/assets/jpeg/HeroHome.jpg';
import { services } from '@/lib/services';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-heading">
        <div className={styles.intro}>
          <p className={styles.eyebrow}>WhiteCollar / Business consulting</p>
          <h1 id="home-heading">A clearer plan for your next business decision.</h1>
          <p>Bring your priorities, people and processes together. Explore practical support for the decisions and day-to-day challenges facing your business.</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contact-us#contact-form">Discuss your business needs →</Link>
            <Link className={styles.secondary} href="/our-services">Explore services</Link>
          </div>
          <p className={styles.demoNote}>A demonstration website. Contact and subscription forms are previews.</p>
        </div>
        <div className={styles.photo}><Image src={HomeImage} alt="Colleagues discussing a business plan" fill priority sizes="(max-width: 767px) 100vw, 45vw" /></div>
      </section>
      <section className={styles.services} aria-labelledby="services-heading">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Where to begin</p><h2 id="services-heading">Find the support that fits your challenge.</h2><Link href="/our-services">All services →</Link></div>
        <div className={styles.serviceList}>
          {services.slice(0, 4).map(service => <article key={service.slug}><h3><Link href={`/our-services/${service.slug}`}>{service.title} <span aria-hidden="true">↗</span></Link></h3><p>{service.summary}</p></article>)}
        </div>
      </section>
      <section className={styles.process} aria-labelledby="process-heading">
        <p className={styles.eyebrow}>From question to action</p>
        <h2 id="process-heading">Start with the problem. Leave with a next step.</h2>
        <ol>
          <li><span>01</span><h3>Understand the situation</h3><p>Describe the decision, the people involved and what is getting in the way.</p></li>
          <li><span>02</span><h3>Agree on the scope</h3><p>Identify the information needed and define what useful support would look like.</p></li>
          <li><span>03</span><h3>Set the next steps</h3><p>Build an action plan with responsibilities, priorities and a time to review.</p></li>
        </ol>
      </section>
      <section className={styles.nextStep}>
        <div><p className={styles.eyebrow}>Take a closer look</p><h2>See how a consulting conversation starts.</h2><p>Compare plans, explore our approach or preview an enquiry with your chosen service.</p></div>
        <div className={styles.actions}><Link className={styles.primary} href="/price">Compare plans →</Link><Link className={styles.secondary} href="/about-us">About WhiteCollar</Link></div>
      </section>
    </main>
  );
}
