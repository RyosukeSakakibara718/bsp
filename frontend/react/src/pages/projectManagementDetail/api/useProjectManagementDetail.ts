export const getProjectManagementDetail = (id: string) => {
  return fetch(`http://localhost/v1/projects/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      return data; // members プロパティにアクセスして返す
    });
};

export const editProjectManagementDetail = (
  projectDetail: any,
  id?: number,
): Promise<boolean> => {
  if (id) {
    return fetch(`http://localhost/v1/projects/${id}`, {
      method: "POST",
      headers: {
        "X-HTTP-Method-Override": "PUT",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDetail),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return true;
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  } else {
    return fetch(`http://localhost/v1/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDetail),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return true;
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        throw error;
      });
  }
};
