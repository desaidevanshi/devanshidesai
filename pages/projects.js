import useProjects from '../hooks/useProjects';
import Projects from '../container/Projects';
import PageLoader from '../container/PageLoader';

const ProjectList = () => {
  const { data: projectData, isValidating } = useProjects();
  if (isValidating) {
    return <PageLoader />;
  }
  return <>{projectData && <Projects data={projectData} />}</>;
};
export default ProjectList;
