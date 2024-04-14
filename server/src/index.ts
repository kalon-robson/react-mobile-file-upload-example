import { createServer } from 'http';
import dotenv from 'dotenv';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import cors from 'cors';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServer } from '@apollo/server';
import { makeExecutableSchema } from '@graphql-tools/schema';
import helmet from 'helmet';
import { graphqlUploadExpress } from 'graphql-upload-minimal';
import { logger } from './lib/logger/index.js';
import { typeDefs, resolvers } from './graphql/index.js';

dotenv.config();

const isDev = process.env.NODE_ENV === 'development';

const mount = async (app: Application) => {
  try {
    const schema = makeExecutableSchema({ resolvers, typeDefs });

    const httpServer = createServer(app);

    const corsOrigin = isDev ? [`${process.env.CLIENT_URL}`, 'https://studio.apollographql.com'] : process.env.CLIENT_URL;
    app.use(cookieParser(process.env.SECRET));
    app.use(express.json({ limit: '10mb' }));
    app.use(cors({
      credentials: true,
      origin: corsOrigin,
    }));
    app.use(helmet());

    const server = new ApolloServer({
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),
      ],
      schema,
    });

    await server.start();

    app.use(
      '/api',
      graphqlUploadExpress({
        maxFileSize: 1000000000,
        maxFiles: 2000,
      }),
      expressMiddleware(server, {
        context: async ({ req, res }) => ({ req, res }),
      }),
    );

    httpServer.listen(process.env.PORT, () => {
      logger.info(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    logger.error(err);
  }
};

mount(express());
