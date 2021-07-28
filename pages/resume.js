import Head from 'next/head';
import useEducation from '../hooks/useEducation';
import Skills from '../container/Resume';
import PageLoader from '../container/PageLoader';

const Resume = () => {
  const { data: resumeData, isLoading } = useEducation();
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <Head>
        <title>Devanshi Desai | Resume page</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {resumeData && <Skills data={resumeData} />}
    </>
  );
};
export default Resume;
