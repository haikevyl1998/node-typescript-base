import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

export const expressLOader = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use(helmet());

  app.use(cors({ credentials: true }));

  app.use(cookieParser());

  return app;
};
