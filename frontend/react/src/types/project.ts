export type ProjectData = {
  id: number;
  projectName: string;
  startDate: string;
  endDate: string;
};

export type ProjectDataProps = {
  data: ProjectData[];
};
