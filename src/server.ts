import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import patientsRouter from './routes/patients';
import appointmentsRouter from './routes/appointments';
import pharmacyRouter from './routes/pharmacy';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(cors());
app.use(express.json());

const specPath = path.join(__dirname, '..', 'openapi', 'infusion-api.yaml').replace('dist', '');
const yaml = fs.readFileSync(specPath, 'utf8');
const swaggerDocument = require('js-yaml').load(yaml);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (_req, res) => {
  res.send('Mock Healthcare System API running — visit /docs for API documentation.');
});

app.use('/patients', patientsRouter);
app.use('/appointments', appointmentsRouter);
app.use('/notify-pharmacy', pharmacyRouter);

app.get('/healthz', (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}\nDocs: http://localhost:${PORT}/docs`));
