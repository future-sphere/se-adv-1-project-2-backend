import { Prisma, PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
import baseRouter from './routes';

export const prisma = new PrismaClient();
export const app = express();

app.use(express.json());

app.use(baseRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.json({
    error: err.message,
  });
});

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);
