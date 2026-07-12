import HomeClient from './HomeClient';
import { getRecentBlogs, getUpcomingEvents } from '@/lib/sanity';

export const metadata = {
  title: 'Young Legal House | Where Young Legal Minds Meet',
};

// ISR: page is cached and refreshed at most once a minute; Sanity reads are
// also CDN-cached (useCdn: true in lib/sanity.js), so this stays fast.
export const revalidate = 60;

export default async function HomePage() {
  const [recentBlogs, upcomingEvents] = await Promise.all([
    getRecentBlogs(4),
    getUpcomingEvents(3),
  ]);

  return <HomeClient recentBlogs={recentBlogs} upcomingEvents={upcomingEvents} />;
}
