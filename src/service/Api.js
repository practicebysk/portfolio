import axios from "axios";

const APIURL = process.env.REACT_APP_API_URL;

export const getData = async (endPoint) => {
  try {
    const response = await axios.get('https://travels-server.onrender.com/portfolio/' + endPoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching place information:", error);
    throw error;
  }
};
