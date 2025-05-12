import { useEffect, useState } from 'react';
import { Event } from '../types/Event';
import { fetchEvents, deleteEvent } from '../api/events';
import EventCard from '../components/EventCard';
import CreateEventForm from '../components/CreateEventForm';
import EditEventModal from '../components/EditEventModal';
import PlaceBetModal from '../components/PlaceBetModal';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [placingBet, setPlacingBet] = useState<Event | null>(null);
  const { isLoggedIn } = useAuth();

  const loadEvents = async () => {
    const data = await fetchEvents();
    setEvents(data);
  };

  const handleDelete = async (id: number) => {
    await deleteEvent(id);
    loadEvents();
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sports Events
        </h1>

        {isLoggedIn ? <CreateEventForm onCreated={loadEvents} /> : undefined}

        <div className="space-y-3">
          {events.map((event) => (
            <EventCard
              key={event.event_id}
              event={event}
              onDelete={isLoggedIn ? handleDelete : undefined}
              onEdit={isLoggedIn ? (e) => setEditingEvent(e) : undefined}
              onPlaceBet={isLoggedIn ? (e) => setPlacingBet(e) : undefined}
            />
          ))}
        </div>

        {editingEvent && (
          <EditEventModal
            event={editingEvent}
            onClose={() => setEditingEvent(null)}
            onUpdated={loadEvents}
          />
        )}
        {placingBet && (
          <PlaceBetModal event={placingBet} onClose={() => setPlacingBet(null)} />
        )}
      </div>
    </div>
  );
}