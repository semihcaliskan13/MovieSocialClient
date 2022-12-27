import axios from "axios";

export default axios.create({
  baseURL: "https://localhost:7180/api",
  withCredentials: true,
  headers: {
    
    // "Content-type": "application/json"
  }
});