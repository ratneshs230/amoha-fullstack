import axios from "axios";

const API = "http://localhost:8000";

export const loginUser = (data: any) => {
  return axios.post(`${API}/login`, data);
};
