import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles } from '@/lib/articles';
import styles from '@/components/ContentPage.module.css';

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find(item => item.slug === params.slug);
  if (!article) notFound();
  return (
    <main className={styles.page}>
      <Link href="/blog">← All insights</Link>
      <article>
        <h1>{article.title}</h1>
        <p>{article.summary}</p>
        <Image src={article.image} alt="" priority sizes="(max-width: 1152px) 100vw, 1152px" />
        {article.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      </article>
      <Link className={styles.cta} href="/contact-us#contact-form">Discuss your business needs</Link>
      <p><Link href="/blog">Back to all insights</Link></p>
    </main>
  );
}
