import axios from "axios";

export function setAuthHeadersFromStorage() {
  axios.defaults.headers.common["Authorization"] = `Bearer ${retrieveJwt()}`;
}

axios.interceptors.response.use(
  function (response) {
    if (response.headers.authorization) {
      storeJwt(response.headers.authorization);
      setAuthHeadersFromStorage();
    }

    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.location.href = "/blog/login";
    }
    return Promise.reject(error);
  }
);

export function login(email: string, password: string) {
  axios
    .post("http://localhost:8080/login", { email, password })
    .then((response) => {
      const { token, userId } = response.data;
      storeJwt(token);
      localStorage.setItem("userId", userId);
      setAuthHeadersFromStorage();
    })
    .catch((err) => console.log({ err }));
}

// currently disabled on the backend
export function signup(name: string, email: string, password: string) {
  fetch("http://localhost:8080/signup", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  })
    .then((res) => {
      console.log({ res });
    })
    .catch((err) => console.log({ err }));
}

function storeJwt(token: string) {
  localStorage.setItem("token", token);
}

function retrieveJwt() {
  return localStorage.getItem("token");
}
