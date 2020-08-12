import axios from "axios";

export const axiosWithAuth = (token = null) => {
  return axios.create({
    baseURL: "https://weightliftingjournal1.herokuapp.com/api/",
    headers: {
      Authorization: token,
    },
  });
};
