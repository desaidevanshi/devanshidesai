import useEducation from '../hooks/useEducation';
import Skills from '../container/Resume';
import PageLoader from '../container/PageLoader';

const Resume = () => {
  const { data: resumeData, isLoading } = useEducation();
  if (isLoading) {
    return <PageLoader />;
  }
  return <>{resumeData && <Skills data={resumeData} />}</>;
};
export default Resume;
