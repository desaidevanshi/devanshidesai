/* eslint-disable react/prop-types */
import Head from 'next/head';
import React from 'react';
import { SWRConfig } from 'swr';
import '../styles/_global.scss';
import fetcher from '../lib/fetch';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
