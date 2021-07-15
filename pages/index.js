import Home from '../container/home';
import About from '../container/about';
import Services from '../container/services';
import Work from '../container/work';
import Contact from '../container/contact';
import Education from '../container/education';
import useBanner from '../hooks/useBanner';
import useAbout from '../hooks/useAbout';
import useServices from '../hooks/useServices';
import useEducation from '../hooks/useEducation';
import useWork from '../hooks/useWork';
import useContact from '../hooks/useContact';

export default function main() {
  const { data: bannerData } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: servicesData } = useServices();
  const { data: educationData } = useEducation();
  const { data: workData } = useWork();
  const { data: contactData } = useContact();

  return (
    <>
      {bannerData && <Home data={bannerData} />}
      {aboutData && <About data={aboutData} />}
      {servicesData && <Services data={servicesData} />}
      {educationData && <Education data={educationData} />}
      {workData && <Work data={workData} />}
      {contactData && <Contact data={contactData} />}
    </>
  );
}
