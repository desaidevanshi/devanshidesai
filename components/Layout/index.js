import Footer from '../../container/footer';
import useAbout from '../../hooks/useAbout';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const { data: aboutData } = useAbout();
  return (
    <div>
      <main>{children}</main>
      {aboutData && <Footer data={aboutData} />}
    </div>
  );
};
export default Layout;
