import axios from "axios";
import { url } from "./../utils/api";

export const handleFollowClick = async (myId, otherId, type) => {
  let data;
  await axios
    .post(`${url}/user/${type}`, {
      myId,
      otherId,
    })
    .then((res) => {
      data = res.data;
    })
    .catch((e) => {
      data = e.message;
    });
  return data;
};
