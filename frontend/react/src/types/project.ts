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

export type InitialAssignmentMembers = {
  member_id : number,
  position : number,
  estaimate_total_person_month : number,
  assignment_member_monthly_estimations : AssignmentMemberMonthlyEstimations[] | []
}

export type AssignmentMemberMonthlyEstimations = [
  {
    "target_month": number,
    "estimate_person_month": number,
  }
]