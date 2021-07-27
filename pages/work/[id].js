import { useRouter } from 'next/router';
import PageLoader from '../../container/PageLoader';
import ProjectDetails from '../../container/ProjectDetails';
import useProjects from '../../hooks/useProjects';

const Work = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useProjects(id);
  if (isLoading) {
    return <PageLoader />;
  }
  return <>{data && <ProjectDetails data={data} />}</>;
};

export default Work;
