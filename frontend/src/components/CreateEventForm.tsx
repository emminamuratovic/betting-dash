import { useState } from 'react';

import { createEvent } from '../api/events';

interface Props {
  onCreated: () => void; // To reload the list after creation
}

export default function CreateEventForm({ onCreated }: Props) {
  const [eventName, setEventName] = useState('');
  const [odds, setOdds] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createEvent({ event_name: eventName, odds: parseFloat(odds) });
      setEventName('');
      setOdds('');
      onCreated(); 
    } catch (err) {
      alert('Failed to create event.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded shadow">
    <h2 className="text-lg font-semibold mb-3 text-gray-700">Create New Event</h2>
    <input
      type="text"
      placeholder="Event Name"
      value={eventName}
      onChange={(e) => setEventName(e.target.value)}
      className="border border-gray-300 p-2 w-full mb-2 rounded"
      required
    />
    <input
      type="number"
      step="0.01"
      placeholder="Odds"
      value={odds}
      onChange={(e) => setOdds(e.target.value)}
      className="border border-gray-300 p-2 w-full mb-3 rounded"
      required
    />
    <button
      type="submit"
      disabled={loading}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
    >
      {loading ? 'Creating...' : 'Create Event'}
    </button>
  </form>
  );
}