import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { HOME_PAGE_QUERY } from '../graphql/queries';
import Layout from '../components/layout/layout';
import { BusinessMsg, Categories, Contact, Hero, Products } from '../components/layout/home';
import initApolloFetch from '../constants/initApolloFetch';



const Index = ({ data, error }) => {
  if (error) return <p>Error: {error.message}</p>

  return (
    <Layout>
      <div className="home">
        <Hero bgImg={data.homePage.BannerImage.formats.large.url} />
        <BusinessMsg />
        <Categories categories={data.categories} />
        <Products products={data.products} />
        <Contact bgImg={data.homePage.BannerImage.formats.medium.url} />
      </div>
    </Layout>

  )
}



Index.getInitialProps = async ctx => {
  const res = await initApolloFetch(ctx, { query: HOME_PAGE_QUERY });
  return res;
};

export default withApollo(Index);
