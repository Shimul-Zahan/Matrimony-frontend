import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import usePublicAxios from './usePublicAxios';
import { MyAuthContext } from '../Context/AuthContext';

const fetchAdmin = () => {
    const axioPublicGetInstance = usePublicAxios();
    const { user } = useContext(MyAuthContext);

    const { data: admin, refetch, isLoading } = useQuery({
        queryKey: ['admin', user?.email],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get(`/user-role?email=${user?.email}`)
            console.log(res.data)
            return await res.data
        }
    })
    return { admin, refetch, isLoading }
}

export default fetchAdmin