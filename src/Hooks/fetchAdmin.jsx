import React, { useContext } from 'react'
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';
import usePublicAxios from './usePublicAxios';
import { MyAuthContext } from '../Context/AuthContext';

const fetchAdmin = () => {
    const axioPublicGetInstance = usePublicAxios();
    const { user } = useContext(MyAuthContext);

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get(`/user-role?email=${user?.email}`)
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default fetchAdmin