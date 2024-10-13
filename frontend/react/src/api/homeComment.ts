import axios from "axios";

export const getHomeComment = async (ProjectId: number): Promise<any> => {
  try {
    const response = await axios.get(
      `http://localhost/v1/projects/${ProjectId}/comments`,
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetching home data:", error);
    return null;
  }
};
