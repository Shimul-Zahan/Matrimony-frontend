import axios from 'axios';

const axioPublicGetInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

const useGetAxios = () => {
    return axioPublicGetInstance;
}

export default useGetAxios