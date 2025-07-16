import { FC } from 'react';
import EventCard from './EventCard';
import { EventData } from '../types/Event';

interface UpcomingEventsProps {
  events: EventData[];
}

const UpcomingEvents: FC<UpcomingEventsProps> = ({ events }) => (
  <section>
    <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
    <p className="text-gray-600 mb-6">
      Stay ahead — these events are happening soon.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((ev) => (
        <EventCard key={ev.id} {...ev} />
      ))}
    </div>
  </section>
);

export default UpcomingEvents;
