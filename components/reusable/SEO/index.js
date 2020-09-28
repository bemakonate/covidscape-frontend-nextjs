// import React from 'react';


// const SEO = ({ title, description }) => {
//     const { site: { siteMetadata } } = useStaticQuery(query);
//     const { siteTitle, siteDesc, siteUrl, image, twitterUsername } = siteMetadata;
//     return (
//         <Helmet title={`${title} | ${siteTitle}`} htmlAttributes={{ lang: "en" }}>
//             <meta name="description" content={description || siteDesc} />
//             <meta name="image" content={image} />



//         </Helmet>
//     );
// }



// export default SEO


import Head from 'next/head';
import siteMetadata from '../../../constants/site-metadata';

const SEO = ({ title, description }) => {
  const { siteTitle, siteDesc } = siteMetadata;
  return (
    <Head>
      <title> {title} | {siteTitle}</title>
      <meta name="description" content={description || siteDesc} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

  )
}

export default SEO;