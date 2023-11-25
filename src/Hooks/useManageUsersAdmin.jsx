import React, { useContext } from 'react'
import { MyAuthContext } from '../Context/AuthContext';
import useGetAxios from './useGetAxios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useManageUsersAdmin = () => {
  const { user } = useContext(MyAuthContext);
  // const axioPublicGetInstance = useGetAxios();
  const axiosSecureInstance = useAxiosSecure()
  // console.log(user?.email)

  const { data, refetch, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecureInstance.get('/manage-users')
      return await res.data
    }
  })

  return { data, refetch, isLoading }
}

export default useManageUsersAdmin