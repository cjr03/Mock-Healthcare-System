import { Router } from 'express';
const router = Router();

router.get('/', (_req, res) => {
  res.json([
    { id: '1', patientId: '1', date: '2025-08-20T10:00:00Z', medication: 'Cisplatin', pharmacy: 'CVS' },
    { id: '2', patientId: '2', date: '2025-08-22T14:00:00Z', medication: 'Doxorubicin', pharmacy: 'Walgreens' },
  ]);
});

export default router;
