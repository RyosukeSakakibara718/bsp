export const projectDetailData = {
  projects : {
      projects_data : {
          name : "プロジェクトバランサー",
          phase : 1,
          freee_project_code : "1111-1111-1111",
          contract : 4,
          start_date : "2024-08-01",
          end_date : "2030-08-30",
      },
      estimations : {
          order_price : 300000000,
          estimate_cost : 20000000,
          estimate_person_month : 23.00,
      },
      assignment_members : [
        {
          member_id : 1,
          position : 1,
          estaimate_total_person_month : 4,
          assignment_member_monthly_estimations : [
            {
              "target_month": 5,
              "estimate_person_month": 1.0,
            },
            {
              "target_month": 6,
              "estimate_person_month": 1.0,
            },
            {
              "target_month": 7,
              "estimate_person_month": 1.0,
            },
            {
              "target_month": 8,
              "estimate_person_month": 1.0,
            },
          ]
        },
        {
          member_id : 2,
          position : 1,
          estaimate_total_person_month : 6,
          assignment_member_monthly_estimations : [
            {
              "target_month": 5,
              "estimate_person_month": 1.0,
            },
            {
              "target_month": 6,
              "estimate_person_month": 1.0,
            },
            {
              "target_month": 7,
              "estimate_person_month": 1.0,
            },
            {
              "target_month": 8,
              "estimate_person_month": 1.0,
            },
          ]
        },
      ],
      outsources : [
        {
          "name": "デザイン外注",
          "estimate_cost": 400000,
          "cost": 300000,
        },
        {
          "name": "デザイン外注",
          "estimate_cost": 400000,
          "cost": 300000,
        },
        {
          "name": "デザイン外注",
          "estimate_cost": 400000,
          "cost": 300000,
        },
      ]
  }
}

export const rank = [
  { value: "PM", label: "PM" },
  { value: "PL", label: "PL" },
  { value: "PG", label: "PG" },
];

export const initialAssignmentMembers = [
  {
    member_id : 1,
    position : 1,
    estaimate_total_person_month : 0,
    assignment_member_monthly_estimations : []
  },
]

export const initialAssignmentMembersInfo = {
  member_id : 1,
  position : 1,
  estaimate_total_person_month : 0,
  assignment_member_monthly_estimations : []
}
