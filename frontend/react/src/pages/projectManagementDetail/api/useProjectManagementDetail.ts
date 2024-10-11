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
  if(id) {
    // return fetch(`http://localhost/v1/projects/${id}`, {
    //   method: "POST",
    //   headers: {
    //     "X-HTTP-Method-Override": "PUT",
    //     "Content-Type": "application/json", // リクエストのContent-TypeをJSONに設定
    //   },
    //   body: JSON.stringify(projectDetail), // JavaScriptオブジェクトをJSON文字列に変換してリクエストボディに設定
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return true;
    //   })
    //   .then(data => {
    //     return data; // 必要に応じてデータを返す
    //   })
    //   .catch(error => {
    //     throw error; // エラーを再スローして呼び出し元でも処理できるようにする
    //   });
    
    
  }else{
    return fetch(`http://localhost/v1/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // リクエストのContent-TypeをJSONに設定
      },
      body: JSON.stringify(projectDetail), // JavaScriptオブジェクトをJSON文字列に変換してリクエストボディに設定
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return true;
      })
      .then(data => {
        return data; // 必要に応じてデータを返す
      })
      .catch(error => {
        throw error; // エラーを再スローして呼び出し元でも処理できるようにする
      });
    console.log('test下');
  }
};