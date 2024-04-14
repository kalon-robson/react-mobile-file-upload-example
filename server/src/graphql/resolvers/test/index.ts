import { IResolvers } from '@graphql-tools/utils';
import fs from 'fs';
import { Upload } from 'graphql-upload-minimal';
import { maindb } from '../../../prisma/index.js';

export const testResolvers: IResolvers = {
  Mutation: {
    uploadFile: async (_: unknown, { file }: { file: Upload }, ___: unknown): Promise<boolean> => {
      try {
        const fileStream = file.file?.createReadStream();

        if (!fileStream) {
          throw new Error('No file stream');
        }

        const id = Math.floor(Math.random() * 1000000000).toString();

        const path = `./uploads/${id}-${file.file?.filename}`;
        const writeStream = fs.createWriteStream(path);
        fileStream.pipe(writeStream);

        return true;
      } catch (err) {
        throw new Error(`Failed to upload file: ${err}`);
      }
    },
  },
  Query: {
    test: async (_: unknown, __: unknown, ___: unknown): Promise<string> => {
      try {
        const test = await maindb.test.findFirst();

        if (!test) {
          throw new Error('Test not found');
        }

        return test.text;
      } catch (err) {
        throw new Error(`Failed to query test: ${err}`);
      }
    },
  },
};
