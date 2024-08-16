import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

// console.log(process.env.REACT_APP_RAPID_API_KEY);
export default async function Fetch(url) {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  // console.log(data);
  return data;
}
