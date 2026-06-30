import { getAllBlogs } from '@/lib/sanity';
import BlogsClient from './BlogsClient';

export const revalidate = 60;

export default async function BlogsPage() {
  let blogs = [];
  try {
    blogs = await getAllBlogs();
  } catch {
    blogs = [];
  }
  return <BlogsClient blogs={blogs} />;
}
