import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';

const useStatistics = () => {
    const { user } = useContext(MyAuthContext);
    const axioPublicGetInstance = useGetAxios();
    // console.log(user?.email)

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['statistics'],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get('/statistics')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useStatistics