import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetSuccessStory = () => {
    const { user } = useContext(MyAuthContext);
    const axiosSecureInstance = useAxiosSecure();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['successstory'],
        queryFn: async () => {
            const res = await axiosSecureInstance.get('/successStory')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useGetSuccessStory