import { useMemo } from 'react';
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';

const httpLink = new HttpLink({ uri: '/api/gql' });

export const useApolloClient = () => {
  return useMemo(
    () =>
      new ApolloClient({
        cache: new InMemoryCache({
          addTypename: true,
        }),
        link: ApolloLink.from([httpLink]),
      }),
    [],
  );
};
