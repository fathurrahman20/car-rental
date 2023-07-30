import axios from "axios";

export const API = {
  get: async function (endPoint, token) {
    let headers = {};
    headers.Access_token = token;
    try {
      const response = await axios.get(
        "https://api-car-rental.binaracademy.org/" + endPoint,
        { headers }
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
  post: async function (endPoint, param) {
    try {
      const response = await axios.post(
        "https://api-car-rental.binaracademy.org/" + endPoint,
        param,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
};
