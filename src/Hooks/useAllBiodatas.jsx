import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllBiodatas = () => {
    const { user, token } = useContext(MyAuthContext);
    const axiosSecureInstance = useAxiosSecure()

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-biodatas'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/all-users')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useAllBiodatas