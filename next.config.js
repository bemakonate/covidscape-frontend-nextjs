module.exports = {
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 5,
    },
    env: {
        CMS_API_URL: process.env.CMS_API_URL,
        CMS_GRAPHQL_URL: process.env.CMS_GRAPHQL_URL,
        MAPBOX_TOKEN: process.env.MAPBOX_TOKEN,
        SITE_URL: process.env.SITE_URL,
    }
}