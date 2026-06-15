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

const NIS2_COMPASS_URL = 'https://www.nis2compass.eu';

const renderLinkedTitle = (title) => {
  if (!title.includes('NIS2COMPASS')) {
    return title;
  }

  const parts = title.split('NIS2COMPASS');

  return parts.flatMap((part, index) => {
    if (index === 0) {
      return part;
    }

    return [
      <a key={`nis2compass-title-link-${index}`} href={NIS2_COMPASS_URL} target="_blank" rel="noopener noreferrer">
        NIS2COMPASS
      </a>,
      part
    ];
  });
};

const BlogPost = ({ post }) => {
  const description = post.excerpt || post.subtitle;

  return (
    <>
      <Head>
        <title>{`${post.title} | SmartClover Blog`}</title>
        {description && <meta name="description" content={description} />}
      </Head>

      <header className="page-header">
        <span className="tagline">Blog · Insight</span>
        <h1>{renderLinkedTitle(post.title)}</h1>
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
};

export default BlogPost;
