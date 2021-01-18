import axios from 'axios';

// const apiKey = process.env.OMDB_API;
const apiKey = "f05a3f0";

export const authAxios = axios.create();

authAxios.interceptors.request.use(config => {
    config.params = { ...config.params, apiKey: apiKey, type: 'movie' }
    return config;
});
