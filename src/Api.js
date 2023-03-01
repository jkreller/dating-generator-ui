import axios from 'axios';

export const getPickUpLine = async (profiles, sender, history) => {
  try {
    const {data} = await axios.post('http://localhost:8002/GetPickupLine', {
      "profile1": profiles.profile1,
      "profile2": profiles.profile2,
      "sender": sender,
      "msg_attr": [
          "witty",
          "funny",
          "curious to know about each other"
      ],
      "history": history
    });
    console.log({
      "profile1": profiles.profile1,
      "profile2": profiles.profile2,
      "sender": sender,
      "msg_attr": [
          "witty",
          "funny",
          "curious to know about each other"
      ],
      "history": history
    });
    return data;
  } catch (error) {
    console.error(`${error}`);
  }

  return {};
};