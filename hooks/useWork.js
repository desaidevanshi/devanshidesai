import useSWR from 'swr';

const useWork = () => {
  const { data, error } = useSWR('/portfolio-section');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useWork;
