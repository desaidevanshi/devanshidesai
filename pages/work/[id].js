import { useRouter } from 'next/router';
import ProjectDetails from '../../container/ProjectDetails';
import useProjects from '../../hooks/useProjects';

const Work = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useProjects(id);
  return <>{data && <ProjectDetails data={data} />}</>;
};

export default Work;
