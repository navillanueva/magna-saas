import { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform, ClientPresetConfig } from '@graphql-codegen/client-preset';

const config: CodegenConfig & { noSilentErrors: boolean } = {
  overwrite: true,
  schema: 'src/common/graphql/schema.graphql',
  documents: ['src/pages/**/*.{ts,tsx}'],
  debug: true,
  verbose: true,
  noSilentErrors: true,
  generates: {
    'src/common/graphql/api/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
        persistedDocuments: true,
      } satisfies ClientPresetConfig,
      documentTransforms: [addTypenameSelectionDocumentTransform],
      config: {
        namingConvention: {
          enumValues: 'keep',
        },
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        scalars: {
          DateTime: 'string',
          Decimal: 'Decimal',
        },
        nonOptionalTypename: true, // disabled as __typename is not added automatically when using persisted documents
      },
    },
    'src/common/graphql/schema.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
};

export default config;
