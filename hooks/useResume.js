import useSWR from 'swr';

const useResume = () => useSWR('/resume-page');
export default useResume;
