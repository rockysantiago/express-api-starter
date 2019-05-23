import express from 'express';
import pino from 'express-pino-logger';
import { commonMiddleware, errorHandlerMiddleware } from './middlewares';
import { pokemon } from './routes';

const app = express();

app.use(commonMiddleware);
app.use(pino());
app.use('/pokemon', pokemon);
app.use(errorHandlerMiddleware);

export default app;
