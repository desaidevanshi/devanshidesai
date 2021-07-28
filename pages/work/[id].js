import Head from 'next/head';
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
  return (
    <>
      <Head>
        <title>Devanshi Desai | Project Details</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      {data && <ProjectDetails data={data} />}
    </>
  );
};

export default Work;
