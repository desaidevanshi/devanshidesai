import useEducation from '../hooks/useEducation';
import Skills from '../container/Resume';

const Resume = () => {
  const { data: resumeData } = useEducation();
  return <>{resumeData && <Skills data={resumeData} />}</>;
};
export default Resume;
