import axios from 'axios';

export const API = {
  get: async function (endPoint, token) {
    let headers = {};
    headers.Access_token = token;
    try {
      const response = await axios.get('https://api-car-rental.binaracademy.org/' + endPoint, {
        headers,
      });
      return response;
    } catch (error) {
      throw error.response;
    }
  },
  post: async function (endPoint, param, token) {
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/' + endPoint,
        param,
        {
          headers: {
            'Content-Type': endPoint === 'admin/car' ? 'multipart/form-data' : 'application/json',
            access_token: token,
          },
        },
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
  put: async function (endPoint, param) {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    try {
      const response = await axios.put(
        'https://api-car-rental.binaracademy.org/' + endPoint,
        param,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            access_token: tokenAdmin,
          },
        },
      );
      return response;
    } catch (error) {
      throw error.response;
    }
  },
  delete: async function (endPoint) {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    try {
      const response = await axios.delete('https://api-car-rental.binaracademy.org/' + endPoint, {
        headers: {
          'Content-Type': 'application/json',
          access_token: tokenAdmin,
        },
      });
      return response;
    } catch (error) {
      throw error.response;
    }
  },
};
