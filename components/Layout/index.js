import { Children } from 'react';
// import Navigation from "../Navbar";
import Footer from '../../container/footer';

const Layout = ({ children }) => (
  <div>
    {/* <Navigation /> */}
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
