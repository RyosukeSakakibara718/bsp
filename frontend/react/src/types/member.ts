export type MemberData = {
  id: number;
  name: string;
  rank: number;
  base_cost: number;
  base_cost_start_date: string;
};

export type MemberTableProps = {
  data: MemberData[]; // data は MemberData 型の配列
};
