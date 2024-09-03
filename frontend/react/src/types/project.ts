export type ProjectData = {
  id: number;
  projectName: string;
  base_cost_start_date: string;
  endDate: string;
};

export type ProjectDataProps = {
  data: ProjectData[];
};
