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


export const deleteHomeComment = async (
  projectId: number,
  commentId: number
): Promise<boolean> => {
  try {
    await axios.delete(
      `http://localhost/v1/projects/${projectId}/comments/${commentId}`
    );
    return true;
  } catch (error) {
    console.error("Error in deleting comment:", error);
    return false;
  }
};