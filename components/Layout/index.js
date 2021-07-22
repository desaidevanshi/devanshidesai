import dynamic from 'next/dynamic';
import Footer from '../../container/footer';
import PageLoader from '../../container/PageLoader';
import useAbout from '../../hooks/useAbout';
import Navbar from '../Navbar';

const DynamicComponentWithCustomLoading = dynamic({ loading: <PageLoader /> });

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { data: aboutData } = useAbout();
  return (
    <>
      <DynamicComponentWithCustomLoading />
      <Navbar />
      <main>{children}</main>
      {aboutData && <Footer data={aboutData} />}
    </>
  );
};
export default Layout;
