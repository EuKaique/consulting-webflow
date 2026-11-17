import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services';
import styles from '@/components/ContentPage.module.css';

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(item => item.slug === params.slug);
  if (!service) notFound();
  return (
    <main className={styles.page}>
      <Link href="/our-services">← All services</Link>
      <h1>{service.title}</h1>
      <p>{service.summary}</p>
      <h2>How we approach the work</h2>
      <ol>{service.steps.map(step => <li key={step}>{step}</li>)}</ol>
      <h2>Start with a conversation</h2>
      <p>Tell us about your situation, your team and the decision you need to make. We will discuss the scope before agreeing on any work.</p>
      <Link className={styles.cta} href={`/contact-us?service=${service.slug}#contact-form`}>Discuss {service.title.toLowerCase()}</Link>
      <p><a href="/downloads/consultation-guide.pdf" download>Download the consultation preparation guide (PDF)</a></p>
    </main>
  );
}
