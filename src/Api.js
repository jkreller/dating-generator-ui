import axios from 'axios';

export const getRoot = async () => {
  const {data} = await axios.get('http://localhost:8002/')
  return data;
};

export const getPickUpLine = async (getPickupLineData) => {
  const {data} = await axios.post('http://localhost:8002/GetPickupLine', getPickupLineData);
  return data;
};