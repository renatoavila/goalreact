import axios from "axios";

const Api = axios.create({
  baseURL: "https://goalapifiap.herokuapp.com/api/",
});

export default Api;