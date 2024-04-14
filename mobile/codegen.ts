
import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  documents: './src/graphql/**/*.{ts,tsx}',
  generates: {
    'src/graphql/generated/schema.ts': {
      plugins: [
        'typescript-operations',
        'typescript',
        'typescript-react-apollo',
      ],
    },
  },
  overwrite: true,
  schema: process.env.API_SERVER_URL,
};

export default config;
