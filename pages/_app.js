// import '../styles/globals.css'
import { Provider } from 'react-redux'
import { combineReducers } from 'redux'
import { useStore } from '../store/store-helpers'

import cartReducer from '../store/cart/reducer';
import layoutReducer from '../store/layout/reducer';

const reducer = combineReducers({
  cart: cartReducer,
  layout: layoutReducer,
})

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(reducer, pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}

export default MyApp
