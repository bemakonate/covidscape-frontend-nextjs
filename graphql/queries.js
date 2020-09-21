import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
query {
    products {
      title
      image{
        formats
      }	
      slug
      price
    }
  }
  
`;


export const PRODUCTS_AND_CATEGORIES_QUERY = gql`
query {
    products {
      title
      image{
        formats
      }	
      slug
      price
    }

    categories{
      id
      name
      slug
      products{
        id
      }
      image{
        formats
      }
    }
      


}
  
`;