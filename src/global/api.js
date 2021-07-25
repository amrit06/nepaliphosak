import axios from "axios";

const baseAPIURL = "http://localnep.com/api/";

/* 
    SESSION_DOMAIN=localhost
    SANCTUM_STATEFUL_DOMAINS=localhost
    we didn't needed this because in laravel we used above
    axios.defaults.withCredentials = true;
    axios.get(baseURL + "sanctum/csrf-cookie").then((response) => {
      signup goes here
    }); */

// post response
/* export class User {
  constructor(name, token, role) {
    this.name, this.token, this.role
  }
}
 */

export const getUser = () => {
  let data = sessionStorage.getItem("userSession");
  const user = { name: "", token: "", role: "" };

  if (data) {
    data = JSON.parse(data).data;

    user.name = data.name;
    user.token = data.token;
    user.role = data.role;
  }
  return user;
};

export const getProduct = async () => {
  return fetch(baseAPIURL + "product/" + "1", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const api = async ({
  url = "",
  method = "GET",
  authToken = null,
  data = null,
}) => {
  const domain = "http://localnep.com/api/";
  const headers = {
    Accept: "application/json",
    "Content-type": "application/json",
  };

  if (authToken) {
    headers["Authorization"] = "Bearer " + authToken;
  }

  const options = {
    method: method,
    headers: headers,
  };

  if (data) {
    options["body"] = data;
  }

  return fetch(domain + url, options).then((element) => element.json());
};
