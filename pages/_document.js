import Document, { Html, Head, Main, NextScript } from 'next/document';
import siteMetadata from '../constants/site-metadata';

class MyDocument extends Document {

    render() {
        const { twitterUsername, siteTitle, siteDesc, siteUrl, image } = siteMetadata;
        return (
            <Html lang="en">
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="image" content={image} />

                    {/*Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:creator" content={twitterUsername} />
                    <meta name="twitter:title" content={siteTitle} />
                    <meta name="twitter:description" content={siteDesc} />
                    <meta name="twitter:image" content={`${siteUrl}${image}`} />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;