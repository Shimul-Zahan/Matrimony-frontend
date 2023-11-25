import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const usePremiumRequest = () => {
    const { user } = useContext(MyAuthContext);
    const axiosSecureInstance = useAxiosSecure()

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['premium-request'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/manage-premium-request')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default usePremiumRequest