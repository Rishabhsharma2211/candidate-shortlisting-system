import axios from "axios";

const API = axios.create({
  baseURL: "http://candidate-shortlisting-system-fm9e.onrender.com/api",
});

export default API;