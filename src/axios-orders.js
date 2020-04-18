import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-79.firebaseio.com/"
});

export default instance;
