import axios from "axios";

const objUrl = {
  local: "localhost",
  edgar: "192.168.137.250",
  alumni: "aplicaciones.marianosamaniego.edu.ec",
};
const url = objUrl.local;

const instance = axios.create({
  baseURL: `http://${url}:3000/api`,
  withCredentials: true,
});

const jwt = () => {
  return `Bearer ${window.localStorage.getItem("token")}`;
};

export default instance;
export { jwt };
