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

export const editProjectManagementDetail = (
  projectDetail: any,
  id?: number,
): Promise<boolean> => {
  console.log('0');
  if(id) {
    console.log('test 1');
    return fetch(`http://localhost/v1/projects/${id}`, {
      method: "POST",
      headers: {
        "X-HTTP-Method-Override": "PUT",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectDetail),
    })
      .then(response => {
        console.log('test 2');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return true;
      })
      .then(data => {
        console.log('test 3');
        return data;
      })
      .catch(error => {
        console.log('test 4');
        throw error;
      });
  }else{
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