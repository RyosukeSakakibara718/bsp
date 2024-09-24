export type ProjectData = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  project_manager: string;
};

export type ProjectDataProps = {
  data: ProjectData[];
};