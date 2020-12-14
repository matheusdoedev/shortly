import axios from "axios";

const shrtcodeApi = axios.create({
  baseURL: `https://api.shrtco.de/v2/shorten?url=`,
});

export default shrtcodeApi;
