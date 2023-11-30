import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';

const useStatistics = () => {
    const { user } = useContext(MyAuthContext);
    const axioPublicGetInstance = useGetAxios();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['statistics', user?.email],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get('/statistics')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useStatistics