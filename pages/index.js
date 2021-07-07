import Home from '../container/home';
import About from '../container/about';
import Services from '../container/services';
import Work from '../container/work';
import Contact from '../container/contact';
import Education from '../container/education';
import Navbar from '../components/Navbar';

export default function main() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Education />
        <Work />
        <Contact />
      </div>
    </>
  );
}
