/* eslint-disable react/prop-types */
import React from 'react';
import { SWRConfig } from 'swr';
import '../styles/_global.scss';
import fetcher from '../lib/fetch';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
