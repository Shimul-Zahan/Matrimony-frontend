import React from 'react'
import axios from 'axios';

const axioPublicInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

const usePublicAxios = () => {
  return axioPublicInstance;
}

export default usePublicAxios