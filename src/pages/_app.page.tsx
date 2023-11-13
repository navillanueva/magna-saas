import 'reflect-metadata';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useApolloClient } from '@/common/graphql/client';
import { SessionProvider } from 'next-auth/react';

// wrapping the app in an apollo client instance so the client can make API calls

const AppPage = ({ Component, pageProps }: AppProps) => {
  const apollo = useApolloClient();

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
};

export default AppPage;
