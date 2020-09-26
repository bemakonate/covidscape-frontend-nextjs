import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { HOME_PAGE_QUERY } from '../graphql/queries';
import Layout from '../components/layout/layout';
import { BusinessMsg, Categories, Contact, Hero, Products } from '../components/layout/home';


const Index = () => {
  const { data, loading, error } = useQuery(HOME_PAGE_QUERY);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <div className="home">
        <Hero bgImg={data.homePage.BannerImage.formats.large.url} />
        <BusinessMsg />
        <Categories categories={data.categories} />
        <Products products={data.products} />
        <Contact />
      </div>
    </Layout>
  )
}


export default withApollo(Index);
