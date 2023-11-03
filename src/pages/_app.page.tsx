import 'reflect-metadata';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import { useApolloClient } from '@/common/graphql/client';

const AppPage = ({ Component, pageProps }: AppProps) => {
  const apollo = useApolloClient();

  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default AppPage;
