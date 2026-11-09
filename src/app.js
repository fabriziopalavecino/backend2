import express from 'express';
import { healthCheck } from './controllers/health.controller.js';
import eventRouter from './routes/events.router.js';
import sessionRouter from './routes/sessions.router.js';

const app = express();

app.use(express.json());
app.use('/api/events', eventRouter);
app.use('/api/sessions', sessionRouter);

app.get ('/api/health' , healthCheck);


export default app;