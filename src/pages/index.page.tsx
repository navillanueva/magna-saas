import { gql, useQuery } from '@apollo/client';

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

  return (
    <>
      <header className="App-header">
        <button onClick={requestAccount}>Connect Wallet</button>
      </header>
      <h1>Allocation</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default IndexPage;
