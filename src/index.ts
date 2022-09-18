import { appDataSource } from './config';
import { expressLOader } from './loaders';

const bootstrap = async () => {
  await appDataSource.initialize();

  const app = expressLOader();

  app.listen(3000);
};

bootstrap();
