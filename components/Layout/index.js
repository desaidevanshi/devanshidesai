import Footer from '../../container/footer';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div>
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
