import Head from 'next/head';
import Link from 'next/link';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

export const getStaticPaths = () => ({
  paths: getAllPostSlugs(),
  fallback: false
});

export const getStaticProps = async ({ params }) => {
  const post = await getPostData(params.slug);
  return {
    props: {
      post
    }
  };
};

const formatDate = (value) =>
  new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(value));

const BlogPost = ({ post }) => (
  <>
    <Head>
      <title>{`${post.title} | SmartClover Blog`}</title>
      {post.excerpt && <meta name="description" content={post.excerpt} />}
    </Head>

    <header className="page-header">
      <span className="tagline">Blog · Insight</span>
      <h1>{post.title}</h1>
      <p>{formatDate(post.date)}</p>
    </header>

    <article className="surface-card">
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: post.contentHtml
        }}
      />
    </article>

    <div className="cta-links">
      <Link href="/blog" className="button secondary">
        ← Back to all posts
      </Link>
    </div>
  </>
);

export default BlogPost;
