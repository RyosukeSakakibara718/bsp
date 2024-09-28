export const sampleProjectData = [
  {
    id: 1,
    projectName: "請負プロジェクト",
    base_cost_start_date: "2024/08/04",
    endDate: "2024/09/10",
  },
  {
    id: 2,
    projectName: "請負プロジェクト2",
    base_cost_start_date: "2024/08/04",
    endDate: "2024/09/10",
  },
  {
    id: 3,
    projectName: "請負プロジェクト3",
    base_cost_start_date: "2024/08/04",
    endDate: "2024/09/10",
  },
  {
    id: 4,
    projectName: "請負プロジェクト4",
    base_cost_start_date: "2024/08/04",
    endDate: "2024/09/10",
  },
  {
    id: 5,
    projectName: "請負プロジェクト5",
    base_cost_start_date: "2024/08/04",
    endDate: "2024/09/10",
  },
];

export const projectsInitialData = {
  name: "",
  phase: 0,
  freee_project_code: "",
  contract: 0,
  start_date: new Date(), // 現在の日付
  end_date: new Date(new Date().setMonth(new Date().getMonth() + 1)),
}

export const estimationsInitialData = {
  order_price: 0,
  estimate_cost: 0,
  estimate_person_month: 0,
}
export const assignmentMemberMonthlyEstimationsInitialData = [{
  target_month: 0,
  estimate_person_month: 0,
}]

export const assignmentMembersInitialData = [{
  member_id: 0,
  position: 0,
  estimate_total_person_month: 0,
  assignment_member_monthly_estimations: assignmentMemberMonthlyEstimationsInitialData
}]


export const outsourcingInitialData = {
  name: "",
  estimate_cost: 0,
  cost: 0,
}
