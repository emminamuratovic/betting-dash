import express from 'express';

import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} from '../controllers/eventController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/', getEvents);
router.post('/', authenticate, createEvent);
router.put('/:id', authenticate, updateEvent);
router.delete('/:id', authenticate, deleteEvent);

export default router;