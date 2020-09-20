import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { graphql, useStaticQuery } from "gatsby";
import * as  cartActions from '../../store/cart/actions';
import * as layoutActions from '../../store/layout/actions';


import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
{
    products {
        id
        description
        price
        slug
        title
        image {
            formats
            provider_metadata
        }
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
        provider_metadata
      }
    }
}
`;


const RootElmt = (props) => {
  // const { onGetUserCart, onSetProductsGlobalState, onSetCategoriesGlobalState } = props;
  // const [fetchedProducts, setFetechedProducts] = useState(null);
  // const [fetchedCategories, setFetchedCategories] = useState(null);
  // const { loading: qLoading, error: qError, data: qData } = useQuery(query);
  // let pagesJSX = <p>Loading...</p>;

  // useEffect(() => console.log('App loaded'), [])

  // useEffect(() => {
  //   if (!qLoading) {
  //     if (qError) {
  //       //show there was an error getting products
  //     } else {
  //       setFetechedProducts(qData.products);
  //       setFetchedCategories(qData.categories);
  //     }
  //   }
  // }, [qLoading])


  // useEffect(() => {
  //   if (fetchedProducts && !qLoading) {
  //     onSetProductsGlobalState({ products: fetchedProducts });
  //     // onGetUserCart(newProducts)
  //   }
  // }, [fetchedProducts, qLoading]);


  // useEffect(() => {
  //   if (fetchedCategories && !qLoading) {
  //     onSetCategoriesGlobalState({ categories: fetchedCategories });
  //   }
  // }, [fetchedCategories, qLoading])



  // if (fetchedProducts && fetchedCategories) {
  //   pagesJSX = props.children
  // }

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
};


const mapDispatchToProps = dispatch => {
  return {
    onSetProductsGlobalState: ({ products }) => dispatch(layoutActions.setProductsGlobalState({ products })),
    onSetCategoriesGlobalState: ({ categories }) => dispatch(layoutActions.setCategoriesGlobalState({ categories })),
    onGetUserCart: (products) => dispatch(cartActions.getUserCart(products)),
  }
}

export default connect(null, mapDispatchToProps)(RootElmt);