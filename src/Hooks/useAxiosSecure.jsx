import axios from 'axios'
import React from 'react'

const axiosSecureInstance = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
})

const useAxiosSecure = () => {
  return axiosSecureInstance;
}

export default useAxiosSecure