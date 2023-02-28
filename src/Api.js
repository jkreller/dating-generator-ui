import axios from 'axios';

export const getRoot = () => {
  return axios.get('http://localhost:8002/');
};

export const getPickUpLine = (userData) => {
  return axios.post('http://localhost:8002/GetPickupLine', userData);
};