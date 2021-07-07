/* eslint-disable react/prop-types */
import '../styles/_global.scss';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;
