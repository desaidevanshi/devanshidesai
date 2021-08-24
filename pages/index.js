import Head from 'next/head';
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
import PageLoader from '../container/PageLoader';
// import Testimonial from '../container/testimonial';

export default function main() {
  const { data: bannerData, isLoading } = useBanner();
  const { data: aboutData } = useAbout();
  const { data: servicesData } = useServices();
  const { data: educationData } = useEducation();
  const { data: workData } = useWork();
  const { data: contactData } = useContact();

  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <Head>
        <title>Devanshi Desai | Home page</title>
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      {bannerData && <Home data={bannerData} />}
      {aboutData && <About data={aboutData} />}
      {servicesData && <Services data={servicesData} />}
      {educationData && <Education data={educationData} />}
      {workData && <Work data={workData} />}
      {contactData && <Contact data={contactData} />}
    </>
  );
}
