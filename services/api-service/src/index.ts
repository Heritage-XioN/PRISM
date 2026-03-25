import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import organisationsRouter from './routes/organisations';
import usersRouter from './routes/users';
import skillsRouter from './routes/skills';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const DUMMY_MODE = process.env.USE_DUMMY_DATA === 'true';

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'api-service',
    dummy_mode: DUMMY_MODE,
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/organisations', organisationsRouter);
app.use('/api/users', usersRouter);
app.use('/api/skills', skillsRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`[server]: http://localhost:${PORT}`);
  console.log(`[server]: DUMMY_MODE = ${DUMMY_MODE}`);
});
