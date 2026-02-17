import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../../lib/posts';

export const getStaticProps = () => {
  const posts = getSortedPostsData();
  return {
    props: {
      posts
    }
  };
};

const formatDate = (value) =>
  new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));

const Blog = ({ posts }) => (
  <>
    <Head>
      <title>SmartClover Blog | Insights & Updates</title>
      <meta
        name="description"
        content="Thoughts on healthcare AI products, cybersecurity, SaaS/PaaS operations, and decentralized deployments from the SmartClover team."
      />
    </Head>

    <header className="page-header">
      <span className="tagline">Blog</span>
      <h1>Ideas from the SmartClover lab</h1>
      <p>
        Deep dives into healthcare research, cybersecurity, decentralized infrastructure, and the digital-native products
        we design and operate.
      </p>
    </header>

    <section className="post-list">
      {posts.map((post) => (
        <article key={post.slug} className="surface-card">
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="post-meta">{formatDate(post.date)}</p>
          <p>{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`}>Read more →</Link>
        </article>
      ))}
    </section>
  </>
);

export default Blog;
