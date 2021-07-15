import useProjects from '../hooks/useProjects';
import Projects from '../container/Projects';

const ProjectList = () => {
  const { data: projectData } = useProjects();
  return <>{projectData && <Projects data={projectData} />}</>;
};
export default ProjectList;
