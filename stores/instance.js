import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://muffinbase.com/accounts/"
  // baseURL: "https://localhost:80/accounts/"
  baseURL: "http://192.168.100.186:80/"
});
