import express from 'express';
import cors from 'cors';

import eventRoutes from './routes/eventRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);

export default app;