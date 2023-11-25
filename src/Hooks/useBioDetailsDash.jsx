import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext'
import useGetAxios from './useGetAxios';

const useBioDetailsDash = () => {

    const { user } = useContext(MyAuthContext);
    const axioPublicGetInstance = useGetAxios();
    // console.log(user?.email)

    const { data, refetch, isLoading } = useQuery({
        queryKey: ['bioDetails', user?.email],
        queryFn: async () => {
            const res = await axioPublicGetInstance.get(`/view-biodata?email=${user?.email}`)
            return await res.data
        }
    })

    return { data, refetch, isLoading }
}

export default useBioDetailsDash