// types/home/MemberInfoDataProps.ts
export type Member = {
  id: number;
  name: string;
  rank: number;
  base_cost: number;
  estimate_person_month: number;
  daily_cost: number;
  cost: number;
};

export type MemberInfoDataProps = {
  MembersData: Member[];
};
