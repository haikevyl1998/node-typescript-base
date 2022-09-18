import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'home',
  password: 'secret',
  database: 'my-app',
  logging: true,
  synchronize: true,
  entities: [__dirname + '/src/entities/*.entity.ts'],
});
