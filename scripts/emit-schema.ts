import 'reflect-metadata';

import { emitSchemaDefinitionFile } from 'type-graphql';
import path from 'path';
import { createGraphQLSchema, graphqlSchemaOptions } from '../src/api/graphql/schema';

async function main() {
  const schema = await createGraphQLSchema(graphqlSchemaOptions);

  const schemaPath = path.resolve(__dirname, '../src/common/graphql', 'schema.graphql');
  await emitSchemaDefinitionFile(schemaPath, schema);

  console.log(`Schema generated successfully into '${schemaPath}'`);
}

main();
