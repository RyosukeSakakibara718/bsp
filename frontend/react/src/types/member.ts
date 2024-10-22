export type MemberData = {
  id: number;
  name: string;
  rank: number;
  base_cost: number;
  base_cost_start_date: string;
};

export type MemberTableProps = {
  members: MemberData[]; // data は MemberData 型の配列
  next_cursor: string | null,
  previous_cursor: string | null
};
