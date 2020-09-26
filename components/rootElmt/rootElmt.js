import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as  cartActions from '../../store/cart/actions';

import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../../graphql/apollo';
import { PRODUCTS_AND_CATEGORIES_QUERY } from '../../graphql/queries';



const RootElmt = (props) => {

  const { onGetUserCart } = props;
  const { data, loading, error } = useQuery(PRODUCTS_AND_CATEGORIES_QUERY);

  useEffect(() => console.log('App loaded'), [])

  useEffect(() => {
    if (!loading && data) {
      if (error) {
        //show there was an error getting products
      } else {
        onGetUserCart(data.products);
      }
    }
  }, [loading]);


  return props.children;
};


const mapDispatchToProps = dispatch => {
  return {
    onGetUserCart: (products) => dispatch(cartActions.getUserCart(products)),
  }
}

export default withApollo(connect(null, mapDispatchToProps)(RootElmt));