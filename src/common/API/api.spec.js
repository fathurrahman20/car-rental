import axios from 'axios';
import { API } from './index';

jest.mock('axios');

describe('API', () => {
  describe('get method', () => {
    it('fetches successfully data from an endpoint with a token', async () => {
      const endPoint = 'endpoint';
      const token = 'fake-token';
      const response = { data: 'some data' };

      axios.get.mockResolvedValue(response);

      const result = await API.get(endPoint, token);

      expect(result).toEqual(response);
      expect(axios.get).toHaveBeenCalledWith(
        `https://api-car-rental.binaracademy.org/${endPoint}`,
        { headers: { Access_token: token } },
      );
    });

    it('fetches erroneously data from an endpoint', async () => {
      const endPoint = 'endpoint';
      const token = 'fake-token';
      const response = { error: 'some error' };

      axios.get.mockRejectedValue(response);

      await expect(API.get(endPoint, token)).rejects.toEqual(undefined);
    });
  });

  describe('post method', () => {
    it('posts successfully data to an endpoint', async () => {
      const endPoint = 'endpoint';
      const param = { some: 'param' };
      const response = { data: 'some data' };

      axios.post.mockResolvedValue(response);

      const result = await API.post(endPoint, param);

      expect(result).toEqual(response);
      expect(axios.post).toHaveBeenCalledWith(
        `https://api-car-rental.binaracademy.org/${endPoint}`,
        param,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    });

    it('posts erroneously data to an endpoint', async () => {
      const endPoint = 'endpoint';
      const param = { some: 'param' };
      const response = { error: 'some error' };

      axios.post.mockRejectedValue(response);

      await expect(API.post(endPoint, param)).rejects.toEqual(undefined);
    });
  });
});
