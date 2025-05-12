import { Event } from "../types/Event";

interface Props {
  event: Event;
  onDelete?: (id: number) => void;
  onEdit?: (event: Event) => void;
  onPlaceBet?: (event: Event) => void;
}

export default function EventCard({ event, onDelete, onEdit, onPlaceBet }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <div>
        <h2 className="font-semibold text-lg text-gray-800">{event.event_name}</h2>
        <p className="text-gray-600 text-sm">Odds: {event.odds}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={onEdit ? () => onEdit(event) : undefined}
          disabled={!onEdit}
          className={`px-3 py-1 rounded text-sm ${onEdit ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Edit
        </button>

        <button
          onClick={onDelete ? () => onDelete(event.event_id) : undefined}
          className={`px-3 py-1 rounded text-sm ${onDelete ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Delete
        </button>

        <button
          onClick={onPlaceBet ? () => onPlaceBet(event) : undefined}
          className={`px-3 py-1 rounded text-sm ${onPlaceBet ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
        >
          Place Bet
        </button>
      </div>
    </div>
  );
}