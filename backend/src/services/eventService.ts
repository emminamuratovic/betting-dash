import * as EventModel from '../models/eventModel';

export const getAllEvents = async () => {
  return await EventModel.getAllEvents();
};

export const createEvent = async (event_name: string, odds: number) => {
  if (!event_name || !odds) throw new Error('Missing fields');
  return await EventModel.createEvent(event_name, odds);
};

export const updateEvent = async (id: number, event_name: string, odds: number) => {
  const updated = await EventModel.updateEvent(id, event_name, odds);
  if (!updated) throw new Error('Event not found');
  return updated;
};

export const deleteEvent = async (id: number) => {
  const deleted = await EventModel.deleteEvent(id);
  if (!deleted) throw new Error('Event not found');
  return deleted;
};