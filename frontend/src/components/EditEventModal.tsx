import { useState } from 'react';

import { updateEvent } from '../api/events';
import { Event } from '../types/Event';

interface Props {
  event: Event;
  onClose: () => void;
  onUpdated: () => void;
}

export default function EditEventModal({ event, onClose, onUpdated }: Props) {
  const [eventName, setEventName] = useState(event.event_name);
  const [odds, setOdds] = useState(event.odds.toString());
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateEvent(event.event_id, {
        event_name: eventName,
        odds: parseFloat(odds),
      });
      onUpdated();
      onClose();
    } catch (err) {
      alert('Update failed');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Event</h2>
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          step="0.01"
          value={odds}
          onChange={(e) => setOdds(e.target.value)}
          className="border p-2 w-full mb-4"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}