import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { PRODUCTS_QUERY } from '../graphql/queries';

const index = () => {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div>
      This is the homepage
    </div>
  )
}

export default withApollo(index);
