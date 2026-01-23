import axios from "axios";

const API = "http://localhost:8000";

export const submitCareerForm = (data: any) => {
  return axios.post(`${API}/career`, data);
};
