import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { PRODUCTS_AND_CATEGORIES_QUERY } from '../graphql/queries';
import Layout from '../components/layout/layout';
import { BusinessMsg, Categories, Contact, Hero, Products } from '../components/layout/home';



const index = () => {
  console.log(process.env.CMS_API_URL);
  const { data, loading, error } = useQuery(PRODUCTS_AND_CATEGORIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Layout>
      <div className="home">
        <Hero bgImg='/images/couple-walking.jpg' />
        <BusinessMsg />
        <Categories categories={data.categories} />
        <Products products={data.products} />
        <Contact />
      </div>
    </Layout>
  )
}

export default withApollo(index);
