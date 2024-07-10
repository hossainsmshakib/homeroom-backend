import express, { Express, Request, Response } from 'express';
import sequelize from '../models';
import config from '../config';
import signupRouter from '../routers/signuprouter';
import loginRouter from '../routers/loginrouter';

const app: Express = express();
app.use(express.json());

app.use('/api', signupRouter);
app.use('/api', loginRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('HELLO FROM EXPRESS + TS!!!!');
});

app.listen(config.PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server is running on port ${config.PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
