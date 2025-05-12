import { useState } from 'react';

import { Event } from '../types/Event';

interface Props {
    event: Event;
    onClose: () => void;
}

export default function PlaceBetModal({ event, onClose }: Props) {
    const [amount, setAmount] = useState('');
    const [success, setSuccess] = useState(false);

    const handleBet = (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(true);

        // Simulate a delay
        setTimeout(() => {
            setAmount('');
            setSuccess(false);
            onClose();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                    Bet on: <span className="text-blue-600">{event.event_name}</span>
                </h2>
                <p className="text-sm mb-4 text-gray-700">Odds: {event.odds}</p>

                {success ? (
                    <div className="text-green-600 font-medium text-center">
                        Bet placed successfully!
                    </div>
                ) : (
                    <form onSubmit={handleBet} className="space-y-4">
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                            className="w-full border border-gray-300 p-2 rounded"
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
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                            >
                                Place Bet
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}