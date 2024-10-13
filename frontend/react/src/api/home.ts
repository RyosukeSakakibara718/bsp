import axios from "axios";

export const getHomeData = async (ProjectId: number): Promise<any> => {
  try {
    const response = await axios.get(
      `http://localhost/v1/homeInformation/${ProjectId}`,
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetching home data:", error);
    return null;
  }
};
