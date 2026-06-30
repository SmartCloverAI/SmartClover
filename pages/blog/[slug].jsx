import Link from 'next/link';
import PageSeo from '../../components/PageSeo';
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

const getPostImage = (post) => {
  if (!post.hero_image) {
    return '/images/cerviguard/cerviguard-dashboard.png';
  }

  if (post.hero_image.startsWith('http://') || post.hero_image.startsWith('https://') || post.hero_image.startsWith('/')) {
    return post.hero_image;
  }

  return `/blog/${post.hero_image}`;
};

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
  const description = post.excerpt || post.subtitle || 'SmartClover blog article on healthcare AI, cybersecurity, research, and deployment operations.';
  const seoTitle = `${post.title} | SmartClover Blog`;

  return (
    <>
      <PageSeo
        title={seoTitle}
        description={description}
        path={`/blog/${post.slug}`}
        image={getPostImage(post)}
        type="article"
        author={post.author || 'SmartClover'}
        publishedTime={post.date}
        modifiedTime={post.updated || post.date}
        section="SmartClover Blog"
        tags={post.tags || []}
      />

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
