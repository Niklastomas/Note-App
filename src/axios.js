import axios from "axios";

const instance = axios.create({
  baseURL: "https://noteapp-backend.herokuapp.com",
});

export default instance;
