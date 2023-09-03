import axios from 'axios';

export const API = {
  get: async function (endPoint) {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    const tokenCustomer = localStorage.getItem('tokenCustomer');
    let token = null;
    const resultToken = endPoint.search('admin');
    if (resultToken !== -1) {
      token = tokenAdmin;
    } else {
      token = tokenCustomer;
    }
    let headers = {};
    headers.Access_token = token;
    try {
      const response = await axios.get('https://api-car-rental.binaracademy.org/' + endPoint, {
        headers,
      });
      console.log('token is: ', token);
      return response;
    } catch (error) {
      throw error.response;
    }
  },
  post: async function (endPoint, param) {
    const tokenAdmin = localStorage.getItem('tokenAdmin');
    const tokenCustomer = localStorage.getItem('tokenCustomer');
    let token = null;
    const resultToken = endPoint.search('admin');
    if (resultToken !== -1) {
      token = tokenAdmin;
    } else {
      token = tokenCustomer;
    }
    let auth = endPoint.search('auth');
    let headers = {
      'Content-Type': endPoint === 'admin/car' ? 'multipart/form-data' : 'application/json',
    };
    if (auth >= 6) {
      headers.accept = 'application/json';
    } else {
      headers.Access_token = token;
    }
    try {
      const response = await axios.post(
        'https://api-car-rental.binaracademy.org/' + endPoint,
        param,
        {
          headers,
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
