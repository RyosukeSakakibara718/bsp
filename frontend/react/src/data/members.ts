export const sampleMembersData = [
  {
    id: 1,
    name: "榊原 涼介",
    rank: 2,
    base_cost: 300000,
    base_cost_start_date: "2024/08/04",
  },
  {
    id: 2,
    name: "山田 太郎",
    rank: 3,
    base_cost: 500000,
    base_cost_start_date: "2024/07/15",
  },
  {
    id: 3,
    name: "佐藤 花子",
    rank: 1,
    base_cost: 250000,
    base_cost_start_date: "2024/06/01",
  },
  {
    id: 4,
    name: "高橋 花太郎",
    rank: 7,
    base_cost: 950000,
    base_cost_start_date: "2024/07/18",
  },
];

export const memberColumns = ["ID", "名前", "等級", "原価", "開始日"];

export const memberColumnsWithoutId = ["名前", "等級", "原価", "開始日"];

export const initialInputCheckProps = {
  name: false,
  rank: false,
  base_cost: false,
  base_cost_start_date: false,
};
