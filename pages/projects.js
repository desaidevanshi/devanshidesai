import useProjects from '../hooks/useProjects';
import Projects from '../container/Projects';
import PageLoader from '../container/PageLoader';

const ProjectList = () => {
  const { data: projectData, isLoading } = useProjects();
  if (isLoading) {
    return <PageLoader />;
  }
  return <>{projectData && <Projects data={projectData} />}</>;
};
export default ProjectList;
