import { createContainers } from '../lib/azureBlob/index.js';
import { seedTest } from './test/index.js';

export const seed = async () => {
  await createContainers();
  await seedTest();
};
seed();
