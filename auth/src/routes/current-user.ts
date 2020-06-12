import { Router } from 'express';

const router = Router();

router.get('/api/users/currentuser', (req, res) => {
  res.send('current user route');
});

export { router as currentUserRouter };
