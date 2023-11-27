import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAllContactRequestData = () => {
    const { user } = useContext(MyAuthContext);
    const axiosSecureInstance = useAxiosSecure();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-contact-request-for-admin'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/contact-request-for-admin')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useAllContactRequestData