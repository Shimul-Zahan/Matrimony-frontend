import axios from 'axios';

const axioPublicGetInstance = axios.create({
    baseURL: 'https://serversite-kappa.vercel.app',
    withCredentials: true,
});

const useGetAxios = () => {
    return axioPublicGetInstance;
}

export default useGetAxios