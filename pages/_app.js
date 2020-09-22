// import '../styles/globals.css'
import { Provider } from 'react-redux'
import { useStore } from '../store/store-helpers'
import '../styles/main.scss';
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

const MyApp = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}

export default MyApp
