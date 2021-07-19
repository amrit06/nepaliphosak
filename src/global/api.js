import React from "react";
import axios from "axios";

const baseURL = "http://localnep.com/";
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

export const postAPI = ({ route, data }) => {
  axios.post(baseAPIURL + route, data).then((response) => {
    let result = response.data;
    console.warn("postAPI", result);

    return result;
  });
  return {
    name: "amrit",
    token: "apple"
  };
};
