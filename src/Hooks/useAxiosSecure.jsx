import axios from 'axios'
import React from 'react'

const axiosSecureInstance = axios.create({
  baseURL: 'https://serversite-kappa.vercel.app',
  withCredentials: true,
})

const useAxiosSecure = () => {
  return axiosSecureInstance;
}

export default useAxiosSecure