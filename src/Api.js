import axios from 'axios';

export const getPickUpLine = async (getPickupLineData, controller) => {
  try {
    const {data} = await axios.post('http://localhost:8002/GetPickupLine', getPickupLineData, {signal: controller?.signal});
    return data;
  } catch (error) {
    console.error(`${error}`);
  }

  return {};
};