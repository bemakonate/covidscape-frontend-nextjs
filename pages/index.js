import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { PRODUCTS_QUERY } from '../graphql/queries';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import StyledProductCard from '../components/reusable/styledProductCard';
const Hero = () => {
  return (
    <header className="home-jumbotron">
      <article className="container">
        <h2>Staying safe,<br />doesn't mean staying dry </h2>
        <Link href="/products"><a className="home-jumbotron__shop-link" >Shop Now</a></Link>
      </article>
    </header >
  )
}


const BusinessMsg = () => {
  return (
    <section className="business-msg section-padding">
      <div className="business-msg__container container">
        <h2 className="business-msg__title">Show your style,<br /> and protect others</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo dicta velit, beatae laborum voluptatem, atque aperiam sequi repellat fugit sunt iusto mollitia nobis voluptas! Libero minima dolorum optio nostrum suscipit!</p>
        <Link href="/products"><a className="btn btn-lg btn-dark">View all our products</a></Link>
      </div>
    </section>
  )
}

const ContentBoxs = (props) => {
  return (
    <section className="section-padding">
      <div className="contact-boxs">
        <ContactBox
          bgImg={'/images/couple-walking.jpg'}
          styleClass="store-location">
          <h3>Visit Us</h3>
          <ul className="contact-box-location-list">
            <li className="contact-box-location-item">Head Office</li>
            <li className="contact-box-location-item">16 Boulevard Saint-Germain</li>
            <li className="contact-box-location-item">75005 Paris</li>
          </ul>
          <a className="contact-box-link" href="#">Contact Us</a>
        </ContactBox>

        <ContactBox
          bgImg={'/images/couple-walking.jpg'}
          styleClass="store-media">
          <h3 className="contact-box-title">Follow Our Store Instagram</h3>
          <a className="contact-box-link" href="#">@covidscape</a>
        </ContactBox>
      </div>
    </section>
  )
}

const ContactBox = (props) => {
  return (
    <div className={`contact-box ${props.styleClass}`}>
      <div className="contact-box-container">
        <div className={`contact-box-overlay ${props.overlayClass}`}></div>
        <img src={props.bgImg} className="contact-box-img" />
        <div className="contact-box-content">
          {props.children}
        </div>
      </div>
    </div>
  )
}

const Products = (props) => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="products">
          {props.products && props.products.map((product, index) => {
            return <StyledProductCard
              key={`product-${index}`}
              type="product"
              link={`/products/${product.slug}`}
              title={product.title}
              price={product.price}
              product={product}
              image={product.image} />
          })}
        </div>
      </div>
    </section>
  )
}

const index = () => {
  const { data, loading, error } = useQuery(PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Layout>
      <div className="home">
        <Hero />
        <BusinessMsg />
        <ContentBoxs />
        <Products products={data.products} />
      </div>
    </Layout>
  )
}

export default withApollo(index);
