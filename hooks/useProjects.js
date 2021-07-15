/* eslint-disable arrow-parens */
import useSWR from 'swr';

const useProjects = id => useSWR(id ? `/projects/${id}` : '/projects');
export default useProjects;
