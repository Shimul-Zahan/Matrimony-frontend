import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';

const useAllBiodatas = () => {
    const { user, token } = useContext(MyAuthContext);
    const axioPublicGetInstance = useGetAxios();

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['all-biodatas'],
        enabled: token,
        queryFn: async () => {
            const res = await axioPublicGetInstance.get('/all-users')
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useAllBiodatas