import axios from 'axios';
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();

const instance = axios.create({
    baseURL: publicRuntimeConfig.cms_api_url || 'http://localhost:1337'
});

export default instance;