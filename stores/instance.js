import axios from "axios";

export const instance = axios.create({
  //   baseURL: "http://muffinbase.com/accounts/"
  baseURL: "http://localhost:80/accounts/"
});
