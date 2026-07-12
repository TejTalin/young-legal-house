import { getAllBlogs, getPopularBlogs, getRecentLegalInsights } from '@/lib/sanity';
import BlogsClient from './BlogsClient';

export const metadata = {
  title: 'Blogs & Articles | Young Legal House',
};

// ISR: page is cached and refreshed at most once a minute; Sanity reads are
// also CDN-cached (useCdn: true in lib/sanity.js), so this stays fast.
export const revalidate = 60;

export default async function BlogsPage() {
  const [blogs, popularBlogs, insights] = await Promise.all([
    getAllBlogs(),
    getPopularBlogs(5),
    getRecentLegalInsights(6),
  ]);

  return <BlogsClient blogs={blogs} popularBlogs={popularBlogs} insights={insights} />;
}
