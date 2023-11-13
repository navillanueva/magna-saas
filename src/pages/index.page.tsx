import { gql, useQuery } from '@apollo/client';
import { signIn, signOut, useSession } from 'next-auth/react';

const ALLOCATION_QUERY = gql(`
  query allocation {
    allocation {
      id
      amount
    }
  }
`);

async function requestAccount() {
  console.log('inside the button');
}

const IndexPage = () => {
  const { data } = useQuery(ALLOCATION_QUERY, {});
  const { data: session } = useSession();

  const handleLogin = () => {
    signIn('email', { callbackUrl: '/dashboard' });
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <>
      <header className="App-header">
        {!session ? (
          <button onClick={handleLogin}>Log in with Email</button>
        ) : (
          <>
            <p>Welcome, {session.user?.email}</p>
            <button onClick={handleLogout}>Log out</button>
          </>
        )}
        <button onClick={requestAccount}>Connect Wallet</button>
      </header>
      <h1>Allocation</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default IndexPage;
