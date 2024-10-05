import axios from "axios";

// TODO URLの変更anyの変更
export const getHomeData = async (): Promise<any> => {
  try {
    // TODO URLの変更
    const response = await axios.get("http://localhost:3100/homeInFormation");
    // const response = await axios.get("http://localhost/v1/homeInformation/1");
    return response;
  } catch (error) {
    console.error("Error in fetching home data:", error);
    return null;
  }
};
