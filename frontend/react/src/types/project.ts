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

export type OptionList = {
  id: number,
  name: string,
  label: string
}

export type InitialProjectInfo = {
  name: string,
  phase: string,
  freeeProjectId: string,
  orderPrice: number | undefined,
  startDate: string,
  endDate: string,
  estimateCost: number | undefined,
  estimatePersonMonth: number | undefined,
  contractType: string,
}

// 全体の型定義
export type ProjectInfomation = {
  projects_data: ProjectsData;
  estimations: Estimations;
};

export type AssignmentMembers = {
  member_id: number,
  position: number,
  estimate_total_person_month: number,
  assignment_member_monthly_estimations: AssignmentMemberMonthlyEstimations[]
}

export type ProjectsData = {
  name: string,
  phase: number | undefined,
  freee_project_code: string,
  contract: number | undefined,
  start_date: Date,
  end_date: Date,
}

export type Estimations = {
  order_price: number | undefined,
  estimate_cost: number | undefined,
  estimate_person_month: number | undefined,
}

export type InitialAssignmentMembers = {
  member_id : number,
  position : number,
  estaimate_total_person_month : number,
  assignment_member_monthly_estimations : AssignmentMemberMonthlyEstimations[] | []
}

export type AssignmentMemberMonthlyEstimations = {
  target_month: string | number,
  estimate_person_month: number,
}

export type Outsource = {
  name: string,
  estimate_cost: number | undefined,
  cost: number | undefined,
}

export type RequestBody = {
  projects:  {
    projects_data:  ProjectsData,
    estimations: Estimations,
    assignment_members: InitialAssignmentMembers[],
    outsources: Outsource[],
  }
}