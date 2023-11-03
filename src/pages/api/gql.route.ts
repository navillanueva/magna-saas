import 'reflect-metadata';
import { createYoga } from 'graphql-yoga';
import type { NextApiHandler } from 'next';
import { createGraphQLSchema, CreateSchemaOptions, graphqlSchemaOptions } from '@/api/graphql/schema';

export const graphqlEndpoint = '/api/gql';

let yogaGraphQLHandler: NextApiHandler;

function createGraphQLHandler(schemaOptions: CreateSchemaOptions): NextApiHandler {
  return async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.end();
      return;
    }

    if (!yogaGraphQLHandler) {
      const schema = await createGraphQLSchema(schemaOptions);

      yogaGraphQLHandler = await createYoga({
        schema,
        maskedErrors: true,
        graphqlEndpoint,
        graphiql: true,
        logging: true,
      });
    }

    return yogaGraphQLHandler(req, res);
  };
}

const handler = createGraphQLHandler(graphqlSchemaOptions);

export default handler;

export const config = {
  api: {
    bodyParser: false,
  },
};
