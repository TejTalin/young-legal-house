import { getAllEvents } from '@/lib/sanity';
import EventsClient from './EventsClient';

export const metadata = {
  title: 'Events | Young Legal House',
};

export const revalidate = 60;

export default async function EventsPage() {
  const events = await getAllEvents();
  return <EventsClient events={events} />;
}
