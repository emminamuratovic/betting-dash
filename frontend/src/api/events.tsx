import API from './axios';
import { Event } from '../types/Event';

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await API.get('/events');
  return response.data;
};

export const createEvent = async (data: { event_name: string; odds: number }) => {
  const response = await API.post('/events', data);
  return response.data;
};

export const updateEvent = async (id: number, data: { event_name: string; odds: number }) => {
  const response = await API.put(`/events/${id}`, data);
  return response.data;
};

export const deleteEvent = async (id: number) => {
  const response = await API.delete(`/events/${id}`);
  return response.data;
};