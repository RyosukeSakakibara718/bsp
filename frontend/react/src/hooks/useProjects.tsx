const apiUrl = import.meta.env.VITE_API_URL;

type Project =  {
  id: number;
  freee_project_code: string;
  name: string;
  company_name: string;
  start_date: string;
  end_date: string;
  project_manager: string;
}

type ProjectResponse =  {
  projects: Project[];
  next_cursor: string | null;
  previous_cursor: string | null;
}

export const getProjectsAll = (fetchAllOrCursor?: string | boolean): Promise<ProjectResponse> => {
  let  url = `${apiUrl}/v1/projects`
  if(typeof(fetchAllOrCursor) === "boolean"){
    url = `${apiUrl}/v1/projects?fetchAll=true`
  }else if(fetchAllOrCursor){
    url = `${apiUrl}/v1/projects?cursor=${fetchAllOrCursor}`;
  }

  return fetch(url)
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

export const deleteProjects = (id: number): Promise<boolean> => {
  return fetch(`${apiUrl}/v1/projects/${id}`, { method: "DELETE" })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return true; // 成功した場合に true を返す
    })
    .catch(error => {
      throw error; // エラーを再スローして呼び出し元でも処理できるようにする
    });
};
