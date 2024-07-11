import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => axiosInstance.get<T[]>(this.endpoint).then((res) => res.data);

  post = (data: T) =>
    axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);

  patch = (eventId: string, data: T) =>
    axiosInstance
      .patch<T>(`${this.endpoint}/${eventId}`, data)
      .then((res) => res.data);
}

export default ApiClient;
