import { expressLOader } from './loaders';

const bootstrap = async () => {
  const app = expressLOader();

  app.listen(3000);
};

bootstrap();
