import axios from "axios";

const API = "http://localhost:8000";

export const submitContactForm = (data: any) => {
  return axios.post(`${API}/contact`, data);
};
