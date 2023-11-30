import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useStatistics = () => {
    // const { user } = useContext(MyAuthContext);
    const axiosSecureInstance = useAxiosSecure();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['statistics'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/statistics')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useStatistics