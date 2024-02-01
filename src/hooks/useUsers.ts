import { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

interface User {
  email: string,
  password: string,
}

const useUsers = (endpoint: string, deps?: any) => {
  const [data, setData] = useState<User>()
  useEffect(() => {
    apiClient
      .get<User>(endpoint)
      .then((res) => setData(res.data))
  }, deps ? deps : [])
  return data
}

export default useUsers;