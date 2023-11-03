import { gql, useQuery } from '@apollo/client';

const ALLOCATION_QUERY = gql(`
  query allocation {
    allocation {
      id
      amount
    }
  }
`);

const IndexPage = () => {
  const { data } = useQuery(ALLOCATION_QUERY, {});

  return (
    <>
      <h1>Allocation</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default IndexPage;
