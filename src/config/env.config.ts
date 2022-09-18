import { config } from 'dotenv';

interface IEnv {
  PORT: number;
  HTTPS: boolean;
  HTTPS_PORT: number;
}

config();

export const EnvConfig: IEnv = JSON.parse(JSON.stringify(process.env));
