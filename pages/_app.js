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
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
