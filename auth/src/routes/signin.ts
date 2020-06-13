import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { validateRequest } from '../middlewares/validate-request';
import { RequestValidationError } from './../errors/request-validation-error';

const router = Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('You must supply a password'),
  ],
  validateRequest,
  (req: Request, res: Response) => {}
);

export { router as signinRouter };
