import useSWR from 'swr';

const useCertificates = () => {
  const { data, error } = useSWR('/certificates');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useCertificates;
