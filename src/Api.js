import axios from 'axios';

export const getPickUpLine = async (profiles, sender, history) => {
  try {
    console.log({
      "profile1": profiles.profile1,
      "profile2": profiles.profile2,
      "sender": sender,
      "history": history
    });

    const {data} = await axios.post('http://localhost:8002/GetPickupLine', {
      "profile1": profiles.profile1,
      "profile2": profiles.profile2,
      "sender": sender,
      "msg_attr": [
          "creative",
          "witty",
          "teasing",
          "funny",
      ],
      "history": history
    });

    return data;
  } catch (error) {
    console.error(`${error}`);
  }

  return {};
};