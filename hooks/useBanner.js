import useSWR from 'swr';

const useBanner = () => {
  const { data, error } = useSWR('/banner-section');
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
export default useBanner;
