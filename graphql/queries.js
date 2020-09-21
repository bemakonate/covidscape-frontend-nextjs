import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
query {
    products {
      title
      image{
        provider_metadata
        formats
      }	
      slug
      price
    }
  }
  
`;