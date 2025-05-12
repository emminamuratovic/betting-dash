import { db } from '../db/db';

export const getAllEvents = async () => {
  const result = await db.query('SELECT * FROM sports_events');
  return result.rows;
};

export const createEvent = async (event_name: string, odds: number) => {
  const result = await db.query(
    'INSERT INTO sports_events (event_name, odds) VALUES ($1, $2) RETURNING *',
    [event_name, odds]
  );
  return result.rows[0];
};

export const updateEvent = async (id: number, event_name: string, odds: number) => {
  const result = await db.query(
    'UPDATE sports_events SET event_name = $1, odds = $2 WHERE event_id = $3 RETURNING *',
    [event_name, odds, id]
  );
  return result.rows[0];
};

export const deleteEvent = async (id: number) => {
  const result = await db.query(
    'DELETE FROM sports_events WHERE event_id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
};