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
  { id: 1, name: "PM", label: "PM" },
  { id: 2, name: "PL", label: "PL" },
  { id: 3, name: "PG", label: "PG" },
];

export const initialProjectInfo = {
  name: '',
  phase: '',
  freeeProjectId: '',
  orderPrice: undefined,
  startDate: '2024-09-01',
  endDate: '2024-09-30',
  estimateCost: undefined,
  estimatePersonMonth: undefined,
  contractType: '準委任契約',
}

export const initialAssignmentMembersArray = [
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

export const initialOutsourcingInfo = {
  name: "",
  estimate_cost: undefined,
  cost: undefined,
}

export const phases = [
  "要件定義",
  "基本設計",
  "詳細設計",
  "製造",
  "単体試験",
  "結合試験",
  "総合試験",
  "リリース",
  "終了"
];

export const contractType = [
  "準委任契約",
  "請負契約"
]

export const OutsourceColumns = [
  { label: "内容", width: 400 },
  { label: "見積金額", width: 200 },
  { label: "原価", width: 200 },
  { label: "", width: 50 },
];

export const memberList = [
  { id: 1, value: "山田 涼介", label: "山田 涼介" },
  { id: 2, value: "山下 智久", label: "山下 智久" },
];