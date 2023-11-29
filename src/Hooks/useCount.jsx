import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';

const useCount = () => {
    const { user, token } = useContext(MyAuthContext);
    const axioPublicGetInstance = useGetAxios();

    const { data: count, refetch, isLoading } = useQuery({
        queryKey: ['all-users-count'],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get('/count')
            return await res.data
        }
    })

    return { count, refetch, isLoading }
}

export default useCount