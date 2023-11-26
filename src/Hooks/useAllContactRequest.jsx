import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllContactRequest = () => {
    const { user } = useContext(MyAuthContext);
    const axiosSecureInstance = useAxiosSecure();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-contact-request', user?.email],
        queryFn: async () => {
            const res = await axiosSecureInstance.get(`/contact-request?email=${user?.email}`)
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useAllContactRequest