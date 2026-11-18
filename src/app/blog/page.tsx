import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { articles } from '@/lib/articles';
import BlogImage from '@/assets/png/blog/BlogImage.png';
import styles from './style.module.css';

export default function Blog({ searchParams }: { searchParams: { page?: string } }) {
  const page = searchParams.page === undefined ? 1 : Number(searchParams.page);
  const pageSize = 2;
  const pageCount = Math.ceil(articles.length / pageSize);
  if (!Number.isInteger(page) || page < 1 || page > pageCount) notFound();
  const visible = articles.slice((page - 1) * pageSize, page * pageSize);
  return (
    <main className={styles.page}>
      <Hero page="Business insights" title="Ideas for your next decision" text={false} image={BlogImage} height="auto" />
      <section aria-labelledby="insights-heading">
        <h2 id="insights-heading" className="text-center font-bold text-3xl mb-8">Practical business insights</h2>
        <div className="grid-content">
          {visible.map(article => (
            <article key={article.slug}>
              <Image src={article.image} alt="" sizes="(max-width: 767px) 100vw, 50vw" />
              <h3 className="py-3 text-xl font-semibold"><Link href={`/blog/${article.slug}`}>{article.title}</Link></h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.summary}</p>
              <Link className="font-semibold text-indigo-700 inline-block py-3" href={`/blog/${article.slug}`} aria-label={`Read more: ${article.title}`}>Read more →</Link>
            </article>
          ))}
        </div>
        <nav aria-label="Insights pagination" className="flex flex-wrap justify-center items-center gap-6 py-12">
          {page > 1 && <Link className="btn" href={`/blog?page=${page - 1}`}>← Previous</Link>}
          <span>Page {page} of {pageCount}</span>
          {page < pageCount && <Link className="btn" href={`/blog?page=${page + 1}`}>Next →</Link>}
        </nav>
      </section>
    </main>
  );
}
