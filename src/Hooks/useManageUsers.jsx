import React from 'react'
import usePublicAxios from './usePublicAxios'

const axioPublicInstance = usePublicAxios();

const userDataPost = (userInfo) => {
    return axioPublicInstance.post('/manage-users', userInfo);
}

const useManageUsers = () => {
    return userDataPost;
}

export default useManageUsers