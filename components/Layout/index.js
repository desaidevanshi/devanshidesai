import Footer from '../../container/footer';
import useAbout from '../../hooks/useAbout';
import Navbar from '../Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { data: aboutData } = useAbout();
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {aboutData && <Footer data={aboutData} />}
    </>
  );
};
export default Layout;
