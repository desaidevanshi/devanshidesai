/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: Number(process.env.NEXT_PUBLIC_API_TIMEOUT),
});
// Add a request interceptor
instance.interceptors.request.use(
  config =>
    // Do something before request is sent
    config,
  error =>
    // Do something with request error
    Promise.reject(error),
);

// Add a response interceptor
instance.interceptors.response.use(
  response =>
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response,
  error =>
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Promise.reject(error),
);

export default instance;
