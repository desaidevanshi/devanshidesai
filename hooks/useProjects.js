import useSWR from 'swr';

const useProjects = () => useSWR('/portfolio-page');
export default useProjects;
