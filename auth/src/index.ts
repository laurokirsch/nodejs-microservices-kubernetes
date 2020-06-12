import express, { json } from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';

import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();
app.use(json());

app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(currentUserRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

// startup IIF
(async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connected to MongoDB');
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000!!!!');
  });
})();
