import axios, { jwt } from "./axios.js";

const loginRequest = async (user) => await axios.post("/auth/login", user);

const verifyAccessToken = async () =>
  await axios.get("/auth/verifytoken", {
    headers: {
      Authorization: jwt(),
    },
  });

export { loginRequest, verifyAccessToken };
