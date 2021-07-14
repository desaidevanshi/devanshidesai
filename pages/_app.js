/* eslint-disable react/prop-types */
import '../styles/_global.scss';
import { SWRConfig } from 'swr';
import fetcher from '../lib/fetch';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </>
  );
}

export default MyApp;
