import express from 'express';
import healthRouter from './routes/health.router.js';
import sessionRouter from './routes/sessions.router.js';

const app = express();

app.use(express.json());
app.use('/api/health', healthRouter);
app.use('/api/sessions', sessionRouter);


export default app;