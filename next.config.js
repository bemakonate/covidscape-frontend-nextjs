module.exports = {
    env: {
        CMS_API_URL: process.env.CMS_API_URL,
        CMS_GRAPHQL_URL: process.env.CMS_GRAPHQL_URL,
    },
    publicRuntimeConfig: {
        cms_api_url: process.env.CMS_API_URL,
        cms_graphql_url: process.env.CMS_GRAPHQL_URL,
    },
}