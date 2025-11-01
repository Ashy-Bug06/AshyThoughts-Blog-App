import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export const getThoughts = () => axios.get(`${API_BASE}/posts`);
export const getThought = (id) => axios.get(`${API_BASE}/posts/${id}`);
export const addThought = (data) => axios.post(`${API_BASE}/posts`, data);
export const updateThought = (id, data) => axios.put(`${API_BASE}/posts/${id}`, data);
export const deleteThought = (id) => axios.delete(`${API_BASE}/posts/${id}`);
export const exportThoughtsCSV = () =>
  axios.get(`${API_BASE}/posts/export/csv`, { responseType: "blob" });
