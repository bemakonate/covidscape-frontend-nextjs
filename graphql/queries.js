import gql from 'graphql-tag';

export const PRODUCTS_QUERY = gql`
query {
    products {
      id
      title
      image{
        formats
      }	
      slug
      price
    }
  }
  
`;

export const CATEGORIES_QUERY = gql`
query {
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

export const SINGLE_PRODUCT_QUERY = gql`
query($id: ID!) {
  product(id: $id) {
    id
    title
    price
    description
    slug
    image {
      formats
    }
  }
}
`;

export const SINGLE_CATEGORY_QUERY = gql`
query GetCategory($id:ID!){
  category(id: $id) {
    name
    products {
      id
      price
      title
      slug
      image {
        formats
      }
    }
    image {
      formats
      url
    }
  }
}
`;


export const PRODUCTS_AND_CATEGORIES_QUERY = gql`
query {
    products {
      id
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


export const HOME_PAGE_QUERY = gql`
query {
    products {
      id
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

    homePage {
      BannerImage {
        formats
      }
    }
      
}
  
`;