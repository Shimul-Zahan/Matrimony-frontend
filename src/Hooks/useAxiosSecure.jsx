import axios from 'axios'
import React from 'react'

const axiosSecureInstance = axios.create({
  baseURL: 'https://serversite-kappa.vercel.app',
  // baseURL: 'http://localhost:5000',
  withCredentials: true,
})

const useAxiosSecure = () => {
  return axiosSecureInstance;
}

export default useAxiosSecure