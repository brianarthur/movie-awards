import axios from 'axios';

const apiKey = process.env.OMDB_API;

export const authAxios = axios.create();

authAxios.interceptors.request.use(config => {
    config.params = { ...config.params, apiKey: apiKey, type: 'movie' }
    return config;
});
