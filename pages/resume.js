import useEducation from '../hooks/useEducation';
import Skills from '../container/Resume';
import PageLoader from '../container/PageLoader';

const Resume = () => {
  const { data: resumeData, isValidating } = useEducation();
  if (isValidating) {
    return <PageLoader />;
  }
  return <>{resumeData && <Skills data={resumeData} />}</>;
};
export default Resume;
