import Footer from '../../container/footer';
import PageLoader from '../../container/PageLoader';
import useAbout from '../../hooks/useAbout';
import Navbar from '../Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { data: aboutData } = useAbout();
  return (
    <>
      <PageLoader />
      <Navbar />
      <main>{children}</main>
      {aboutData && <Footer data={aboutData} />}
    </>
  );
};
export default Layout;
