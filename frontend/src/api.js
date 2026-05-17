import axios from "axios";

const API = axios.create({
  baseURL: "https://candidate-shortlisting-system-fm9e.onrender.com/api",
});

export default API;