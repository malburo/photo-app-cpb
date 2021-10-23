import axios from 'axios';
import StorageKeys from 'constants/storage-key';
import queryString from 'query-string';

const request = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(StorageKeys.ACCESS_TOKEN);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error.response.data.error || error.message)
);

request.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data.data;
    }
    return response;
  },
  async (error) => {
    if (error.response.status === 403) {
      localStorage.removeItem(StorageKeys.ACCESS_TOKEN);
      window.location.replace('/auth/login');
    }
    if (error.response.status === 404) {
      window.location.replace('/404');
    }
    return Promise.reject(error.response.data.error || error.message);
  }
);
export default request;
