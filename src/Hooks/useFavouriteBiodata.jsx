import React, { useContext } from 'react'
import useGetAxios from './useGetAxios'
import { MyAuthContext } from '../Context/AuthContext';
import { useQuery } from '@tanstack/react-query';

const useFavouriteBiodata = () => {

    const axioPublicGetInstance = useGetAxios();
    const { user } = useContext(MyAuthContext);

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['favourite-biodatas', user?.email],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get(`favourite-biodatas?email=${user.email}`)
            return await res.data
        }
    })
    return { data, refetch, isLoading }
}

export default useFavouriteBiodata