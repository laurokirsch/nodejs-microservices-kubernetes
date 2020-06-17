import { Router } from 'express';

import { currentUser } from '@lkticketing/common';

const router = Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
