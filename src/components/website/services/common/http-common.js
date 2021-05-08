import axios from "axios";

export default axios.create({
  // baseURL: "https://handiworkapi.herokuapp.com/api",
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-type": "application/json"
  }
});