import Head from 'next/head';
import useProjects from '../hooks/useProjects';
import Projects from '../container/Projects';
import PageLoader from '../container/PageLoader';

const ProjectList = () => {
  const { data: projectData, isLoading } = useProjects();
  if (isLoading) {
    return <PageLoader />;
  }
  return (
    <>
      <Head>
        <title>Devanshi Desai | Projects List</title>
        <link rel="icon" href="/icons/logo.png" />
      </Head>
      {projectData && <Projects data={projectData} />}
    </>
  );
};
export default ProjectList;
