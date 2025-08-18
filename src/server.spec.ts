import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import patientsRouter from './routes/patients';

const app = express();
app.use('/patients', patientsRouter);

describe('Patients API', () => {
  it('GET /patients returns list', async () => {
    const res = await request(app).get('/patients');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
