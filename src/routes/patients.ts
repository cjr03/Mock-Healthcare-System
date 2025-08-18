import { Router } from 'express';
const router = Router();

router.get('/', (_req, res) => {
  res.json([
    { id: '1', name: 'Alice Smith' },
    { id: '2', name: 'Bob Johnson' },
  ]);
});

export default router;
