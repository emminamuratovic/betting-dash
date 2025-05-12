import { Request, Response, NextFunction } from 'express';

import * as EventService from '../services/eventService';

export const getEvents = async (_: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const events = await EventService.getAllEvents();
    res.status(200).json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    next(error);
  }
};

export const createEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { event_name, odds } = req.body;
    const newEvent = await EventService.createEvent(event_name, odds);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error("Create error:", error);
    res.status(400).json({ error: (error as Error).message });
  }
};

export const updateEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { event_name, odds } = req.body;
    const updated = await EventService.updateEvent(Number(id), event_name, odds);
    res.json(updated);
  } catch (error) {
    console.error("Update error:", error);
    res.status(404).json({ error: (error as Error).message });
  }
};

export const deleteEvent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const deleted = await EventService.deleteEvent(Number(id));
    res.json({ message: "Event deleted", deleted });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(404).json({ error: (error as Error).message });
  }
};