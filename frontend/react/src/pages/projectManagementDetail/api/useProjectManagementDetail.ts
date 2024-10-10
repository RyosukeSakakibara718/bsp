export const getProjectManagementDetail = (id: string) => {
  console.log('id: ', id);
  return fetch(`http://localhost/v1/projects/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      return data // members プロパティにアクセスして返す
    });
};