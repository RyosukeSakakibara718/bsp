export const getProjectsAll = (): Promise<[]> => {
  return fetch("http://localhost/v1/projects")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      return data.projects; // members プロパティにアクセスして返す
    });
};