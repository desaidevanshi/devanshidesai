import useSWR from 'swr';

const useEducation = () => useSWR('/education-and-skills-section');
export default useEducation;
