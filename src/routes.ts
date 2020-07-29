import { Router } from 'express';

const router = Router();

router.post('/users', (req, res) => {
  return res.status(200).send();
});

export { router };
