import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '../graphql/apollo';
import { HOME_PAGE_QUERY } from '../graphql/queries';
import Layout from '../components/layout/layout';
import { BusinessMsg, Categories, Contact, Hero, Products } from '../components/layout/home';



const Index = ({ data, error }) => {
  // const { data, loading, error } = useQuery(HOME_PAGE_QUERY);


  // if (!loding) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>




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



Index.getInitialProps = async ctx => {
  const client = ctx.apolloClient;
  try {
    const res = await client.query({ query: HOME_PAGE_QUERY });
    const data = res.data;

    return { data }
  } catch (err) {

    return { error: { message: err.message } }
  }



};

export default withApollo(Index);
